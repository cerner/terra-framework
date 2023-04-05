const path = require('path');

module.exports = {
  // Set a custom testEnvironment to allow us to compartmentalize setup.
  testEnvironment: '@cerner/jest-config-terra/lib/JestEnvironmentJsdomTerra.js',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'tests/jest/reports/coverage',
  collectCoverageFrom: [
    '**/src/**/*.js(x)?',
    '**/reporters/**/*.js',
  ],
  coveragePathIgnorePatterns: [
    '/src/terra-dev-site',
  ],
  coverageReporters: [
    'html',
    'text',
    'lcov',
    'cobertura',
    'text-summary',
  ],
  testMatch: [
    '**/jest/**/(*.)(spec|test).js?(x)',
  ],
  moduleDirectories: [
    'packages',
    'node_modules',
  ],
  moduleNameMapper: {
    '\\.(css|scss|svg|png)$': 'identity-obj-proxy',
    // These replace the various translations imports with mocked versions.
    '^de\\.js$': '@cerner/jest-config-terra/lib/translationsMock.js',
    '^en(-AU|-CA|-GB|-US)?\\.js$': '@cerner/jest-config-terra/lib/translationsMock.js',
    '^es(-ES|-US)?\\.js$': '@cerner/jest-config-terra/lib/translationsMock.js',
    '^fr(-FR)?\\.js$': '@cerner/jest-config-terra/lib/translationsMock.js',
    '^nl(-BE)?\\.js$': '@cerner/jest-config-terra/lib/translationsMock.js',
    '^pt(-BR)?\\.js$': '@cerner/jest-config-terra/lib/translationsMock.js',
    '^sv(-SE)?\\.js$': '@cerner/jest-config-terra/lib/translationsMock.js',
  },
  transform: {
    '^.+\\.(js|jsx)$': '@cerner/jest-config-terra/lib/jestBabelTransform',
  },
  reporters: [
    'default',
    path.join(__dirname, 'lib', 'reporters', 'verbose-reporter', 'TerraVerboseReporter'),
  ],
};
