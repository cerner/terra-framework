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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pullRequestParser = void 0;
var url = __importStar(require("url"));
var lodash_includes_1 = __importDefault(require("lodash.includes"));
var BitBucketServer_1 = require("./BitBucketServer");
var GitHub_1 = require("./GitHub");
var GitLab_1 = __importDefault(require("./GitLab"));
var BitBucketCloud_1 = require("./BitBucketCloud");
function pullRequestParser(address) {
    var components = url.parse(address, false);
    if (components && components.path) {
        // shape: http://localhost:7990/projects/PROJ/repos/repo/pull-requests/1/overview
        var parts = components.path.match(/(projects\/~?\w+\/repos\/[\w-_.]+)\/pull-requests\/(\d+)/);
        if (parts) {
            return {
                platform: BitBucketServer_1.BitBucketServer.name,
                repo: parts[1],
                pullRequestNumber: parts[2],
            };
        }
        // shape: https://bitbucket.org/proj/repo/pull-requests/1
        if ((0, lodash_includes_1.default)(components.path, "pull-requests")) {
            return {
                platform: BitBucketCloud_1.BitBucketCloud.name,
                repo: components.path.split("/pull-requests")[0].slice(1),
                pullRequestNumber: components.path.split("/pull-requests/")[1].split("/")[0],
            };
        }
        // shape: http://github.com/proj/repo/pull/1
        if ((0, lodash_includes_1.default)(components.path, "pull")) {
            return {
                platform: GitHub_1.GitHub.name,
                repo: components.path.split("/pull")[0].slice(1),
                pullRequestNumber: components.path.split("/pull/")[1],
            };
        }
        // shape: https://gitlab.com/GROUP[/SUBGROUP]/PROJ/merge_requests/123
        if ((0, lodash_includes_1.default)(components.path, "merge_requests")) {
            var regex = /\/(.+)\/merge_requests\/(\d+)/;
            var parts_1 = components.path.match(regex);
            if (parts_1) {
                return {
                    platform: GitLab_1.default.name,
                    repo: parts_1[1].replace(/\/-$/, ""),
                    pullRequestNumber: parts_1[2],
                };
            }
        }
    }
    return null;
}
exports.pullRequestParser = pullRequestParser;
//# sourceMappingURL=pullRequestParser.js.map