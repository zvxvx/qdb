// @ts-check
import { defineConfig } from "astro/config";
import markdownIntegration from "@astropub/md";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config

export default defineConfig({
  integrations: [tailwind(), markdownIntegration(), sitemap(), react()],
  site: "https://quote.database.netlify.app",
  markdown: {
    shikiConfig: {
      wrap: true,
      themes: {
        light: "github-light-default",
        dark: "vesper",
      },
    },
  },
  redirects: {
    "/quotes": "/quotes/1",
  },
});
