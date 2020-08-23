const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const path = require('path');

module.exports = withPlugins([
   [
	optimizedImages, {
	   webpack(config) {
		  config.resolve.alias.images = path.join(__dirname, 'images');
		     return config;
		  },
	   reactMode: 'concurrent',
	},
   ],
   [
	withPWA, {
	   pwa: {
		   dest: 'public',
		   runtimeCaching,
	   },
	}
  ]
]);