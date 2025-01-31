// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
    detectBrowserLanguage: false,
    strategy: 'no_prefix',  
    vueI18n: './i18n.config.ts'
  },
  // i18n: {
  //   locales: [
  //     { code: 'id', iso: 'id-ID', name: 'Indonesia', flag: '🇮🇩' },
  //     { code: 'en', iso: 'en-US', name: 'English', flag: '🇺🇸' }
  //   ],
  //   defaultLocale: 'id',
  //   strategy: 'prefix_and_default', 
  //   vueI18n: './i18n.config.ts'
  // },

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