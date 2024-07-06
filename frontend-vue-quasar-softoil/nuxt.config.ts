export default defineNuxtConfig({
  // $production: {
  //   routeRules: {
  //     '/**': { isr: true }
  //   }
  // },

  // $development: {
  //   //
  // },
  // Quasar config https://nuxt.com/modules/quasar
  css: [
    'quasar/dist/quasar.css',
    '@quasar/extras/material-icons/material-icons.css',
    '~/assets/css/tailwind.css', // Tailwind CSS
  ],
  build: {
    transpile: ['quasar']
  },
  plugins: [
    { src: '~/plugins/quasar.js', mode: 'client' }
  ],
  modules: [
    '@pinia/nuxt', //pinia integration https://pinia.vuejs.org/ssr/nuxt.html
    // '@nuxtjs/tailwindcss',
  ],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  pages: true, // Asegúrate de no deshabilitar las páginas

  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  
  compatibilityDate: '2024-07-04'
})


  
