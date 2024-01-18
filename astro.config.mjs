import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import qwikdev from "@qwikdev/astro";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.thesobercoder.in",
  integrations: [mdx(), tailwind(), sitemap(), robotsTxt(), qwikdev()],
  output: "hybrid",
  adapter: vercel({
    includeFiles: [
      "./public/profile.webp",
      "./public/resume.pdf",
      "./public/favicon.ico",
    ],
    imageService: true,
    devImageService: "squoosh",
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
});
