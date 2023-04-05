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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runRunner = void 0;
var chalk_1 = __importDefault(require("chalk"));
var debug_1 = require("../../debug");
var platform_1 = require("../../platforms/platform");
var getRuntimeCISource_1 = __importDefault(require("../utils/getRuntimeCISource"));
var d = (0, debug_1.debug)("reset-status");
var runRunner = function (app, config) { return __awaiter(void 0, void 0, void 0, function () {
    var source, _a, platform;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                d("Starting sub-process run with ".concat(app.args));
                _a = (config && config.source);
                if (_a) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, getRuntimeCISource_1.default)(app)];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2:
                source = _a;
                // This does not set a failing exit code
                if (source && !source.isPR) {
                    console.log("Skipping Danger due to this run not executing on a PR.");
                }
                if (!(source && source.isPR)) return [3 /*break*/, 4];
                platform = (config && config.platform) || (0, platform_1.getPlatformForEnv)(process.env, source);
                if (!platform) {
                    console.log(chalk_1.default.red("Could not find a source code hosting platform for ".concat(source.name, ".")));
                    console.log("Currently Danger JS only supports GitHub, if you want other platforms, consider the Ruby version or help out.");
                    process.exitCode = 1;
                }
                if (!platform) return [3 /*break*/, 4];
                return [4 /*yield*/, platform.updateStatus("pending", "Danger is waiting for your CI run to complete...", undefined, app.id, source.commitHash)];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.runRunner = runRunner;
//# sourceMappingURL=resetStatus.js.map