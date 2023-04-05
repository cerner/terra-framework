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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitJSONToGitDSL = void 0;
var os = __importStar(require("os"));
var parse_diff_1 = __importDefault(require("parse-diff"));
var lodash_includes_1 = __importDefault(require("lodash.includes"));
var lodash_isobject_1 = __importDefault(require("lodash.isobject"));
var lodash_keys_1 = __importDefault(require("lodash.keys"));
var lodash_memoize_1 = __importDefault(require("lodash.memoize"));
var jsonDiff = __importStar(require("fast-json-patch"));
var jsonpointer_1 = __importDefault(require("jsonpointer"));
var json5_1 = __importDefault(require("json5"));
var micromatch_1 = __importDefault(require("micromatch"));
var chainsmoker_1 = __importDefault(require("../../commands/utils/chainsmoker"));
var gitJSONToGitDSL = function (gitJSONRep, config) {
    var getFullDiff = config.getStructuredDiffForFile
        ? null
        : (0, lodash_memoize_1.default)(function (base, head) {
            return config.getFullDiff(base, head, config.staging);
        }, function (base, head) { return "".concat(base, "...").concat(head); });
    /**
     * Takes a filename, and pulls from the PR the two versions of a file
     * where we then pass that off to the rfc6902 JSON patch generator.
     *
     * If you provide the current filename:
     *  - If a file was renamed then you'll see { before: null }
     *
     * @param filename The path of the file
     */
    var JSONPatchForFile = function (filename) { return __awaiter(void 0, void 0, void 0, function () {
        var baseFile, headFile, baseJSON, headJSON;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // We already have access to the diff, so see if the file is in there
                    // if it's not return an empty diff
                    if (!gitJSONRep.modified_files.includes(filename)) {
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, config.getFileContents(filename, config.repo, config.baseSHA)];
                case 1:
                    baseFile = _a.sent();
                    return [4 /*yield*/, config.getFileContents(filename, config.repo, config.headSHA)
                        // Parse JSON. `fileContents` returns empty string for files that are
                        // missing in one of the refs, ie. when the file is created or deleted.
                    ];
                case 2:
                    headFile = _a.sent();
                    baseJSON = baseFile === "" ? {} : json5_1.default.parse(baseFile);
                    headJSON = headFile === "" ? {} : json5_1.default.parse(headFile);
                    // Tiny bit of hand-waving here around the types. JSONPatchOperation is
                    // a simpler version of all operations inside the rfc6902 d.ts. Users
                    // of danger wont care that much, so I'm smudging the classes slightly
                    // to be ones we can add to the hosted docs.
                    return [2 /*return*/, {
                            before: baseFile === "" ? null : baseJSON,
                            after: headFile === "" ? null : headJSON,
                            diff: jsonDiff.compare(baseJSON, headJSON),
                        }];
            }
        });
    }); };
    /**
     * Takes a path, generates a JSON patch for it, then parses that into something
     * that's much easier to use inside a "DSL"" like the Dangerfile.
     *
     * @param filename path of the file
     */
    var JSONDiffForFile = function (filename) { return __awaiter(void 0, void 0, void 0, function () {
        var patchObject, outerDiff, before, after;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, JSONPatchForFile(filename)];
                case 1:
                    patchObject = _a.sent();
                    if (!patchObject) {
                        return [2 /*return*/, {}];
                    }
                    outerDiff = patchObject.diff, before = patchObject.before, after = patchObject.after;
                    return [2 /*return*/, outerDiff.reduce(function (accumulator, _a) {
                            var path = _a.path;
                            // We don't want to show the last root object, as these tend to just go directly
                            // to a single value in the patch. This is fine, but not useful when showing a before/after
                            var pathSteps = path.split("/");
                            var backAStepPath = pathSteps.length <= 2 ? path : pathSteps.slice(0, pathSteps.length - 1).join("/");
                            var diff = {
                                // If a file is moved/renamed, the file will be in "danger.git.modified_files"
                                // JSONPatchForFile will return null for the old file, so we need to check for that
                                before: (before && jsonpointer_1.default.get(before, backAStepPath)) || null,
                                after: (after && jsonpointer_1.default.get(after, backAStepPath)) || null,
                            };
                            var emptyValueOfCounterpart = function (other) {
                                if (Array.isArray(other)) {
                                    return [];
                                }
                                else if ((0, lodash_isobject_1.default)(diff.after)) {
                                    return {};
                                }
                                return null;
                            };
                            var beforeValue = diff.before || emptyValueOfCounterpart(diff.after);
                            var afterValue = diff.after || emptyValueOfCounterpart(diff.before);
                            // If they both are arrays, add some extra metadata about what was
                            // added or removed. This makes it really easy to act on specific
                            // changes to JSON DSLs
                            if (Array.isArray(afterValue) && Array.isArray(beforeValue)) {
                                var arrayBefore_1 = beforeValue;
                                var arrayAfter_1 = afterValue;
                                diff.added = arrayAfter_1.filter(function (o) { return !(0, lodash_includes_1.default)(arrayBefore_1, o); });
                                diff.removed = arrayBefore_1.filter(function (o) { return !(0, lodash_includes_1.default)(arrayAfter_1, o); });
                                // Do the same, but for keys inside an object if they both are objects.
                            }
                            else if ((0, lodash_isobject_1.default)(afterValue) && (0, lodash_isobject_1.default)(beforeValue)) {
                                var beforeKeys_1 = (0, lodash_keys_1.default)(beforeValue);
                                var afterKeys_1 = (0, lodash_keys_1.default)(afterValue);
                                diff.added = afterKeys_1.filter(function (o) { return !(0, lodash_includes_1.default)(beforeKeys_1, o); });
                                diff.removed = beforeKeys_1.filter(function (o) { return !(0, lodash_includes_1.default)(afterKeys_1, o); });
                            }
                            jsonpointer_1.default.set(accumulator, backAStepPath, diff);
                            return accumulator;
                        }, Object.create(null))];
            }
        });
    }); };
    var linesOfCode = function (pattern) { return __awaiter(void 0, void 0, void 0, function () {
        var isPatternMatch, _a, createdFilesDiffs, modifiedFilesDiffs, deletedFilesDiffs, additions, deletions, modifiedLines;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    isPatternMatch = function (path) { return pattern === undefined || micromatch_1.default.isMatch(path, pattern); };
                    return [4 /*yield*/, Promise.all([
                            Promise.all(gitJSONRep.created_files.filter(isPatternMatch).map(function (path) { return diffForFile(path); })),
                            Promise.all(gitJSONRep.modified_files.filter(isPatternMatch).map(function (path) { return diffForFile(path); })),
                            Promise.all(gitJSONRep.deleted_files.filter(isPatternMatch).map(function (path) { return diffForFile(path); })),
                        ])];
                case 1:
                    _a = _b.sent(), createdFilesDiffs = _a[0], modifiedFilesDiffs = _a[1], deletedFilesDiffs = _a[2];
                    additions = createdFilesDiffs
                        .map(function (diff) { return (!diff ? 0 : diff.added === "" ? 0 : diff.added.split("\n").length); })
                        .reduce(function (mem, value) { return mem + value; }, 0);
                    deletions = deletedFilesDiffs
                        .map(function (diff) { return (!diff ? 0 : diff.removed === "" ? 0 : diff.removed.split("\n").length); })
                        .reduce(function (mem, value) { return mem + value; }, 0);
                    modifiedLines = modifiedFilesDiffs.map(function (diff) { return [
                        !diff ? 0 : diff.added === "" ? 0 : diff.added.split("\n").length,
                        !diff ? 0 : diff.removed === "" ? 0 : diff.removed.split("\n").length,
                    ]; });
                    additions = modifiedLines.reduce(function (mem, value) { return mem + value[0]; }, additions);
                    deletions = modifiedLines.reduce(function (mem, value) { return mem + value[1]; }, deletions);
                    return [2 /*return*/, additions + deletions];
            }
        });
    }); };
    var byType = function (t) {
        return function (_a) {
            var type = _a.type;
            return type === t;
        };
    };
    var getContent = function (_a) {
        var content = _a.content;
        return content;
    };
    /**
     * Gets the git-style diff for a single file.
     *
     * @param filename File path for the diff
     */
    var structuredDiffForFile = function (filename) { return __awaiter(void 0, void 0, void 0, function () {
        var fileDiffs, diff, structuredDiff;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!config.getStructuredDiffForFile) return [3 /*break*/, 2];
                    return [4 /*yield*/, config.getStructuredDiffForFile(config.baseSHA, config.headSHA, filename)];
                case 1:
                    fileDiffs = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, getFullDiff(config.baseSHA, config.headSHA)];
                case 3:
                    diff = _a.sent();
                    fileDiffs = (0, parse_diff_1.default)(diff);
                    _a.label = 4;
                case 4:
                    structuredDiff = fileDiffs.find(function (diff) { return diff.from === filename || diff.to === filename; });
                    if (structuredDiff !== undefined && structuredDiff.chunks !== undefined) {
                        return [2 /*return*/, { chunks: structuredDiff.chunks }];
                    }
                    else {
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    /**
     * Gets the git-style diff for a single file.
     *
     * @param filename File path for the diff
     */
    var diffForFile = function (filename) { return __awaiter(void 0, void 0, void 0, function () {
        var structuredDiff, allLines;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, structuredDiffForFile(filename)];
                case 1:
                    structuredDiff = _b.sent();
                    if (!structuredDiff) {
                        return [2 /*return*/, null];
                    }
                    allLines = structuredDiff.chunks
                        .map(function (c) { return c.changes; })
                        .reduce(function (a, b) { return a.concat(b); }, []);
                    _a = {};
                    return [4 /*yield*/, config.getFileContents(filename, config.repo, config.baseSHA)];
                case 2:
                    _a.before = _b.sent();
                    return [4 /*yield*/, config.getFileContents(filename, config.repo, config.headSHA)];
                case 3: return [2 /*return*/, (_a.after = _b.sent(),
                        _a.diff = allLines.map(getContent).join(os.EOL),
                        _a.added = allLines.filter(byType("add")).map(getContent).join(os.EOL),
                        _a.removed = allLines.filter(byType("del")).map(getContent).join(os.EOL),
                        _a)];
            }
        });
    }); };
    return {
        base: config.baseSHA,
        head: config.headSHA,
        fileMatch: (0, chainsmoker_1.default)({
            modified: gitJSONRep.modified_files,
            created: gitJSONRep.created_files,
            deleted: gitJSONRep.deleted_files,
            edited: gitJSONRep.modified_files.concat(gitJSONRep.created_files),
        }),
        modified_files: gitJSONRep.modified_files,
        created_files: gitJSONRep.created_files,
        deleted_files: gitJSONRep.deleted_files,
        commits: gitJSONRep.commits,
        diffForFile: diffForFile,
        structuredDiffForFile: structuredDiffForFile,
        JSONPatchForFile: JSONPatchForFile,
        JSONDiffForFile: JSONDiffForFile,
        linesOfCode: linesOfCode,
    };
};
exports.gitJSONToGitDSL = gitJSONToGitDSL;
//# sourceMappingURL=gitJSONToGitDSL.js.map