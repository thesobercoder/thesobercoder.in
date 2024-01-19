import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import qwikdev from "@qwikdev/astro";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PUBLIC_VERCEL_URL || "https://www.thesobercoder.in",
  integrations: [mdx(), tailwind(), sitemap(), robotsTxt(), qwikdev()],
  output: "static",
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
