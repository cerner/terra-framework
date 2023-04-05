import { parseUnicodeLocaleId } from './src/parser';
import { emitUnicodeLocaleId } from './src/emitter';
import { canonicalizeUnicodeLocaleId } from './src/canonicalizer';
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
        var canonicalizedTag = emitUnicodeLocaleId(canonicalizeUnicodeLocaleId(parseUnicodeLocaleId(locale)));
        if (seen.indexOf(canonicalizedTag) < 0) {
            seen.push(canonicalizedTag);
        }
    }
    return seen;
}
export function getCanonicalLocales(locales) {
    return CanonicalizeLocaleList(locales);
}
export { parseUnicodeLocaleId, parseUnicodeLanguageId, isStructurallyValidLanguageTag, isUnicodeRegionSubtag, isUnicodeScriptSubtag, isUnicodeLanguageSubtag, } from './src/parser';
export * from './src/types';
export * from './src/emitter';
export * from './src/likelySubtags.generated';
