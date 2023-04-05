"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitUnicodeLocaleId = exports.emitUnicodeLanguageId = void 0;
var tslib_1 = require("tslib");
function emitUnicodeLanguageId(lang) {
    if (!lang) {
        return '';
    }
    return (0, tslib_1.__spreadArray)([lang.lang, lang.script, lang.region], (lang.variants || []), true).filter(Boolean)
        .join('-');
}
exports.emitUnicodeLanguageId = emitUnicodeLanguageId;
function emitUnicodeLocaleId(_a) {
    var lang = _a.lang, extensions = _a.extensions;
    var chunks = [emitUnicodeLanguageId(lang)];
    for (var _i = 0, extensions_1 = extensions; _i < extensions_1.length; _i++) {
        var ext = extensions_1[_i];
        chunks.push(ext.type);
        switch (ext.type) {
            case 'u':
                chunks.push.apply(chunks, (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], ext.attributes, false), ext.keywords.reduce(function (all, kv) { return all.concat(kv); }, []), false));
                break;
            case 't':
                chunks.push.apply(chunks, (0, tslib_1.__spreadArray)([emitUnicodeLanguageId(ext.lang)], ext.fields.reduce(function (all, kv) { return all.concat(kv); }, []), false));
                break;
            default:
                chunks.push(ext.value);
                break;
        }
    }
    return chunks.filter(Boolean).join('-');
}
exports.emitUnicodeLocaleId = emitUnicodeLocaleId;
