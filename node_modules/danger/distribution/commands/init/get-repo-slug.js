"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepoSlug = void 0;
var parse_git_config_1 = __importDefault(require("parse-git-config"));
var parse_github_url_1 = __importDefault(require("parse-github-url"));
var getRepoSlug = function () {
    var config = parse_git_config_1.default.sync();
    var possibleRemotes = [config['remote "upstream"'], config['remote "origin"']].filter(function (f) { return f; });
    if (possibleRemotes.length === 0) {
        return null;
    }
    var ghData = possibleRemotes.map(function (r) { return (0, parse_github_url_1.default)(r.url); });
    return ghData.length ? ghData[0].repo : undefined;
};
exports.getRepoSlug = getRepoSlug;
//# sourceMappingURL=get-repo-slug.js.map