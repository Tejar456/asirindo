// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/i18n','@nuxtjs/seo','@nuxtjs/supabase'
  ],  
  supabase: { redirect: false },

  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
    detectBrowserLanguage: false,
    strategy: 'no_prefix',  
    vueI18n: './i18n.config.ts'
  },

  plugins: ["~/plugins/preline.client.ts",
    { src: '~/plugins/aos.ts', mode: 'client', ssr: false }
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})