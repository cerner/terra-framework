import { __spreadArray } from "tslib";
export function emitUnicodeLanguageId(lang) {
    if (!lang) {
        return '';
    }
    return __spreadArray([lang.lang, lang.script, lang.region], (lang.variants || []), true).filter(Boolean)
        .join('-');
}
export function emitUnicodeLocaleId(_a) {
    var lang = _a.lang, extensions = _a.extensions;
    var chunks = [emitUnicodeLanguageId(lang)];
    for (var _i = 0, extensions_1 = extensions; _i < extensions_1.length; _i++) {
        var ext = extensions_1[_i];
        chunks.push(ext.type);
        switch (ext.type) {
            case 'u':
                chunks.push.apply(chunks, __spreadArray(__spreadArray([], ext.attributes, false), ext.keywords.reduce(function (all, kv) { return all.concat(kv); }, []), false));
                break;
            case 't':
                chunks.push.apply(chunks, __spreadArray([emitUnicodeLanguageId(ext.lang)], ext.fields.reduce(function (all, kv) { return all.concat(kv); }, []), false));
                break;
            default:
                chunks.push(ext.value);
                break;
        }
    }
    return chunks.filter(Boolean).join('-');
}
