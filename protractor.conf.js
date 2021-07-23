exports.config = {
	// local port for protractor
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'tests/end2end/aboutSpec.js',
		'tests/end2end/navigationMobileSpec.js',
		'tests/end2end/navigationSpec.js',
		'tests/end2end/contactSpec.js',
		'tests/end2end/homeSpec.js',
		'tests/end2end/workSpec.js'
	],

	// There is currently an issue with newer versions of protractor and Gecko driver.
	// Since this project is not maintained anymore the end-ro-end tests are run with Chrome only.
	capabilities: {
		browserName: 'chrome'
	},

	framework: 'jasmine',
	// set location of server running the test
	// http-server runs on port 8080
	baseUrl: 'http://localhost:8080/'
};
