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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bitBucketServerGitDSL = void 0;
var gitJSONToGitDSL_1 = require("../git/gitJSONToGitDSL");
var debug_1 = require("../../debug");
var d = (0, debug_1.debug)("BitBucketServerGit");
/**
 * Returns the response for the new comment
 *
 * @param {BitBucketServerCommit} ghCommit A BitBucketServer based commit
 * @returns {GitCommit} a Git commit representation without GH metadata
 */
function bitBucketServerCommitToGitCommit(bbsCommit, repoMetadata, host) {
    var url = "".concat(host, "/").concat(repoMetadata.repoSlug, "/commits/").concat(bbsCommit.id);
    return {
        sha: bbsCommit.id,
        parents: bbsCommit.parents.map(function (p) { return p.id; }),
        author: {
            email: bbsCommit.author.emailAddress,
            name: bbsCommit.author.name,
            date: new Date(bbsCommit.authorTimestamp).toISOString(),
        },
        committer: bbsCommit.committer
            ? {
                email: bbsCommit.committer.emailAddress,
                name: bbsCommit.committer.name,
                date: new Date(bbsCommit.committerTimestamp).toISOString(),
            }
            : {
                email: bbsCommit.author.emailAddress,
                name: bbsCommit.author.name,
                date: new Date(bbsCommit.authorTimestamp).toISOString(),
            },
        message: bbsCommit.message,
        tree: null,
        url: url,
    };
}
function gitDSLForBitBucketServer(api) {
    return __awaiter(this, void 0, void 0, function () {
        var changes, gitCommits, commits;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.getPullRequestChanges()];
                case 1:
                    changes = _a.sent();
                    return [4 /*yield*/, api.getPullRequestCommits()];
                case 2:
                    gitCommits = _a.sent();
                    commits = gitCommits.map(function (commit) {
                        return bitBucketServerCommitToGitCommit(commit, api.repoMetadata, api.repoCredentials.host);
                    });
                    return [2 /*return*/, bitBucketServerChangesToGitJSONDSL(changes, commits)];
            }
        });
    });
}
exports.default = gitDSLForBitBucketServer;
var bitBucketServerGitDSL = function (bitBucketServer, json, bitBucketServerAPI) {
    var config = {
        repo: "projects/".concat(bitBucketServer.pr.fromRef.repository.project.key, "/") +
            "repos/".concat(bitBucketServer.pr.fromRef.repository.slug),
        baseSHA: bitBucketServer.pr.toRef.latestCommit,
        headSHA: bitBucketServer.pr.fromRef.latestCommit,
        getFileContents: bitBucketServerAPI.getFileContents,
        getStructuredDiffForFile: function (base, head, filename) { return __awaiter(void 0, void 0, void 0, function () {
            var diff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bitBucketServerAPI.getStructuredDiffForFile(base, head, filename)];
                    case 1:
                        diff = _a.sent();
                        return [2 /*return*/, bitBucketServerDiffToGitStructuredDiff(diff)];
                }
            });
        }); },
    };
    d("Setting up git DSL with: ", config);
    return (0, gitJSONToGitDSL_1.gitJSONToGitDSL)(json, config);
};
exports.bitBucketServerGitDSL = bitBucketServerGitDSL;
var bitBucketServerChangesToGitJSONDSL = function (changes, commits) {
    return changes.reduce(function (git, value) {
        // See: https://docs.atlassian.com/bitbucket-server/javadoc/4.1.0/api/reference/com/atlassian/bitbucket/content/ChangeType.html
        switch (value.type) {
            case "ADD":
            case "COPY":
                return __assign(__assign({}, git), { created_files: __spreadArray(__spreadArray([], git.created_files, true), [value.path.toString], false) });
            case "MODIFY":
                return __assign(__assign({}, git), { modified_files: __spreadArray(__spreadArray([], git.modified_files, true), [value.path.toString], false) });
            case "MOVE":
                return __assign(__assign({}, git), { created_files: __spreadArray(__spreadArray([], git.created_files, true), [value.path.toString], false), deleted_files: __spreadArray(__spreadArray([], git.deleted_files, true), [value.srcPath.toString], false) });
            case "DELETE":
                return __assign(__assign({}, git), { deleted_files: __spreadArray(__spreadArray([], git.deleted_files, true), [value.path.toString], false) });
            default:
                return __assign({}, git);
        }
    }, {
        modified_files: [],
        created_files: [],
        deleted_files: [],
        commits: commits,
    });
};
var bitBucketServerDiffToGitStructuredDiff = function (diffs) {
    // We need all changed lines with it's type. It will convert hunk segment lines to flatten changed lines.
    var segmentValues = { ADDED: "add", CONTEXT: "normal", REMOVED: "del" };
    return diffs.map(function (diff) { return ({
        from: diff.source && diff.source.toString,
        to: diff.destination && diff.destination.toString,
        chunks: diff.hunks &&
            diff.hunks.map(function (hunk) { return ({
                content: "@@ -".concat(hunk.sourceLine, ",").concat(hunk.sourceSpan, " +").concat(hunk.destinationLine, ",").concat(hunk.destinationSpan, " @@"),
                oldStart: hunk.sourceLine,
                oldLines: hunk.sourceSpan,
                newStart: hunk.destinationLine,
                newLines: hunk.destinationSpan,
                changes: hunk.segments
                    .map(function (segment) {
                    var type = segmentValues[segment.type];
                    if (type === "add") {
                        return segment.lines.map(function (line) {
                            return {
                                type: type,
                                add: true,
                                content: line.line,
                                ln: line.destination,
                            };
                        });
                    }
                    if (type === "del") {
                        return segment.lines.map(function (line) {
                            return {
                                type: type,
                                del: true,
                                content: line.line,
                                ln: line.source,
                            };
                        });
                    }
                    if (type === "normal") {
                        return segment.lines.map(function (line) {
                            return {
                                type: type,
                                normal: true,
                                content: line.line,
                                ln1: line.source,
                                ln2: line.destination,
                            };
                        });
                    }
                    // unknown type: ${type}
                    return [];
                })
                    .reduce(function (a, b) { return a.concat(b); }, []),
            }); }),
    }); });
};
//# sourceMappingURL=BitBucketServerGit.js.map