const path = require('path');

module.exports = {
	chainWebpack(config) {
		config.entry('app').clear().add('./src/main.js').end();
		config.resolve.alias
			.set('@', path.join(__dirname, './src'))
			.set('#', path.join(__dirname, './src/modules'));
	},
	css: {
		loaderOptions: {
			sass: {
				// sassOptions: {
				// 	includePaths: [path.resolve(__dirname, 'src/core/')],
				// 	indentedSyntax: true,
				// },
				additionalData: `
								@import "@/scss/_variables.scss";
								@import "@/scss/_mixins.scss";
								@import "@/scss/_reset.scss";
								@import "@/scss/_common.scss";
		  					  `,
			},

			less: {
				lessOptions: {
					modifyVars: {
						'primary-color': '#1DA57A',
						'link-color': '#1DA57A',
						'border-radius-base': '2px',
					},
					javascriptEnabled: true,
				},
			},
		},
	},
};
