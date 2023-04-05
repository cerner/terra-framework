"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnicodeLanguageSubtag = exports.isUnicodeScriptSubtag = exports.isUnicodeRegionSubtag = exports.isStructurallyValidLanguageTag = exports.parseUnicodeLanguageId = exports.parseUnicodeLocaleId = exports.getCanonicalLocales = void 0;
var tslib_1 = require("tslib");
var parser_1 = require("./src/parser");
var emitter_1 = require("./src/emitter");
var canonicalizer_1 = require("./src/canonicalizer");
/**
 * https://tc39.es/ecma402/#sec-canonicalizelocalelist
 * @param locales
 */
function CanonicalizeLocaleList(locales) {
    if (locales === undefined) {
        return [];
    }
    var seen = [];
    if (typeof locales === 'string') {
        locales = [locales];
    }
    for (var _i = 0, locales_1 = locales; _i < locales_1.length; _i++) {
        var locale = locales_1[_i];
        var canonicalizedTag = (0, emitter_1.emitUnicodeLocaleId)((0, canonicalizer_1.canonicalizeUnicodeLocaleId)((0, parser_1.parseUnicodeLocaleId)(locale)));
        if (seen.indexOf(canonicalizedTag) < 0) {
            seen.push(canonicalizedTag);
        }
    }
    return seen;
}
function getCanonicalLocales(locales) {
    return CanonicalizeLocaleList(locales);
}
exports.getCanonicalLocales = getCanonicalLocales;
var parser_2 = require("./src/parser");
Object.defineProperty(exports, "parseUnicodeLocaleId", { enumerable: true, get: function () { return parser_2.parseUnicodeLocaleId; } });
Object.defineProperty(exports, "parseUnicodeLanguageId", { enumerable: true, get: function () { return parser_2.parseUnicodeLanguageId; } });
Object.defineProperty(exports, "isStructurallyValidLanguageTag", { enumerable: true, get: function () { return parser_2.isStructurallyValidLanguageTag; } });
Object.defineProperty(exports, "isUnicodeRegionSubtag", { enumerable: true, get: function () { return parser_2.isUnicodeRegionSubtag; } });
Object.defineProperty(exports, "isUnicodeScriptSubtag", { enumerable: true, get: function () { return parser_2.isUnicodeScriptSubtag; } });
Object.defineProperty(exports, "isUnicodeLanguageSubtag", { enumerable: true, get: function () { return parser_2.isUnicodeLanguageSubtag; } });
(0, tslib_1.__exportStar)(require("./src/types"), exports);
(0, tslib_1.__exportStar)(require("./src/emitter"), exports);
(0, tslib_1.__exportStar)(require("./src/likelySubtags.generated"), exports);
