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

  api.onCreateComplete(() => {
    const { EOL } = require('os');
    const fs = require('fs');

    // Do we have babel.config.js?
    const babelConfig = api.resolve('babel.config.js');
    if (!fs.existsSync(babelConfig)) return;

    // read the entire file
    const contentMain = fs.readFileSync(babelConfig, { encoding: 'utf-8' });
    const lines = contentMain.split(/\r?\n/g);

    // update the last line with extra config
    const lastLineIndex = lines.map(l => l.trim()).lastIndexOf('}');
    lines[lastLineIndex] =
      `  ,env: {${EOL}` +
      `    test: {${EOL}` +
      `      plugins: ['transform-es2015-modules-commonjs'],${EOL}` +
      `      sourceType: 'unambiguous',${EOL}` +
      `    }${EOL}` +
      `  }${EOL}` +
      `}${EOL}`

    // Write file back
    fs.writeFileSync(babelConfig, lines.join(EOL), { encoding: 'utf-8' })
  })
};
