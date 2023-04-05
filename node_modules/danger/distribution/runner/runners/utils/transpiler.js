"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.babelify = exports.typescriptify = exports.lookupTSConfig = exports.dirContains = exports.checkForNodeModules = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var json5_1 = __importDefault(require("json5"));
var debug_1 = require("../../../debug");
var BabelPackagePrefix;
(function (BabelPackagePrefix) {
    BabelPackagePrefix["V7"] = "@babel/";
    BabelPackagePrefix["BEFORE_V7"] = "babel-";
})(BabelPackagePrefix || (BabelPackagePrefix = {}));
var disableTranspilation = process.env.DANGER_DISABLE_TRANSPILATION === "true";
var disableTsc = process.env.DANGER_DISABLE_TSC === "true";
var hasNativeTypeScript = false;
var hasBabel = false;
var hasBabelTypeScript = false;
var hasFlow = false;
var hasChecked = false;
// By default assume Babel 7 is used
var babelPackagePrefix = "@babel/" /* V7 */;
var d = (0, debug_1.debug)("transpiler:setup");
// Yes, lots of linter disables, but I want to support TS/Babel/Neither correctly
var checkForNodeModules = function () {
    if (disableTranspilation) {
        hasChecked = true;
        d("DANGER_DISABLE_TRANSPILATION environment variable has been set to true, skipping transpilation");
        return;
    }
    try {
        require.resolve("typescript");
        hasNativeTypeScript = true && !disableTsc;
    }
    catch (e) {
        d("Does not have TypeScript set up");
    }
    var checkForBabel = function (prefix) {
        require.resolve("".concat(prefix, "core"));
        babelPackagePrefix = prefix;
        hasBabel = true;
    };
    try {
        // Check for Babel 7
        checkForBabel("@babel/" /* V7 */);
    }
    catch (e) {
        try {
            // Check for older Babel versions
            checkForBabel("babel-" /* BEFORE_V7 */);
        }
        catch (e) {
            d("Does not have Babel set up");
        }
    }
    if (hasBabel) {
        require("core-js/stable"); // tslint:disable-line
        require("regenerator-runtime/runtime"); // tslint:disable-line
        try {
            require.resolve("".concat(babelPackagePrefix, "plugin-transform-typescript"));
            hasBabelTypeScript = true;
        }
        catch (e) {
            d("Does not have Babel 7 TypeScript set up");
        }
        try {
            require.resolve("".concat(babelPackagePrefix, "plugin-transform-flow-strip-types"));
            hasFlow = true;
        }
        catch (e) {
            d("Does not have Flow set up");
        }
    }
    hasChecked = true;
};
exports.checkForNodeModules = checkForNodeModules;
var dirContains = function (rootDir, dir) {
    var relative = path.relative(rootDir, dir);
    // on win32, relative can refer to a different drive
    if (path.isAbsolute(relative)) {
        return false;
    }
    return !relative.startsWith("..");
};
exports.dirContains = dirContains;
// Now that we have a sense of what exists inside the users' node modules
var lookupTSConfig = function (dir) {
    var filename = "tsconfig.json";
    var filepath = path.join(dir, filename);
    if (fs.existsSync(filepath)) {
        return filepath;
    }
    var rootDir = path.resolve();
    dir = path.resolve(dir);
    if (rootDir === dir) {
        return null;
    }
    // if root dir is disconnected, we only check in the root
    if (!(0, exports.dirContains)(rootDir, dir)) {
        filepath = filename;
        return fs.existsSync(filepath) ? filepath : null;
    }
    dir = path.dirname(dir);
    do {
        filepath = path.join(dir, filename);
        if (fs.existsSync(filepath)) {
            return path.relative(rootDir, filepath);
        }
        dir = path.dirname(dir);
    } while ((0, exports.dirContains)(rootDir, dir));
    return null;
};
exports.lookupTSConfig = lookupTSConfig;
var typescriptify = function (content, dir) {
    var ts = require("typescript");
    // Support custom TSC options, but also fallback to defaults
    var compilerOptions;
    var tsConfigPath = (0, exports.lookupTSConfig)(dir);
    if (tsConfigPath) {
        compilerOptions = json5_1.default.parse(fs.readFileSync(tsConfigPath, "utf8"));
    }
    else {
        compilerOptions = ts.getDefaultCompilerOptions();
    }
    var result = ts.transpileModule(content, sanitizeTSConfig(compilerOptions));
    return result.outputText;
};
exports.typescriptify = typescriptify;
var sanitizeTSConfig = function (config) {
    if (!config.compilerOptions) {
        return config;
    }
    var safeConfig = config;
    // It can make sense to ship TS code with modules
    // for `import`/`export` syntax, but as we're running
    // the transpiled code on vanilla node - it'll need to
    // be used with plain old commonjs
    //
    // @see https://github.com/apollographql/react-apollo/pull/1402#issuecomment-351810274
    //
    if (safeConfig.compilerOptions.module) {
        safeConfig.compilerOptions.module = "commonjs";
    }
    return safeConfig;
};
var babelify = function (content, filename, extraPlugins) {
    var babel = require("".concat(babelPackagePrefix, "core"));
    // Since Babel 7, it is recommended to use `transformSync`.
    // For older versions, we fallback to `transform`.
    // @see https://babeljs.io/docs/en/babel-core#transform
    var transformSync = babel.transformSync || babel.transform;
    if (!transformSync) {
        return content;
    }
    var options = babel.loadOptions ? babel.loadOptions({ filename: filename }) : { plugins: [] };
    var fileOpts = {
        filename: filename,
        filenameRelative: filename,
        sourceMap: false,
        sourceFileName: undefined,
        sourceType: "module",
        plugins: __spreadArray(__spreadArray([], extraPlugins, true), options.plugins, true),
    };
    var result = transformSync(content, fileOpts);
    d("Result from Babel:");
    d(result);
    return result.code;
};
exports.babelify = babelify;
exports.default = (function (code, filename, remoteFile) {
    if (remoteFile === void 0) { remoteFile = false; }
    if (!hasChecked) {
        (0, exports.checkForNodeModules)();
    }
    var filetype;
    if (remoteFile) {
        d("Parsing the file from the remote reference ".concat(filename));
        var _a = filename.split("@"), file = _a[0], _1 = _a[1];
        filetype = path.extname(file);
    }
    else {
        filetype = path.extname(filename);
    }
    var isModule = filename.includes("node_modules");
    if (isModule) {
        return code;
    }
    var result = code;
    if (hasNativeTypeScript && filetype.startsWith(".ts")) {
        d("compiling with typescript");
        result = (0, exports.typescriptify)(code, path.dirname(filename));
    }
    else if (hasBabel && hasBabelTypeScript && filetype.startsWith(".ts")) {
        d("compiling as typescript with babel");
        result = (0, exports.babelify)(code, filename, ["".concat(babelPackagePrefix, "plugin-transform-typescript")]);
    }
    else if (hasBabel && filetype.startsWith(".js")) {
        d("babelifying as javascript");
        result = (0, exports.babelify)(code, filename, hasFlow ? ["".concat(babelPackagePrefix, "plugin-transform-flow-strip-types")] : []);
    }
    return result;
});
//# sourceMappingURL=transpiler.js.map