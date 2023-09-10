import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://www.thesobercoder.in",
  integrations: [tailwind(), sitemap(), robotsTxt()],
  adapter: vercel({
    analytics: true,
  }),
});
