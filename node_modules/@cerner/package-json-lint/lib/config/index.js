const { cosmiconfig } = require('cosmiconfig');
const path = require('path');
const { Logger } = require('@cerner/terra-cli');

const logger = new Logger({ prefix: '[package-json-lint:config]' });

/**
 * Loads a module with the given name relative to the given directory
 * @param {Object} options - options for loading the module
 * @param {string} options.moduleName - the name of the module to load
 * @param {string} options.relativeDirectory - the directory from which to relatively load the module
 * @returns the required module
 */
const loadFromModule = ({ moduleName, relativeDirectory }) => {
  const resolvedModule = require.resolve(moduleName, { paths: [relativeDirectory] });
  // eslint-disable-next-line import/no-dynamic-require, global-require
  return require(resolvedModule);
};

/**
 * Takes a config with an extends option and recursively extends the config. This is done in such a way that earlier configs in the chain take precedence over later configs.
 *
 * For example, if x is { extends: 'y', rules: { override: 'x' } }, y is { extends: 'z', rules: { override: 'y' } },
 * and z is { override: 'z' }, then extending from x will result in { override: 'x' }.
 * @param {Object} options - the options to use when extending out the config
 * @param {Object} options.config - the config to recursively apply extends to
 * @param {string} options.relativeDirectory - the directory from which to relatively load any modules
 * @returns the extended config
 */
const applyExtends = ({ config, relativeDirectory }) => {
  const { extends: extendsAttribute, ...configWithoutExtends } = config;
  const arrayOfExtends = !Array.isArray(extendsAttribute) ? [extendsAttribute] : extendsAttribute;

  return arrayOfExtends.reduceRight((previousConfig, extendsModuleName) => {
    let extendedConfig = loadFromModule({ moduleName: extendsModuleName, relativeDirectory });
    if (extendedConfig.extends) {
      extendedConfig = applyExtends({ config: extendedConfig, relativeDirectory });
    }

    const mergedConfig = { ...extendedConfig, ...previousConfig };
    const mergedRules = { ...extendedConfig.rules, ...previousConfig.rules };
    mergedConfig.rules = mergedRules;

    return mergedConfig;
  }, configWithoutExtends);
};

/**
 * Gets the config for a given package json path. This will look for package-json-lint configs in the package.json, .package-json-lintrc.json, etc. and recursively apply any extensions.
 * See https://github.com/davidtheclark/cosmiconfig for specifics on how the config is looked for
 * @param {Object} options - the options to use when getting the config
 * @param {string} options.packageJsonPath - the path to use when searching for the config
 * @returns the config for the given package json path
 */
const getConfigForFile = async ({ packageJsonPath }) => {
  const config = await cosmiconfig('package-json-lint').search(path.dirname(packageJsonPath));
  if (!config) {
    logger.warn(`No configuration specified for ${packageJsonPath}`);
    return { };
  }
  const { config: configForFile, filepath } = config;
  if (configForFile.extends) {
    return applyExtends({ config: configForFile, relativeDirectory: path.dirname(filepath) });
  }
  return configForFile;
};

/**
 * Gets the config for the rule based on the passed in ruleInformation. Currently, this just assumes the ruleInformation is the severity. In the future, this will try
 * and follow the patterns set by eslint for overriding defaults
 * @param {Object} options - the options from which to get the config
 * @param {Object} ruleInformation - currently this is a string representing the severity of the rule ('off', 'warn', 'error'). In the future this could be an array with additional options for a given rule
 * @returns the config for the given rule
 */
const getRuleConfig = ({ ruleInformation }) => (
  { severity: ruleInformation }
);

module.exports = {
  getConfigForFile,
  getRuleConfig,
};
