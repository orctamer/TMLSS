module.exports = {
	distDir: "TMLSS",
	assetPrefix: 'https://efrenpalacios.dev/TMLSS',
	generateBuildId: async () => {
		if (process.env.BUILD_ID) {
			return process.env.BUILD_ID;
		} else {
			return `${new Date().getTime()}`;
		}
	}
};