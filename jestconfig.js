module.exports = {
  collectCoverageFrom: [
    'packages/**/src/*.js',
    'packages/**/src/*.jsx',
  ],
  globalSetup: './jestGlobalSetup.js',
  setupFiles: [
    'raf/polyfill',
    './jestsetup.js',
  ],
  testMatch: [
    '**/jest/**/(*.)(spec|test).js?(x)',
  ],
  roots: [process.cwd()],
  snapshotSerializers: [
    './node_modules/enzyme-to-json/serializer',
  ],
  moduleDirectories: [
    'aggregated-translations',
    'packages',
    'node_modules',
  ],
  moduleNameMapper: {
    '\\.(css|scss|svg)$': 'identity-obj-proxy',
  },
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': './jestBabelTransform',
  },
};
