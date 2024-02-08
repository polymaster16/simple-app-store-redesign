// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules:[
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-icon',
    '@nuxtjs/sanity',
    'nuxt-swiper'
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },

  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


})

