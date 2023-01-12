module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
								@import "@/scss/_variables.scss";
								@import "@/scss/_mixins.scss";
								@import "@/scss/_reset.scss";
								@import "@/scss/_common.scss";
		  					`,
			},
		},
	},
};
