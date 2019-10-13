module.exports = (api, options) => {
  api.render('./template/default', options);

  // These dependencies always need to be added
  const devDependencies = api.hasPlugin('unit-jest')
    // If the official @vue/cli-plugin-unit-jest installed, then we can avoid installing jest and some related dependencies
    // However since it still uses jest 23, the version of jest-puppeteer cannot be the last one
    ? {
      puppeteer: '^1.17.0',
      'jest-puppeteer': '^3.9.0'
    }
    // The plugin isnt installed, so we can install latest jest as well as latest jest-puppeteer
    : {
      jest: '^24.8.0',
      'babel-jest': "^24.8.0",
      'babel-plugin-transform-es2015-modules-commonjs': '^6.26.2',
      puppeteer: '^1.17.0',
      'jest-puppeteer': '^4.2.0',
    };

  api.extendPackage({
    devDependencies,
    scripts: {
      'test:e2e': 'jest --config=jest.e2e.config.js --runInBand',
    },
  });

  api.exitLog('Run the tests with "npm run test:e2e"', 'info')
};
