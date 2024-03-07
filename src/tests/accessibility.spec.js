describe("Accessibility Tests", () => {
	// Variables that will be used multiple times.
	beforeEach(function(done){
		browser.navigateTo("https://booking.com");
		browser.window.maximize();
    });

	it("Run an accessibility test with all rules", (browser) => {
		browser
			.axeInject()
			.axeRun();
	});

	it("Run an accessibility test with specific rules", (browser) => {
		browser
			.axeInject()
			.axeRun('body', {
				runOnly: ['color-contrast'],
			});
	});

	it("Run an accessibility test with specific rules excluded", (browser) => {
		browser
			.axeInject()
			.axeRun('body', {
				rules: {
					'color-contrast': {
						enabled: false
					},
					'aria-progressbar-name': {
						enabled: false
					}
				}
			});
	});
});
