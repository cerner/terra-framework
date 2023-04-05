#! /usr/bin/env node
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
var chalk_1 = __importDefault(require("chalk"));
var commander_1 = __importDefault(require("commander"));
var fs = __importStar(require("fs"));
var default_dangerfile_1 = require("./init/default-dangerfile");
var add_to_ci_1 = require("./init/add-to-ci");
var state_setup_1 = require("./init/state-setup");
var interfaces_1 = require("./init/interfaces");
commander_1.default
    .description("Helps you get set up through to your first Dangerfile.")
    .option("-i, --impatient", "Don't add dramatic pauses.")
    .on("--help", function () {
    console.log("\n");
    console.log("  Docs:");
    console.log("");
    console.log("    -> Getting started:");
    console.log("       http://danger.systems/js/guides/getting_started.html");
});
commander_1.default.parse(process.argv);
var app = commander_1.default;
var go = function (app) { return __awaiter(void 0, void 0, void 0, function () {
    var state, ui, isOSS;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                state = (0, state_setup_1.generateInitialState)(process);
                ui = (0, state_setup_1.createUI)(state, app);
                if (!state.isGitHub) {
                    return [2 /*return*/, showNonGitHubWarning(ui)];
                }
                return [4 /*yield*/, showTodoState(ui)];
            case 1:
                isOSS = (_a.sent()).isOSS;
                state.isAnOSSRepo = isOSS;
                return [4 /*yield*/, setupDangerfile(ui, state)];
            case 2:
                _a.sent();
                return [4 /*yield*/, setupGitHubAccount(ui, state)];
            case 3:
                _a.sent();
                return [4 /*yield*/, setupGHAccessToken(ui, state)];
            case 4:
                _a.sent();
                return [4 /*yield*/, addToCI(ui, state)];
            case 5:
                _a.sent();
                return [4 /*yield*/, wrapItUp(ui, state)];
            case 6:
                _a.sent();
                return [4 /*yield*/, thanks(ui, state)];
            case 7:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var showNonGitHubWarning = function (ui) {
    ui.say("Hi, welcome to Danger Init - I'm afraid at the moment this command only works for GitHub projects.");
    ui.say("\nWe're definitely open to PRs improving this. You can find the code at:");
    var link = ui.link("danger/danger-js#/source/commands/danger-init.ts", "https://github.com/danger/danger-js/blob/main/source/commands/danger-init.ts");
    ui.say("\n > " + link + "\n");
};
var showTodoState = function (ui) { return __awaiter(void 0, void 0, void 0, function () {
    var isOSS;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ui.say("Welcome to Danger Init - this will take you through setting up Danger for this project.");
                ui.say("There are four main steps we need to do:\n");
                return [4 /*yield*/, ui.pause(0.6)];
            case 1:
                _a.sent();
                ui.say(" - [ ] Create a Dangerfile and add a few simple rules.");
                return [4 /*yield*/, ui.pause(0.6)];
            case 2:
                _a.sent();
                ui.say(" - [ ] Create a GitHub account for Danger to use, for messaging.");
                return [4 /*yield*/, ui.pause(0.6)];
            case 3:
                _a.sent();
                ui.say(" - [ ] Set up an access token for Danger.");
                return [4 /*yield*/, ui.pause(0.6)];
            case 4:
                _a.sent();
                ui.say(" - [ ] Set up Danger to run on your CI.\n");
                return [4 /*yield*/, ui.pause(2)];
            case 5:
                _a.sent();
                ui.say("But before we start, we need one bit of information from you.");
                ui.say("Is this is for an Open Source or private project?");
                isOSS = ui.askWithAnswers("", ["Open Source", "Private Repo"]) === "Open Source";
                return [2 /*return*/, { isOSS: isOSS }];
        }
    });
}); };
var setupDangerfile = function (ui, state) { return __awaiter(void 0, void 0, void 0, function () {
    var content;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ui.header("Step 1: Creating a starter Dangerfile");
                if (!(!fs.existsSync("dangerfile.js") && !fs.existsSync("dangerfile.ts"))) return [3 /*break*/, 3];
                ui.say("\nI've set up an example Dangerfile for you in this folder.\n");
                return [4 /*yield*/, ui.pause(1)];
            case 1:
                _a.sent();
                content = (0, default_dangerfile_1.generateDefaultDangerfile)(state);
                fs.writeFileSync(state.filename, content, "utf8");
                ui.command("cat ".concat(process.cwd(), "/").concat(state.filename));
                content.split("\n").forEach(function (l) { return ui.say("  " + chalk_1.default.green(l)); });
                ui.say("");
                return [4 /*yield*/, ui.pause(2)];
            case 2:
                _a.sent();
                ui.say("There's a collection of small, simple rules in here, but Danger is about being able to easily");
                ui.say("iterate. The power comes from you having the ability to codify fixes for some of the problems");
                ui.say("that come up in day to day programming. It can be difficult to try and see those from day 1.");
                ui.say("\nIf you'd like to investigate the file, and make some changes - I'll wait here,");
                ui.say("press return when you're ready to move on...");
                ui.waitForReturn();
                return [3 /*break*/, 4];
            case 3:
                ui.say("You already have a Dangerfile, so that simplifies this step!");
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
var setupGitHubAccount = function (ui, state) { return __awaiter(void 0, void 0, void 0, function () {
    var flickr, googImages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ui.header("Step 2: Creating a GitHub account");
                ui.say("In order to get the most out of Danger, I'd recommend giving it the ability to post in");
                ui.say("the code-review comment section.");
                ui.say("\n" + ui.link("GitHub Home", "https://github.com") + "\n");
                return [4 /*yield*/, ui.pause(1)];
            case 1:
                _a.sent();
                ui.say("IMO, it's best to do this by using the private mode of your browser.");
                ui.say("Create an account like: ".concat((0, interfaces_1.highlight)(state.botName), " and don't forget a cool robot avatar too.\n"));
                return [4 /*yield*/, ui.pause(1)];
            case 2:
                _a.sent();
                ui.say("Here are great resources for creative-commons images of robots:\n");
                flickr = ui.link("flickr", "https://www.flickr.com/search/?text=robot&license=2%2C3%2C4%2C5%2C6%2C9");
                googImages = ui.link("googleimages", "https://www.google.com/search?q=robot&tbs=sur:fmc&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjgy8-f95jLAhWI7hoKHV_UD00QsAQIMQ&biw=1265&bih=1359");
                ui.say(" - " + flickr);
                ui.say(" - " + googImages);
                ui.say("");
                return [4 /*yield*/, ui.pause(1)];
            case 3:
                _a.sent();
                noteAboutClickingLinks(ui, state);
                return [4 /*yield*/, ui.pause(1)];
            case 4:
                _a.sent();
                if (state.isAnOSSRepo) {
                    ui.say("".concat(state.botName, " does not need privileged access to your repo or org. This is because Danger will only"));
                    ui.say("be writing comments, and you do not need special access for that.");
                }
                else {
                    ui.say("".concat(state.botName, " will need access to your repo. Simply because the code is not available for the public"));
                    ui.say("to read and comment on.");
                }
                return [4 /*yield*/, ui.pause(1)];
            case 5:
                _a.sent();
                ui.say("\nCool, please press return when you have your account ready (and you've verified the email...)");
                ui.waitForReturn();
                return [2 /*return*/];
        }
    });
}); };
var setupGHAccessToken = function (ui, state) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ui.header("Step 3: Configuring a GitHub Personal Access Token");
                ui.say("Here's the link, you should open this in the private session where you just created the new GitHub account");
                ui.say("\n" + ui.link("New GitHub Token", "https://github.com/settings/tokens/new"));
                return [4 /*yield*/, ui.pause(1)];
            case 1:
                _a.sent();
                if (!state.isAnOSSRepo) return [3 /*break*/, 3];
                ui.say("\nFor Open Source projects, I'd recommend giving the token the smallest scope possible.");
                ui.say("This means only providing access to " + (0, interfaces_1.highlight)("public_repo") + " in the token.");
                return [4 /*yield*/, ui.pause(1)];
            case 2:
                _a.sent();
                ui.say("This token limits Danger's abilities to " +
                    chalk_1.default.bold("just") +
                    " writing comments on OSS projects. We recommend");
                ui.say("this because the token can quite easily be extracted from the environment via pull requests.");
                ui.say("\nIt is important that you do not store this token in your repository, as GitHub will");
                ui.say("automatically revoke your token when pushed.\n");
                return [3 /*break*/, 6];
            case 3:
                ui.say("\nFor private projects, I'd recommend giving the token access to the whole repo scope.");
                ui.say("This means only providing access to " + (0, interfaces_1.highlight)("repo") + ", and its children in the token.\n\n");
                return [4 /*yield*/, ui.pause(1)];
            case 4:
                _a.sent();
                ui.say("It's worth noting that you " + chalk_1.default.bold.red("should not") + " re-use this token for OSS repos.");
                ui.say("Make a new one for those repos with just " + (0, interfaces_1.highlight)("public_repo") + ".");
                return [4 /*yield*/, ui.pause(1)];
            case 5:
                _a.sent();
                ui.say("Additionally, don't forget to add your new GitHub account as a collaborator to your private project.");
                _a.label = 6;
            case 6:
                ui.say("\n👍, please press return when you have your token set up...");
                ui.waitForReturn();
                return [2 /*return*/];
        }
    });
}); };
var noteAboutClickingLinks = function (ui, state) {
    var modifier_key = state.isMac ? "cmd ( ⌘ )" : "ctrl";
    var clicks = state.isWindows || state.supportsHLinks ? "clicking" : "double clicking";
    var sidenote = chalk_1.default.italic.bold("Sidenote: ");
    ui.say("".concat(sidenote, " Holding ").concat(modifier_key, " and ").concat(clicks, " a link will open it in your browser.\n"));
};
var wrapItUp = function (ui, _state) { return __awaiter(void 0, void 0, void 0, function () {
    var link;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ui.header("Useful info");
                ui.say("- One of the best ways to test out new rules as you build them is via " + (0, interfaces_1.highlight)("bundle exec danger pr") + ".");
                return [4 /*yield*/, ui.pause(0.6)];
            case 1:
                _a.sent();
                ui.say("- You can have Danger output a lot of info via the " + (0, interfaces_1.highlight)("--verbose") + " option.");
                return [4 /*yield*/, ui.pause(0.6)];
            case 2:
                _a.sent();
                ui.say("- You can look at the following Dangerfiles to get some more ideas:\n");
                return [4 /*yield*/, ui.pause(0.6)];
            case 3:
                _a.sent();
                link = function (name, url) { return ui.say("  * " + ui.link(name, url)); };
                link("artsy/Emission#dangerfile.ts", "https://github.com/artsy/emission/blob/master/dangerfile.ts");
                link("facebook/react-native#danger/dangerfile.js", "https://github.com/facebook/react-native/blob/master/bots/dangerfile.js");
                link("apollographql/apollo-client#dangerfile.ts", "https://github.com/apollographql/apollo-client/blob/master/config/dangerfile.ts");
                link("styleguidist/react-styleguidist#dangerfile.js", "https://github.com/styleguidist/react-styleguidist/blob/master/dangerfile.js");
                link("storybooks/storybook#dangerfle.js", "https://github.com/storybooks/storybook/blob/master/dangerfile.js");
                link("ReactiveX/rxjs#dangerfle.js", "https://github.com/ReactiveX/rxjs/blob/master/dangerfile.js");
                return [4 /*yield*/, ui.pause(1)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var addToCI = function (ui, state) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ui.header("Add to CI");
                return [4 /*yield*/, ui.pause(0.6)];
            case 1:
                _a.sent();
                if (!(state.ciType === "travis")) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, add_to_ci_1.travis)(ui, state)];
            case 2:
                _a.sent();
                return [3 /*break*/, 7];
            case 3:
                if (!(state.ciType === "circle")) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, add_to_ci_1.circle)(ui, state)];
            case 4:
                _a.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, (0, add_to_ci_1.unsure)(ui, state)];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
var thanks = function (ui, _state) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ui.say("\n\n🎉\n");
                return [4 /*yield*/, ui.pause(0.6)];
            case 1:
                _a.sent();
                ui.say("And you're good to go. Danger is a collaboration between Orta Therox, Gem 'Danger' Maslen,");
                ui.say("and every who has sent PRs.\n");
                ui.say("If you like Danger, let others know. If you want to know more, follow " +
                    (0, interfaces_1.highlight)("@orta") +
                    " and " +
                    (0, interfaces_1.highlight)("@DangerSystems") +
                    " on Twitter.");
                ui.say("If you don't like something about Danger, help us improve the project - it's all done on volunteer time! xxx");
                ui.say("Remember: it's nice to be nice.\n");
                return [2 /*return*/];
        }
    });
}); };
go(app);
//# sourceMappingURL=danger-init.js.map