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
exports.Codeship = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
// Codeship Pro: https://documentation.codeship.com/pro/builds-and-configuration/environment-variables/
// Codeship Basic: https://documentation.codeship.com/basic/builds-and-configuration/set-environment-variables/
/**
 * ### CI Setup
 *
 * To make Danger run, add a new step to the `codeship-steps.yml` file:
 *
 * ```
 * - type: parallel:
 *   ...
 *    - name: danger
 *      service: web
 *      command: [run_command]
 * ```
 *
 * If you're using Codeship Classic, add `[run_command]` to your 'Test Commands'
 *
 * ### Token Setup
 *
 * You'll want to edit your `codeship-services.yml` file to include a reference
 * to the Danger authentication token: `DANGER_GITHUB_API_TOKEN`.
 *
 * ```
 * project_name:
 *   ...
 *   environment:
 *     - DANGER_GITHUB_API_TOKEN=[my_token]
 * ```
 *
 * If you're using Codeship Classic, add `DANGER_GITHUB_API_TOKEN` to your
 * 'Environment' settings.
 */
var Codeship = /** @class */ (function () {
    function Codeship(env) {
        this.env = env;
        this.default = { prID: "0" };
    }
    Codeship.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, ci_source_helpers_1.getPullRequestIDForBranch)(this, this.env, this.branchName)];
                    case 1:
                        prID = _a.sent();
                        this.default.prID = prID.toString();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Codeship.prototype, "name", {
        get: function () {
            return "Codeship";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codeship.prototype, "isCI", {
        get: function () {
            if ((0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["CI_NAME"]) && this.env.CI_NAME === "codeship") {
                return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codeship.prototype, "isPR", {
        get: function () {
            return this.pullRequestID !== "0";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codeship.prototype, "pullRequestID", {
        get: function () {
            return this.default.prID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codeship.prototype, "repoSlug", {
        get: function () {
            if ((0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["CI_REPO_NAME"])) {
                return this.env.CI_REPO_NAME;
            }
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codeship.prototype, "branchName", {
        get: function () {
            return this.env.CI_BRANCH;
        },
        enumerable: false,
        configurable: true
    });
    return Codeship;
}());
exports.Codeship = Codeship;
//# sourceMappingURL=Codeship.js.map