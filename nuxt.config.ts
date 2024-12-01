// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  pages: true,
  experimental: {
    payloadExtraction: false
  },
  devtools: { enabled: true },
  css: [
    '@/assets/css/colors.css',
    '@/assets/css/global.css'
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      isProduction: process.env.NODE_ENV === 'production'
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Fira+Code&display=swap'
        }
      ],
      // Add meta tag for color scheme
      meta: [
        {
          name: 'color-scheme',
          content: 'light dark'
        }
      ]
    },
    baseURL: process.env.NODE_ENV === 'production' 
    ? process.env.NUXT_PUBLIC_SITE_URL 
    : '/',

  },
  modules: [
    '@sidebase/nuxt-auth'
  ],
  auth: {
    globalAppMiddleware: {
      allow404WithoutAuth: true,
      allow401WithoutAuth: true,
      enableGlobalAppMiddleware: false
    },
    origin: process.env.NUXT_AUTH_ORIGIN,
    defaultProvider: 'github'
  },
  // Add app config for theme
  appConfig: {
    theme: {
      default: 'system'
    }
  },
  nitro: {
    prerender: {
      failOnError: false,
      ignore: ['/']
    }
  }
})