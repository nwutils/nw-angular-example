// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const process = require('process');

module.exports = async function (config) {

  const nw = await import('nw');

  process.env.CHROME_BIN = await nw.findpath('nwjs', { flavor: 'sdk' });

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/nw-angular-example'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
