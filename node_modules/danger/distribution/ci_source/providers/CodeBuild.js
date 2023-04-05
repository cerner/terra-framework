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
exports.CodeBuild = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * CI Setup
 *
 * In CodeBuild, make sure to correctly forward CODEBUILD_BUILD_ID, CODEBUILD_SOURCE_VERSION, CODEBUILD_SOURCE_REPO_URL and DANGER_GITHUB_API_TOKEN.
 *
 * Token Setup
 *
 * Add your `DANGER_GITHUB_API_TOKEN` to your project. Edit -> Environment -> Additional configuration -> Create a parameter
 *
 * Note that currently, there seems to be no totally reliable way to get the branch
 * name from CodeBuild. Sometimes `CODEBUILD_SOURCE_VERSION` contains the
 * PR number in the format pr/123, but not always. Other times it may contain
 * a commit hash. `CODEBUILD_WEBHOOK_TRIGGER` will contain the pr number on the
 * same format, but only for the first event, for subsequent events it should
 * contain the branch number in the format branch/my-branch. So here we attempt
 * to determine the PR number from one of the environment variables and if
 * unsuccessful fall back to calling the API to find the PR for the branch.
 */
var CodeBuild = /** @class */ (function () {
    function CodeBuild(env) {
        this.env = env;
        this.default = { prID: "0" };
    }
    CodeBuild.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getPrId()];
                    case 1:
                        prID = _a.sent();
                        this.default.prID = prID.toString();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CodeBuild.prototype, "name", {
        get: function () {
            return "CodeBuild";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeBuild.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["CODEBUILD_BUILD_ID"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeBuild.prototype, "isPR", {
        get: function () {
            var mustHave = ["CODEBUILD_BUILD_ID", "CODEBUILD_SOURCE_REPO_URL"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && this._isPRRequest();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeBuild.prototype, "pullRequestID", {
        get: function () {
            return this.default.prID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeBuild.prototype, "repoSlug", {
        get: function () {
            return this._prParseUrl();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeBuild.prototype, "repoURL", {
        get: function () {
            return this.env.CODEBUILD_SOURCE_REPO_URL;
        },
        enumerable: false,
        configurable: true
    });
    CodeBuild.prototype._isPRRequest = function () {
        return this.default.prID !== "0";
    };
    CodeBuild.prototype._prParseUrl = function () {
        var prUrl = this.env.CODEBUILD_SOURCE_REPO_URL || "";
        var regexp = new RegExp("([/:])([^/]+/[^/.]+)(?:.git)?$");
        var matches = prUrl.match(regexp);
        return matches ? matches[2] : "";
    };
    CodeBuild.prototype._getPrId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sourceParts, triggerParts, branchName, prId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sourceParts = (this.env.CODEBUILD_SOURCE_VERSION || "").split("/");
                        triggerParts = this.env.CODEBUILD_WEBHOOK_TRIGGER || "";
                        branchName = triggerParts.startsWith("branch/") ? triggerParts.replace("branch/", "") : null;
                        prId = sourceParts[0] === "pr" ? sourceParts[1] : null;
                        if (!prId) {
                            prId = triggerParts.startsWith("pr/") ? triggerParts.replace("pr/", "") : null;
                        }
                        if (!(!prId && branchName)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, ci_source_helpers_1.getPullRequestIDForBranch)(this, this.env, branchName)];
                    case 1:
                        prId = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (isNaN(parseInt(prId))) {
                            return [2 /*return*/, "0"];
                        }
                        return [2 /*return*/, prId];
                }
            });
        });
    };
    return CodeBuild;
}());
exports.CodeBuild = CodeBuild;
//# sourceMappingURL=CodeBuild.js.map