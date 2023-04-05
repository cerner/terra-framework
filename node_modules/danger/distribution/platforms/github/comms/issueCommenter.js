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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubIssueCommenter = exports.findPositionForInlineComment = void 0;
var debug_1 = require("../../../debug");
var d = (0, debug_1.debug)("GitHub::Issue");
/**
 * Finds a position in given diff. This is needed for GitHub API, more on the position finder
 * can be found here: https://developer.github.com/v3/pulls/comments/#create-a-comment
 *
 * @returns {Promise<number>} A number with given position
 */
var findPositionForInlineComment = function (git, line, path) {
    d("Finding position for inline comment." + path + "#" + line);
    return git.structuredDiffForFile(path).then(function (diff) {
        return new Promise(function (resolve, reject) {
            if (diff === undefined) {
                d("Diff not found for inline comment." + path + "#" + line + ". Diff: " + JSON.stringify(diff));
                reject();
            }
            d("Diff found for inline comment, now getting a position." + path + "#" + line + ". Diff: " + JSON.stringify(diff));
            var fileLine = 0;
            for (var _i = 0, _a = diff.chunks; _i < _a.length; _i++) {
                var chunk = _a[_i];
                // Search for a change (that is not a deletion). "ln" is for normal changes, "ln2" for additions,
                // thus need to check for either of them
                var index = chunk.changes.findIndex(function (c) { return c.type != "del" && (c.ln == line || c.ln2 == line); });
                if (index != -1) {
                    fileLine += index + 1;
                    break;
                }
                else {
                    fileLine += chunk.changes.length + 1;
                }
            }
            d("Position found for inline comment: " + fileLine + "." + path + "#" + line);
            resolve(fileLine);
        });
    });
};
exports.findPositionForInlineComment = findPositionForInlineComment;
/**
 * An object whose responsibility is to handle commenting on an issue
 * @param api
 */
var GitHubIssueCommenter = function (api) {
    var d = (0, debug_1.debug)("GitHub::Issue");
    return {
        supportsCommenting: function () { return true; },
        supportsInlineComments: function () { return true; },
        /**
         * Fails the current build, if status setting succeeds
         * then return true.
         */
        updateStatus: function (passed, message, url, dangerID) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, api.updateStatus(passed, message, url, dangerID)];
        }); }); },
        /**
         * Gets inline comments for current PR
         */
        getInlineComments: function (dangerID) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, api.getPullRequestInlineComments(dangerID)];
        }); }); },
        /**
         * Returns the response for the new comment
         *
         * @param {string} comment you want to post
         * @returns {Promise<any>} JSON response of new comment
         */
        createComment: function (comment) { return api.postPRComment(comment); },
        /**
         * Makes an inline comment if possible. If platform can't make an inline comment with given arguments,
         * it returns a promise rejection. (e.g. platform doesn't support inline comments or line was out of diff).
         *
         * @returns {Promise<any>} JSON response of new comment
         */
        createInlineComment: function (git, comment, path, line) {
            var commitId = git.commits[git.commits.length - 1].sha;
            d("Creating inline comment. Commit: " + commitId);
            return (0, exports.findPositionForInlineComment)(git, line, path).then(function (position) {
                return api.postInlinePRComment(comment, commitId, path, position);
            });
        },
        createInlineReview: function (git, comments) {
            var commitId = git.commits[git.commits.length - 1].sha;
            d("Finishing review. Commit: " + commitId);
            return Promise.all(comments.map(function (comment) {
                return (0, exports.findPositionForInlineComment)(git, comment.line, comment.path).then(function (position) { return ({
                    comment: comment.comment,
                    path: comment.path,
                    position: position,
                }); });
            })).then(function (comments) { return api.postInlinePRReview(commitId, comments); });
        },
        /**
         * Updates an inline comment if possible. If platform can't update an inline comment,
         * it returns a promise rejection. (e.g. platform doesn't support inline comments or line was out of diff).
         *
         * @returns {Promise<any>} JSON response of new comment
         */
        updateInlineComment: function (comment, commentId) {
            d("Updating inline comment. CommentId: " + commentId + "comment: " + comment);
            return api.updateInlinePRComment(comment, commentId);
        },
        /**
         * Deletes the main Danger comment, used when you have
         * fixed all your failures.
         *
         * @returns {Promise<boolean>} did it work?
         */
        deleteMainComment: function (dangerID) { return __awaiter(void 0, void 0, void 0, function () {
            var commentIDs, _i, commentIDs_1, commentID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api.getDangerCommentIDs(dangerID)];
                    case 1:
                        commentIDs = _a.sent();
                        _i = 0, commentIDs_1 = commentIDs;
                        _a.label = 2;
                    case 2:
                        if (!(_i < commentIDs_1.length)) return [3 /*break*/, 5];
                        commentID = commentIDs_1[_i];
                        d("Deleting comment ".concat(commentID));
                        return [4 /*yield*/, api.deleteCommentWithID(commentID)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, commentIDs.length > 0];
                }
            });
        }); },
        /**
         * Deletes an inline comment, used when you have
         * fixed all your failures.
         *
         * @returns {Promise<boolean>} did it work?
         */
        deleteInlineComment: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, api.deleteInlineCommentWithID(id)];
        }); }); },
        /**
         * Either updates an existing comment, or makes a new one
         *
         * @param {string} newComment string value of comment
         * @returns {Promise<boolean>} success of posting comment
         */
        updateOrCreateComment: function (dangerID, newComment) { return __awaiter(void 0, void 0, void 0, function () {
            var commentIDs, issue, _i, commentIDs_2, commentID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api.getDangerCommentIDs(dangerID)];
                    case 1:
                        commentIDs = _a.sent();
                        issue = null;
                        if (!commentIDs.length) return [3 /*break*/, 7];
                        // Edit the first comment
                        d("Updating comment ".concat(commentIDs[0]));
                        return [4 /*yield*/, api.updateCommentWithID(commentIDs[0], newComment)
                            // Delete any dupes
                        ];
                    case 2:
                        issue = _a.sent();
                        _i = 0, commentIDs_2 = commentIDs;
                        _a.label = 3;
                    case 3:
                        if (!(_i < commentIDs_2.length)) return [3 /*break*/, 6];
                        commentID = commentIDs_2[_i];
                        if (!(commentID !== commentIDs[0])) return [3 /*break*/, 5];
                        d("Deleting comment ".concat(commentID));
                        return [4 /*yield*/, api.deleteCommentWithID(commentID)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        d("Creating new comment");
                        return [4 /*yield*/, api.postPRComment(newComment)];
                    case 8:
                        issue = _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/, issue && issue.html_url];
                }
            });
        }); },
    };
};
exports.GitHubIssueCommenter = GitHubIssueCommenter;
//# sourceMappingURL=issueCommenter.js.map