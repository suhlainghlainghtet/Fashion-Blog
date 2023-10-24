/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        319: "319px",
        359: "359px",
        374: "374px",
        389: "389px",
        392: "392px",
        410: "410px",
        413: "413px",
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
        "dark-pink": "#EE4266",
        romantic: "#FFD2BC ",
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
