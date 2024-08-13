import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@design-system": path.resolve(__dirname, "./src/DesignSystem"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@utils": path.resolve(__dirname, "./src/utils/utils"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern", "legacy"
        importers: [],
      },
    },
  },
});
