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
exports.generateInitialState = exports.createUI = void 0;
var readline_sync_1 = __importDefault(require("readline-sync"));
var supports_hyperlinks_1 = __importDefault(require("supports-hyperlinks"));
var hyperlinker_1 = __importDefault(require("hyperlinker"));
var chalk_1 = __importDefault(require("chalk"));
var path_1 = require("path");
var timers_1 = require("timers");
var fs = __importStar(require("fs"));
var get_repo_slug_1 = require("./get-repo-slug");
var createUI = function (state, app) {
    var say = function (msg) { return console.log(msg); };
    var fancyLink = function (name, href) { return (0, hyperlinker_1.default)(name, href); };
    var inlineLink = function (_name, href) { return chalk_1.default.underline(href); };
    var linkToUse = state.supportsHLinks ? fancyLink : inlineLink;
    return {
        say: say,
        header: function (msg) { return say(chalk_1.default.bold("\n## " + msg + "\n")); },
        command: function (command) { return say("> " + chalk_1.default.white.bold(command) + " \n"); },
        link: function (name, href) { return linkToUse(name, href); },
        pause: function (secs) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (done) { return (0, timers_1.setTimeout)(done, secs * 1000); })];
        }); }); },
        waitForReturn: function () { return (app.impatient ? Promise.resolve() : readline_sync_1.default.question("\n↵ ")); },
        askWithAnswers: function (_message, answers) {
            var a = readline_sync_1.default.keyInSelect(answers, "", { defaultInput: answers[0] });
            return answers[a];
        },
    };
};
exports.createUI = createUI;
var generateInitialState = function (osProcess) {
    var isMac = osProcess.platform === "darwin";
    var isWindows = osProcess.platform === "win32";
    var folderName = capitalizeFirstLetter(camelCase((0, path_1.basename)(osProcess.cwd())));
    var isTypeScript = checkForTypeScript();
    var isBabel = checkForBabel();
    var hasTravis = fs.existsSync(".travis.yml");
    var hasCircle = fs.existsSync("circle.yml");
    var ciType = hasTravis ? "travis" : hasCircle ? "circle" : "unknown";
    var repoSlug = (0, get_repo_slug_1.getRepoSlug)();
    var isGitHub = !!repoSlug;
    return {
        isMac: isMac,
        isWindows: isWindows,
        isTypeScript: isTypeScript,
        isBabel: isBabel,
        isAnOSSRepo: true,
        supportsHLinks: supports_hyperlinks_1.default.stdout,
        filename: isTypeScript ? "dangerfile.ts" : "dangerfile.js",
        botName: folderName + "Bot",
        hasSetUpAccount: false,
        hasCreatedDangerfile: false,
        hasSetUpAccountToken: false,
        repoSlug: repoSlug,
        ciType: ciType,
        isGitHub: isGitHub,
    };
};
exports.generateInitialState = generateInitialState;
var checkForTypeScript = function () { return fs.existsSync("node_modules/typescript/package.json"); };
var checkForBabel = function () {
    return fs.existsSync("node_modules/babel-core/package.json") || fs.existsSync("node_modules/@babel/core/package.json");
};
var capitalizeFirstLetter = function (string) { return string.charAt(0).toUpperCase() + string.slice(1); };
var camelCase = function (str) { return str.split("-").reduce(function (a, b) { return a + b.charAt(0).toUpperCase() + b.slice(1); }); };
//# sourceMappingURL=state-setup.js.map