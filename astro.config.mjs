import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon"; // Import the astro-icon integration
import react from "@astrojs/react"; // Import the Astro React integration

export default defineConfig({
  integrations: [
    mdx(),
    icon({
      include: {
        mdi: ["*"], // Include all icons from the Material Design Icons set
      },
    }),
    react(), // Enable React support in Astro
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
