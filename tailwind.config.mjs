/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["Lora", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      borderWidth: {
        0.5: "0.5px",
        1: "1px",
      },
      textColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        secondaryLight: "var(--color-secondary-light)",
      },
      backgroundColor: {
        background: "var(--color-background)",
        secondaryLight: "var(--color-secondary-light)",
      },
      borderColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        secondaryLight: "var(--color-secondary-light)",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        secondaryLight: "var(--color-secondary-light)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
