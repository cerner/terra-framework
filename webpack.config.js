const path = require('path');
const { merge } = require('webpack-merge');
const {
  TerraDevSite,
} = require('@cerner/terra-dev-site');

const WebpackConfigTerra = require('@cerner/webpack-config-terra');

const coreConfig = (env = {}) => ({
  plugins: [
    new TerraDevSite({
      defaultLocale: env.defaultLocale,
      primaryNavigationItems: [{
        path: '/home',
        label: 'Home',
        contentExtension: 'home',
        additionalContent: [
          {
            label: 'Home',
            filePath: path.resolve(process.cwd(), 'README.md'),
          },
        ],
      }, {
        path: '/application',
        label: 'Application',
        contentExtension: 'app',
      }, {
        path: '/components',
        label: 'Components',
        contentExtension: 'doc',
      }, {
        path: '/dev_tools',
        label: 'Developer Tools',
        contentExtension: 'tool',
      }, {
        path: '/guides',
        label: 'Guides',
        contentExtension: 'guide',
      }, {
        path: '/tests',
        label: 'Tests',
        contentExtension: 'test',
      }, {
        path: '/provider',
        label: 'Provider',
        contentExtension: 'provider',
      }],
      sideEffectImportFilePaths: [
        path.resolve(process.cwd(), 'initalizeXFC.js'),
      ],
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), coreConfig())
);

module.exports = mergedConfig;
