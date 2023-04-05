const startCase = require('lodash.startcase');
const fs = require('fs');
const path = require('path');

const npmPackage = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')));

const applyDefaults = ({
  primaryNavigationItems = [{
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
  }],
  additionalSearchDirectories = [],
  sideEffectImportFilePaths = [],
  polyFillSideEffectImportFilePath = '@cerner/terra-polyfill',
  titleConfig = {
    title: startCase(npmPackage.name.split('/').pop()),
  },
  defaultLocale,
  defaultTheme,
  defaultDirection,
  faviconFilePath = path.join(__dirname, '..', 'terra-favicon', '32px', 'favicon.ico'),
  extensionItems = [],
  headHtml = [],
  pathPrefix,
  sourceFolder = 'src',
  distributionFolder = 'lib',
  enableDebugLogging = false,
  additionalConfig = {},
  excludeChunks = [],
  contentDirectory = 'terra-dev-site',
} = {}) => {
  // Make the polyfill path the first side effect if present.
  const sideEffects = sideEffectImportFilePaths;
  if (polyFillSideEffectImportFilePath !== 'none') {
    sideEffects.unshift(polyFillSideEffectImportFilePath);
  }
  return ({
    primaryNavigationItems,
    additionalSearchDirectories,
    sideEffectImportFilePaths: sideEffects,
    titleConfig,
    defaultLocale,
    defaultTheme,
    defaultDirection,
    faviconFilePath,
    extensionItems,
    headHtml,
    pathPrefix,
    sourceFolder,
    distributionFolder,
    enableDebugLogging,
    namespace: npmPackage.name,
    additionalConfig,
    excludeChunks,
    contentDirectory,
  });
};

module.exports = applyDefaults;
