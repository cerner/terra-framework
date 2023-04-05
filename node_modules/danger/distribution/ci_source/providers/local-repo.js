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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalRepo = void 0;
var LocalRepo = /** @class */ (function () {
    function LocalRepo(env) {
        var defaults = {
            repo: process.cwd(),
            pr: undefined,
        };
        this.env = __assign(__assign({}, env), defaults);
    }
    Object.defineProperty(LocalRepo.prototype, "name", {
        get: function () {
            return "local repo";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LocalRepo.prototype, "isCI", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LocalRepo.prototype, "isPR", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LocalRepo.prototype, "pullRequestID", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LocalRepo.prototype, "repoSlug", {
        get: function () {
            return this.env.repo;
        },
        enumerable: false,
        configurable: true
    });
    return LocalRepo;
}());
exports.LocalRepo = LocalRepo;
//# sourceMappingURL=local-repo.js.map