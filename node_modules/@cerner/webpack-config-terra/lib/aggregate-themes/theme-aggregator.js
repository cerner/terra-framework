const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const logging = require('webpack/lib/logging/runtime');

const CONFIG = 'terra-theme.config.js';
const DISCLAIMER = fs.readFileSync(path.resolve(__dirname, 'disclaimer.txt'), 'utf8');
const NODE_MODULES = 'node_modules/';
const OUTPUT = 'aggregated-themes.js';
const OUTPUT_DIR = 'generated-themes';
const OUTPUT_PATH = path.resolve(process.cwd(), OUTPUT_DIR);
const ROOT = 'root';
const SCOPED = 'scoped';
const ROOT_THEME = `${ROOT}-theme.scss`;
const SCOPED_THEME = `${SCOPED}-theme.scss`;
const LOG_CONTEXT = 'webpack-config-terra:theme-aggregator';

const Logger = logging.getLogger(LOG_CONTEXT);

/**
 * Aggregates and generates theme assets.
 * Aggregates the above assets into a single file.
 *
 * By default the theme will recursively search all dependencies.
 */
class ThemeAggregator {
  /**
   * Aggregates theme assets.
   * @param {string} theme - The theme to override the default theme. Used for visual regression testing.
   * @param {object} object.config - Config to override the terra-theme.config.js config.
   * @param {object} object.aggregateDefaultThemeAsScopedTheme - Bool indicating if aggregate themes should generate the default theme as a root theme or a scoped theme.
   * @returns {string|null} - The output path of the aggregated theme file. Null if not generated.
   */
  static aggregate(theme, { config, aggregateDefaultThemeAsScopedTheme } = { config: undefined, aggregateDefaultThemeAsScopedTheme: false }) {
    let themeConfig = {};
    if (config) {
      themeConfig = config;
    } else {
      const defaultConfig = path.resolve(process.cwd(), CONFIG);
      if (fs.existsSync(defaultConfig)) {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        themeConfig = require(defaultConfig);
      }
    }

    const themeAssets = ThemeAggregator.aggregateThemes({
      ...themeConfig,
      ...theme && { theme },
      aggregateDefaultThemeAsScopedTheme,
    });

    if (themeAssets) {
      return ThemeAggregator.writeJsFile(themeAssets);
    }

    return null;
  }

  /**
   * Aggregates theme assets into a js file.
   * @param {Object} options - The aggregation options.
   * @returns {array} - An array of aggregated theme files
   */
  static aggregateThemes(options) {
    if (!ThemeAggregator.validate(options)) {
      return null;
    }

    // This creates a generated-themes directory to house theme assets.
    fs.ensureDir(OUTPUT_DIR).catch(err => {
      Logger.warn(err);
    });

    const {
      theme: defaultThemeToAggregate,
      aggregateDefaultThemeAsScopedTheme,
    } = options;

    const scopedThemesToAggregate = [
      ...(options && options.scoped) ? options.scoped : [],
    ];

    // The default theme is created by the post css theme plugin.
    if (aggregateDefaultThemeAsScopedTheme && !scopedThemesToAggregate.includes(defaultThemeToAggregate)) {
      scopedThemesToAggregate.push(defaultThemeToAggregate);
    }

    const themeAssets = [];

    if (!aggregateDefaultThemeAsScopedTheme && defaultThemeToAggregate) {
      const defaultThemeAsset = ThemeAggregator.triggerAggregationAndGeneration(defaultThemeToAggregate, options, true);
      if (defaultThemeAsset) {
        themeAssets.push(...defaultThemeAsset);
      }
    }

    scopedThemesToAggregate.forEach((theme) => {
      const scopedThemeAssets = ThemeAggregator.triggerAggregationAndGeneration(theme, options, false);
      if (scopedThemeAssets) {
        themeAssets.push(...scopedThemeAssets);
      }
    });

    if (!themeAssets.length) {
      return null;
    }

    return themeAssets;
  }

  /**
   * Triggers aggregation and generation for a given theme.
   * @param {string} themeName - The theme to aggregate.
   * @param {Object} options - The aggregation options.
   * @param {boolean} isRoot - Flag that signifies if the theme asset is a root theme.
   * @returns {array} - An array of theme files.
   */
  static triggerAggregationAndGeneration(themeName, options = {}, isRoot) {
    if (!themeName) {
      return null;
    }

    Logger.info(`Aggregating ${themeName} files...`);

    const aggregatedAssets = ThemeAggregator.aggregateTheme(themeName, isRoot, options);
    const generatedAsset = ThemeAggregator.generateTheme(themeName, isRoot, options);

    if (generatedAsset) {
      // Generated root or scope files should take precedence over existing root or scope files.
      // Therefore, take advantage of CSS import precedence by adding the generated asset last.
      aggregatedAssets.push(generatedAsset);
    }

    if (!aggregatedAssets.length) {
      Logger.warn(`No theme files found for ${themeName}.`);
      return null;
    }

    return aggregatedAssets;
  }

