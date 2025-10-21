/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { deepblue:"#0B3A5B", turquoise:"#14B7B8", sand:"#EADCC8", cream:"#FAF7F2" }
    },
  },
  plugins: [],
};
