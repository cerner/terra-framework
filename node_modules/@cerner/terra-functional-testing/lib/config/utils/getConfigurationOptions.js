const fs = require('fs');
const path = require('path');
const getCapabilities = require('./getCapabilities');
const getIpAddress = require('./getIpAddress');
const getDefaultThemeName = require('./getDefaultThemeName');
const defaultWebpackPath = path.resolve(process.cwd(), 'webpack.config.js');
const getConfigurationOptions = options => {
  const {
    assetServerPort,
    browsers,
    buildBranch,
    buildType,
    buildUrl,
    disableSeleniumService,
    externalHost,
    externalPort,
    formFactor,
    gitApiUrl,
    gitToken,
    gridUrl,
    ignoreScreenshotMismatch,
    issueNumber,
    keepAliveSeleniumDockerService,
    locale,
    seleniumServicePort,
    seleniumServiceUrl,
    site,
    spec,
    suite,
    theme,
    updateScreenshots,
    useRemoteReferenceScreenshots,
    useSeleniumStandaloneService
  } = options;
  return {
    baseUrl: `http://${externalHost || getIpAddress()}:${externalPort || 8080}`,
    capabilities: getCapabilities(browsers, !!gridUrl),
    hostname: seleniumServiceUrl || gridUrl || (useSeleniumStandaloneService ? 'standalone-chrome' : 'localhost'),
    port: seleniumServicePort || (gridUrl ? 80 : 4444),
    launcherOptions: {
      buildBranch,
      buildType,
      buildUrl,
      disableSeleniumService: disableSeleniumService || useSeleniumStandaloneService || !!gridUrl,
      formFactor,
      gitApiUrl,
      gitToken,
      gridUrl,
      ignoreScreenshotMismatch,
      issueNumber,
      keepAliveSeleniumDockerService,
      locale,
      overrideTheme: theme,
      port: assetServerPort,
      site,
      ...(theme ? {
        theme
      } : {
        theme: getDefaultThemeName()
      }),
      updateScreenshots,
      useRemoteReferenceScreenshots,
      ...(fs.existsSync(defaultWebpackPath) && {
        webpackConfig: defaultWebpackPath
      })
    },
    ...(spec && {
      spec
    }),
    ...(suite && {
      suite
    })
  };
};
module.exports = getConfigurationOptions;