import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        descent: "var(--color-descent)",
        background: "var(--color-background)",

        shadow: "#000000",
        midground: "#70587c",
        foregound: "#c8b8db",
        highlight: "#cca62e",
      },
      height: {
        screen: "100vh",
      },
      width: {
        screen: "100vw",
      },
      fontFamily: {
        secondaryfont: ["GeistMono", "sans-serif"], // Add your custom fonts
        mainfont: ["CodaCaption", "sans-serif"],
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
} satisfies Config;
