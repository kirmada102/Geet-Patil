import { defineConfig } from "astro/config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: isGitHubPages ? "https://kirmada102.github.io" : undefined,
  base: isGitHubPages ? "/Geet-Patil" : "/",
  output: "static",
  build: {
    format: "file"
  }
});
