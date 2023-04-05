const fs = require('fs');
const path = require('path');
const cleanResults = require('./clean-results');
const getOutputDir = require('./get-output-dir');

/**
 * Retrieves spec result files from a directory.
 * @param {string} directory - The directory of the spec result files.
 * @returns {array} - An array of spec results.
 */
const getSpecResults = directory => {
  const specResults = fs.readdirSync(directory).filter(file => file.indexOf('wdio-spec-results') > -1);
  return specResults.map(file => JSON.parse(fs.readFileSync(path.resolve(directory, file))));
};

/**
 * Creates a unique filename for a test run based on the provided options.
 * @param {Object} options - Test run options.
 * @param {Object} options.browser - The browser name.
 * @param {Object} options.formFactor - The test run form factor.
 * @param {Object} options.locale - The test run locale.
 * @param {Object} options.packageName - The package name.
 * @param {Object} options.theme - The test run theme.
 */
const getResultsFileName = options => {
  const {
    browser,
    formFactor,
    locale,
    packageName,
    theme
  } = options;
  const keys = [locale, theme, formFactor, browser, packageName.split(path.sep).pop()].filter(key => !!key);
  return `results-${keys.join('-')}.json`;
};

/**
 * Merges spec results into a single object organized by browser and package name.
 * @param {array} results - An array of spec results.
 * @returns {Object} - A result object with all spec files merged.
 */
const mergeSpecResults = results => {
  const browsers = {};
  results.forEach(result => {
    const {
      capabilities,
      packageName,
      ...spec
    } = result;
    const {
      browserName
    } = capabilities;
    if (!browsers[browserName]) {
      browsers[browserName] = {
        capabilities,
        packages: {}
      };
    }
    if (!browsers[browserName].packages[packageName]) {
      browsers[browserName].packages[packageName] = {
        specs: []
      };
    }
    browsers[browserName].packages[packageName].specs.push(spec);
  });
  return browsers;
};

/**
 * Writes the reporter spec results to file.
 * @param {string} outputDir - The output directory to write results.
 * @param {Object} results - A result object with all spec files merged.
 * @param {Object} options - Test run options. These are used to uniquely identify the output file. (locale, formFactor, theme)
 */
const writeResultsToFile = (outputDir, results, options) => {
  const {
    theme,
    locale,
    formFactor
  } = options;
  Object.keys(results).forEach(browser => {
    const {
      capabilities,
      packages
    } = results[browser];
    Object.keys(packages).forEach(packageName => {
      const result = {
        packageName,
        theme,
        locale,
        formFactor,
        capabilities,
        ...packages[packageName]
      };
      const fileName = path.join(outputDir, getResultsFileName({
        ...options,
        browser,
        packageName
      }));
      fs.writeFileSync(fileName, JSON.stringify(result, null, 2));
    });
  });
};

/**
 * Merges the spec reporter results into a single file (per browser).
 * @param {Object} options - Additional option data to include in the output file.
 */
const mergeResults = (options = {}) => {
  const outputDir = getOutputDir();
  if (!fs.existsSync(outputDir)) {
    return;
  }
  const specResults = getSpecResults(outputDir);
  const mergedResults = mergeSpecResults(specResults);
  writeResultsToFile(outputDir, mergedResults, options);

  // Delete the individual spec result files.
  cleanResults();
};
module.exports = mergeResults;