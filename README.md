# StudioFX

## Overview

### What is it for ?

It should present the Studio's portfolio to potential client as much as new talents willing to join the team in its growth.

### What does it do ?

The website should showcase StudioFX's gallery, present the team and the services they provide.
While portfolio are best shown on desktop displays, it should be a mobile first approach to ensure that the website and its content is easily and quickly accessible anywhere to exchange and present the studio services.
It shoud be clear with fluid and simple navigation as well as respnsive so to be accessible from any devices.

## Features

### Existing Features

- Demo Reel on Home Page
- About page prensenting services and team
- Address on googleMap for location
- Contact Forms
- Portfolio gallery viewer

### Features to add

## Tech used

### Main tech used includes:

- [AngularJS](https://angularjs.org/)
	- **AngularJS** is used to handle page routing, build custom directives
- [Bootstrap](http://getbootstrap.com/)
	- **Bootstrap v3.3.7** is used to give the project a simple, responsive layout. No update to BS4 planed at this stage and would result in new version.
- [npm](https://www.npmjs.com/)
	- We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
	- **Bower** is used to manage the installation of our libraries and frameworks
 
### Testing tools

- [Jasmine](https://jasmine.github.io/)
	- **Jasmine** as our testing framework
- [karma](https://karma-runner.github.io/2.0/index.html)
	- **Karma** as our test runner for the browsers we want
- [Grunt](https://gruntjs.com/)
	- **Grunt** as our task runner
- [Angular mocks](https://docs.angularjs.org/api/ngMock)
	- We need **ngMocks** to test our AngularJs components

- [Protractor](https://www.protractortest.org/#/)
	- **Protractor** is our AngularJs end-to-end testing framework
- [Webdriver-manager](https://www.protractortest.org/#/server-setup)
	- **webdriver-manager** helps running [Selenium server](https://www.seleniumhq.org/) and drive the browsers we want

### Additional tech used
- [Jasmine-expect](https://www.npmjs.com/package/jasmine-expect)
  - Used to add custom matchers for testing the app

### Tests environment

End 2 End test are running in Firefox 57.0, Chrome 67.0 and Opera 54.0.

_You need [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) to be installed on your machine to run **Selenium Server** locally._

## Contributing

### Getting the code up and running

1. Firstly you will need to clone this repository by running the `git clone <project's Github URL>` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
   1. You first need to get **npm** by installing Node from [here](https://nodejs.org/en/)
   2. Then you can install bower running the following command:
     `npm install -g bower` this may require sudo on Mac/Linux
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: `npm install -g http-server` this also may require sudo on Mac/Linux
5. Once **http-server** is installed run `http-server -c-1`
6. The project will now run on [localhost:8080](http://127.0.0.1:8080)
