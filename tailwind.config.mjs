import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1e66f5", // blue
          "primary-content": "#eff1f5", // base
          secondary: "#8839ef", // mauve
          "secondary-content": "#eff1f5", // base
          accent: "#179299", // teal
          "accent-content": "#eff1f5", // base
          neutral: "#ccd0da", // surface0
          "neutral-content": "#4c4f69", // text
          "base-100": "#eff1f5", // base
          "base-200": "#e6e9ef", // mantle
          "base-300": "#e6e9ef", // crust
          "base-content": "#4c4f69", // text
          info: "#209fb5", // sapphire
          "info-content": "#eff1f5", // base
          success: "#40a02b", // green
          "success-content": "#eff1f5", // base
          warning: "#df8e1d", // yellow
          "warning-content": "#eff1f5", // base
          error: "#d20f39", // red
          "error-content": "#eff1f5", // base
        },
        dark: {
          primary: "#8caaee", // blue
          "primary-content": "#303446", // base
          secondary: "#ca9ee6", // mauve
          "secondary-content": "#303446", // base
          accent: "#81c8be", // teal
          "accent-content": "#303446", // base
          neutral: "#414559", // surface0
          "neutral-content": "#c6d0f5", // text
          "base-100": "#303446", // base
          "base-200": "#292c3c", // mantle
          "base-300": "#232634", // crust
          "base-content": "#c6d0f5", // text
          info: "#85c1dc", // sapphire
          "info-content": "#303446", // base
          success: "#a6d189", // green
          "success-content": "#303446", // base
          warning: "#e5c890", // yellow
          "warning-content": "#303446", // base
          error: "#e78284", // red
          "error-content": "#303446", // base
        },
      },
    ],
  },
  plugins: [typography, daisyui],
};
