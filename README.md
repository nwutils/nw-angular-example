# NW.js and Angular CLI example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.


![A Screenshot of the default app running on windows](screenshot.png)


## Running Locally for development

1. `npm install`
1. `npm start`
1. An empty window will pop up while Webpack warm ups
1. Once Webpack is running, refresh the window and you're golden


## Building for distribution

1. `npm run build:clean` will delete your `./dist` and `/dist-ng` folders
1. `npm run build:ng` will build just your Angular app for distribution (`./dist-ng`)
1. `npm run build:nw` will build just your NW.js app (`./dist`)
1. `npm run build` is your all-in-one command. It will clean out the old dist folders and build your Angular and NW.js app


# **IMPORTANT NOTE ABOUT BUILDS!!!**

They take a long time. If you do `npm run build` expect it to take 10-15 minutes. This can be changed based on changing the build params in the `package.json`.


## Automated quality enforcment

1. **Linting:** `npm run lint` - tslint.json
1. **Unit tests:** `npm test` - [Karma](https://karma-runner.github.io).
1. **End-to-end:** `npm run e2e` - Accepting PR to fix these tests. [Protractor](http://www.protractortest.org/).


## Code scaffolding

[Docs](https://angular.io/cli/generate)

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
