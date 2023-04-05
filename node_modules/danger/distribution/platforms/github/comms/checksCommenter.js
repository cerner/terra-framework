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
exports.tweetSizedResultsFromResults = exports.GitHubChecksCommenter = exports.getCustomAppAuthFromEnv = exports.getAuthWhenUsingDangerJSApp = void 0;
var DangerResults_1 = require("../../../dsl/DangerResults");
var resultsToCheck_1 = require("./checks/resultsToCheck");
var githubAppSupport_1 = require("./checks/githubAppSupport");
var debug_1 = require("../../../debug");
var DangerUtils_1 = require("../../../runner/DangerUtils");
var d = (0, debug_1.debug)("GitHub::Checks");
var getAuthWhenUsingDangerJSApp = function () {
    var appID = "12316";
    var key = "-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEA00hv5YqXgqv2A60eo7+fQtwRYjN5BYu3Xgm0L3s5FZdup7pF\nL0oHruUwsDi6Z6MKgyKgnKBZKUXoUgqrMdhbka9rLfGtGp35SBjp+xgXNUKuwwks\ng0tIoLkPzDF2OiG3UB+vPWOBRqdMtA5dZTPZkz5xfBWivJBacVqcuf6j0nwRgv9q\npypIPWnmNZ2/y6jQfXnRubi7k72XSpazTmYx+2EoeMwkpGV+jPy/vd8ODr/n+5wI\nLAQd+24VEn7ixTW8WU9RUVA2a+kCoyGMpp+Zof9YdJmGE9cn23EAr8usDXvWG/3h\nRJ8tSqV/EyLgMRDk+ACMBu7WU4gKXXqkmjCbQwIDAQABAoIBAEDTXOHE4C/LqzP9\njgUX6jmNZBgJSvyUnbJQr+RRnnYtfFoiINAdmrXixEmNXkQmFjeeDEGCQVkUhe+G\nLnigtZfBhtUV7dLY3X9thXzxK03AI/bbfbjbBHGr1lkEZA36AlCnKBFh0mxnMHWe\nYrGGcx9mbVNxH/lTISzebG/03TbbI5y5tcaINoLs//M4KTS/boEBHBG+nTiKpMo+\n39P+LRui9mNYyCYxZJDgrpUOIvyyHhNYPHTlOamzesgIsD59/OIxmMT0xu9EZuZe\nY4mbnU1tgBmZNFSDih/R6m3TsFB6PA2hjkHbiHVa6q/+Nshq9P/2pZJzz2R0aMJT\njLoTlqECgYEA6bwIU0xKIMzvaZuEkkaIn4vT0uPr6bSZz1LXQWXkOV76SBL36z8T\np7Q5yOBy1cd6m6fevaOHg2o16XVyIJtUOrSI4WzGaKvcjbL0jpwHJSrS79XY4YmS\neZrVZkyNwmCUY9NG3Y3F1yJQwO0BeUw9Dllr23p/4rhnIEjovL1XN3cCgYEA52jj\nz0sDOmT5wzttZwC2bfJQu7sHwNKQIfDgkht1RtwOpg8qSzuKouzcbwacpiN006rK\nr9wIg1vv89tWfout7WYODQPJXAi6ImeHDe4WnCx7Uq7UBUaXMk8e9gFJPec7UCp+\n8o9b+wqZSYtoqV5P+bh0iVKDmojmYtbyXqZoBZUCgYB3IyXnN4KtV2hNHz0ixhsL\nn903qH9uX2Tq/WHE7ue2qofORwThfwRIvh+aGXXPK99+CcIKTZlcTb3vIrMqlaII\nTk9a//PeFIPWIjpvmm417q8YGpty0om7vEU74Jd9VXctrtp3QbVvJAmfXO8cYdTZ\nRJEqjTU0XiQKm78tvSEAnwKBgDeDmDMggbO+iZRma0Zsi1cw7GE86w089krOKHGk\nmKvZGsKHnNPTgty3CeKwqV/J3brxnBI4LOqmYZgUpFlTVPRAqVpB8Epd5ZlfUKzs\n0wvAOA2L1100pAzzoi/N+y4YjMgcibvS3HQLBN75zK/k6ja0I3DWFLA761kGy7od\nHZNJAoGAAifMxN9QvRzbkyeqoXvKjZB7CLQdiBIMw7/sZSY6gZWrdDkaKwRIgWdD\nfJP+6fi4oAGuOOiB1oHPMgu4WS6Bb1GnJUgEV0iIGTJImEUTzMlkek189JjXMnL2\nOzjqWcWNngSrmpPu6fHuQswzluYuJgU+RnC1vS/y0J00wE4aZgs=\n-----END RSA PRIVATE KEY-----\n";
    var installID = process.env.DANGER_JS_APP_INSTALL_ID;
    return {
        appID: appID,
        key: key,
        installID: installID,
    };
};
exports.getAuthWhenUsingDangerJSApp = getAuthWhenUsingDangerJSApp;
var getCustomAppAuthFromEnv = function () {
    var appID = process.env.DANGER_GITHUB_APP_ID || process.env.PERIL_INTEGRATION_ID;
    var key = process.env.DANGER_GITHUB_APP_PRIVATE_SIGNING_KEY || process.env.PRIVATE_GITHUB_SIGNING_KEY;
    var installID = process.env.DANGER_GITHUB_APP_INSTALL_ID || process.env.PERIL_ORG_INSTALLATION_ID;
    return {
        appID: appID,
        key: key,
        installID: installID,
    };
};
exports.getCustomAppAuthFromEnv = getCustomAppAuthFromEnv;
var canUseChecks = function (token) {
    // An access token for an app looks like: v1.a06e8953d69edf05f06d61ab016ee80ab4b088ca
    if (token && token.startsWith("v1.")) {
        return true;
    }
    // Are you using a custom GH app manually?
    var custom = (0, exports.getCustomAppAuthFromEnv)();
    if (custom.appID && custom.key && custom.installID) {
        return true;
    }
    // Are you using the Danger JS app?
    var dangerApp = (0, exports.getAuthWhenUsingDangerJSApp)();
    if (dangerApp.appID && dangerApp.key && dangerApp.installID) {
        return true;
    }
    d("Not using the checks API for GitHub");
    return false;
};
/**
 * An object whose responsibility is to handle commenting on an issue
 * @param api
 */
