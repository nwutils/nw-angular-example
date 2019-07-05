// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

let nwBinary = 'nwjs/nw.exe';
let driver = 'nwjs/chromedriver.exe';

if (process.platform === 'linux') {
  nwBinary = 'nwjs/nw';
  driver = 'nwjs/chromedriver'
}
if (process.platform === 'darwin') {
  nwBinary = 'nwjs.app/contents/MacOS/nwjs';
  driver = 'chromedriver';
}

nwBinary = './node_modules/nw/' + nwBinary;
driver = '../node_modules/nw/' + driver;

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  chromeDriver: driver,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: nwBinary
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {}
  },
  onPrepare: function () {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    jasmine.getEnv()
      .addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      }));
  }
};
