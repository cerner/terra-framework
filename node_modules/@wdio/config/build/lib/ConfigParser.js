"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge_1 = __importDefault(require("deepmerge"));
const logger_1 = __importDefault(require("@wdio/logger"));
const RequireLibrary_1 = __importDefault(require("./RequireLibrary"));
const FileSystemPathService_1 = __importDefault(require("./FileSystemPathService"));
const utils_1 = require("../utils");
const constants_1 = require("../constants");
const constants_2 = require("../constants");
const log = (0, logger_1.default)('@wdio/config:ConfigParser');
const MERGE_OPTIONS = { clone: false };
class ConfigParser {
    constructor(_pathService = new FileSystemPathService_1.default(), _moduleRequireService = new RequireLibrary_1.default()) {
        this._pathService = _pathService;
        this._moduleRequireService = _moduleRequireService;
        this._config = (0, constants_2.DEFAULT_CONFIGS)();
        this._capabilities = [];
    }
    autoCompile() {
        /**
         * on launcher compile files if Babel or TypeScript are installed using our defaults
         */
        if (this._config.autoCompileOpts && !(0, utils_1.loadAutoCompilers)(this._config.autoCompileOpts, this._moduleRequireService)) {
            log.debug('No compiler found, continue without compiling files');
        }
    }
    /**
     * merges config file with default values
     * @param {String} filename path of file relative to current directory
     */
    addConfigFile(filename) {
        if (typeof filename !== 'string') {
            throw new Error('addConfigFile requires filepath');
        }
        const filePath = this._pathService.ensureAbsolutePath(filename);
        try {
            const config = this._pathService.loadFile(filePath).config;
            if (typeof config !== 'object') {
                throw new Error('addConfigEntry requires config key');
            }
            /**
             * clone the original config
             */
            const fileConfig = (0, deepmerge_1.default)(config, {}, MERGE_OPTIONS);
            /**
             * merge capabilities
             */
            const defaultTo = Array.isArray(this._capabilities) ? [] : {};
            this._capabilities = (0, deepmerge_1.default)(this._capabilities, fileConfig.capabilities || defaultTo, MERGE_OPTIONS);
            delete fileConfig.capabilities;
            /**
             * Add hooks from the file config and remove them from file config object to avoid
             * complications when using merge function
             */
            this.addService(fileConfig);
            for (let hookName of constants_1.SUPPORTED_HOOKS) {
                delete fileConfig[hookName];
            }
            this._config = (0, deepmerge_1.default)(this._config, fileConfig, MERGE_OPTIONS);
            /**
             * remove `watch` from config as far as it can be only passed as command line argument
             */
            delete this._config.watch;
        }
        catch (e) {
            log.error(`Failed loading configuration file: ${filePath}:`, e.message);
            throw e;
        }
    }
    /**
     * merge external object with config object
     * @param  {Object} object  desired object to merge into the config object
     */
    merge(object = {}) {
        const spec = Array.isArray(object.spec) ? object.spec : [];
        const exclude = Array.isArray(object.exclude) ? object.exclude : [];
        this._config = (0, deepmerge_1.default)(this._config, object, MERGE_OPTIONS);
        /**
         * overwrite config specs that got piped into the wdio command
         */
        if (object.specs && object.specs.length > 0) {
            this._config.specs = object.specs;
        }
        else if (object.exclude && object.exclude.length > 0) {
            this._config.exclude = object.exclude;
        }
        /**
         * overwrite capabilities
         */
        this._capabilities = (0, utils_1.validObjectOrArray)(this._config.capabilities) ? this._config.capabilities : this._capabilities;
        /**
         * save original specs if Cucumber's feature line number is provided
         */
        if (this._config.spec && (0, utils_1.isCucumberFeatureWithLineNumber)(this._config.spec)) {
            /**
             * `this._config.spec` is string instead of Array in watch mode
             */
            this._config.cucumberFeaturesWithLineNumbers = Array.isArray(this._config.spec) ? [...this._config.spec] : [this._config.spec];
        }
        /**
         * run single spec file only, regardless of multiple-spec specification
         */
        if (spec.length > 0) {
            this._config.specs = this.setFilePathToFilterOptions(spec, this._config.specs);
        }
        if (exclude.length > 0) {
            this._config.exclude = this.setFilePathToFilterOptions(exclude, this._config.exclude);
        }
    }
    /**
     * Add hooks from an existing service to the runner config.
     * @param {Object} service - an object that contains hook methods.
     */
    addService(service) {
        const addHook = (hookName, hook) => {
            // @ts-ignore Expression produces a union type that is too complex to represent
            const existingHooks = this._config[hookName];
            if (!existingHooks) {
                // @ts-ignore Expression produces a union type that is too complex to represent
                this._config[hookName] = hook.bind(service);
            }
            else if (typeof existingHooks === 'function') {
                // @ts-ignore Expression produces a union type that is too complex to represent
                this._config[hookName] = [existingHooks, hook.bind(service)];
            }
            else {
                // @ts-ignore Expression produces a union type that is too complex to represent
                this._config[hookName] = [...existingHooks, hook.bind(service)];
            }
        };
        for (const hookName of constants_1.SUPPORTED_HOOKS) {
            const hooksToBeAdded = service[hookName];
            if (!hooksToBeAdded) {
                continue;
            }
            if (typeof hooksToBeAdded === 'function') {
                addHook(hookName, hooksToBeAdded);
            }
            else if (Array.isArray(hooksToBeAdded)) {
                for (const hookToAdd of hooksToBeAdded) {
                    if (typeof hookToAdd === 'function') {
                        addHook(hookName, hookToAdd);
                    }
                }
            }
        }
    }
    /**
     * determine what specs to run based on the spec(s), suite(s), exclude
     * attributes from CLI, config and capabilities
     */
    getSpecs(capSpecs, capExclude) {
        var _a;
        const isSpecParamPassed = Array.isArray(this._config.spec);
        // when CLI --spec is explicitly specified, this._config.specs contains the filtered
        // specs matching the passed pattern else the specs defined inside the config are returned
        let specs = ConfigParser.getFilePaths(this._config.specs, undefined, this._pathService);
        let exclude = ConfigParser.getFilePaths(this._config.exclude, undefined, this._pathService);
        let suites = Array.isArray(this._config.suite) ? this._config.suite : [];
        // only use capability excludes if (CLI) --exclude or config exclude are not defined
        if (Array.isArray(capExclude) && exclude.length === 0) {
            exclude = ConfigParser.getFilePaths(capExclude, undefined, this._pathService);
        }
        // only use capability specs if (CLI) --spec is not defined
        if (!isSpecParamPassed && Array.isArray(capSpecs)) {
            specs = ConfigParser.getFilePaths(capSpecs, undefined, this._pathService);
        }
        // handle case where user passes --suite via CLI
        if (suites.length > 0) {
            let suiteSpecs = [];
            for (let suiteName of suites) {
                let suite = (_a = this._config.suites) === null || _a === void 0 ? void 0 : _a[suiteName];
                if (!suite) {
                    log.warn(`No suite was found with name "${suiteName}"`);
                }
                if (Array.isArray(suite)) {
                    suiteSpecs = suiteSpecs.concat(ConfigParser.getFilePaths(suite, undefined, this._pathService));
                }
            }
            if (suiteSpecs.length === 0) {
                throw new Error(`The suite(s) "${suites.join('", "')}" you specified don't exist ` +
                    'in your config file or doesn\'t contain any files!');
            }
            // Allow --suite and --spec to both be defined on the command line
            specs = isSpecParamPassed ? [...specs, ...suiteSpecs] : suiteSpecs;
        }
        // Remove any duplicate tests from the final specs array
        specs = [...new Set(specs)];
        return this.filterSpecs(specs, exclude);
    }
    /**
     * sets config attribute with file paths from filtering
     * options from cli argument
     *
     * @param  {String[]} cliArgFileList  list of files in a string form
     * @param  {Object} config  config object that stores the spec and exclude attributes
     * cli argument
     * @return {String[]} List of files that should be included or excluded
     */
    setFilePathToFilterOptions(cliArgFileList, config) {
        const filesToFilter = new Set();
        const fileList = ConfigParser.getFilePaths(config, undefined, this._pathService);
        cliArgFileList.forEach(filteredFile => {
            filteredFile = (0, utils_1.removeLineNumbers)(filteredFile);
            // Send single file/file glob to getFilePaths - not supporting hierarchy in spec/exclude
            // Return value will always be string[]
            let globMatchedFiles = ConfigParser.getFilePaths(this._pathService.glob(filteredFile), undefined, this._pathService);
            if (this._pathService.isFile(filteredFile)) {
                filesToFilter.add(this._pathService.ensureAbsolutePath(filteredFile));
            }
            else if (globMatchedFiles.length) {
                globMatchedFiles.forEach(file => filesToFilter.add(file));
            }
            else {
                // fileList can be a string[] or a string[][]
                fileList.forEach(file => {
                    if (typeof file === 'string') {
                        if (file.match(filteredFile)) {
                            filesToFilter.add(file);
                        }
                    }
                    else if (Array.isArray(file)) {
                        file.forEach(subFile => {
                            if (subFile.match(filteredFile)) {
                                filesToFilter.add(subFile);
                            }
                        });
                    }
                    else {
                        log.warn('Unexpected entry in specs that is neither string nor array: ', file);
                    }
                });
            }
        });
        if (filesToFilter.size === 0) {
            throw new Error(`spec file(s) ${cliArgFileList.join(', ')} not found`);
        }
        return [...filesToFilter];
    }
    /**
     * return configs
     */
    getConfig() {
        return this._config;
    }
    /**
     * return capabilities
     */
    getCapabilities(i) {
        if (typeof i === 'number' && Array.isArray(this._capabilities) && this._capabilities[i]) {
            return this._capabilities[i];
        }
        return this._capabilities;
    }
    /**
     * returns a flattened list of globbed files
     *
     * @param  {String[] | String[][]} patterns list of files to glob
     * @param  {Boolean} omitWarnings to indicate omission of warnings
     * @param  {FileSystemPathService} findAndGlob system path service for expanding globbed file names
     * @param  {number} hierarchyDepth depth to prevent recursive calling beyond a depth of 1
     * @return {String[] | String[][]} list of files
     */
    static getFilePaths(patterns, omitWarnings, findAndGlob = new FileSystemPathService_1.default(), hierarchyDepth) {
        let files = [];
        let groupedFiles = [];
        if (typeof patterns === 'string') {
            patterns = [patterns];
        }
        // patterns must be an array of strings and/or string arrays
        if (!Array.isArray(patterns)) {
            throw new Error('specs or exclude property should be an array of strings, specs may also be an array of string arrays');
        }
        patterns = patterns.map(pattern => {
            if (Array.isArray(pattern)) {
                return pattern.map(subPattern => (0, utils_1.removeLineNumbers)(subPattern));
            }
            return (0, utils_1.removeLineNumbers)(pattern);
        });
        for (let pattern of patterns) {
            // If pattern is an array, then call getFilePaths again
            // But only call one level deep, can't have multiple levels of hierarchy
            if (Array.isArray(pattern) && !hierarchyDepth) {
                // Will always only get a string array back
                groupedFiles = ConfigParser.getFilePaths(pattern, omitWarnings, findAndGlob, 1);
                files.push(groupedFiles);
            }
            else if (Array.isArray(pattern) && hierarchyDepth) {
                log.error('Unexpected depth of hierarchical arrays');
            }
            else {
                pattern = pattern.toString().replace(/\\/g, '/');
                let filenames = findAndGlob.glob(pattern);
                filenames = filenames.filter((filename) => constants_1.SUPPORTED_FILE_EXTENSIONS.find((ext) => filename.endsWith(ext)));
                filenames = filenames.map(filename => findAndGlob.ensureAbsolutePath(filename));
                if (filenames.length === 0 && !omitWarnings) {
                    log.warn('pattern', pattern, 'did not match any file');
                }
                files = (0, deepmerge_1.default)(files, filenames, MERGE_OPTIONS);
            }
        }
        return files;
    }
    /**
     * returns specs files with the excludes filtered
     *
     * @param  {String[] | String[][]} spec files -  list of spec files
     * @param  {String[]} exclude files -  list of exclude files
     * @return {String[] | String[][]} list of spec files with excludes removed
     */
    filterSpecs(specs, exclude) {
        return specs.reduce((returnVal, spec) => {
            if (Array.isArray(spec)) {
                returnVal.push(spec.filter(specItem => !exclude.includes(specItem)));
            }
            else if (exclude.indexOf(spec) === -1) {
                returnVal.push(spec);
            }
            return returnVal;
        }, []);
    }
}
exports.default = ConfigParser;
