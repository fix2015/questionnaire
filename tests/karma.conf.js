module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns
    basePath: '.',

    // frameworks to use
    frameworks: ['jasmine', 'mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-ui-router/release/angular-ui-router.js',
      '../node_modules/angular-animate/angular-animate.js',
      '../public/lib/angular-strap/dist/angular-strap.js',
      '../public/lib/angular-strap/dist/angular-strap.tpl.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '../node_modules/mocha/mocha.js',
      '../public/lib/*.js',
      './unit/*.js',
      '../app.js',
      '../src/modules/questions/questions.js',
      '../src/modules/questions/*.js',
      '../src/modules/questions/**/*.js', 
        '../src/**/*.js',
    ],

    // test result reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    browsers: ['Chrome'],

    // Continuous Integration mode
    singleRun: false
  });
};