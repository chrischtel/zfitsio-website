// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/css/colors.css',
    '@/assets/css/global.css'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Fira+Code&display=swap'
        }
      ]
    }
  },
  modules: [
    'nuxt-shiki'
  ],
  shiki: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    langs: ['zig', 'bash', 'json']
  }
  
})
