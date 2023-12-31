/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        360: "360px",
        375: "375px",
        390: "390px",
        412: "412px",
        414: "414px",
        428: "428px",
        sm: "640px",
        md: "768px",
        lg: "968px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1440px",
        "4xl": "1536px",
      },
      colors: {
        "pure-orange": "#ff9b00",
        "dark-blue": "#1C1259",
        "light-gray": "#CACAEA",
        romantic: "#FFD2BD ",
        "dark-gray": "#444",
      },
      fontFamily: {
        fontforWebbly: "'Lobster', 'sans-serif';",
        paragraphsForfont: "'Lato', 'sans-serif';",
        navItemsForfont: "'Roboto', 'sans-serif';",
      },
    },
  },
  plugins: [],
};
// "dark-pink": "#EE4266",
