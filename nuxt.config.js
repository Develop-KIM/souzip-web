// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo'
  ],

  site: {
    url: 'https://souzip.com',
    name: 'sou.zip',
    description: '여행의 순간을 선물로, AI가 추천하는 여행 기념품',
    defaultLocale: 'ko'
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ko'
      },
      title: 'sou.zip - 여행 기념품 추천 플랫폼',
      meta: [
        { name: 'description', content: '여행의 순간을 .zip으로, AI가 여행지별 맞춤 기념품을 추천해드립니다. 특별한 여행의 추억을 소중한 사람에게 선물하세요.' },
        { name: 'keywords', content: '여행 기념품, 기념품 추천, 여행 선물, AI 추천, 맞춤 선물, 해외 쇼핑, souzip, 여행 쇼핑' },
        { name: 'author', content: 'sou.zip' },
        { property: 'og:title', content: 'sou.zip - 여행 기념품 추천 플랫폼' },
        { property: 'og:description', content: '여행의 순간을 .zip으로, AI가 추천하는 여행 기념품' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://souzip.com' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
