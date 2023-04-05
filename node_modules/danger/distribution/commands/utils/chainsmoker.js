"use strict";
// Graciously vendored from
// https://github.com/paulmelnikow/chainsmoker
//
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var micromatch_1 = __importDefault(require("micromatch"));
var lodash_mapvalues_1 = __importDefault(require("lodash.mapvalues"));
var isExclude = function (p) { return p.startsWith("!"); };
function chainsmoker(keyedPaths) {
    function matchPatterns(patterns) {
        return (0, lodash_mapvalues_1.default)(keyedPaths, function (paths) {
            var excludePatterns = patterns.filter(function (p) { return isExclude(p); });
            var includePatterns = patterns.filter(function (p) { return !isExclude(p); });
            var included = includePatterns.reduce(function (accum, pattern) { return accum.concat(micromatch_1.default.match(paths, pattern)); }, []);
            return excludePatterns.reduce(function (accum, pattern) { return micromatch_1.default.match(accum, pattern); }, included);
        });
    }
    function finalize(keyedPaths) {
        return __assign(__assign({}, (0, lodash_mapvalues_1.default)(keyedPaths, function (paths) { return paths.length > 0; })), { getKeyedPaths: function () { return keyedPaths; } });
    }
    return function () {
        var patterns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            patterns[_i] = arguments[_i];
        }
        return finalize(matchPatterns(patterns));
    };
}
exports.default = chainsmoker;
//# sourceMappingURL=chainsmoker.js.map