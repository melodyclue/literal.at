// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.ts',
    viewer: false,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'h-full',
      },
      bodyAttrs: {
        class: 'antialiased dark:bg-zinc-900',
      },
    },
  },
  content: {
    highlight: {
      theme: 'github-dark',
    },
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        weights: [400, 500, 600, 700, 800, 900],
        display: 'swap',
      },
      {
        name: 'Noto Sans JP',
        weights: [400, 500, 600, 700, 800, 900],
        display: 'swap',
      },
    ],
  },
  routeRules: {
    '/': { prerender: true },
  },
  compatibilityDate: '2024-12-15',
})
