# NW.js Angular CLI example

An example of running Angular with NW.js.

![A Screenshot of the default app running on Windows](screenshot.png)

## Getting started

1. Install [Volta](https://volta.sh/)
1. `npm i` to install node modules
1. `npm run lint` to lint code
1. `npm run test:unit` to run unit tests (figure out how to launch nwjs via karma)
1. `npm run test:e2e`to test app via Selenium (figure out how to do this)
1. `npm start` to run in development mode
1. `npm run dev:ng` to run only Angular in a browser (add `if (window.nw) {}` conditionals to skip desktop specific code)
1. `npm run build` to build desktop app

## Alternatives

* [NW.js + Angular-CLI + Better-SQLite3](https://github.com/vatsalkgor/nw-better-sqlite3-boilerplate) - A fork of this repo with an example of SQLite added.
* [NW.js + Angular 1.2](https://github.com/jgrenon/angular-desktop-app) - From 2014
* [NW.js + Angular 1.4](https://github.com/vhpoet/nwjs-boilerplate) - From 2015
