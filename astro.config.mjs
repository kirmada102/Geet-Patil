import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kirmada102.github.io",
  base: "/",
  output: "static",
  build: {
    format: "file"
  }
});
