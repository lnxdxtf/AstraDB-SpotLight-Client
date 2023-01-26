/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        astra: {
          light: "#F7ECE1",
          dark: "#373F51",

          primary: "#38AECC", // + light
          secondary: "#0090C1",
          tertiary: "#046E8F",
          quaternary: "#183446",// +  dark
 
          contrast: "#DBD56E"
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
