const lodashTemplate = require('lodash.template');
const { getOptions } = require('loader-utils');

const generateNavigationConfig = require('../loaderUtils/generateNavigationConfig');

/**
  * Generate the entry point for the particular site plugin.
  * Don't use an arrow function or you wont have access to this.
  * @param {string} template contents of the file that triggered the loader.
  */
const loader = async function loader(template) {
  const callback = this.async();

  const imports = {};
  let index = 0;

  const addImport = (path) => {
    let identifier = imports[path];
    if (identifier) {
      return identifier;
    }
    identifier = `importName${index}`;
    index += 1;
    imports[path] = identifier;
    return identifier;
  };

  const {
    entryPath,
    siteConfig,
    basename,
    resolveExtensions,
    sites,
    contentDirectory,
    isLernaMonoRepo,
    dataCallback,
  } = getOptions(this).entryLoaderData[this.resourceQuery];

  const extensionItems = (siteConfig.extensionItems || []).map((ext) => ({
    key: ext.key,
    text: ext.text,
    icon: addImport(ext.iconPath),
    modal: addImport(ext.modalFilePath),
  }));

  const {
    contentImports,
    navigationConfig,
    routesMap,
    pageConfig,
  } = generateNavigationConfig({
    siteConfig,
    resolveExtensions,
    mode: this.mode,
    contentDirectory,
    isLernaMonoRepo,
    addContextDependency: this.addContextDependency,
    // getLogger is undefined in the loader runner for tests, but never in acutal usage.
    logger: this.getLogger ? this.getLogger('terra-dev-site loader') : undefined,
  });

  if (dataCallback) {
    dataCallback({
      relativeUrls: [
        ...Object.keys(pageConfig).map((url) => `${basename}${url}`),
        ...Object.keys(routesMap).map((url) => `${basename}${url}`),
      ],
    });
  }

  return callback(null, lodashTemplate(template)({
    entryPath,
    title: siteConfig.titleConfig.title,
    headline: siteConfig.titleConfig.headline,
    subline: siteConfig.titleConfig.subline,
    defaultTheme: siteConfig.defaultTheme,
    defaultLocale: siteConfig.defaultLocale,
    defaultDirection: siteConfig.defaultDirection,
    basename,
    contentImports,
    navigationConfig: JSON.stringify(navigationConfig),
    routesMap: JSON.stringify(routesMap),
    pageConfig: JSON.stringify(pageConfig),
    extensionItems,
    imports,
    sites: JSON.stringify(sites),
    sideEffectImportFilePaths: siteConfig.sideEffectImportFilePaths,
    enableDebugLogging: siteConfig.enableDebugLogging,
    additionalConfig: JSON.stringify(siteConfig.additionalConfig),
  }));
};

module.exports = loader;
