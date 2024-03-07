const baseConfig = require("./base_config");

module.exports = {
	...baseConfig,
	src_folders: ["src/tests"],
	webdriver: {
		start_process: true,
		server_path: require("chromedriver").path,
		port: 9515,
	},
	test_workers: {
		enabled: true,
		workers: 2,
		node_options: "inherit",
	},
	test_settings: {
		default: {
			launch_url: "",
			desiredCapabilities: {
				browserName: "chrome",
			},
		},
	},
	plugins: ['@nightwatch/browserstack'],

'@nightwatch/browserstack': {
    test_observability: {
		enabled: true,
		user: process.env.BROWSERSTACK_USERNAME,
		key:  process.env.BROWSERSTACK_ACCESS_KEY,
		projectName: "browserstack-examples-nightwatchjs-project",
		buildName: "browserstack-examples-nightwatchjs-build",
		}
   
  },
	
};
