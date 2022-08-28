export const MASK_COLORS_VERTEX = `
varying vec2 vUv;

void main() {
  vUv = uv;

  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * modelViewPosition;
}
`;

export const MASK_COLORS_FRAGMENT = `
uniform vec4 mask_colors[NUM_COLORS];
uniform sampler2D map;

varying vec2 vUv;

vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec4 color = texture2D(map, vUv);
  vec3 color_hsv = rgb2hsv(color.rgb);

  float result = 1.0;
  for(int i = 0; i < NUM_COLORS && result > 0.0; i++) {
    vec4 mask = mask_colors[i];
    if (mask.a >= 0.0) { // compare hsv
      vec3 mask_hsv = rgb2hsv(mask.rgb);
      vec3 diff = abs(color_hsv - mask_hsv);
      if (diff.r < 5.0 / 255.0 && diff.g < mask.a && diff.b < mask.a) {
        result = 0.0;
      }
    } else { // compare rgb
      vec3 diff = abs(color.rgb - mask.rgb);
      if (diff.r + diff.g + diff.b < -mask.a) {
        result = 0.0;
      }
    }
  }

  gl_FragColor = vec4(result, result, result, 1.0);
}
`;
