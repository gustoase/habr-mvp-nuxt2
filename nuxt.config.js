import { resolve } from 'path';
// eslint-disable-next-line import/no-named-as-default
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export default {
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 80
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Habr Model-View-Presenter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    // Design system
    '@central-design-system/components/dist/cds.css',
    '@central-design-system/components/dist/tokens/b2b/variables.css'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  plugins: [
    '~/plugins/cds',
    '~/plugins/validation'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '~/modules/eventbus',
    ['~/modules/demo', { namespace: 'demo' }]
  ],

  build: {
    extend(config) {
      // добавляем alias в webpack из tsconfig. Например ~/trade-result/*
      config.resolve.plugins.push(
        new TsconfigPathsPlugin({
          configFile: resolve(__dirname, './tsconfig.json')
        })
      );
      config.resolve.alias.vue = 'vue/dist/vue.esm';
    },
    transpile: [
      '@central-design-system/components/dist/cds.min.js',
      '@central-design-system/components/dist/utils',
      '@central-design-system/store/src',
      'vee-validate/dist/rules'
    ]
  }
};
