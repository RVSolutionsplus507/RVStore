/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                serif: "sans-serif",
                "lato-regular": "Lato, sans-serif",
                "lato-bold": "Lato, sans-serif",
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                white: "#ffffff",
                primary: "#233E59",
                secondary: "#5398B5",
                gray: "#E5E5E5",
            },
        },
        screens: {
            minimum: "320px",
            tiny: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            resp: { max: "1024px" }
        }
    },
    plugins: []
};
