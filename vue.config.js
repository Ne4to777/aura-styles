const privateJSON = require('./dev/private.json')

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	devServer: {
		contentBase: './public',
		port: 3000,
	},
	filenameHashing: false,

	pages: {
		index: {
			entry: 'src/main.js',
			template: 'src/index.ejs',
			filename: 'index.html',
			templateParameters: {
				HOST: privateJSON.siteUrl,
				SITE_RELATIVE_URL: privateJSON.siteRelativePath,
				DEPLOY_PATH: privateJSON.deployPath
			}
		}
	},
	configureWebpack: {
		externals: {
			vue: 'Vue',
			'vue-router': 'VueRouter',
			vuex: 'Vuex'
		},
		optimization: {
			splitChunks: false
		}
	}
}
