import { RefObject, useCallback, useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { MASK_COLORS_FRAGMENT, MASK_COLORS_VERTEX } from "./shaders";

type ImageWrapper = THREE.Texture;

type ResizeOp = {
  type: "RESIZE";
  width: number;
  height: number;
};

type MaskColorsOp = {
  type: "MASK_COLORS";
  bounds: THREE.Vector4;
  colors: THREE.Vector4[];
};

type ImageOp = ResizeOp | MaskColorsOp;

function makeScene(
  image: THREE.Texture,
  shader?: THREE.ShaderMaterialParameters
) {
  const scene = new THREE.Scene();
  const geometry = new THREE.PlaneBufferGeometry(1, 1);
  const material =
    shader != null
      ? new THREE.ShaderMaterial(shader)
      : new THREE.MeshBasicMaterial({ map: image });

  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(0.5, 0.5, 0);
  scene.add(plane);
  return scene;
}

function makeCamera() {
  const camera = new THREE.OrthographicCamera(0, 1, 1, 0, 0, 2);
  camera.position.setZ(1);
  camera.updateProjectionMatrix();
  return camera;
}

export default function useTransforms(canvas: RefObject<HTMLCanvasElement>) {
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (canvas.current == null) {
      return;
    }

    const r = new THREE.WebGLRenderer({
      canvas: canvas.current,
    });
    r.autoClear = false;
    setRenderer(r);

    setReady(true);
  }, [canvas]);

  const load = useCallback(
    async (source: File | HTMLVideoElement): Promise<ImageWrapper> => {
      if (source instanceof HTMLVideoElement) {
        const texture = new THREE.VideoTexture(source);
        return texture;
      } else {
        const texture = await new THREE.TextureLoader().loadAsync(
          URL.createObjectURL(source)
        );
        return texture;
      }
    },
    []
  );

  const resize = useCallback((width: number, height: number): ResizeOp => {
    return { type: "RESIZE", width, height };
  }, []);

  const maskColors = useCallback(
    (
      bounds: [number, number, number, number], // x, y, w, h
      colors: ReadonlyArray<[number | string, number] | number | string>
    ): MaskColorsOp => {
      return {
        type: "MASK_COLORS",
        bounds: new THREE.Vector4().fromArray(bounds),
        colors: colors.map((item) => {
          const c = Array.isArray(item)
            ? new THREE.Color(item[0])
            : new THREE.Color(item);
          const d = Array.isArray(item) ? item[1] : 0.25;
          return new THREE.Vector4(c.r, c.g, c.b, d);
        }),
      };
    },
    []
  );

  const render = useCallback(
    async (image: ImageWrapper, ops: ImageOp[]): Promise<void> => {
      if (!ready || renderer == null) {
        console.error("not ready yet");
        return;
      }

      renderer.setScissorTest(false);
      renderer.setSize(1920, 1080); // TODO aspect ratios
      renderer.setClearColor(new THREE.Color(0xffffff));
      renderer.clear();
      let size = new THREE.Vector2(1920, 1080);
      for (const op of ops) {
        switch (op.type) {
          case "RESIZE": {
            const scene = makeScene(image);
            const camera = makeCamera();

            renderer.setSize(op.width, op.height);
            size = new THREE.Vector2(op.width, op.height);
            renderer.render(scene, camera);
            break;
          }
          case "MASK_COLORS": {
            const scene = makeScene(image, {
              vertexShader: MASK_COLORS_VERTEX,
              fragmentShader: MASK_COLORS_FRAGMENT,
              defines: {
                NUM_COLORS: op.colors.length,
              },
              uniforms: {
                map: { value: image },
                mask_colors: {
                  value: op.colors,
                },
              },
            });
            const camera = makeCamera();

            renderer.setScissor(
              Math.round(op.bounds.x),
              Math.round(size.height - 1 - (op.bounds.y + op.bounds.w)), // y is inverted (bottom left origin)
              Math.round(op.bounds.z),
              Math.round(op.bounds.w)
            );
            renderer.setScissorTest(true);
            renderer.render(scene, camera);
            break;
          }
          default:
            console.error("unknown op", op);
            break;
        }
      }
    },
    [ready, renderer]
  );

  return {
    ready,
    load,
    resize,
    maskColors,
    render,
  };
}
