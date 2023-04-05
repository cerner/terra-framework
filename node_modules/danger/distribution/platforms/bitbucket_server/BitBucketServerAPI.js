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
exports.BitBucketServerAPI = exports.bitbucketServerRepoCredentialsFromEnv = void 0;
var debug_1 = require("../../debug");
var https_proxy_agent_1 = __importDefault(require("https-proxy-agent"));
var bitbucketServerTemplate_1 = require("../../runner/templates/bitbucketServerTemplate");
var fetch_1 = require("../../api/fetch");
function bitbucketServerRepoCredentialsFromEnv(env) {
    if (!env["DANGER_BITBUCKETSERVER_HOST"]) {
        throw new Error("DANGER_BITBUCKETSERVER_HOST is not set");
    }
    return {
        host: env["DANGER_BITBUCKETSERVER_HOST"],
        username: env["DANGER_BITBUCKETSERVER_USERNAME"],
        password: env["DANGER_BITBUCKETSERVER_PASSWORD"],
        token: env["DANGER_BITBUCKETSERVER_TOKEN"],
    };
}
exports.bitbucketServerRepoCredentialsFromEnv = bitbucketServerRepoCredentialsFromEnv;
/** This represent the BitBucketServer API */
var BitBucketServerAPI = /** @class */ (function () {
    function BitBucketServerAPI(repoMetadata, repoCredentials) {
        var _this = this;
        this.repoMetadata = repoMetadata;
        this.repoCredentials = repoCredentials;
        this.d = (0, debug_1.debug)("BitBucketServerAPI");
        this.getPullRequestsFromBranch = function (branch) { return __awaiter(_this, void 0, void 0, function () {
            var nextPageStart, values, repoSlug, path, res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nextPageStart = 0;
                        values = [];
                        repoSlug = this.repoMetadata.repoSlug;
                        _a.label = 1;
                    case 1:
                        path = "rest/api/1.0/".concat(repoSlug, "/pull-requests?at=refs/heads/").concat(branch, "&withProperties=false&withAttributes=false&start=").concat(nextPageStart);
                        return [4 /*yield*/, this.get(path)];
                    case 2:
                        res = _a.sent();
                        throwIfNotOk(res);
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = (_a.sent());
                        values = values.concat(data.values);
                        if (data.isLastPage) {
                            nextPageStart = null;
                        }
                        else {
                            nextPageStart = data.nextPageStart;
                        }
                        _a.label = 4;
                    case 4:
                        if (nextPageStart !== null) return [3 /*break*/, 1];
                        _a.label = 5;
                    case 5: return [2 /*return*/, values];
                }
            });
        }); };
        this.getPullRequestInfo = function () { return __awaiter(_this, void 0, void 0, function () {
            var path, res, prDSL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.pr) {
                            return [2 /*return*/, this.pr];
                        }
                        path = this.getPRBasePath();
                        return [4 /*yield*/, this.get(path)];
                    case 1:
                        res = _a.sent();
                        throwIfNotOk(res);
                        return [4 /*yield*/, res.json()];
                    case 2:
                        prDSL = (_a.sent());
                        this.pr = prDSL;
                        return [2 /*return*/, prDSL];
                }
            });
        }); };
        this.getPullRequestCommits = function () { return __awaiter(_this, void 0, void 0, function () {
            var nextPageStart, values, path, res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nextPageStart = 0;
                        values = [];
                        _a.label = 1;
                    case 1:
                        path = "".concat(this.getPRBasePath(), "/commits?start=").concat(nextPageStart);
                        return [4 /*yield*/, this.get(path)];
                    case 2:
                        res = _a.sent();
                        throwIfNotOk(res);
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = (_a.sent());
                        values = values.concat(data.values);
                        if (data.isLastPage) {
                            nextPageStart = null;
                        }
                        else {
                            nextPageStart = data.nextPageStart;
                        }
                        _a.label = 4;
                    case 4:
                        if (nextPageStart !== null) return [3 /*break*/, 1];
                        _a.label = 5;
                    case 5: return [2 /*return*/, values];
                }
            });
        }); };
        this.getStructuredDiffForFile = function (base, head, filename) { return __awaiter(_this, void 0, void 0, function () {
            var repoSlug, path, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repoSlug = this.repoMetadata.repoSlug;
                        path = "rest/api/1.0/".concat(repoSlug, "/compare/diff/").concat(encodeURI(filename), "?withComments=false&from=").concat(head, "&to=").concat(base);
                        return [4 /*yield*/, this.get(path)];
                    case 1:
                        res = _a.sent();
                        throwIfNotOk(res);
                        return [4 /*yield*/, res.json()];
                    case 2: return [2 /*return*/, (_a.sent()).diffs];
                }
            });
        }); };
        this.getPullRequestChanges = function () { return __awaiter(_this, void 0, void 0, function () {
            var nextPageStart, values, path, res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nextPageStart = 0;
                        values = [];
                        _a.label = 1;
                    case 1:
                        path = "".concat(this.getPRBasePath(), "/changes?start=").concat(nextPageStart);
                        return [4 /*yield*/, this.get(path)];
                    case 2:
                        res = _a.sent();
                        throwIfNotOk(res);
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = (_a.sent());
                        values = values.concat(data.values);
                        if (data.isLastPage) {
                            nextPageStart = null;
                        }
                        else {
                            nextPageStart = data.nextPageStart;
                        }
                        _a.label = 4;
                    case 4:
                        if (nextPageStart !== null) return [3 /*break*/, 1];
                        _a.label = 5;
                    case 5: return [2 /*return*/, values];
                }
            });
        }); };
        this.getPullRequestComments = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getPullRequestActivities("COMMENT")];
            });
        }); };
        this.getPullRequestActivities = function (type) {
            if (type === void 0) { type = "ACTIVITY"; }
            return __awaiter(_this, void 0, void 0, function () {
                var nextPageStart, values, path, res, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            nextPageStart = 0;
                            values = [];
                            _a.label = 1;
                        case 1:
                            path = "".concat(this.getPRBasePath(), "/activities?fromType=").concat(type, "&start=").concat(nextPageStart);
                            return [4 /*yield*/, this.get(path)];
                        case 2:
                            res = _a.sent();
                            throwIfNotOk(res);
                            return [4 /*yield*/, res.json()];
                        case 3:
                            data = (_a.sent());
                            values = values.concat(data.values);
                            if (data.isLastPage) {
                                nextPageStart = null;
                            }
                            else {
                                nextPageStart = data.nextPageStart;
                            }
                            _a.label = 4;
                        case 4:
                            if (nextPageStart !== null) return [3 /*break*/, 1];
                            _a.label = 5;
                        case 5: return [2 /*return*/, values];
                    }
                });
            });
        };
        this.getIssues = function () { return __awaiter(_this, void 0, void 0, function () {
            var path, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (process.env.DANGER_NO_BITBUCKET_JIRA_INTEGRATION) {
                            return [2 /*return*/, []];
                        }
                        path = "".concat(this.getPRBasePath("jira"), "/issues");
                        return [4 /*yield*/, this.get(path)];
                    case 1:
                        res = _a.sent();
                        throwIfNotOk(res);
                        return [4 /*yield*/, res.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getDangerComments = function (dangerID) { return __awaiter(_this, void 0, void 0, function () {
            var username, activities, dangerIDMessage, comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.repoCredentials.username;
                        return [4 /*yield*/, this.getPullRequestComments()];
                    case 1:
                        activities = _a.sent();
                        dangerIDMessage = (0, bitbucketServerTemplate_1.dangerIDToString)(dangerID);
                        comments = activities.map(function (activity) { return activity.comment; }).filter(Boolean);
                        return [2 /*return*/, comments
                                .filter(function (comment) { return comment.text.includes(dangerIDMessage); })
                                .filter(function (comment) { return comment.author.name.toLowerCase() === username.toLowerCase(); })
                                .filter(function (comment) { return comment.text.includes("Generated by"); })];
                }
            });
        }); };
        this.getDangerInlineComments = function (dangerID) { return __awaiter(_this, void 0, void 0, function () {
            var username, activities, dangerIDMessage, comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.repoCredentials.username;
                        return [4 /*yield*/, this.getPullRequestComments()];
                    case 1:
                        activities = _a.sent();
                        dangerIDMessage = (0, bitbucketServerTemplate_1.dangerIDToString)(dangerID);
                        comments = activities
                            .filter(function (activity) { return activity.commentAnchor; })
                            .map(function (activity) { return activity.comment; })
                            .filter(Boolean);
                        return [2 /*return*/, new Promise(function (resolve) {
                                resolve(comments
                                    .map(function (i) {
                                    return {
                                        id: i.id,
                                        ownedByDanger: i.author.name.toLowerCase() === username.toLowerCase() && i.text.includes(dangerIDMessage),
                                        body: i.text,
                                    };
                                })
                                    .filter(function (i) { return i.ownedByDanger; }));
                            })];
                }
            });
        }); };
        // The last two are "optional" in the protocol, but not really optional WRT the BBSAPI
        this.getFileContents = function (filePath, repoSlug, refspec) { return __awaiter(_this, void 0, void 0, function () {
            var path, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = "rest/api/1.0/".concat(repoSlug, "/") + "raw/".concat(encodeURI(filePath)) + "?at=".concat(refspec);
                        return [4 /*yield*/, this.get(path, undefined, true)];
                    case 1:
                        res = _a.sent();
                        if (res.status === 404) {
                            return [2 /*return*/, ""];
                        }
                        throwIfNotOk(res);
                        return [4 /*yield*/, res.text()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.postBuildStatus = function (commitId, payload) { return __awaiter(_this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post("rest/build-status/1.0/commits/".concat(commitId), {}, payload)];
                    case 1:
                        res = _a.sent();
                        throwIfNotOk(res);
                        if (!(res.status !== 204)) return [3 /*break*/, 3];
                        return [4 /*yield*/, res.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.postPRComment = function (comment) { return __awaiter(_this, void 0, void 0, function () {
            var path, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = "".concat(this.getPRBasePath(), "/comments");
                        return [4 /*yield*/, this.post(path, {}, { text: comment })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.postInlinePRComment = function (comment, line, type, filePath) { return __awaiter(_this, void 0, void 0, function () {
            var path, t, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = "".concat(this.getPRBasePath(), "/comments");
                        t = { add: "ADDED", normal: "CONTEXT", del: "REMOVED" }[type];
                        return [4 /*yield*/, this.post(path, {}, {
                                text: comment,
                                anchor: {
                                    line: line,
                                    lineType: t,
                                    fileType: "TO",
                                    path: filePath,
                                },
                            })];
                    case 1:
                        res = _a.sent();
                        if (!res.ok) return [3 /*break*/, 2];
                        return [2 /*return*/, res.json()];
                    case 2: return [4 /*yield*/, res.json()];
                    case 3: throw _a.sent();
                }
            });
        }); };
        this.deleteComment = function (_a) {
            var id = _a.id, version = _a.version;
            return __awaiter(_this, void 0, void 0, function () {
                var path, res, errors;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            path = "".concat(this.getPRBasePath(), "/comments/").concat(id, "?version=").concat(version);
                            return [4 /*yield*/, this.delete(path)];
                        case 1:
                            res = _b.sent();
                            if (!(res.status === 409)) return [3 /*break*/, 3];
                            return [4 /*yield*/, res.json()];
                        case 2:
                            errors = (_b.sent()).errors;
                            if (errors.exceptionName === "com.atlassian.bitbucket.comment.CommentDeletionException") {
                                return [2 /*return*/, this.updateComment({ id: id, version: version }, "(Review Retracted)")];
                            }
                            _b.label = 3;
                        case 3:
                            if (!res.ok) {
                                throw new Error("Failed to delete comment \"".concat(id));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        this.updateComment = function (_a, comment) {
            var id = _a.id, version = _a.version;
            return __awaiter(_this, void 0, void 0, function () {
                var path, res;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            path = "".concat(this.getPRBasePath(), "/comments/").concat(id);
                            return [4 /*yield*/, this.put(path, {}, {
                                    text: comment,
                                    version: version,
                                })];
                        case 1:
                            res = _b.sent();
                            if (!res.ok) return [3 /*break*/, 2];
                            return [2 /*return*/, res.json()];
                        case 2: return [4 /*yield*/, res.json()];
                        case 3: throw _b.sent();
                    }
                });
            });
        };
        // API implementation
        this.api = function (path, headers, body, method, suppressErrors) {
            if (headers === void 0) { headers = {}; }
            if (body === void 0) { body = {}; }
            if (_this.repoCredentials.token) {
                headers["Authorization"] = "Bearer ".concat(_this.repoCredentials.token);
            }
            else if (_this.repoCredentials.password) {
                headers["Authorization"] = "Basic ".concat(Buffer.from(_this.repoCredentials.username + ":" + _this.repoCredentials.password).toString("base64"));
            }
            var url = "".concat(_this.repoCredentials.host, "/").concat(path);
            _this.d("".concat(method, " ").concat(url));
            // Allow using a proxy configured through environmental variables
            // Remember that to avoid the error "Error: self signed certificate in certificate chain"
            // you should also do: "export NODE_TLS_REJECT_UNAUTHORIZED=0". See: https://github.com/request/request/issues/2061
            var agent = undefined;
            var proxy = process.env.http_proxy || process.env.https_proxy;
            if (proxy) {
                agent = (0, https_proxy_agent_1.default)(proxy);
            }
            return _this.fetch(url, {
                method: method,
                body: body,
                headers: __assign({ "Content-Type": "application/json" }, headers),
                agent: agent,
            }, suppressErrors);
        };
        this.get = function (path, headers, suppressErrors) {
            if (headers === void 0) { headers = {}; }
            return _this.api(path, headers, null, "GET", suppressErrors);
        };
        this.post = function (path, headers, body, suppressErrors) {
            if (headers === void 0) { headers = {}; }
            if (body === void 0) { body = {}; }
            return _this.api(path, headers, JSON.stringify(body), "POST", suppressErrors);
        };
        this.put = function (path, headers, body) {
            if (headers === void 0) { headers = {}; }
            if (body === void 0) { body = {}; }
            return _this.api(path, headers, JSON.stringify(body), "PUT");
        };
        this.delete = function (path, headers, body) {
            if (headers === void 0) { headers = {}; }
            if (body === void 0) { body = {}; }
            return _this.api(path, headers, JSON.stringify(body), "DELETE");
        };
        // This allows Peril to DI in a new Fetch function
        // which can handle unique API edge-cases around integrations
        this.fetch = fetch_1.api;
    }
    BitBucketServerAPI.prototype.getPRBasePath = function (service) {
        if (service === void 0) { service = "api"; }
        var _a = this.repoMetadata, repoSlug = _a.repoSlug, pullRequestID = _a.pullRequestID;
        return "rest/".concat(service, "/1.0/").concat(repoSlug, "/pull-requests/").concat(pullRequestID);
    };
    return BitBucketServerAPI;
}());
exports.BitBucketServerAPI = BitBucketServerAPI;
function throwIfNotOk(res) {
    if (!res.ok) {
        var message = "".concat(res.status, " - ").concat(res.statusText);
        if (res.status >= 400 && res.status < 500) {
            message += " (Have you set DANGER_BITBUCKETSERVER_USERNAME and DANGER_BITBUCKETSERVER_PASSWORD or DANGER_BITBUCKETSERVER_TOKEN?)";
        }
        throw new Error(message);
    }
}
//# sourceMappingURL=BitBucketServerAPI.js.map