module.exports = (api, options) => {
  api.render('./template/default', options);

  api.extendPackage({
    devDependencies: {
      jest: '^24.8.0',
      'jest-puppeteer': '^4.2.0',
      puppeteer: '^1.17.0',
    },
    scripts: {
      'test:e2e': 'jest --config=jest.e2e.config.js --runInBand',
    },
  });
};
