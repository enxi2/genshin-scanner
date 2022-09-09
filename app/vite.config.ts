import { defineConfig } from "vite";
import eslint from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/genshin-scanner/",
  plugins: [eslint(), react()],
});
