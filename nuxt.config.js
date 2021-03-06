
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Angle | 最もシンプルな分度器アプリ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180'
      },
      {
        rel: 'icon',
        href: '/android-chrome-256x256.png',
        sizes: '256x256'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#161616' },
  /*
  ** Global CSS
  */
  css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['./assets/scss/modules/*.scss']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
