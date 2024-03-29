module.exports = function(config) {
  config.set({
    basePath: '../',

    files: [
      'app/bower_components/angular/angular.js',
      'app/js/**/*.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
