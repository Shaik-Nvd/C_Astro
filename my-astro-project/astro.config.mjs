import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  site: "https://shaik-nvd.github.io/C_Astro/",
  base: "/C_Astro/",
  output: "static",
});
