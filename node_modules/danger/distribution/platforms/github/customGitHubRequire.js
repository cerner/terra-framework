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
exports.customGitHubResolveRequest = exports.shouldUseGitHubOverride = exports.getGitHubFileContents = exports.getGitHubFileContentsFromLocation = exports.dangerRepresentationForPath = exports.dangerPrefix = void 0;
var require_from_string_1 = __importDefault(require("require-from-string"));
var cleanDangerfile_1 = __importDefault(require("../../runner/runners/utils/cleanDangerfile"));
var transpiler_1 = __importDefault(require("../../runner/runners/utils/transpiler"));
var path_1 = require("path");
var debug_1 = __importDefault(require("debug"));
var fetch_1 = require("../../api/fetch");
// This prefix gets stamped on to reference strings when when grabbing via the GH API
exports.dangerPrefix = "peril-downloaded-";
/**
 * Takes a DangerfileReferenceString and lets you know where to find it globally
 * for strings like: artsy/peril-settings/settings.json@branch
 */
var dangerRepresentationForPath = function (value) {
    var hasManySlashes = value.split("/").length > 2;
    var _a = hasManySlashes
        ? value.split("@")[0].split("/")
        : __spreadArray([undefined, undefined], value.split("@")[0].split("/"), true), owner = _a[0], repo = _a[1], pathComponents = _a.slice(2);
    return {
        branch: value.includes("@") ? value.split("@")[1] : "master",
        dangerfilePath: pathComponents.join("/"),
        repoSlug: owner ? "".concat(owner, "/").concat(repo) : undefined,
        referenceString: value,
    };
};
exports.dangerRepresentationForPath = dangerRepresentationForPath;
function getGitHubFileContentsFromLocation(token, location, defaultRepo) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getGitHubFileContents(token, location.repoSlug || defaultRepo, location.dangerfilePath, location.branch)];
        });
    });
}
exports.getGitHubFileContentsFromLocation = getGitHubFileContentsFromLocation;
/**
 * This function allows you to get the contents of a file from GitHub,
 * given a token.
 * Returns either the contents or an empty string.
 */
function getGitHubFileContents(token, repoSlug, path, ref, showError) {
    if (showError === void 0) { showError = true; }
    return __awaiter(this, void 0, void 0, function () {
        var refString, containsBase, baseUrl, URLPath, url, res, data, buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    refString = ref ? "?ref=".concat(ref) : "";
                    containsBase = path.startsWith("http");
                    baseUrl = process.env["DANGER_GITHUB_API_BASE_URL"] || process.env["GITHUB_URL"] || "https://api.github.com";
                    URLPath = "repos/".concat(repoSlug, "/contents/").concat(path).concat(refString);
                    url = containsBase ? URLPath : "".concat(baseUrl, "/").concat(URLPath);
                    return [4 /*yield*/, (0, fetch_1.api)(url, {
                            headers: { Authorization: "bearer ".concat(token) },
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        buffer = Buffer.from(data.content, "base64");
                        return [2 /*return*/, buffer.toString()];
                    }
                    else {
                        if (showError) {
                            (0, debug_1.default)("res: " + res.url);
                            (0, debug_1.default)("Getting GitHub file failed: " + JSON.stringify(data));
                        }
                        return [2 /*return*/, ""];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getGitHubFileContents = getGitHubFileContents;
// Setup a callback used to determine whether a specific `require` invocation
// needs to be overridden.
var shouldUseGitHubOverride = function (request, parent) {
    // Is it a from a file we're handling, and is it relative?
    if (parent.filename.startsWith(exports.dangerPrefix) && request.startsWith(".")) {
        return true;
    }
    // Basically any import that's not a relative import from a Dangerfile
    return false;
};
exports.shouldUseGitHubOverride = shouldUseGitHubOverride;
// We want to handle relative imports inside a Dangerfile, this custom version of the require func
// returns a Promise instead of the normal object, and so you would use `await require("./thing")`
// Which TypeScript handles just as you'd expect
var customGitHubResolveRequest = function (token) { return function (request, parent) { return __awaiter(void 0, void 0, void 0, function () {
    var prefixLessParent, dangerRep, localPath, extensions, _i, extensions_1, ext, newReferenceString, newRep, dangerfileContent, newPerilFileReference, newDangerfile, transpiled;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                prefixLessParent = parent.filename.replace(exports.dangerPrefix, "");
                (0, debug_1.default)("Grabbing relative import \"".concat(request, "\" to ").concat(prefixLessParent, "."));
                dangerRep = (0, exports.dangerRepresentationForPath)(prefixLessParent);
                localPath = path_1.posix.resolve((0, path_1.dirname)(dangerRep.dangerfilePath), request).replace(path_1.posix.resolve(""), "");
                extensions = (0, path_1.extname)(prefixLessParent) === ".ts" ? [".ts", ".js"] : [".js", ".ts"];
                _i = 0, extensions_1 = extensions;
                _a.label = 1;
            case 1:
                if (!(_i < extensions_1.length)) return [3 /*break*/, 4];
                ext = extensions_1[_i];
                newReferenceString = prefixLessParent.replace(dangerRep.dangerfilePath, localPath) + ext;
                newRep = (0, exports.dangerRepresentationForPath)(newReferenceString);
                // Not supported right now
                if (!newRep.repoSlug) {
                    throw new Error("Relative imports don't work without a repo slug in the dangerfile reference.");
                }
                return [4 /*yield*/, getGitHubFileContentsFromLocation(token, newRep, newRep.repoSlug)];
            case 2:
                dangerfileContent = _a.sent();
                if (dangerfileContent) {
                    newPerilFileReference = "".concat(exports.dangerPrefix).concat(newReferenceString);
                    newDangerfile = (0, cleanDangerfile_1.default)(dangerfileContent);
                    transpiled = (0, transpiler_1.default)(newDangerfile, newPerilFileReference);
                    return [2 /*return*/, (0, require_from_string_1.default)(transpiled, newPerilFileReference)];
                }
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: 
            // User error in the path basically
            throw new Error("Could not find '".concat(request, "' as a relative import from ").concat(prefixLessParent, ". Does ").concat(localPath, " exist in the repo?"));
        }
    });
}); }; };
exports.customGitHubResolveRequest = customGitHubResolveRequest;
//# sourceMappingURL=customGitHubRequire.js.map