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
exports.bitbucketServerJSONToBitBucketServerDSL = exports.BitBucketServer = void 0;
var BitBucketServerGit_1 = __importDefault(require("./bitbucket_server/BitBucketServerGit"));
var debug_1 = require("../debug");
/** Handles conforming to the Platform Interface for BitBucketServer, API work is handle by BitBucketServerAPI */
var BitBucketServer = /** @class */ (function () {
    function BitBucketServer(api) {
        var _this = this;
        this.api = api;
        this.d = (0, debug_1.debug)("BitBucketServer");
        /**
         * Get the Code Review description metadata
         *
         * @returns {Promise<any>} JSON representation
         */
        this.getReviewInfo = function () { return _this.api.getPullRequestInfo(); };
        /**
         * Get the Code Review diff representation
         *
         * @returns {Promise<GitDSL>} the git DSL
         */
        this.getPlatformGitRepresentation = function () { return (0, BitBucketServerGit_1.default)(_this.api); };
        /**
         * Gets inline comments for current PR
         */
        this.getInlineComments = function (dangerID) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.api.getDangerInlineComments(dangerID)
                /**
                 * Fails the current build, if status setting succeeds
                 * then return true.
                 */
            ];
        }); }); };
        /**
         * Fails the current build, if status setting succeeds
         * then return true.
         */
        this.updateStatus = function (passed, message, url, dangerID, ciCommitHash) { return __awaiter(_this, void 0, void 0, function () {
            var pr, latestCommit, state, name, key, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getPullRequestInfo()];
                    case 1:
                        pr = _a.sent();
                        latestCommit = ciCommitHash || pr.fromRef.latestCommit;
                        state = passed ? "SUCCESSFUL" : "FAILED";
                        if (passed === "pending") {
                            state = "INPROGRESS";
                        }
                        name = "Danger";
                        key = "danger.systems";
                        if (process.env["PERIL_INTEGRATION_ID"]) {
                            name = "Peril";
                        }
                        else if (dangerID) {
                            name = dangerID;
                            key = dangerID;
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.api.postBuildStatus(latestCommit, {
                                state: state,
                                key: key,
                                name: name,
                                url: url || "http://danger.systems/js",
                                description: message,
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        /**
         * Returns the `bitBucket_server` object on the Danger DSL
         *
         * @returns {Promise<BitBucketServerDSL>} JSON response of the DSL
         */
        this.getPlatformReviewDSLRepresentation = function () { return __awaiter(_this, void 0, void 0, function () {
            var pr, _a, commits, comments, activities, issues;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getReviewInfo()];
                    case 1:
                        pr = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        process.exitCode = 1;
                        throw "\n        Could not find pull request information,\n        perhaps Danger does not have permission to access the repo.\n      ";
                    case 3: return [4 /*yield*/, this.api.getPullRequestCommits()];
                    case 4:
                        commits = _b.sent();
                        return [4 /*yield*/, this.api.getPullRequestComments()];
                    case 5:
                        comments = _b.sent();
                        return [4 /*yield*/, this.api.getPullRequestActivities()];
                    case 6:
                        activities = _b.sent();
                        return [4 /*yield*/, this.api.getIssues()];
                    case 7:
                        issues = _b.sent();
                        return [2 /*return*/, {
                                metadata: this.api.repoMetadata,
                                pr: pr,
                                commits: commits,
                                comments: comments,
                                activities: activities,
                                issues: issues,
                            }];
                }
            });
        }); };
        /**
         * Returns the response for the new comment
         *
         * @param {string} comment you want to post
         * @returns {Promise<any>} JSON response of new comment
         */
        this.createComment = function (comment) { return _this.api.postPRComment(comment); };
        /**
         * Makes an inline comment if possible. If platform can't make an inline comment with given arguments,
         * it returns a promise rejection. (e.g. platform doesn't support inline comments or line was out of diff).
         *
         * @returns {Promise<any>} JSON response of new comment
         */
        this.createInlineComment = function (git, comment, path, line) {
            if (!_this.supportsInlineComments) {
                return new Promise(function (_resolve, reject) { return reject(); });
            }
            return _this.findTypeOfLine(git, line, path).then(function (type) {
                return _this.api.postInlinePRComment(comment, line, type, path);
            });
        };
        /**
         * Finds type of line in given diff. This is needed for Bitbucket Server API
         *
         * @returns {Promise<string>} A string with type of line
         */
        this.findTypeOfLine = function (git, line, path) {
            return git.structuredDiffForFile(path).then(function (diff) {
                return new Promise(function (resolve, reject) {
                    if (diff === undefined) {
                        _this.d("Diff not found for inline comment." + path + "#" + line + ". Diff: " + JSON.stringify(diff));
                        reject();
                    }
                    var change;
                    for (var _i = 0, _a = diff.chunks; _i < _a.length; _i++) {
                        var chunk = _a[_i];
                        // Search for a change (that is not a deletion) and with given line. We want to look only for destination lines of a change
                        change = chunk.changes.find(function (c) { return (c.type === "normal" && c.ln2 === line) || (c.type === "add" && c.ln === line); });
                        break;
                    }
                    if (change === undefined) {
                        _this.d("change not found for inline comment line " + path + "#" + line + ".");
                        reject();
                    }
                    else {
                        resolve(change.type);
                    }
                });
            });
        };
        /**
         * Updates an inline comment if possible. If platform can't update an inline comment,
         * it returns a promise rejection. (e.g. platform doesn't support inline comments or line was out of diff).
         *
         * @returns {Promise<any>} JSON response of new comment
         */
        this.updateInlineComment = function (comment, commentId) { return __awaiter(_this, void 0, void 0, function () {
            var activities, updateComment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.supportsInlineComments) {
                            return [2 /*return*/, new Promise(function (_resolve, reject) { return reject(); })];
                        }
                        return [4 /*yield*/, this.api.getPullRequestComments()];
                    case 1:
                        activities = _a.sent();
                        updateComment = activities
                            .filter(function (activity) { return activity.commentAnchor; })
                            .map(function (activity) { return activity.comment; })
                            .filter(Boolean)
                            .find(function (comment) { return comment.id.toString() == commentId; });
                        return [2 /*return*/, this.api.updateComment(updateComment, comment)];
                }
            });
        }); };
        /**
         * Deletes an inline comment, used when you have
         * fixed all your failures.
         *
         * @returns {Promise<boolean>} did it work?
         */
        this.deleteInlineComment = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var activities, deleteComment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.supportsInlineComments) {
                            return [2 /*return*/, new Promise(function (_resolve, reject) { return reject(); })];
                        }
                        return [4 /*yield*/, this.api.getPullRequestComments()];
                    case 1:
                        activities = _a.sent();
                        deleteComment = activities
                            .filter(function (activity) { return activity.commentAnchor; })
                            .map(function (activity) { return activity.comment; })
                            .filter(Boolean)
                            .find(function (comment) { return comment.id.toString() == id; });
                        return [2 /*return*/, this.api.deleteComment(deleteComment)];
                }
            });
        }); };
        /**
         * Deletes the main Danger comment, used when you have
         * fixed all your failures.
         *
         * @returns {Promise<boolean>} did it work?
         */
        this.deleteMainComment = function (dangerID) { return __awaiter(_this, void 0, void 0, function () {
            var comments, _i, comments_1, comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getDangerComments(dangerID)];
                    case 1:
                        comments = _a.sent();
                        _i = 0, comments_1 = comments;
                        _a.label = 2;
                    case 2:
                        if (!(_i < comments_1.length)) return [3 /*break*/, 5];
                        comment = comments_1[_i];
                        return [4 /*yield*/, this.api.deleteComment(comment)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, comments.length > 0];
                }
            });
        }); };
        this.getFileContents = this.api.getFileContents;
        this.name = "BitBucketServer";
    }
    BitBucketServer.prototype.supportsCommenting = function () {
        return true;
    };
    BitBucketServer.prototype.supportsInlineComments = function () {
        return true;
    };
    /**
     * Either updates an existing comment, or makes a new one
     *
     * @param {string} dangerID the UUID for the run
     * @param {string} newComment string value of comment
     * @returns {Promise<string>} the URL for the comment
     */
    BitBucketServer.prototype.updateOrCreateComment = function (dangerID, newComment) {
        return __awaiter(this, void 0, void 0, function () {
            var comments, issue, _i, comments_2, comment, host, _a, repoSlug, pullRequestID;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.api.getDangerComments(dangerID)];
                    case 1:
                        comments = _b.sent();
                        issue = null;
                        if (!comments.length) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.api.updateComment(comments[0], newComment)
                            // Delete any dupes
                        ];
                    case 2:
                        // Edit the first comment
                        issue = _b.sent();
                        _i = 0, comments_2 = comments;
                        _b.label = 3;
                    case 3:
                        if (!(_i < comments_2.length)) return [3 /*break*/, 6];
                        comment = comments_2[_i];
                        if (!(comment !== comments[0])) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.api.deleteComment(comment)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.createComment(newComment)];
                    case 8:
                        issue = _b.sent();
                        _b.label = 9;
                    case 9:
                        host = this.api.repoCredentials.host;
                        _a = this.api.repoMetadata, repoSlug = _a.repoSlug, pullRequestID = _a.pullRequestID;
                        return [2 /*return*/, issue && issue.id && "".concat(host, "/").concat(repoSlug, "/pull-requests/").concat(pullRequestID, "/overview?commentId=").concat(issue.id)];
                }
            });
        });
    };
    return BitBucketServer;
}());
exports.BitBucketServer = BitBucketServer;
var bitbucketServerJSONToBitBucketServerDSL = function (bitbucket, api) { return (__assign(__assign({}, bitbucket), { api: api })); };
exports.bitbucketServerJSONToBitBucketServerDSL = bitbucketServerJSONToBitBucketServerDSL;
//# sourceMappingURL=BitBucketServer.js.map