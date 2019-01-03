# SessionTimeout

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0-rc.4.


After logging in with the right credentials (u: username p: pass), it will navigate you to the home page where the session timeout logic lives. After being idle for 10 seconds, a pop up shows up giving you the option of continuing or logging out. If you don't take any action after 20 seconds, it will log you out. 

# Steps to setup project

Create Angular CLI project

Install below mentioned packages

i. npm install --save @ng-idle/core

ii. npm install --save @ng-idle/keepalive

iii. npm install --save bootstrap@4.0.0-beta

iv. npm install --save @ng-bootstrap/ng-bootstrap

Update the angular-cli.json to include Bootstrap CSS

"styles": [ "styles.css", "../node_modules/bootstrap/dist/css/bootstrap.min.css" ],

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
