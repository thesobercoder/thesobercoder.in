import catppuccin from "@catppuccin/tailwindcss";
import typography from "@tailwindcss/typography";

const accent = "text";
const linkColor = "blue";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      keyframes: {
        "banner-keyframe": {
          "0%": { "background-position": "0 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0 50%" },
        },
        tilt: {
          "0%, 100%": {
            transform: "translate(0,0)",
          },
          "25%": {
            transform: "translate(5px,5px)",
          },
          "50%": {
            transform: "translate(0px,5px)",
          },
          "75%": {
            transform: "translate(-5px,5px)",
          },
        },
      },
      animation: {
        banner: "banner-keyframe 36s ease infinite",
        tilt: "tilt 10s infinite linear",
      },
      backgroundImage: (theme) => ({
        banner: `linear-gradient(300deg, ${theme(
          "colors.red.DEFAULT",
        )}, ${theme("colors.peach.DEFAULT")},${theme(
          "colors.yellow.DEFAULT",
        )}, ${theme("colors.green.DEFAULT")}, ${theme(
          "colors.blue.DEFAULT",
        )}, ${theme("colors.mauve.DEFAULT")})`,
      }),
      backgroundSize: {
        360: "360% 360%",
      },
      typography: (theme) => ({
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
      }),
    },
  },
  plugins: [catppuccin, typography],
};
