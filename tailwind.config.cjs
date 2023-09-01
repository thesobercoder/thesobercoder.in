const defaultTheme = require("tailwindcss/defaultTheme");

const accent = "text";
const linkColor = "lavender";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              "--tw-prose-body": theme("colors.text.DEFAULT"),
              "--tw-prose-headings": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-lead": theme("colors.text.DEFAULT"),
              "--tw-prose-links": theme(`colors.${linkColor}.DEFAULT`),
              "--tw-prose-bold": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-counters": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-bullets": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-hr": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-quotes": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-quote-borders": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-captions": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-code": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-pre-code": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-pre-bg": theme(`colors.base.DEFAULT`),
              "--tw-prose-th-borders": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-td-borders": theme(`colors.${accent}.DEFAULT`),

              "--tw-prose-invert-body": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-headings": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-lead": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-links": theme(`colors.${linkColor}.DEFAULT`),
              "--tw-prose-invert-bold": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-counters": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-bullets": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-hr": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-quotes": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-quote-borders": theme(
                `colors.${accent}.DEFAULT`,
              ),
              "--tw-prose-invert-captions": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-code": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-pre-code": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-pre-bg": theme(`colors.base.DEFAULT`),
              "--tw-prose-invert-th-borders": theme(`colors.${accent}.DEFAULT`),
              "--tw-prose-invert-td-borders": theme(`colors.${accent}.DEFAULT`),
            },
          },
        };
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss"),
    require("@tailwindcss/typography"),
  ],
};
