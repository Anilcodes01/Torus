/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: "#ffffff",
        customSearchColour: "#272829",
        customSidebarColour: "#262325",
        customSidebarHoverColour: "#434345"
      },
      fontFamily: {
        sans: ['Mona Sans', 'sans-serif'], // Override default sans-serif
        mona: ['Mona Sans', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'], // Add a custom utility
      },
    },
  },
  plugins: [],
}

