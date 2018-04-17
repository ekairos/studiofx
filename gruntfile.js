module.exports = function(grunt) {
	grunt.initConfig({ // config object
		karma: { // our test runner
			unit: {
				configFile: 'karma.conf.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-karma'); // loading tasks
};
