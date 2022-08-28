import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";

import { IGOOD } from "./scanner/good";
import * as roi from "./scanner/rois";
import { Scanner } from "./scanner/scanner";
import useTransforms from "./scanner/transforms";
import Actions from "./sections/Actions";
import Debug from "./sections/Debug";
import Dropzone from "./sections/Dropzone";
import Intro from "./sections/Intro";
import Output from "./sections/Output";

import styles from "./App.module.scss";

function sleep(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

function App() {
  const imageSource = useRef<HTMLImageElement>(null);
  const videoSource = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const thumbnailCanvas = useRef<HTMLCanvasElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);
  const [output, setOutput] = useState<IGOOD | null>(null);

  const scanner = useMemo(() => {
    const s = new Scanner();
    s.init();
    return s;
  }, []);

  const drawThumbnail = useCallback(
    (source: HTMLImageElement | HTMLVideoElement) => {
      const canvas = thumbnailCanvas.current!;
      canvas.width = 320;
      canvas.height = 180;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(source, 0, 0, 320, 180);
      setThumbnail(canvas.toDataURL());
    },
    []
  );

  const transforms = useTransforms(canvas);

  const scanTexture = useCallback(
    async (texture: any) => {
      await transforms.render(texture, [
        // Menu name
        transforms.maskColors(roi.INVENTORY_MENU_NAME.bounds, [0xd3bc8e]),
        // Artifact name
        transforms.maskColors(roi.INVENTORY_ARTIFACTS_ARTIFACT_NAME.bounds, [
          [0xffffff, -0.5],
        ]),
        transforms.maskColors(
          roi.INVENTORY_ARTIFACTS_ARTIFACT_MAINSTAT.bounds,
          [[0xbeaea9, -0.25]]
        ),
        // Artifact level
        transforms.maskColors(roi.INVENTORY_ARTIFACTS_ARTIFACT_LEVEL.bounds, [
          [0xffffff, -0.9],
        ]),
        // Artifact substats
        transforms.maskColors(
          roi.INVENTORY_ARTIFACTS_ARTIFACT_SUBSTATS.bounds,
          [0x495366, 0.3]
        ),
      ]);
      const canvasDataUrl = canvas.current!.toDataURL();
      await scanner.init();
      await scanner.scan(canvasDataUrl);
      await scanner.cleanup();
    },
    [scanner, transforms]
  );

  const scanImage = useCallback(
    async (file: File) => {
      const texture = await transforms.load(file);
      await scanTexture(texture);
      setOutput(scanner.getData());
    },
    [scanner, scanTexture, transforms]
  );

  const scanVideo = useCallback(async () => {
    // TODO try WebCodec if available
    const video = videoSource.current!;
    const texture = await transforms.load(video);
    while (video.currentTime < video.duration - 1.0 / 5.0) {
      drawThumbnail(video);
      await scanTexture(texture);
      video.currentTime += 1.0 / 5.0;
      await sleep(200); // sleep to allow tesseract to garbage collect
    }
    setOutput(scanner.getData());
  }, [drawThumbnail, scanner, scanTexture, transforms]);

  const handleUpload = useCallback(
    (file: File) => {
      setFile(file);
      setThumbnail(null);

      if (file.type.startsWith("image/")) {
        const img = imageSource.current!;
        img.src = URL.createObjectURL(file);
        img.addEventListener("load", () => {
          drawThumbnail(img);
        });
        setInputError(null);
      } else if (file.type.startsWith("video/")) {
        const video = videoSource.current!;
        video.src = URL.createObjectURL(file);
        video.addEventListener("canplay", () => {
          drawThumbnail(video);
        });
        setInputError(null);
      } else {
        setInputError(`Unrecognized file type ${file.type}`);
      }
    },
    [drawThumbnail]
  );

  const handleScan = useCallback(() => {
    if (file == null) {
      console.error("file is null");
      return;
    }

    if (file.type.startsWith("image/")) {
      scanImage(file);
    } else if (file.type.startsWith("video/")) {
      scanVideo();
    } else {
      console.error("Unknown type", file.type);
      return;
    }
  }, [file, scanImage, scanVideo]);

  return (
    <div className={styles.app}>
      <Intro />
      <Dropzone
        filename={file?.name ?? null}
        thumbnail={thumbnail}
        error={inputError}
        onUpload={handleUpload}
      />
      <Actions disabled={file == null} onScan={handleScan} />
      <hr />
      <Output data={output} />
      <hr />
      <Debug>
        <img ref={imageSource} />
        <video ref={videoSource} playsInline={true} preload="auto" />
        <canvas ref={thumbnailCanvas} />
        <canvas ref={canvas} />
      </Debug>
    </div>
  );
}

export default App;
