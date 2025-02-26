import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Mantém caminhos relativos para evitar problemas no deploy
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    open: true,
  },
});
