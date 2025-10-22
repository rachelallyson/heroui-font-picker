const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [heroui(
        {
            themes: {
                light: {
                    colors: {
                        primary: "#0072f5",
                        secondary: "#7828c8",
                        success: "#17c964",
                    }
                },
                dark: {
                    colors: {
                        primary: "#0072f5",
                        secondary: "#7828c8",
                        success: "#17c964",
                    }
                }
            }
        }
    )],
}
