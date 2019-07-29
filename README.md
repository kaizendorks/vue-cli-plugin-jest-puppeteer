# vue-cli-plugin-jest-puppeteer
> In development!


This plugin configures your project with everything necessary to write E2E tests using [Jest](https://jestjs.io/) and [Puppeteer](https://pptr.dev/):

- adds [jest](https://www.npmjs.com/package/jest), [jest-puppeteer](https://www.npmjs.com/package/jest-puppeteer) and [puppeteer](https://www.npmjs.com/package/puppeteer) as dev-dependencies
- adds the necessary config files
- setups babel to support ES6 modules in the E2E test files
- adds the `test:e2e` command to the package.json
- adds a sample E2E test

## Installation
Run the following command from your project's root folder: `vue add jest-puppeteer`

- For more information on how to add plugins to your project, see: https://cli.vuejs.org/guide/plugins-and-presets.html#installing-plugins-in-an-existing-project

Adding the plugin will update your project as in:
- Adding the `test:e2e` script to your package.json
- Adding the E2E tests folder with a sample test in `/test/e2e/basic.spec.js`
- Adding the necessary config files `jest-puppeteer.config.js` and `jest.e2e.config.js` to the project root, and `.babelrc.js` to the `test/e2e` folder.
- Installing the necessary devDependencies, [jest](https://www.npmjs.com/package/jest), [jest-puppeteer](https://www.npmjs.com/package/jest-puppeteer), [puppeteer](https://www.npmjs.com/package/puppeteer), [babel-jest](https://www.npmjs.com/package/babel-jest) and [babel-plugin-transform-es2015-modules-commonjs](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-commonjs)

### Options (In development!)

- e2e test folder location
- package.json command name

## Usage

Once installed, run the tests with `npm run test:e2e`.

- You might want to update the `test` script in package.json to also include a call to the new `test:e2e` script.
- By default it will run tests with the `--runInBand` option. If you want to change it, modify the `test:e2e` script in package.json, see https://github.com/smooth-code/jest-puppeteer#running-puppeteer-in-ci-environments for more information.

Feel free to update the default settings

- For more info on `jest-puppeteer.config.js` see https://github.com/smooth-code/jest-puppeteer
- For more info on `jest.e2e.config.js` see https://jestjs.io/docs/en/configuration

##