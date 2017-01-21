//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/app.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    preprocessors: { 'app/view*/**/*.js': ['coverage'] },

    coverageReporter: {
      reporters: [
        // generates ./coverage/lcov.info
        {type:'lcovonly', subdir: '.'},
        // generates ./coverage/coverage-final.json
        {type:'json', subdir: '.'},
      ]
    },

    reporters: ['progress', 'coverage']

  });
};
