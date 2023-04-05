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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCenter = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
var url = __importStar(require("url"));
// AppCenter Build scripts: https://docs.microsoft.com/en-us/appcenter/build/custom/scripts/
// AppCenter Environment variables: https://docs.microsoft.com/en-us/appcenter/build/custom/variables/
/**
 * ### CI Setup
 *
 * To make Danger run, add following lines to the `appcenter-pre-build.sh` file:
 *
 * ```
 * - cd $APPCENTER_SOURCE_DIRECTORY
 * - npm install -g danger
 * - swift build
 * - swift run danger-swift ci
 * ```
 *
 *
 *
 * ### Token Setup
 *
 * Add the `DANGER_GITHUB_API_TOKEN` to your environment variables.
 *
 */
var AppCenter = /** @class */ (function () {
    function AppCenter(env) {
        this.env = env;
        this.default = { prID: "0" };
    }
    AppCenter.prototype.setup = function () {
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
    Object.defineProperty(AppCenter.prototype, "name", {
        get: function () {
            return "AppCenter";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCenter.prototype, "isCI", {
        get: function () {
            if ((0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["APPCENTER_BUILD_ID"])) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCenter.prototype, "isPR", {
        get: function () {
            return this.env["BUILD_REASON"] == "PullRequest";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCenter.prototype, "pullRequestID", {
        get: function () {
            return this.default.prID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCenter.prototype, "repoSlug", {
        get: function () {
            if ((0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["BUILD_REPOSITORY_NAME"]) &&
                (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["BUILD_REPOSITORY_URI"])) {
                var repositoryName = this.env["BUILD_REPOSITORY_NAME"];
                var components = url.parse(this.env["BUILD_REPOSITORY_URI"], false);
                if (components && components.path) {
                    var owner = components.path.split("/")[1];
                    return "".concat(owner, "/").concat(repositoryName);
                }
            }
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCenter.prototype, "branchName", {
        get: function () {
            return this.env["BUILD_SOURCEBRANCHNAME"];
        },
        enumerable: false,
        configurable: true
    });
    return AppCenter;
}());
exports.AppCenter = AppCenter;
//# sourceMappingURL=AppCenter.js.map