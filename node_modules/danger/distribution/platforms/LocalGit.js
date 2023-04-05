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
exports.LocalGit = void 0;
var gitJSONToGitDSL_1 = require("./git/gitJSONToGitDSL");
var diffToGitJSONDSL_1 = require("./git/diffToGitJSONDSL");
var localGetDiff_1 = require("./git/localGetDiff");
var localGetFileAtSHA_1 = require("./git/localGetFileAtSHA");
var localGetCommits_1 = require("./git/localGetCommits");
var fs_1 = require("fs");
var LocalGit = /** @class */ (function () {
    function LocalGit(options) {
        this.options = options;
        this.getFileContents = function (path) { return new Promise(function (res) { return res((0, fs_1.readFileSync)(path, "utf8")); }); };
        this.name = "local git";
    }
    LocalGit.prototype.getGitDiff = function () {
        return __awaiter(this, void 0, void 0, function () {
            var base, head, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.gitDiff) {
                            return [2 /*return*/, this.gitDiff];
                        }
                        base = this.options.base || "master";
                        head = "HEAD";
                        _a = this;
                        return [4 /*yield*/, (0, localGetDiff_1.localGetDiff)(base, head, this.options.staging)];
                    case 1:
                        _a.gitDiff = _b.sent();
                        return [2 /*return*/, this.gitDiff];
                }
            });
        });
    };
    LocalGit.prototype.validateThereAreChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            var diff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getGitDiff()];
                    case 1:
                        diff = _a.sent();
                        return [2 /*return*/, diff.trim().length > 0];
                }
            });
        });
    };
    LocalGit.prototype.getPlatformReviewDSLRepresentation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    LocalGit.prototype.getPlatformGitRepresentation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var base, head, diff, commits, gitJSON, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base = this.options.base || "master";
                        head = "HEAD";
                        return [4 /*yield*/, this.getGitDiff()];
                    case 1:
                        diff = _a.sent();
                        return [4 /*yield*/, (0, localGetCommits_1.localGetCommits)(base, head)];
                    case 2:
                        commits = _a.sent();
                        gitJSON = (0, diffToGitJSONDSL_1.diffToGitJSONDSL)(diff, commits);
                        config = {
                            repo: process.cwd(),
                            staging: this.options.staging || false,
                            baseSHA: this.options.base || "master",
                            headSHA: "HEAD",
                            getFileContents: localGetFileAtSHA_1.localGetFileAtSHA,
                            getFullDiff: localGetDiff_1.localGetDiff,
                        };
                        return [2 /*return*/, (0, gitJSONToGitDSL_1.gitJSONToGitDSL)(gitJSON, config)];
                }
            });
        });
    };
    LocalGit.prototype.getInlineComments = function (_) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, []];
            });
        });
    };
    LocalGit.prototype.supportsCommenting = function () {
        return false;
    };
    LocalGit.prototype.supportsInlineComments = function () {
        return true;
    };
    LocalGit.prototype.updateOrCreateComment = function (_dangerID, _newComment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, undefined];
            });
        });
    };
    LocalGit.prototype.createComment = function (_comment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    LocalGit.prototype.createInlineComment = function (_git, _comment, _path, _line) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    LocalGit.prototype.updateInlineComment = function (_comment, _commentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    LocalGit.prototype.deleteInlineComment = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    LocalGit.prototype.deleteMainComment = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    LocalGit.prototype.editMainComment = function (_comment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    LocalGit.prototype.updateStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    LocalGit.prototype.getReviewInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    return LocalGit;
}());
exports.LocalGit = LocalGit;
//# sourceMappingURL=LocalGit.js.map