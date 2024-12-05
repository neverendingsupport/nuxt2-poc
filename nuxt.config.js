import fs from 'fs';
import YAML from 'yaml';
import webpack from 'webpack';

require('dotenv').config();

function readYamlFile(filePath) {
  const file = fs.readFileSync(filePath, 'utf8');

  return YAML.parse(file);
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/icons/style.css' },
    ],
  },

  dir: {
    layouts: 'core/layouts',
    middleware: 'core/middleware',
  },

  layoutTransition: {
    // Is "layout" by default
    name: 'fade',
    mode: 'out-in',
  },
  pageTransition: {
    // Is "page" by default
    name: 'slide-fade',
    mode: 'out-in',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['@/core/styles/css/all.css', '@/core/styles/scss/all.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    // '@/components/',
    { path: '@/components/base/' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // https://go.nuxtjs.dev/pwa
  ],


  watch: [
    'locales',
    'app.html',
    '*.config.js',
    '*.config.ts',
    '.env',
    '.nuxtignore',
  ],

  watchers: {
    webpack: {
      ignored: /node_modules/,
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  terser: {
    // https://github.com/webpack-contrib/terser-webpack-plugin#parallel
    parallel: true,
    cache: true,
  },
};
