const defaultTheme = require("tailwindcss/defaultTheme");

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
              "--tw-prose-body": "rgb(var(--ctp-text))",
              "--tw-prose-headings": "rgb(var(--ctp-text))",
              "--tw-prose-lead": "rgb(var(--ctp-text))",
              "--tw-prose-links": "rgb(var(--ctp-sky))",
              "--tw-prose-bold": "rgb(var(--ctp-text))",
              "--tw-prose-counters": "rgb(var(--ctp-text))",
              "--tw-prose-bullets": "rgb(var(--ctp-text))",
              "--tw-prose-hr": "rgb(var(--ctp-text))",
              "--tw-prose-quotes": "rgb(var(--ctp-text))",
              "--tw-prose-quote-borders": "rgb(var(--ctp-text))",
              "--tw-prose-captions": "rgb(var(--ctp-text))",
              "--tw-prose-code": "rgb(var(--ctp-text))",
              "--tw-prose-pre-code": "rgb(var(--ctp-text))",
              "--tw-prose-pre-bg": "rgb(var(--ctp-text))",
              "--tw-prose-th-borders": "rgb(var(--ctp-text))",
              "--tw-prose-td-borders": "rgb(var(--ctp-text))",
              "--tw-prose-invert-body": "rgb(var(--ctp-text))",
              "--tw-prose-invert-headings": "rgb(var(--ctp-text))",
              "--tw-prose-invert-lead": "rgb(var(--ctp-text))",
              "--tw-prose-invert-links": "rgb(var(--ctp-text))",
              "--tw-prose-invert-bold": "rgb(var(--ctp-text))",
              "--tw-prose-invert-counters": "rgb(var(--ctp-text))",
              "--tw-prose-invert-bullets": "rgb(var(--ctp-text))",
              "--tw-prose-invert-hr": "rgb(var(--ctp-text))",
              "--tw-prose-invert-quotes": "rgb(var(--ctp-text))",
              "--tw-prose-invert-quote-borders": "rgb(var(--ctp-text))",
              "--tw-prose-invert-captions": "rgb(var(--ctp-text))",
              "--tw-prose-invert-code": "rgb(var(--ctp-text))",
              "--tw-prose-invert-pre-code": "rgb(var(--ctp-text))",
              "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
              "--tw-prose-invert-th-borders": "rgb(var(--ctp-text))",
              "--tw-prose-invert-td-borders": "rgb(var(--ctp-text))",
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
