import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
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
        signaturefont: ["Bestermind", "sans-serif"],
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
  plugins: [
    plugin(function ({ matchUtilities, theme }: PluginAPI) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") as Record<string, string> | undefined }
      );
    }),
    require("tailwind-scrollbar-hide"),
  ],
} satisfies Config;
