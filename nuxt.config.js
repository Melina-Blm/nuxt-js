// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head : {
      title : 'Nuxt 3 app',
      link : [
        {rel: 'preconnect', href : 'https://fonts.googleapis.com'},
        {rel: 'stylesheet', href : 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'}
      ]
    }
  },
  devtools: { enabled: true },

  components: [
    {
    path: '~/components',
    pathPrefix: false
  }
  ],
  modules: ['@nuxtjs/prismic', '@pinia/nuxt'],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
  css: [
    '@/scss/main.scss'
  ],
  runtimeConfig: {
    public : {
      apiUrl: '', 
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/scss/foundations/_variables.scss";
          @import "@/scss/foundations/_mixins.scss";`
        }
      }
    }
  }
})