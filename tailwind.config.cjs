const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              color: theme("colors.text"),
              a: {
                color: theme("colors.sky"),
                "&:hover": {
                  color: theme("colors.blue"),
                },
              },
              h1: {
                color: theme("colors.text"),
              },
              h2: {
                color: theme("colors.text"),
              },
              h3: {
                color: theme("colors.text"),
              },
              h4: {
                color: theme("colors.text"),
              },
              h5: {
                color: theme("colors.text"),
              },
              h6: {
                color: theme("colors.text"),
              },
              "*": {
                color: theme("colors.text"),
              },
              code: {
                color: theme("colors.rosewater"),
              },
            },
          },
        };
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@catppuccin/tailwindcss"),
  ],
};
