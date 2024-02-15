# NW.js Angular CLI example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8. Though dependencies have been updated since then. You'll likely want to clone from `main` rather than use the latest release. Here is the [diff between the latest release and main](https://github.com/nwutils/nw-angular-cli-example/compare/v1.3.0...main).


![A Screenshot of the default app running on Windows](screenshot.png)


## Running Locally for development

1. `npm install`
1. `npm start`
1. Webpack will spin up (takes a moment) then a window will pop up

You can also run this repo in a regular browser with `npm run start:web`, but will need to add conditionals into your code to skip desktop-specific code (`if (window.nw) {}`).


## Building for distribution

1. `npm run build:clean` will delete your `./dist` and `/dist-ng` folders
1. `npm run build:ng` will build just your Angular app for distribution (`./dist-ng`)
1. `npm run build:nw` will build just your NW.js app (`./dist`)
1. `npm run build` is your all-in-one command. It will clean out the old dist folders and build your Angular and NW.js app


# **IMPORTANT NOTE ABOUT BUILDS!!!**

They take a long time. If you do `npm run build` expect it to take 10-15 minutes. This can be adjusted by changing the build params in the `package.json`. The more platforms and build types, the longer it takes. You can also remove the `--concurrent` from the `build:nw` script to see a status of what has been completed. This will allow individual pieces to finish faster, but the entire build will take longer.


## Automated quality enforcment

1. **Linting:** `npm run lint` - tslint.json
1. **Unit tests:** `npm test` - [Karma](https://karma-runner.github.io).
1. **End-to-end:** `npm run e2e` - Accepting PR to fix these tests. - [Protractor](http://www.protractortest.org).


## Code scaffolding

[ng generate Docs](https://angular.io/cli/generate)

1. `npm run generate -- component component-name` to generate a new component.
1. `npm run generate -- directive directive-name` to generate a new directive.
1. `npm run generate -- pipe pipe-name` to generate a new pipe.
1. `npm run generate -- service service-name` to generate a new service.
1. `npm run generate -- class class-name` to generate a new class.
1. `npm run generate -- guard guard-name` to generate a new guard.
1. `npm run generate -- interface interface-name` to generate a new interface.
1. `npm run generate -- enum enum-name` to generate a new enum.
1. `npm run generate -- module module-name` to generate a new module.


## Further help

To get more help on the Angular CLI use `npm run ng -- help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Alternatives

* [NW.js + Angular-CLI + Better-SQLite3](https://github.com/vatsalkgor/nw-better-sqlite3-boilerplate) - A fork of this repo with an example of SQLite added.
* [NW.js + Angular 1.2](https://github.com/jgrenon/angular-desktop-app) - From 2014
* [NW.js + Angular 1.4](https://github.com/vhpoet/nwjs-boilerplate) - From 2015
