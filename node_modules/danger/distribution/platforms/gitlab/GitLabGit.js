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
exports.gitlabChangesToDiff = exports.gitLabGitDSL = void 0;
var debug_1 = require("../../debug");
var gitJSONToGitDSL_1 = require("../git/gitJSONToGitDSL");
var d = (0, debug_1.debug)("GitLabGit");
var gitLabGitDSL = function (gitlab, json, gitlabAPI) {
    var config = {
        repo: "".concat(gitlab.mr.project_id),
        baseSHA: gitlab.mr.diff_refs ? gitlab.mr.diff_refs.base_sha : "",
        headSHA: gitlab.mr.diff_refs ? gitlab.mr.diff_refs.head_sha : "",
        getFileContents: gitlab.utils.fileContents,
        getFullDiff: function (base, head) { return __awaiter(void 0, void 0, void 0, function () {
            var changes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, gitlabAPI.getCompareChanges(base, head)];
                    case 1:
                        changes = _a.sent();
                        return [2 /*return*/, (0, exports.gitlabChangesToDiff)(changes)];
                }
            });
        }); },
    };
    d("Setting up git DSL with: ", config);
    return (0, gitJSONToGitDSL_1.gitJSONToGitDSL)(json, config);
};
exports.gitLabGitDSL = gitLabGitDSL;
var gitlabChangesToDiff = function (changes) {
    d("Converting GitLab Changes to Diff");
    // Gitlab doesn't return full raw git diff, relevant issue: https://gitlab.com/gitlab-org/gitlab/issues/24913
    return changes
        .map(function (change) {
        var diff = change.diff;
        if (diff.startsWith("diff --git a/") || diff.startsWith("--- a/") || diff.startsWith("--- /dev/null")) {
            return diff;
        }
        return "diff --git a/".concat(change.old_path, " b/").concat(change.new_path, "\n").concat(change.new_file ? "new file mode ".concat(change.b_mode) : "").concat(change.deleted_file ? "deleted file mode ".concat(change.a_mode) : "").concat(change.renamed_file ? "rename from ".concat(change.old_path, "\nrename to ").concat(change.new_path) : "", "\n--- ").concat(change.new_file ? "/dev/null" : "a/" + change.old_path, "\n+++ ").concat(change.deleted_file ? "/dev/null" : "b/" + change.new_path, "\n").concat(diff);
    })
        .join("\n");
};
exports.gitlabChangesToDiff = gitlabChangesToDiff;
//# sourceMappingURL=GitLabGit.js.map