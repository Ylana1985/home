import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Base path for GitHub Pages deployment at https://ylana1985.github.io/home/
  base: "/home/",
  plugins: [react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: false,
  },
});
