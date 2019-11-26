const navConfig = require('./navigation.config');

const siteConfig = {
  appConfig: {
    themes: {
      'Default Theme': '',
      'Clinical Low Light Theme': 'clinical-lowlight-theme',
    },
  },
  navConfig,
  includeTestEvidence: false,
  sideEffectImports: [
    './initalizeXFC.js',
  ],
};

module.exports = siteConfig;
