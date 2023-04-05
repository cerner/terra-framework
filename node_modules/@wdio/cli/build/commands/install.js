"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.cmdArgs = exports.desc = exports.command = void 0;
/* eslint-disable no-console */
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const yarn_install_1 = __importDefault(require("yarn-install"));
const utils_1 = require("../utils");
const config_1 = require("./config");
const constants_1 = require("../constants");
const supportedInstallations = {
    plugin: constants_1.SUPPORTED_PACKAGES.plugin.map(({ value }) => (0, utils_1.convertPackageHashToObject)(value)),
    service: constants_1.SUPPORTED_PACKAGES.service.map(({ value }) => (0, utils_1.convertPackageHashToObject)(value)),
    reporter: constants_1.SUPPORTED_PACKAGES.reporter.map(({ value }) => (0, utils_1.convertPackageHashToObject)(value)),
    framework: constants_1.SUPPORTED_PACKAGES.framework.map(({ value }) => (0, utils_1.convertPackageHashToObject)(value))
};
exports.command = 'install <type> <name>';
exports.desc = [
    'Add a `reporter`, `service`, or `framework` to your WebdriverIO project.',
    'The command installs the package from NPM, adds it to your package.json',
    'and modifies the wdio.conf.js accordingly.'
].join(' ');
exports.cmdArgs = {
    yarn: {
        desc: 'Install packages using yarn',
        type: 'boolean',
        default: false
    },
    config: {
        desc: 'Location of your WDIO configuration',
        default: './wdio.conf.js',
    },
};
const builder = (yargs) => {
    yargs
        .options(exports.cmdArgs)
        .epilogue(constants_1.CLI_EPILOGUE)
        .help();
    for (const [type, plugins] of Object.entries(supportedInstallations)) {
        for (const plugin of plugins) {
            yargs.example(`$0 install ${type} ${plugin.short}`, `Install ${plugin.package}`);
        }
    }
    return yargs;
};
exports.builder = builder;
async function handler(argv) {
    /**
     * type = service | reporter | framework
     * name = names for the supported service or reporter
     * yarn = optional flag to install package using yarn instead of default yarn
     */
    const { type, name, yarn, config } = argv;
    /**
     * verify for supported types via `supportedInstallations` keys
     */
    if (!Object.keys(supportedInstallations).includes(type)) {
        console.log(`Type ${type} is not supported.`);
        process.exit(0);
        return;
    }
    /**
     * verify if the name of the `type` is valid
     */
    if (!supportedInstallations[type].find(pkg => pkg.short === name)) {
        console.log(`${name} is not a supported ${type}.`);
        process.exit(0);
        return;
    }
    const localConfPath = path_1.default.join(process.cwd(), config);
    if (!fs_extra_1.default.existsSync(localConfPath)) {
        try {
            const promptMessage = `Cannot install packages without a WebdriverIO configuration.
You can create one by running 'wdio config'`;
            await (0, config_1.missingConfigurationPrompt)('install', promptMessage, yarn);
        }
        catch {
            process.exit(1);
            return;
        }
    }
    const configFile = fs_extra_1.default.readFileSync(localConfPath, { encoding: 'utf-8' });
    const match = (0, utils_1.findInConfig)(configFile, type);
    if (match && match[0].includes(name)) {
        console.log(`The ${type} ${name} is already part of your configuration.`);
        process.exit(0);
        return;
    }
    const selectedPackage = supportedInstallations[type].find(({ short }) => short === name);
    const pkgsToInstall = selectedPackage ? [selectedPackage.package] : [];
    (0, utils_1.addServiceDeps)(selectedPackage ? [selectedPackage] : [], pkgsToInstall, true);
    console.log(`Installing "${selectedPackage.package}"${yarn ? ' using yarn.' : '.'}`);
    const install = (0, yarn_install_1.default)({ deps: pkgsToInstall, dev: true, respectNpm5: !yarn }); // use !yarn so the package forces npm install
    if (install.status !== 0) {
        console.error('Error installing packages', install.stderr);
        process.exit(1);
        return;
    }
    console.log(`Package "${selectedPackage.package}" installed successfully.`);
    const newConfig = (0, utils_1.replaceConfig)(configFile, type, name);
    if (!newConfig) {
        throw new Error(`Couldn't find "${type}" property in ${path_1.default.basename(localConfPath)}`);
    }
    fs_extra_1.default.writeFileSync(localConfPath, newConfig, { encoding: 'utf-8' });
    console.log('Your wdio.conf.js file has been updated.');
    process.exit(0);
}
exports.handler = handler;
/* eslint-enable no-console */
