module.exports = function(grunt) {
	grunt.initConfig({ // config object
		karma: { // our test runner
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		ngAnnotate: {
			options: {
				singleQuotes: true,
				separator: ';'
			},
			app: {
				files: [{
					expand: true,
					cwd: './js',
					src: ['app.js', 'controllerContact.js', 'controllerHome.js', 'controllerAbout.js', 'controllerWork.js', 'controllerNav.js', 'directiveThumb.js', 'directiveViewer.js'],
					dest: 'js/annotated',
					ext: '.antd.js'
				}]
			}
		},
		concat: {
			options: {
				separator: ';\n'
			},
			dist: {
				src: 'js/annotated/*.js',
				dest: 'js/studioapp.js'
			}
		},
		uglify: {
			options: {
				// banner: '/*! app.min.js file */',
				mangle: true
			},
			build: {
				expand: true,
				cwd: './js',
				src: ['studioapp.js', 'gmapload.js', 'reelviewer.js', 'scrollspy.js'],
				dest: './dist/js',
				ext: '.min.js'
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: './css',
					src: ['./*.css'],
					dest: './css',
					ext: '.min.css'
				}]
			}
		}
	});
	// loading tasks
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// Run 'grunt build' to minify CSS and JS files
	// JS min files in dist/js,
	// AngularJS concatenate files into 'studioapp.min.js'
	grunt.registerTask('build', ['ngAnnotate', 'concat', 'uglify', 'cssmin']);
};