var GitHubChecksCommenter = function (api) {
    if (!canUseChecks(api.token)) {
        return undefined;
    }
    return {
        platformResultsPreMapper: function (results, options, ciCommitHash) { return __awaiter(void 0, void 0, void 0, function () {
            var token, custom, returnedResults, pr, checkData, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Does nothing if you disable checks support
                        if (options.disableGitHubChecksSupport) {
                            return [2 /*return*/, results];
                        }
                        token = api.token;
                        if (!(!token || !token.startsWith("v1."))) return [3 /*break*/, 2];
                        custom = process.env.DANGER_JS_APP_INSTALL_ID ? (0, exports.getAuthWhenUsingDangerJSApp)() : (0, exports.getCustomAppAuthFromEnv)();
                        return [4 /*yield*/, (0, githubAppSupport_1.getAccessTokenForInstallation)(custom.appID, parseInt(custom.installID), custom.key)];
                    case 1:
                        token = _a.sent();
                        d("Created a custom access token: ", [custom.appID, parseInt(custom.installID), custom.key, token]);
                        _a.label = 2;
                    case 2:
                        returnedResults = results;
                        d("Getting PR details for checks");
                        return [4 /*yield*/, api.getPullRequestInfo()];
                    case 3:
                        pr = _a.sent();
                        return [4 /*yield*/, (0, resultsToCheck_1.resultsToCheck)(results, options, pr, api.getExternalAPI(), ciCommitHash)];
                    case 4:
                        checkData = _a.sent();
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, api.postCheckRun(checkData, token)];
                    case 6:
                        response = _a.sent();
                        returnedResults = (0, exports.tweetSizedResultsFromResults)(results, response);
                        d("Got response on the checks API");
                        d(JSON.stringify(response));
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        d("Check Creation failed with:");
                        d(JSON.stringify(error_1));
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/, returnedResults];
                }
            });
        }); },
    };
};
exports.GitHubChecksCommenter = GitHubChecksCommenter;
var tweetSizedResultsFromResults = function (results, checksResponse) {
    var allowMarkdowns = (0, DangerResults_1.isMarkdownOnlyResults)(results);
    var isEmpty = (0, DangerResults_1.isEmptyResults)(results);
    if (allowMarkdowns || isEmpty) {
        return results;
    }
    return {
        warnings: [],
        messages: [],
        fails: [],
        markdowns: [
            {
                message: "Danger run resulted in " +
                    messageFromResults(results) +
                    "; to find out more, see the [checks page](".concat(checksResponse.html_url, ")."),
            },
        ],
    };
};
exports.tweetSizedResultsFromResults = tweetSizedResultsFromResults;
var messageFromResults = function (results) {
    var appendS = function (arr) { return (arr.length === 1 ? "" : "s"); };
    var makeString = function (name, arr) {
        return arr.length ? "".concat(arr.length, " ").concat(name.substring(0, name.length - 1)).concat(appendS(arr)) : null;
    };
    var newMessageComponents = Object.keys(results)
        .map(function (key) { return makeString(key, results[key]); })
        .filter(Boolean);
    return (0, DangerUtils_1.sentence)(newMessageComponents);
};
//# sourceMappingURL=checksCommenter.js.map