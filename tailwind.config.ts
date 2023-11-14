import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-up-fade-in": "slideUpFadeIn 1s ease-out",
      },
      keyframes: {
        slideUpFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(5px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        gray: "#e9ecef",
        aqua: "#00FFFF",
        yellow: "#DFFA0F",
        main_background_color: "#091E36",
        main_search_bar: "#0670A6",
        body_border: "#DDEEF7",
        body_time_color: "#A0A0A0",
        body_link_text_color: "#0784C3",
        footer: "#F8F9FA",
        footer_text: "#6C757D",
      },
      textColor: {
        test: {
          gr: "#e9ecef",
        },
        itemDetail: {
          textLabelColor: "#6C757D",
          inventoryKeyColor: "#6c757d",
        },
      },

      //
      backgroundColor: {
        modalBackgroundColor: "rgba(0, 0, 0, 0.5);",
        mainBackGroundColor: "#fafbfd",
        searchBarBackGroundColor: "rgb(248,249,250)",
      },
      minWidth: {
        itemTable: "300px",
      },
      screens: {
        md: { min: "768px", max: "990px" },
        lg: { min: "990px" },
      },

      //
    },
  },
  plugins: [],
};
export default config;
