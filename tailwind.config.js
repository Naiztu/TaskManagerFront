/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        liex: {
          primary: {
            500: "#FF3131",
          },
          second: {
            500: "#FF914D",
          },
          third: {
            500: "#FFDE59",
          },
          fourth: {
            500: "#A82222",
          },
        },
      },
    },
  },
  plugins: [],
};
