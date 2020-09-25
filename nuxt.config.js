export default {
  mode: 'universal',
  srcDir: 'src/',
  rootDir: './',
  head: {
    script: [
      {
        src: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js',
        defer: true
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt App' }
    ]
  },

  server: {
    port: 8000
  },

  plugins: [
    {src: '@/plugins/railsAuthApi.js', ssr: true}
  ],

  modules: [
    '@nuxtjs/style-resources'
  ],

  buildModules: [
  ],
  
  styleResources: {
    scss: [
      './styles/_global.scss',
      './styles/_variables.scss',
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
