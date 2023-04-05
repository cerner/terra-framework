const yargs = require('yargs/yargs');
const path = require('path');
const fs = require('fs-extra');

const Logger = require('./lib/utils/Logger');

const logger = new Logger({ prefix: '[terra-cli:terra]' });

const DEPENDENCY_ALLOW_LIST = ['@cerner/package-json-lint', '@cerner/terra-functional-testing', '@cerner/terra-open-source-scripts', 'orion-full-stack-testing'];

/**
 * Does the initial set up of the CLI. This sets up things like help, version, etc.
 */
const setupCLI = () => {
  const cli = yargs();

  return cli.usage('Usage: $0 <command> [options]')
    .strictCommands()
    .demandCommand(1, 'A command is required. Pass --help to see all available commands and options.')
    .recommendCommands()
    .fail((msg, err) => {
      // certain yargs validations throw strings
      const actualError = err || new Error(msg);

      // ValidationErrors are already logged, as are package errors
      if (actualError.name !== 'ValidationError' && !actualError.pkg) {
        // the recommendCommands() message is too terse
        if (/Did you mean/.test(actualError.message)) {
          logger.error(`Unknown command "${cli.parsed.argv._[0]}". ${actualError.message}`);
        } else {
          logger.error(actualError.stack);
          if (actualError.stderr) {
            logger.error(actualError.stderr);
          }
        }
      }

      // exit non-zero so the CLI can be usefully chained
      cli.exit(actualError.code > 0 ? actualError.code : 1, actualError);
    })
    .alias('h', 'help')
    .alias('v', 'version')
    .wrap(cli.terminalWidth());
};

/**
 * Takes a directory path and finds all immediate sub directories
 * @param {string} directoryPath - the directory path for which to find sub directories
 * @returns {Array} an array of the sub directories appended to the passed in directory path
 */
const subDirectoriesOfDirectory = async (directoryPath) => {
  // Gets contents of current directory
  const currentDirectoryEnries = await fs.readdir(directoryPath, { withFileTypes: true });
  // Filters down to just the directories and then appends the directory names to the initial directory path
  return currentDirectoryEnries.filter(directoryEntry => directoryEntry.isDirectory())
    .map(directoryEntry => path.join(directoryPath, directoryEntry.name));
};

/**
 * Takes an array of paths, appends either src or lib depending on preferSrc, appends terra-cli, and then returns an array of the the resulting directory paths that exist
 * @param {Array} paths - the array of paths to act upon
 * @param {boolean} preferSrc - indicates whether or not src should be used instead of lib. This should be used in cases where the package being searched is local
 * @returns {Array} an array of paths resolved out to the terra-cli directory
 */
const terraClIDirectoriesFromPaths = async ({ paths, preferSrc }) => {
  const cliDirectories = paths.map(dependencyPath => path.join(dependencyPath, preferSrc ? 'src' : 'lib', 'terra-cli'));
  const pathExistsForDirectories = await Promise.all(cliDirectories.map((directory) => fs.pathExists(directory)));
  return cliDirectories.filter((_, index) => pathExistsForDirectories[index]);
};

/**
 * Searches for terra-cli command paths from the current directory following these rules
 *
 * 1. Dependencies in the top node_modules directory that are in the dependencies allow list
 * 2. Monorepo package directories if the current project is terra-toolkit and the directory is in the dependency allow list
 * 3. The current directory if its in the dependencies allow list
 * @returns {Array} an array of all qualifying terra-cli command paths
 */
const loadTerraCommandPaths = async () => {
  const { name } = fs.readJSONSync(path.join(process.cwd(), 'package.json'));
  // Search the top level node_modules for dependencies in the allow list
  const firstLevelDependencyPaths = DEPENDENCY_ALLOW_LIST.map(dependency => path.join(process.cwd(), 'node_modules', ...dependency.split('/')));
  // Only include mono repo packages if it's terra-toolkit and they're in the allow list and drop the @cerner since that's not included in the package directory
  const toolkitPackagePaths = (name === 'terra-toolkit' ? DEPENDENCY_ALLOW_LIST.map(dependency => dependency.replace('@cerner/', '')).map(dependency => path.join(process.cwd(), 'packages', dependency)) : []);
  // Only include the current directory if it's in the allow list
  const currentProjectPaths = (DEPENDENCY_ALLOW_LIST.includes(name) ? [process.cwd()] : []);
  const terraCLIDirectories = [
    // Prefer lib from installed dependencies
    ...(await terraClIDirectoriesFromPaths({ paths: firstLevelDependencyPaths, preferSrc: false })),
    // Prefer src from local mono repo packages and the current project
    ...(await terraClIDirectoriesFromPaths({ paths: [...toolkitPackagePaths, ...currentProjectPaths], preferSrc: true })),
  ];
  // Takes the list of terra-cli paths and finds all subdirectories. The result will be an array of arrays
  const unflattenedCommandPaths = await Promise.all(terraCLIDirectories.map((directory) => subDirectoriesOfDirectory(directory)));
  // Flatten the command paths
  return unflattenedCommandPaths.reduce((previousOutput, value) => previousOutput.concat(value), []);
};

/**
 * Sets up the yargs CLI, loads the terra command paths and adds them to the yargs cli, and then applies the passed in argv array to execute the appropriate command
 * @param {Array} argv - arguments passed in on the command line
 * @returns {Object} yargs object for chaining
 */
const terraCLI = async (argv) => {
  let cli = setupCLI();
  const commandPaths = await loadTerraCommandPaths();

  commandPaths.forEach((commandPath) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const commandConfig = require(commandPath);
    if (commandConfig) {
      cli = cli.command(commandConfig);
    }
  });

  return cli.parse(argv);
};

module.exports = terraCLI;
module.exports.Logger = Logger;
