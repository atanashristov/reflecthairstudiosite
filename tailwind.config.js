/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'icon-clippers': "url('../assets/images/icons/icons8-barber-clippers-50.png')",
      }
    }
  },
  plugins: [require("./plugins/openVariant")],
};
