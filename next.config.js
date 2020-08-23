const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* experimental: {
        reactMode: 'concurrent'
      }, */
      reactStrictMode: true
    }
  ],
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        runtimeCaching
      }
    }
  ]
]);
