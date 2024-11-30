import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/StarLight/", // Add your repository name here
  build: {
    outDir: "dist", // Ensure this matches the output directory
  },
});
