"use strict";
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
exports.Executor = void 0;
var DangerResults_1 = require("../dsl/DangerResults");
var githubIssueTemplate_1 = require("./templates/githubIssueTemplate");
var bitbucketServerTemplate_1 = require("./templates/bitbucketServerTemplate");
var bitbucketCloudTemplate_1 = require("./templates/bitbucketCloudTemplate");
var exceptionRaisedTemplate_1 = __importDefault(require("./templates/exceptionRaisedTemplate"));
var debug_1 = require("../debug");
var chalk_1 = __importDefault(require("chalk"));
var DangerUtils_1 = require("./DangerUtils");
var DangerDSL_1 = require("../dsl/DangerDSL");
var GitHubGit_1 = require("../platforms/github/GitHubGit");
var fs_1 = require("fs");
// This is still badly named, maybe it really should just be runner?
var isTests = typeof jest === "object";
var Executor = /** @class */ (function () {
    function Executor(ciSource, platform, runner, options, process) {
        this.ciSource = ciSource;
        this.platform = platform;
        this.runner = runner;
        this.options = options;
        this.process = process;
        this.d = (0, debug_1.debug)("executor");
        this.log = isTests ? function () { return ""; } : console.log;
        this.logErr = isTests ? function () { return ""; } : console.error;
    }
    /**
     *  Runs all of the operations for a running just Danger
     * @param {string} file the filepath to the Dangerfile
     * @returns {Promise<DangerResults>} The results of the Danger run
     */
    Executor.prototype.runDanger = function (file, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var results, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        results = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.runner.runDangerfileEnvironment([[file, false]], [undefined], runtime)];
                    case 2:
                        results = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        results = this.resultsForError(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [4 /*yield*/, this.handleResults(results, runtime.danger.git)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, results];
                }
            });
        });
    };
    /**
     * Sets up all the related objects for running the Dangerfile
     * @returns {void} It's a promise, so a void promise
     */
    Executor.prototype.dslForDanger = function () {
        return __awaiter(this, void 0, void 0, function () {
            var useSimpleDSL, git, _a, getDSLFunc, platformDSL, utils;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        useSimpleDSL = this.platform.getPlatformReviewSimpleRepresentation && this.ciSource.useEventDSL;
                        this.d("Using full Danger DSL:", !useSimpleDSL);
                        if (!useSimpleDSL) return [3 /*break*/, 1];
                        _a = (0, GitHubGit_1.emptyGitJSON)();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.platform.getPlatformGitRepresentation()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        git = _a;
                        getDSLFunc = useSimpleDSL
                            ? this.platform.getPlatformReviewSimpleRepresentation
                            : this.platform.getPlatformReviewDSLRepresentation;
                        return [4 /*yield*/, getDSLFunc()];
                    case 4:
                        platformDSL = _b.sent();
                        utils = { sentence: DangerUtils_1.sentence, href: DangerUtils_1.href };
                        return [2 /*return*/, new DangerDSL_1.DangerDSL(platformDSL, git, utils, this.platform.name)];
                }
            });
        });
    };
    /**
     * Handle the message aspects of running a Dangerfile
     *
     * @param {DangerResults} results a JSON representation of the end-state for a Danger run
     */
    Executor.prototype.handleResults = function (results, git) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("Got results back:", results);
                        if (!results) {
                            throw new Error("Got no results back from the Dangerfile evaluation, this is likely an issue with a custom sub-process exiting early.");
                        }
                        (0, DangerResults_1.validateResults)(results);
                        this.d("Evaluator settings", this.options);
                        if (!(this.options.stdoutOnly || this.options.jsonOnly || (this.ciSource && this.ciSource.useEventDSL))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handleResultsPostingToSTDOUT(results)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.handleResultsPostingToPlatform(results, git)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (this.options.failOnErrors && results.fails.length > 0) {
                            this.process.exitCode = 1;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handle showing results inside the shell.
     *
     * @param {DangerResults} results a JSON representation of the end-state for a Danger run
     */
    Executor.prototype.handleResultsPostingToSTDOUT = function (results) {
        return __awaiter(this, void 0, void 0, function () {
            var fails, warnings, messages, markdowns, results_1, tick, cross, output, s, are, message, message, allMessages, oneMessage, longMessage, table;
            var _this = this;
            return __generator(this, function (_a) {
                fails = results.fails, warnings = results.warnings, messages = results.messages, markdowns = results.markdowns;
                if (this.options.jsonOnly) {
                    results_1 = {
                        fails: fails,
                        warnings: warnings,
                        messages: messages,
                        markdowns: markdowns,
                    };
                    process.stdout.write(JSON.stringify(results_1, null, 2));
                }
                else {
                    this.d("Writing to STDOUT:", results);
                    tick = chalk_1.default.bold.greenBright("✓");
                    cross = chalk_1.default.bold.redBright("ⅹ");
                    output = "";
                    if (fails.length > 0) {
                        s = fails.length === 1 ? "" : "s";
                        are = fails.length === 1 ? "is" : "are";
                        message = chalk_1.default.underline.red("Failing the build");
                        output = "Danger: ".concat(cross, " ").concat(message, ", there ").concat(are, " ").concat(fails.length, " fail").concat(s, ".");
                    }
                    else if (warnings.length > 0) {
                        message = chalk_1.default.underline("not failing the build");
                        output = "Danger: ".concat(tick, " found only warnings, ").concat(message);
                    }
                    else if (messages.length > 0) {
                        output = "Danger: ".concat(tick, " passed, found only messages.");
                    }
                    else if (!messages.length && !fails.length && !messages.length && !warnings.length) {
                        output = "Danger: ".concat(tick, " passed review, received no feedback.");
                    }
                    allMessages = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], fails, true), warnings, true), messages, true), markdowns, true).map(function (m) { return m.message; });
                    oneMessage = allMessages.join("\n");
                    longMessage = oneMessage.split("\n").length > 30;
                    // For a short message, show the log at the top
                    if (!longMessage) {
                        // An empty blank line for visual spacing
                        this.log(output);
                    }
                    table = [
                        fails.length && { name: "Failures", messages: fails.map(function (f) { return f.message; }) },
                        warnings.length && { name: "Warnings", messages: warnings.map(function (w) { return w.message; }) },
                        messages.length && { name: "Messages", messages: messages.map(function (m) { return m.message; }) },
                        markdowns.length && { name: "Markdowns", messages: markdowns.map(function (m) { return m.message; }) },
                    ].filter(function (r) { return r !== 0; });
                    // Consider looking at getting the terminal width, and making it 60%
                    // if over a particular size
                    table.forEach(function (row) {
                        _this.log("## ".concat(chalk_1.default.bold(row.name)));
                        _this.log(row.messages.join(chalk_1.default.bold("\n-\n")));
                    });
                    // For a long message show the results at the bottom
                    if (longMessage) {
                        this.log("");
                        this.log(output);
                    }
                    // An empty blank line for visual spacing
                    this.log("");
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Handle showing results inside a code review platform
     *
     * @param {DangerResults} results a JSON representation of the end-state for a Danger run
     * @param {GitDSL} git a reference to a git implementation so that inline comments find diffs to work with
     */
    Executor.prototype.handleResultsPostingToPlatform = function (originalResults, git) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var results, fails, warnings, messages, markdowns, failureCount, messageCount, dangerID, failed, hasMessages, issueURL, previousComments, _i, previousComments_1, comment, s, are, mergedResults, previousComments, inline, inlineLeftovers, commitID, comment, filePath;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        results = originalResults;
                        if (!this.platform.platformResultsPreMapper) return [3 /*break*/, 2];
                        this.d("Running platformResultsPreMapper:");
                        return [4 /*yield*/, this.platform.platformResultsPreMapper(results, this.options, this.ciSource.commitHash)];
                    case 1:
                        results = _b.sent();
                        this.d("Received results from platformResultsPreMapper:", results);
                        _b.label = 2;
                    case 2:
                        fails = results.fails, warnings = results.warnings, messages = results.messages, markdowns = results.markdowns;
                        failureCount = __spreadArray(__spreadArray([], fails, true), warnings, true).length;
                        messageCount = __spreadArray(__spreadArray([], messages, true), markdowns, true).length;
                        this.d("Posting to platform:", results);
                        dangerID = this.options.dangerID;
                        failed = fails.length > 0;
                        hasMessages = failureCount + messageCount > 0;
                        issueURL = undefined;
                        if (!(!hasMessages || this.options.removePreviousComments)) return [3 /*break*/, 9];
                        if (!(process.env["DANGER_SKIP_WHEN_EMPTY"] === "true")) return [3 /*break*/, 3];
                        this.log("Skip posting to platform ".concat(this.platform.name, "."));
                        return [3 /*break*/, 9];
                    case 3:
                        if (!hasMessages) {
                            this.log("Found no issues or messages from Danger. Removing any existing messages on ".concat(this.platform.name, "."));
                        }
                        else {
                            this.log("'removePreviousComments' option specified. Removing any existing messages on ".concat(this.platform.name, "."));
                        }
                        return [4 /*yield*/, this.platform.deleteMainComment(dangerID)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.platform.getInlineComments(dangerID)];
                    case 5:
                        previousComments = _b.sent();
                        _i = 0, previousComments_1 = previousComments;
                        _b.label = 6;
                    case 6:
                        if (!(_i < previousComments_1.length)) return [3 /*break*/, 9];
                        comment = previousComments_1[_i];
                        if (!(comment && comment.ownedByDanger)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.deleteInlineComment(comment)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 6];
                    case 9:
                        if (!hasMessages) return [3 /*break*/, 18];
                        if (fails.length > 0) {
                            s = fails.length === 1 ? "" : "s";
                            are = fails.length === 1 ? "is" : "are";
                            this.log("Failing the build, there ".concat(are, " ").concat(fails.length, " fail").concat(s, "."));
                        }
                        else if (warnings.length > 0) {
                            this.log("Found only warnings, not failing the build.");
                        }
                        else if (messageCount > 0) {
                            this.log("Found only messages, passing those to review.");
                        }
                        mergedResults = (0, DangerResults_1.regularResults)(results);
                        if (!(git !== undefined)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.platform.getInlineComments(dangerID)];
                    case 10:
                        previousComments = _b.sent();
                        inline = (0, DangerResults_1.inlineResults)(results);
                        return [4 /*yield*/, this.sendInlineComments(inline, git, previousComments)];
                    case 11:
                        inlineLeftovers = _b.sent();
                        inlineLeftovers = this.options.ignoreOutOfDiffComments ? DangerResults_1.emptyDangerResults : inlineLeftovers;
                        mergedResults = (0, DangerResults_1.sortResults)((0, DangerResults_1.mergeResults)(mergedResults, inlineLeftovers));
                        _b.label = 12;
                    case 12:
                        if (!(0, DangerResults_1.isEmptyResults)(mergedResults)) return [3 /*break*/, 13];
                        this.platform.deleteMainComment(dangerID);
                        return [3 /*break*/, 18];
                    case 13:
                        commitID = void 0;
                        if (this.ciSource.commitHash !== undefined) {
                            commitID = this.ciSource.commitHash;
                        }
                        else if (git !== undefined) {
                            commitID = git.commits[git.commits.length - 1].sha;
                        }
                        comment = void 0;
                        if (process.env["DANGER_BITBUCKETSERVER_HOST"]) {
                            comment = (0, bitbucketServerTemplate_1.template)(dangerID, mergedResults, commitID);
                        }
                        else if (process.env["DANGER_BITBUCKETCLOUD_OAUTH_KEY"] ||
                            process.env["DANGER_BITBUCKETCLOUD_USERNAME"] ||
                            process.env["DANGER_BITBUCKETCLOUD_REPO_ACCESSTOKEN"]) {
                            comment = (0, bitbucketCloudTemplate_1.template)(dangerID, mergedResults, commitID);
                        }
                        else {
                            comment = (0, githubIssueTemplate_1.template)(dangerID, mergedResults, commitID);
                        }
                        if (!this.options.newComment) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.platform.createComment(dangerID, comment)];
                    case 14:
                        issueURL = _b.sent();
                        return [3 /*break*/, 17];
                    case 15: return [4 /*yield*/, this.platform.updateOrCreateComment(dangerID, comment)];
                    case 16:
                        issueURL = _b.sent();
                        _b.label = 17;
                    case 17:
                        this.log("Feedback: ".concat(issueURL));
                        _b.label = 18;
                    case 18:
                        if (!!this.options.noPublishCheck) return [3 /*break*/, 20];
                        return [4 /*yield*/, this.updatePrStatus(!failed, issueURL, results, dangerID)];
                    case 19:
                        _b.sent();
                        _b.label = 20;
                    case 20:
                        if (!this.options.verbose) return [3 /*break*/, 22];
                        return [4 /*yield*/, this.handleResultsPostingToSTDOUT(results)];
                    case 21:
                        _b.sent();
                        _b.label = 22;
                    case 22:
                        // Write to the GitHub Env if a sub-process has included a reference to github's job summary
                        if ((_a = results.github) === null || _a === void 0 ? void 0 : _a.stepSummary) {
                            filePath = process.env.GITHUB_STEP_SUMMARY;
                            if (!filePath) {
                                throw new Error("process.env.GITHUB_STEP_SUMMARY was not set, which is needed for setSummaryMarkdown");
                            }
                            (0, fs_1.writeFileSync)(filePath, results.github.stepSummary, "utf8");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Executor.prototype.updatePrStatus = function (passed, issueURL, results, dangerID) {
        return __awaiter(this, void 0, void 0, function () {
            var urlForInfo, successPosting;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlForInfo = issueURL || this.ciSource.ciRunURL;
                        return [4 /*yield*/, this.platform.updateStatus(passed, messageForResults(results), urlForInfo, dangerID)];
                    case 1:
                        successPosting = _a.sent();
                        if (!successPosting) {
                            this.log("Could not add a commit status, the GitHub token for Danger does not have access rights.");
                            this.log("If the build fails, then danger will use a failing exit code.");
                        }
                        if (!successPosting && !passed) {
                            this.d("Failing the build due to handleResultsPostingToPlatform not successfully setting a commit status");
                            process.exitCode = 1;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send inline comments
     * Returns these violations that didn't pass the validation (e.g. incorrect file/line)
     *
     * @param results Results with inline violations
     */
    Executor.prototype.sendInlineComments = function (results, git, previousComments) {
        var _this = this;
        if (!this.platform.supportsInlineComments) {
            return new Promise(function (resolve) { return resolve(results); });
        }
        var inlineResults = (0, DangerResults_1.resultsIntoInlineResults)(results);
        var sortedInlineResults = (0, DangerResults_1.sortInlineResults)(inlineResults);
        var emptyResult = {
            messages: DangerResults_1.emptyDangerResults.messages,
            markdowns: DangerResults_1.emptyDangerResults.markdowns,
            fails: DangerResults_1.emptyDangerResults.fails,
            warnings: DangerResults_1.emptyDangerResults.warnings,
            meta: results.meta,
        };
        // For every inline result check if there is a comment already
        // if there is - update it and remove comment from deleteComments array (comments prepared for deletion)
        // if there isn't - create a new comment
        // Leftovers in deleteComments array should all be deleted afterwards
        var deleteComments = Array.isArray(previousComments) ? previousComments.filter(function (c) { return c.ownedByDanger; }) : [];
        var commentPromises = [];
        var inlineResultsForReview = [];
        var _loop_1 = function (inlineResult) {
            var index = deleteComments.findIndex(function (p) {
                return p.body.includes((0, githubIssueTemplate_1.fileLineToString)(inlineResult.file, inlineResult.line));
            });
            var promise = undefined;
            if (index != -1) {
                var previousComment = deleteComments[index];
                deleteComments.splice(index, 1);
                promise = this_1.updateInlineComment(inlineResult, previousComment);
            }
            else {
                if (typeof this_1.platform.createInlineReview === "function") {
                    inlineResultsForReview.push(inlineResult);
                }
                else {
                    promise = this_1.sendInlineComment(git, inlineResult);
                }
            }
            if (promise) {
                commentPromises.push(promise.then(function (_r) { return DangerResults_1.emptyDangerResults; }).catch(function (_e) { return (0, DangerResults_1.inlineResultsIntoResults)(inlineResult); }));
            }
        };
        var this_1 = this;
        for (var _i = 0, sortedInlineResults_1 = sortedInlineResults; _i < sortedInlineResults_1.length; _i++) {
            var inlineResult = sortedInlineResults_1[_i];
            _loop_1(inlineResult);
        }
        deleteComments.forEach(function (comment) {
            var promise = _this.deleteInlineComment(comment);
            commentPromises.push(promise.then(function (_r) { return DangerResults_1.emptyDangerResults; }).catch(function (_e) { return DangerResults_1.emptyDangerResults; }));
        });
        return Promise.all(__spreadArray([
            this.sendInlineReview(git, inlineResultsForReview)
                .then(function (_r) { return DangerResults_1.emptyDangerResults; })
                .catch(function (_e) {
                return inlineResultsForReview
                    .map(function (inlineResult) { return (0, DangerResults_1.inlineResultsIntoResults)(inlineResult); })
                    .reduce(DangerResults_1.mergeResults, emptyResult);
            })
        ], commentPromises, true)).then(function (dangerResults) {
            return new Promise(function (resolve) {
                resolve(dangerResults.reduce(function (acc, r) { return (0, DangerResults_1.mergeResults)(acc, r); }, emptyResult));
            });
        });
    };
    Executor.prototype.sendInlineReview = function (git, inlineResultsForReview) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (inlineResultsForReview.length === 0 || typeof this.platform.createInlineReview !== "function") {
                            return [2 /*return*/, DangerResults_1.emptyDangerResults];
                        }
                        return [4 /*yield*/, this.platform.createInlineReview(git, inlineResultsForReview.map(function (result) { return ({
                                comment: _this.inlineCommentTemplate(result),
                                path: result.file,
                                line: result.line,
                            }); }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Executor.prototype.sendInlineComment = function (git, inlineResults) {
        return __awaiter(this, void 0, void 0, function () {
            var comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        comment = this.inlineCommentTemplate(inlineResults);
                        return [4 /*yield*/, this.platform.createInlineComment(git, comment, inlineResults.file, inlineResults.line)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Executor.prototype.updateInlineComment = function (inlineResults, previousComment) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = this.inlineCommentTemplate(inlineResults);
                        // If generated body is exactly the same as current comment we don't send an API request
                        if (body == previousComment.body) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.platform.updateInlineComment(body, previousComment.id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Executor.prototype.deleteInlineComment = function (comment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.deleteInlineComment(comment.id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Executor.prototype.inlineCommentTemplate = function (inlineResults) {
        var results = (0, DangerResults_1.inlineResultsIntoResults)(inlineResults);
        var comment;
        if (process.env["DANGER_BITBUCKETSERVER_HOST"]) {
            comment = (0, bitbucketServerTemplate_1.inlineTemplate)(this.options.dangerID, results, inlineResults.file, inlineResults.line);
        }
        else if (process.env["DANGER_BITBUCKETCLOUD_OAUTH_KEY"] || process.env["DANGER_BITBUCKETCLOUD_USERNAME"]) {
            comment = (0, bitbucketCloudTemplate_1.inlineTemplate)(this.options.dangerID, results, inlineResults.file, inlineResults.line);
        }
        else {
            comment = (0, githubIssueTemplate_1.inlineTemplate)(this.options.dangerID, results, inlineResults.file, inlineResults.line);
        }
        return comment;
    };
    /**
     * Takes an error (maybe a bad eval) and provides a DangerResults compatible object
     * @param error Any JS error
     */
    Executor.prototype.resultsForError = function (error) {
        // Need a failing error, otherwise it won't fail CI.
        this.logErr(chalk_1.default.red("Danger has failed to run"));
        this.logErr(error);
        return {
            fails: [{ message: "Running your Dangerfile has Failed" }],
            warnings: [],
            messages: [],
            markdowns: [{ message: (0, exceptionRaisedTemplate_1.default)(error) }],
        };
    };
    return Executor;
}());
exports.Executor = Executor;
var messageForResults = function (results) {
    if (!results.fails.length && !results.warnings.length) {
        return "All green. ".concat((0, DangerUtils_1.compliment)());
    }
    else {
        if (process.env["DANGER_BITBUCKETSERVER_HOST"]) {
            return bitbucketServerTemplate_1.messageForResultWithIssues;
        }
        else if (process.env["DANGER_BITBUCKETCLOUD_OAUTH_KEY"] || process.env["DANGER_BITBUCKETCLOUD_USERNAME"]) {
            return bitbucketCloudTemplate_1.messageForResultWithIssues;
        }
        else {
            return githubIssueTemplate_1.messageForResultWithIssues;
        }
    }
};
//# sourceMappingURL=Executor.js.map