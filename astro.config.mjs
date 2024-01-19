import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import qwikdev from "@qwikdev/astro";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { PUBLIC_VERCEL_URL, PUBLIC_VERCEL_ENV } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site:
    `${PUBLIC_VERCEL_ENV === "local" ? "http" : "https"}://${PUBLIC_VERCEL_URL}` ||
    "https://www.thesobercoder.in",
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
