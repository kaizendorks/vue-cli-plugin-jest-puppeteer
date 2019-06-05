// Jest configuration specific to the E2E tests
// (separated from regular jest.config.js used for unit tests)
// See https://jestjs.io/docs/en/configuration for more information about these options
module.exports = {
  preset: 'jest-puppeteer',
  moduleFileExtensions: [
    'js',
  ],
  testMatch: [
    '**/test/e2e/**/*.spec.(js|ts)',
  ],
  watchPlugins: [
  ],
};
