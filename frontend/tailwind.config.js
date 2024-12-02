/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1E1E1E", // Custom primary color
      secondary: "#282828", // Custom secondary color
      accent: "#423C87", // Custom accent color
      neutral: "#4EBD6D", // Neutral background color
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities({
        // Custom utility to hide scrollbars
        ".scrollbar-hide": {
          /* Hide scrollbar for WebKit-based browsers (Chrome, Safari) */
          "-webkit-overflow-scrolling": "touch",
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Webkit-based browsers */,
          },
        },
      });
    },
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          // Your custom theme
          primary: "#1E1E1E", // Custom primary color
          secondary: "#282828", // Custom secondary color
          accent: "#423C87", // Custom accent color
          neutral: "#D9D9D9", // Neutral background color
          "base-100": "#ffffff", // Base background color
          info: "#3ABFF8",
          success: "#4EBD6D",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      "light", // DaisyUI's default light theme
      "dark", // DaisyUI's default dark theme
      "nord", // DaisyUI's nord theme
    ],
  },
};
