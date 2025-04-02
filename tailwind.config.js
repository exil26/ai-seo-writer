/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this to match your project structure
    "./app/**/*.{js,ts,jsx,tsx}", // Include app directory if using Next.js App Router
  ],
  theme: {
    extend: {}, // You can extend the theme here, but don’t remove defaults
  },
  plugins: [],
};
