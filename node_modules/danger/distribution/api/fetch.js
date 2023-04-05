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
exports.api = exports.retryableFetch = void 0;
var debug_1 = require("../debug");
var node_fetch = __importStar(require("node-fetch"));
var http_proxy_agent_1 = __importDefault(require("http-proxy-agent"));
var https_proxy_agent_1 = __importDefault(require("https-proxy-agent"));
var async_retry_1 = __importDefault(require("async-retry"));
var d = (0, debug_1.debug)("networking");
var isJest = typeof jest !== "undefined";
var warn = isJest ? function () { return ""; } : console.warn;
var shouldRetryRequest = function (res) {
    // Don't retry 4xx errors other than 401. All 4xx errors can probably be ignored once
    // the Github API issue causing https://github.com/danger/peril/issues/440 is fixed
    return res.status === 401 || (res.status >= 500 && res.status <= 599);
};
/**
 * Adds retry handling to fetch requests
 *
 * @param {(string | fetch.Request)} url the request
 * @param {fetch.RequestInit} [init] the usual options
 * @returns {Promise<fetch.Response>} network-y promise
 */
function retryableFetch(url, init) {
    return __awaiter(this, void 0, void 0, function () {
        var retries;
        var _this = this;
        return __generator(this, function (_a) {
            retries = isJest ? 1 : 3;
            return [2 /*return*/, (0, async_retry_1.default)(function (_, attempt) { return __awaiter(_this, void 0, void 0, function () {
                    var originalFetch, res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                originalFetch = node_fetch.default;
                                return [4 /*yield*/, originalFetch(url, init)
                                    // Throwing an error will trigger a retry
                                ];
                            case 1:
                                res = _a.sent();
                                // Throwing an error will trigger a retry
                                if (attempt <= retries && shouldRetryRequest(res)) {
                                    throw new Error("Request failed [".concat(res.status, "]: ").concat(res.url, ". Attempting retry."));
                                }
                                return [2 /*return*/, res];
                        }
                    });
                }); }, {
                    retries: retries,
                    onRetry: function (error, attempt) {
                        warn(error.message);
                        warn("Retry ".concat(attempt, " of ").concat(retries, "."));
                    },
                })];
        });
    });
}
exports.retryableFetch = retryableFetch;
/**
 * Adds logging to every fetch request if a global var for `verbose` is set to true
 *
 * @param {(string | fetch.Request)} url the request
 * @param {fetch.RequestInit} [init] the usual options
 * @returns {Promise<fetch.Response>} network-y promise
 */
function api(url, init, suppressErrorReporting, processEnv) {
    var _this = this;
    if (processEnv === void 0) { processEnv = process.env; }
    var isTests = typeof jest !== "undefined";
    if (isTests && !url.toString().includes("localhost")) {
        var message = "No API calls in tests please: ".concat(url);
        debugger;
        throw new Error(message);
    }
    if (global.verbose && global.verbose === true) {
        var output = ["curl", "-i"];
        if (init.method) {
            output.push("-X ".concat(init.method));
        }
        var showToken = processEnv["DANGER_VERBOSE_SHOW_TOKEN"];
        var token = processEnv["DANGER_GITHUB_API_TOKEN"] || processEnv["GITHUB_TOKEN"];
        if (init.headers) {
            for (var prop in init.headers) {
                if (init.headers.hasOwnProperty(prop)) {
                    // Don't show the token for normal verbose usage
                    if (init.headers[prop].includes(token) && !showToken) {
                        output.push("-H", "\"".concat(prop, ": [API TOKEN]\""));
                        continue;
                    }
                    output.push("-H", "\"".concat(prop, ": ").concat(init.headers[prop], "\""));
                }
            }
        }
        if (init.method === "POST") {
            // const body:string = init.body
            // output.concat([init.body])
        }
        if (typeof url === "string") {
            output.push(url);
        }
        d(output.join(" "));
    }
    var agent = init.agent;
    var proxy = processEnv["HTTPS_PROXY"] || processEnv["https_proxy"] || processEnv["HTTP_PROXY"] || processEnv["http_proxy"];
    if (!agent && proxy) {
        var secure = url.toString().startsWith("https");
        init.agent = secure ? (0, https_proxy_agent_1.default)(proxy) : (0, http_proxy_agent_1.default)(proxy);
    }
    return retryableFetch(url, init).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
        var clonedResponse, responseBody, responseJSON, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!suppressErrorReporting && !response.ok)) return [3 /*break*/, 5];
                    clonedResponse = response.clone();
                    warn("Request failed [".concat(clonedResponse.status, "]: ").concat(clonedResponse.url));
                    return [4 /*yield*/, clonedResponse.text()];
                case 1:
                    responseBody = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, JSON.parse(responseBody.toString())];
                case 3:
                    responseJSON = _a.sent();
                    warn("Response: ".concat(JSON.stringify(responseJSON, null, "  ")));
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    warn("Response: ".concat(responseBody));
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, response];
            }
        });
    }); });
}
exports.api = api;
//# sourceMappingURL=fetch.js.map