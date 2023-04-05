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
exports.FakeCI = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
var FakeCI = /** @class */ (function () {
    function FakeCI(env) {
        var defaults = {
            repo: env.DANGER_TEST_REPO || env.DANGER_MANUAL_GH_REPO || "artsy/emission",
            pr: env.DANGER_TEST_PR || env.DANGER_MANUAL_PR_NUM || "327", // TODO: default to empty string ?
        };
        this.env = __assign(__assign({}, env), defaults);
    }
    Object.defineProperty(FakeCI.prototype, "name", {
        get: function () {
            return "Fake Testing CI";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FakeCI.prototype, "isCI", {
        get: function () {
            return ((0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["DANGER_FAKE_CI"]) ||
                (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["DANGER_LOCAL_NO_CI"]) ||
                (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["DANGER_MANUAL_CI"]));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FakeCI.prototype, "isPR", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FakeCI.prototype, "pullRequestID", {
        get: function () {
            return this.env.pr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FakeCI.prototype, "repoSlug", {
        get: function () {
            return this.env.repo;
        },
        enumerable: false,
        configurable: true
    });
    return FakeCI;
}());
exports.FakeCI = FakeCI;
//# sourceMappingURL=Fake.js.map