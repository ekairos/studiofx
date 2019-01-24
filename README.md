# StudioFX

## Table Of Content

- [Overview](#overview)
- [Contributing](#contributing)
- [Tech used](#tech-used)
- [Features](#features)
- [License](#license)

## Overview

**_Live preview_** :
[githup pages](https://gareths3.github.io/studiofx/)  

### What is it for ?

To present the Studio's portfolio to potential client as much as new talents willing to join the team in its growth.

### What does it do ?

The website should showcase StudioFX's gallery, present the team and the services they provide.
While portfolio are best shown on desktop displays, it should be a mobile first approach to ensure that the website and its content is easily and quickly accessible anywhere to exchange and present the studio's services.
It should be clear with fluid and simple navigation as well as responsive so to be accessible from any devices.

## Contributing

### Getting the code up and running

1. Firstly you will need to clone this repository by running :
   ```bash
   git clone https://github.com/GarethS3/studiofx.git
   ```
2. Install project’s dependencies :
   ```bash
   npm install && bower install
   ```
   - If you need to install **Node** and **Bower** :
      1. Follow Node installation [here](https://nodejs.org/en/)
      2. Then install Bower : `npm install -g bower`
      3. `npm install && bower install`
3. Start local server :
   ```bash
   npm run start
   ```
   -  Or with http-server global installation :
      1. Make sure you have **http-server** or install it running : `sudo npm install -g http-server`
      2. Execute `http-server`. _Using ` -c-1 ` flags will disable the cache_.
4. The project will now run at [localhost:8080](http://127.0.0.1:8080) with any web browser.

### The Testing framework

#### Unit Testing

The Unit Tests are run in Firefox 64.0, Chrome 71.0 and Opera 57.0.

You can run the tests using local config:
```bash
npm run unittest
```
Global config requires to install Karma-cli and Grunt-cli globally with security privileges access :
```bash
sudo npm install -g karma-cli grunt-cli
```
Then run the tests from the project root : 
```bash
grunt karma:unit
```

Check configuration and tested scripts in `gruntfile.js` and `karma.conf.js` files in project root.  
_To test in additional browsers you will need to check for their [Karma launcher](https://npmjs.org/browse/keyword/karma-launcher) and add them in the ` karma.conf.js ` file_


#### End-to-End Testing

These End-to-End tests are run in Firefox 64.0 and Chrome 71.0.

_You need [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) to be installed on your computer to run **Selenium Server** locally._

To simply run the tests with local config :
```bash
npm run e2etest
```
To run the tests with global installation of Webdriver-manager and Protractor proceed as follow :
1. Installing Protractor and Webdriver-manager :
   ```bash
   sudo npm install -g protractor webdriver-manager
   ```
2. Make sure you **update webdriver-manager** :
   ```bash
   sudo webdriver-manager update
   ```
3. You will then have to run these commands in separate command lines :
   1. Start the server on `localHost:8080` :
   ```bash
   http-server -c-1
   ```
   2. Start webdriver-manager:
   ```bash
   webdriver-manager start
   ```
   3. Then run protractor :
   ```bash
   protractor protractor.conf.js
   ```

## Tech used

### Main tech used:

- [AngularJS](https://angularjs.org/)
	- **AngularJS** is used to handle page routing, build custom directives
- [Bootstrap](http://getbootstrap.com/)
	- **Bootstrap v3.3.7** is used to give the project a simple, responsive layout. No update to BS4 planed at this stage and would result in new version.
- [NPM](https://www.npmjs.com/)
	- We use **npm** to help manage some of the dependencies in our application
- [Yarn](https://yarnpkg.com/en/)
	- **Yarn** is now used to manage the installation of our libraries and framework. (_Previously used Bower_)
 
### Testing tools

- [Jasmine](https://jasmine.github.io/)
	- **Jasmine** as our testing framework
- [karma](https://karma-runner.github.io/2.0/index.html)
	- **Karma** as our test runner for the browsers we want
- [Gulp](https://gulpjs.com/)
	- Now using **Gulp** as our task runner instead of Grunt. (_Previously used Grunt_)
- [Angular mocks](https://docs.angularjs.org/api/ngMock)
	- We need **ngMocks** to test our AngularJs components

- [Protractor](https://www.protractortest.org/#/)
	- **Protractor** is our AngularJs end-to-end testing framework
- [Webdriver-manager](https://www.protractortest.org/#/server-setup)
	- **Webdriver-manager** helps running [Selenium server](https://www.seleniumhq.org/) and drive the browsers we want

### Additional tech used

- [http-server](https://www.npmjs.com/package/http-server)
  - To run the project on ` localHost:8080 `
- [Jasmine-expect](https://www.npmjs.com/package/jasmine-expect)
  - Used to add custom matchers for testing the app


## Features

### Existing Features

- Demo Reel on Home Page
- About page presenting services and team
- Address on googleMap for location
- Contact Forms
- Portfolio gallery viewer

### Features to add

_There is always space for improvement_

## License

See the LICENSE.md file for license rights and limitations (MIT).
