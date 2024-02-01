// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon',
    '@nuxt/image',
    '@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '~/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})