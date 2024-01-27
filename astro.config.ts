import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  site: "https://kirshach.dev",
  prefetch: true,
  integrations: [solidJs()],
});
