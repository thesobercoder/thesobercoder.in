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

const vercelUrl = PUBLIC_VERCEL_URL ?? "localhost:4231";
const vercelEnv = PUBLIC_VERCEL_ENV ?? "local";

// https://astro.build/config
export default defineConfig({
  site: `${vercelEnv === "local" ? "http" : "https"}://${vercelEnv === "production" ? "thesobercoder.in" : vercelUrl}`,
  integrations: [qwikdev(), mdx(), tailwind(), sitemap(), robotsTxt()],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    devImageService: "sharp",
  }),
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
});
