/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-from': '#00BFA6',
        'bg-to': '#3CC083',
        'bg-base': '#171717',
        'color-reg-now': '#00BFA6',
        'account-input': '#262626',
      },
	  width: {
		'account-input':'360px'
    },
    }
  },
  plugins: [],
}
