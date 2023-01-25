/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "cyan-base": "#00BFA6",
                "green-base": "#3CC083",
                "bg-base": "#171717",
                "color-reg-now": "#00BFA6",
                "account-input": "#262626",
                "orange-base": "#FDC685",
            },
            width: {
                "account-input": "360px",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
