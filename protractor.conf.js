exports.config = {
	// local port for protractor
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'tests/end2end/navigationMobileSpec.js'
	],

	capabilities: {
		browserName: 'firefox'
	},

/*
	mutlicapabilities: [{
		browserName: 'firefox'
	},
	{
		browserName: 'chrome'
	},
	{
		browserName: 'opera'
	}],
*/
	framework: 'jasmine',
	// set location of server running the test
	// http-server runs on port 8080
	baseUrl: 'http://localhost:8080/'
}
