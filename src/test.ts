/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow/prefer-arrow-functions */

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
      nw: '0.44.4',
      'nw-flavor': 'sdk',
      node: '13.10.1',
      chromium: '80.0.3987.132'
    }
  },
  Shell: {
    openExternal: function () {
      return undefined;
    }
  },
  Window: {
    get: function () {
      return {
        showDevTools: function () {
          return undefined;
        }
      };
    }
  }
};
global[nw] = nwMock;
window[nw] = nwMock;
