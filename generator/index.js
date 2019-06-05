module.exports = (api, options) => {
  api.render('./template/default', options);

  api.extendPackage({
    devDependencies: {
      jest: '^24.8.0',
      'jest-puppeteer': '^4.2.0',
      'babel-jest': "^24.8.0",
      'babel-plugin-transform-es2015-modules-commonjs': '^6.26.2',
      puppeteer: '^1.17.0',
    },
    scripts: {
      'test:e2e': 'jest --config=jest.e2e.config.js --runInBand',
    },
  });

  api.exitLog('Run the tests with "npm run test:e2e"', 'info')
};
