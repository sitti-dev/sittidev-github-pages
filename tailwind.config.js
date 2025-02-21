import { fontFamily } from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './assets/css/**/*.css',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Ubuntu', 'sans-serif', ...fontFamily.sans],
                body: ['IBM Plex Mono', 'sans-serif', ...fontFamily.sans],
            },
            colors: {
                primary: {
                    primary: {
                        DEFAULT: "#12F7D6",
                        400: "#98FAEC",
                    },
                    dark: {
                        400: "#43454D",
                        500: "#292F36",
                        600: "#1A1E23"
                    },
                }
            }
        },
    },
    plugins: [],
}

