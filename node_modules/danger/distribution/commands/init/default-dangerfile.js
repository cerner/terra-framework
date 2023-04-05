"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSeparateTestsFolder = exports.assignSomeone = exports.descriptionRule = exports.changelogRule = exports.createImport = exports.formatDangerfile = exports.generateDefaultDangerfile = void 0;
var fs = __importStar(require("fs"));
var generateDangerfileState = function () { return ({
    hasCHANGELOG: fs.existsSync("CHANGELOG.md"),
    hasSeparateTestFolder: fs.existsSync("tests") || fs.existsSync("specs"),
    hasPrettier: fs.existsSync("node_modules/.bin/prettier") || fs.existsSync("node_modules/.bin/prettier.bin"),
    hasJest: fs.existsSync("node_modules/.bin/jest") || fs.existsSync("node_modules/.bin/jest.bin"),
}); };
var generateDefaultDangerfile = function (state) {
    var dangerfileState = generateDangerfileState();
    var rules = [];
    rules.push(exports.descriptionRule);
    if (dangerfileState.hasCHANGELOG) {
        rules.push(exports.changelogRule);
    }
    if (!state.isAnOSSRepo) {
        rules.push(exports.assignSomeone);
    }
    if (dangerfileState.hasSeparateTestFolder || dangerfileState.hasJest) {
        var tests = dangerfileState.hasJest ? "__tests__" : "tests";
        var source = ["src", "source", "lib"].filter(function (path) { return fs.existsSync(path); });
        if (source[0]) {
            rules.push((0, exports.checkSeparateTestsFolder)(source[0], tests));
        }
    }
    var dangerfile = "".concat((0, exports.createImport)(state), "\n\n  ").concat(rules.join("\n"), "\n  ");
    return (0, exports.formatDangerfile)(dangerfile, dangerfileState);
};
exports.generateDefaultDangerfile = generateDefaultDangerfile;
var formatDangerfile = function (dangerfile, dangerfileState) {
    if (dangerfileState.hasPrettier) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        var format = require("prettier").format;
        // Get package settings
        var localPrettier = fs.existsSync("package.json") && JSON.parse(fs.readFileSync("package.json", "utf8")).prettier;
        // Always include this
        var always = { editorconfig: true };
        var settings = localPrettier ? __assign(__assign({}, always), localPrettier) : always;
        return format(dangerfile, settings);
    }
    else {
        return dangerfile;
    }
};
exports.formatDangerfile = formatDangerfile;
var createImport = function (state) {
    if (state.isTypeScript || state.isBabel) {
        return "import {danger, warn} from 'danger'";
    }
    else {
        return "const {danger, warn} = require('danger')";
    }
};
exports.createImport = createImport;
exports.changelogRule = "\n// Check for a CHANGELOG entry\nconst hasChangelog = danger.git.modified_files.some(f => f === 'CHANGELOG.md')\nconst description = danger.github.pr.body + danger.github.pr.title\nconst isTrivial = description.includes('#trivial')\n\nif (!hasChangelog && !isTrivial) {\n  warn('Please add a changelog entry for your changes.')\n}\n";
exports.descriptionRule = "\n// No PR is too small to include a description of why you made a change\nif (danger.github.pr.body.length < 10) {\n  warn('Please include a description of your PR changes.');\n}\n";
exports.assignSomeone = "\n// Check that someone has been assigned to this PR\nif (danger.github.pr.assignee === null) {\n   warn('Please assign someone to merge this PR, and optionally include people who should review.');\n}\n";
// For projects not using Jest
var checkSeparateTestsFolder = function (src, tests) { return "\n// Request changes to ".concat(src, " also include changes to tests.\nconst allFiles = danger.git.modified_files.concat(danger.git.created_files)\nconst hasAppChanges = allFiles.some(p => p.includes('").concat(src, "/'))\nconst hasTestChanges = allFiles.some(p => p.includes('").concat(tests, "/'))\n\nif (hasAppChanges && !hasTestChanges) {\n  warn('This PR does not include changes to tests, even though it affects app code.');\n}\n"); };
exports.checkSeparateTestsFolder = checkSeparateTestsFolder;
//# sourceMappingURL=default-dangerfile.js.map