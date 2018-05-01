exports.config = {
	// local port for protractor
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		//'tests/end2end/aboutSpec.js',
		//'tests/end2end/navigationMobileSpec.js',
		//'tests/end2end/navigationSpec.js',
		'tests/end2end/contactSpec.js'
	],

	capabilities: {
		browserName: 'firefox'
	},

/*
	mutliCapabilities: [{
		browserName: 'firefox'
	},
	{
		browserName: 'chrome'
	}],
*/
	framework: 'jasmine',
	// set location of server running the test
	// http-server runs on port 8080
	baseUrl: 'http://localhost:8080/'
}
