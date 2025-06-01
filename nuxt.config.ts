// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    // css: ['~/assets/css/main.css'],
    ssr: false,
    app: {
        baseURL: process.env.NUXT_APP_BASE_URL || '/',
    },

    modules: [
        '@nuxt/eslint',
        // '@nuxt/icon',
        // '@nuxt/test-utils',
        '@nuxt/ui',
        '@nuxtjs/tailwindcss'],
    tailwindcss: {
        exposeConfig: true,
        viewer: true,
        // and more...
    },


    // vite: {plugins: [tailwindcss(),],},
})