  /**
   * Aggregates the theme by root.scss or scoped.scss file
   * @param {string} themeName - The theme to aggregate.
   * @param {Object} isRoot - Flag that signifies if the theme asset is a root theme file.
   * @param {Object} options - The aggregate options.
   * @returns {array} - An array of aggregated theme files.
   */
  static aggregateTheme(themeName, isRoot, options) {
    const file = isRoot ? ROOT_THEME : SCOPED_THEME;
    const assets = ThemeAggregator.find(`**/themes/${themeName}/${file}`, options);

    // Add the dependency import if it exists.
    assets.unshift(...ThemeAggregator.find(`${NODE_MODULES}${themeName}/**/${file}`, options));
    // Resolve aggregated theme paths.
    return assets.map(asset => ThemeAggregator.resolve(asset));
  }

  /**
   * Writes a scss theme file based on generation filename constraints.
   * @TODO Default to theme generation on next MVB - https://github.com/cerner/terra-toolkit/issues/325
   * @param {string} themeName - The theme to aggregate.
   * @param {Object} isRoot - Flag that signifies if the theme asset is a root theme file.
   * @param {Object} options - The aggregate options.
   * @param {string} outputPath - Path to write the scss file to. Used for testing purposes - overrides the default generated themes path.
   * @returns {string} - A string containing the relative path to the generacted scss file.
   */
  static generateTheme(themeName, isRoot, options, outputPath) {
    const assets = ThemeAggregator.findThemeVariableFilesForGeneration(themeName, options);
    if (!assets) {
      return null;
    }

    const scopeSelector = isRoot ? `:${ROOT}` : `.${themeName}`;
    const intro = `${DISCLAIMER}${scopeSelector}`;
    let file = assets.reduce((acc, s) => `${acc}  @import '../${s}';\n`, '');
    file = `${intro} {\n${file}}\n`;

    const prefix = isRoot ? ROOT : SCOPED;
    const fileName = `${prefix}-${themeName}.scss`;
    const filePath = path.resolve(outputPath || OUTPUT_PATH, fileName);
    fs.writeFileSync(filePath, file);
    Logger.info(`Successfully generated ${fileName}.`);

    return `./${path.relative(outputPath || OUTPUT_PATH, filePath)}`;
  }

  /**
   * Finds files and directories matching a pattern.
   * @param {string} pattern - A regex pattern.
   * @param {Object} options - The aggregation options.
   * @returns {string[]} - An array of matching files and directories.
   */
  static find(pattern, options) {
    const { exclude = [] } = options;

    return glob.sync(pattern, { ignore: exclude });
  }

  /**
   * Resolves a file path.
   * Dependency files will resolve to the node_modules directory.
   * Local files will resolve relative to the expected output directory.
   * @param {string} filePath - A file path.
   * @returns {string} - Resolved file path relative to the home directory or node module path.
   */
  static resolve(filePath) {
    // Constructs the relative path.
    const relativePath = path.relative(OUTPUT_PATH, path.resolve(OUTPUT_PATH, filePath));
    if (filePath.indexOf(NODE_MODULES) > -1) {
      const dependencyPath = filePath.substring(filePath.indexOf(NODE_MODULES) + NODE_MODULES.length);
      return dependencyPath;
    }

    return `../${relativePath}`;
  }

  /**
   * Validates the aggregated options.
   * @param {Object} options - The aggregated options.
   * @returns {boolean} - Whether the theme config has valid options.
   */
  static validate(options) {
    const { theme, scoped } = options;

    if (!theme && !scoped) {
      Logger.warn('No theme provided.');
      return false;
    }

    return true;
  }

  /**
   * Searches for theme files located within the following directory format: themes->theme-name->theme-name.scss.
   * @param {string} themeName - The theme to aggregate.
   * @param {Object} options - The aggregation options.
   * @returns {array} - An array of ${themeName} files.
   */
  static findThemeVariableFilesForGeneration(themeName, options = {}) {
    const assets = ThemeAggregator.find(`**/themes/${themeName}/**/${themeName}.scss`, options);
    // Add the dependency import if it exists.
    assets.unshift(...ThemeAggregator.find(`${NODE_MODULES}${themeName}/**/${themeName}.scss`, options));

    if (!assets.length) {
      return null;
    }

    return assets;
  }

  /**
   * Writes a js file containing theme assets.
   * @param {Object[]} imports - An array of files to import.
   * @returns {string} - The filepath of the file.
   */
  static writeJsFile(imports) {
    if (!imports.length) {
      Logger.warn(`No themes to import. Skip generating ${OUTPUT}.`);
      return null;
    }

    const file = imports.reduce((acc, s) => `${acc}import '${s}';\n`, '');
    const filePath = `${path.resolve(OUTPUT_PATH, OUTPUT)}`;
    fs.writeFileSync(filePath, `${DISCLAIMER}${file}`);

    Logger.info(`Successfully generated ${OUTPUT}.`);
    return filePath;
  }
}

module.exports = ThemeAggregator;
