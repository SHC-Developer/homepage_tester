// vite.config.ts
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/homepage_tester/", 
  plugins: [react()],
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
