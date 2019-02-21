// Karma configuration
// Generated on Tue Apr 03 2018 16:11:14 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        // --- libraries frameworks files ---
        'node_modules/angular/angular.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        // additional matchers
        'node_modules/jasmine-expect/dist/jasmine-matchers.js',

        // --- src files ---
        'js/app.js',
        // 'js/controllerHome.js', ** No features to test yet **
        'js/controllerAbout.js',
        'js/controllerWork.js',
        'js/controllerContact.js',

        // --- distribution files ---
        // 'dist/js/studioapp.min.js',
        
        // --- spec files ---
        // 'tests/unit/dummySpec.js',
        // 'tests/unit/controllerHomeSpec.js', ** No features to test yet **
        'tests/unit/controllerAboutSpec.js',
        'tests/unit/controllerWorkSpec.js',
        'tests/unit/controllerContactSpec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'Opera'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
