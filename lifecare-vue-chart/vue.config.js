// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
// 	transpileDependencies: true,
// });

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `
						@import "@/scss/_variables.scss";
						@import "@/scss/_mixins.scss";
						@import "@/scss/_reset.scss";
					`,
			},
		},
	},
};
