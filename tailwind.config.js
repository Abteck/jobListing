/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      fontFamily: {
        "league-spartan": "'League-Spartan', sans-serif",
      },
      colors: {
        // Primary

        "Desaturated-Dark-Cyan": "hsl(180, 29%, 50%)",

        // Neutral

        "Light-Grayish-Cyan-bg": "hsl(180, 52%, 96%)", //(Background)
        "Light-Grayish-Cyan": "hsl(180, 31%, 95%)", //(Filter Tablets)
        "Dark-Grayish-Cyan": "hsl(180, 8%, 52%)",
        "Very-Dark-Grayish-Cyan": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
