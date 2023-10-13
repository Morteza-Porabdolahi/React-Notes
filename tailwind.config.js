/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    fontFamily: {
      "default": ['"Open Sans"', 'sans-serif'] 
    },
    extend: {
      colors: {
        "primary": "#1E1E1E",
        "primary-light": "#27272C",
        "secondary": "#6366F1",
        "tertiary": "#fff",
        "tertiary-dark": "#9CA3AF",
        "tertiary-gray": "#71717A"
      }
    }
  },
  plugins: [],
}

