/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-nav-bg-pattern":
          "url('/assets/images/bg-pattern-mobile-nav.svg')",
      },
    },
  },
  plugins: [],
};
