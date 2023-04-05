"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingConfigurationPrompt = exports.handler = exports.builder = exports.cmdArgs = exports.desc = exports.command = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const util_1 = __importDefault(require("util"));
const inquirer_1 = __importDefault(require("inquirer"));
const yarn_install_1 = __importDefault(require("yarn-install"));
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const pkg = require('../../package.json');
exports.command = 'config';
exports.desc = 'Initialize WebdriverIO and setup configuration in your current project.';
exports.cmdArgs = {
    yarn: {
        type: 'boolean',
        desc: 'Install packages via yarn package manager.',
        default: (0, utils_1.hasFile)('yarn.lock')
    },
    yes: {
        alias: 'y',
        desc: 'will fill in all config defaults without prompting',
        type: 'boolean',
        default: false
    }
};
const builder = (yargs) => {
    return yargs
        .options(exports.cmdArgs)
        .epilogue(constants_1.CLI_EPILOGUE)
        .help();
};
exports.builder = builder;
const runConfig = async function (useYarn, yes, exit = false) {
    console.log(constants_1.CONFIG_HELPER_INTRO);
    const answers = await (0, utils_1.getAnswers)(yes);
    const frameworkPackage = (0, utils_1.convertPackageHashToObject)(answers.framework);
    const runnerPackage = (0, utils_1.convertPackageHashToObject)(answers.runner || constants_1.SUPPORTED_PACKAGES.runner[0].value);
    const servicePackages = answers.services.map((service) => (0, utils_1.convertPackageHashToObject)(service));
    const pluginPackages = answers.plugins.map((plugin) => (0, utils_1.convertPackageHashToObject)(plugin));
    const reporterPackages = answers.reporters.map((reporter) => (0, utils_1.convertPackageHashToObject)(reporter));
    let packagesToInstall = [
        runnerPackage.package,
        frameworkPackage.package,
        ...reporterPackages.map(reporter => reporter.package),
        ...pluginPackages.map(plugin => plugin.package),
        ...servicePackages.map(service => service.package)
    ];
    /**
     * find relative paths between tests and pages
     */
    const parsedPaths = (0, utils_1.getPathForFileGeneration)(answers);
    const parsedAnswers = {
        ...answers,
        runner: runnerPackage.short,
        framework: frameworkPackage.short,
        reporters: reporterPackages.map(({ short }) => short),
        plugins: pluginPackages.map(({ short }) => short),
        services: servicePackages.map(({ short }) => short),
        packagesToInstall,
        isUsingTypeScript: answers.isUsingCompiler === constants_1.COMPILER_OPTIONS.ts,
        isUsingBabel: answers.isUsingCompiler === constants_1.COMPILER_OPTIONS.babel,
        isSync: false,
        _async: 'async ',
        _await: 'await ',
        destSpecRootPath: parsedPaths.destSpecRootPath,
        destPageObjectRootPath: parsedPaths.destPageObjectRootPath,
        relativePath: parsedPaths.relativePath,
        tsConfigFilePath: path_1.default.join(process.cwd(), 'test', 'tsconfig.json')
    };
    /**
     * add ts-node if TypeScript is desired but not installed
     */
    if (parsedAnswers.isUsingTypeScript) {
        if (!(0, utils_1.hasPackage)('ts-node')) {
            packagesToInstall.push('ts-node', 'typescript');
        }
        const config = {
            compilerOptions: {
                moduleResolution: 'node',
                types: [
                    'node',
                    'webdriverio/async',
                    frameworkPackage.package,
                    'expect-webdriverio'
                ],
                target: 'es2019',
            }
        };
        fs_extra_1.default.ensureDirSync(path_1.default.join(process.cwd(), 'test'));
        await fs_extra_1.default.promises.writeFile(parsedAnswers.tsConfigFilePath, JSON.stringify(config, null, 4));
    }
    /**
     * add @babel/register package if not installed
     */
    if (parsedAnswers.isUsingBabel) {
        if (!(0, utils_1.hasPackage)('@babel/register')) {
            packagesToInstall.push('@babel/register');
        }
        /**
         * setup Babel if no config file exists
         */
        if (!(0, utils_1.hasFile)('babel.config.js')) {
            if (!(0, utils_1.hasPackage)('@babel/core')) {
                packagesToInstall.push('@babel/core');
            }
            if (!(0, utils_1.hasPackage)('@babel/preset-env')) {
                packagesToInstall.push('@babel/preset-env');
            }
            await fs_extra_1.default.promises.writeFile(path_1.default.join(process.cwd(), 'babel.config.js'), `module.exports = ${JSON.stringify({
                presets: [
                    ['@babel/preset-env', {
                            targets: {
                                node: '14'
                            }
                        }]
                ]
            }, null, 4)}`);
        }
    }
    /**
     * add packages that are required by services
     */
    (0, utils_1.addServiceDeps)(servicePackages, packagesToInstall);
    /**
     * ensure wdio packages have the same dist tag as cli
     */
    if (pkg._requested && pkg._requested.fetchSpec) {
        const { fetchSpec } = pkg._requested;
        packagesToInstall = packagesToInstall.map((p) => (p.startsWith('@wdio') || ['devtools', 'webdriver', 'webdriverio'].includes(p)) &&
            (fetchSpec.match(/(v)?\d+\.\d+\.\d+/) === null)
            ? `${p}@${fetchSpec}`
            : p);
    }
    /**
     * run npm install only if required by the user
     */
    if (parsedAnswers.npmInstall) {
        console.log('\nInstalling wdio packages:\n-', packagesToInstall.join('\n- '));
        const result = (0, yarn_install_1.default)({ deps: packagesToInstall, dev: true, respectNpm5: !useYarn });
        if (result.status !== 0) {
            const customError = 'An unknown error happened! Please retry ' +
                `installing dependencies via "${useYarn ? 'yarn add --dev' : 'npm i --save-dev'} ` +
                `${packagesToInstall.join(' ')}"\n\nError: ${result.stderr || 'unknown'}`;
            console.log(customError);
            /**
             * don't exit if running unit tests
             */
            if (exit /* istanbul ignore next */ && !process.env.JEST_WORKER_ID) {
                /* istanbul ignore next */
                process.exit(1);
            }
            return { success: false };
        }
        console.log('\nPackages installed successfully, creating configuration file...');
    }
    else {
        const installationCommand = `${useYarn ? 'yarn add --dev' : 'npm i --save-dev'} ${packagesToInstall.join(' ')}`;
        console.log(util_1.default.format(constants_1.DEPENDENCIES_INSTALLATION_MESSAGE, installationCommand));
    }
    try {
        await (0, utils_1.renderConfigurationFile)(parsedAnswers);
        if (answers.generateTestFiles) {
            console.log('\nConfig file installed successfully, creating test files...');
            await (0, utils_1.generateTestFiles)(parsedAnswers);
        }
    }
    catch (err) {
        throw new Error(`Couldn't write config file: ${err.stack}`);
    }
    /**
     * print TypeScript configuration message
     */
    if (answers.isUsingCompiler === constants_1.COMPILER_OPTIONS.ts) {
        const tsPkgs = `"${[
            'webdriverio/async',
            frameworkPackage.package,
            'expect-webdriverio',
            ...servicePackages
                .map(service => service.package)
                /**
                 * given that we know that all "offical" services have
                 * typescript support we only include them
                 */
                .filter(service => service.startsWith('@wdio'))
        ].join('", "')}"`;
        console.log(util_1.default.format(constants_1.TS_COMPILER_INSTRUCTIONS, tsPkgs));
    }
    console.log(util_1.default.format(constants_1.CONFIG_HELPER_SUCCESS_MESSAGE, parsedAnswers.isUsingTypeScript ? 'test/' : '', parsedAnswers.isUsingTypeScript ? 'ts' : 'js'));
    /**
     * don't exit if running unit tests
     */
    if (exit /* istanbul ignore next */ && !process.env.JEST_WORKER_ID) {
        /* istanbul ignore next */
        process.exit(0);
    }
    return {
        success: true,
        parsedAnswers,
        installedPackages: packagesToInstall.map((pkg) => pkg.split('--')[0])
    };
};
function handler(argv) {
    return runConfig(argv.yarn, argv.yes);
}
exports.handler = handler;
/**
 * Helper utility used in `run` and `install` command to create config if none exist
 * @param {string}   command        to be executed by user
 * @param {string}   message        to show when no config is suppose to be created
 * @param {boolean}  useYarn        parameter set to true if yarn is used
 * @param {Function} runConfigCmd   runConfig method to be replaceable for unit testing
 */
async function missingConfigurationPrompt(command, message, useYarn = false, runConfigCmd = runConfig) {
    const configMessage = command === 'run'
        ? `Error: Could not execute "run" due to missing configuration, file "${message}" not found! Would you like to create one?`
        : `Error: Could not execute "${command}" due to missing configuration. Would you like to create one?`;
    const { config } = await inquirer_1.default.prompt([
        {
            type: 'confirm',
            name: 'config',
            message: configMessage,
            default: false
        }
    ]);
    /**
     * don't exit if running unit tests
     */
    if (!config && !process.env.JEST_WORKER_ID) {
        /* istanbul ignore next */
        console.log(command === 'run'
            ? `No WebdriverIO configuration found in "${process.cwd()}"`
            : message);
        /* istanbul ignore next */
        return process.exit(0);
    }
    return await runConfigCmd(useYarn, false, true);
}
exports.missingConfigurationPrompt = missingConfigurationPrompt;
