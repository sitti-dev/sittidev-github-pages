// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ["~/assets/css/tailwind.css"],
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
    ],
    app: {
        baseURL: '/sittidev-github-pages/', // baseURL: '/<repository>/'
        buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
        head: {
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
                { name: 'referrer', content: 'strict-origin-when-cross-origin' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            ],
            htmlAttrs: {
                lang: 'en',
            },
        },
    },
    googleFonts: {
        // declare your google fonts here
        families: {
            Ubuntu: [300, 400, 500, 600, 700],
            'IBM Plex Mono': [300, 400, 500, 600, 700],
        },
        display: "fallback",
        preload: true,
        text: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&'()*+,—-.:?_<>/€`,
    },
})