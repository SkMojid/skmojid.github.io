/** @type {import('tailwindcss').Config} */

export default ({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      colors:  {
        v: '#3A5A40',
        vBtnHover: "#588157",
      }
    }

  },
  plugins: ["prettier-plugin-tailwindcss"],
});
