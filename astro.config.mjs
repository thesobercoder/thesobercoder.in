import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.thesobercoder.in",
  integrations: [mdx(), tailwind(), sitemap(), robotsTxt()],
  adapter: vercel({
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
