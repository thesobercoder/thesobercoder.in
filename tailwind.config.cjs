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
              "--tw-prose-counters": theme("colors.pink[600]"),
              "--tw-prose-bullets": theme("colors.pink[400]"),
              "--tw-prose-hr": theme("colors.pink[300]"),
              "--tw-prose-quotes": "rgb(var(--ctp-text))",
              "--tw-prose-quote-borders": theme("colors.pink[300]"),
              "--tw-prose-captions": theme("colors.pink[700]"),
              "--tw-prose-code": "rgb(var(--ctp-text))",
              "--tw-prose-pre-code": theme("colors.pink[100]"),
              "--tw-prose-pre-bg": "rgb(var(--ctp-text))",
              "--tw-prose-th-borders": theme("colors.pink[300]"),
              "--tw-prose-td-borders": theme("colors.pink[200]"),
              "--tw-prose-invert-body": theme("colors.pink[200]"),
              "--tw-prose-invert-headings": theme("colors.white"),
              "--tw-prose-invert-lead": theme("colors.pink[300]"),
              "--tw-prose-invert-links": theme("colors.white"),
              "--tw-prose-invert-bold": theme("colors.white"),
              "--tw-prose-invert-counters": theme("colors.pink[400]"),
              "--tw-prose-invert-bullets": theme("colors.pink[600]"),
              "--tw-prose-invert-hr": theme("colors.pink[700]"),
              "--tw-prose-invert-quotes": theme("colors.pink[100]"),
              "--tw-prose-invert-quote-borders": theme("colors.pink[700]"),
              "--tw-prose-invert-captions": theme("colors.pink[400]"),
              "--tw-prose-invert-code": theme("colors.white"),
              "--tw-prose-invert-pre-code": theme("colors.pink[300]"),
              "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
              "--tw-prose-invert-th-borders": theme("colors.pink[600]"),
              "--tw-prose-invert-td-borders": theme("colors.pink[700]"),
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
