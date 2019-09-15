// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

const nw = 'nw';
const nwMock = {
  process: {
    versions: {
      nw: '0.40.2',
      'nw-flavor': 'sdk',
      node: '12.9.1',
      chromium: '76.0.3809.132'
    }
  },
  Shell: {
    openExternal () {
      return undefined;
    }
  },
  Window: {
    get () {
      return {
        showDevTools () {
          return undefined;
        }
      };
    }
  }
};
global[nw] = nwMock;
window[nw] = nwMock;
