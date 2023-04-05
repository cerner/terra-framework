"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canonicalizeUnicodeLocaleId = exports.canonicalizeUnicodeLanguageId = void 0;
var tslib_1 = require("tslib");
var aliases_generated_1 = require("./aliases.generated");
var parser_1 = require("./parser");
var likelySubtags_generated_1 = require("./likelySubtags.generated");
var emitter_1 = require("./emitter");
function canonicalizeAttrs(strs) {
    return Object.keys(strs.reduce(function (all, str) {
        all[str.toLowerCase()] = 1;
        return all;
    }, {})).sort();
}
function canonicalizeKVs(arr) {
    var all = {};
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var kv = arr_1[_i];
        if (kv[0] in all) {
            continue;
        }
        all[kv[0]] = 1;
        if (!kv[1] || kv[1] === 'true') {
            result.push([kv[0].toLowerCase()]);
        }
        else {
            result.push([kv[0].toLowerCase(), kv[1].toLowerCase()]);
        }
    }
    return result.sort(compareKV);
}
function compareKV(t1, t2) {
    return t1[0] < t2[0] ? -1 : t1[0] > t2[0] ? 1 : 0;
}
function compareExtension(e1, e2) {
    return e1.type < e2.type ? -1 : e1.type > e2.type ? 1 : 0;
}
function mergeVariants(v1, v2) {
    var result = (0, tslib_1.__spreadArray)([], v1, true);
    for (var _i = 0, v2_1 = v2; _i < v2_1.length; _i++) {
        var v = v2_1[_i];
        if (v1.indexOf(v) < 0) {
            result.push(v);
        }
    }
    return result;
}
/**
 * CAVEAT: We don't do this section in the spec bc they have no JSON data
 * Use the bcp47 data to replace keys, types, tfields, and tvalues by their canonical forms. See Section 3.6.4 U Extension Data Files) and Section 3.7.1 T Extension Data Files. The aliases are in the alias attribute value, while the canonical is in the name attribute value. For example,
Because of the following bcp47 data:
<key name="ms"…>…<type name="uksystem" … alias="imperial" … />…</key>
We get the following transformation:
en-u-ms-imperial ⇒ en-u-ms-uksystem
 * @param lang
 */
function canonicalizeUnicodeLanguageId(unicodeLanguageId) {
    /**
     * If the language subtag matches the type attribute of a languageAlias element in Supplemental Data, replace the language subtag with the replacement value.
     *  1. If there are additional subtags in the replacement value, add them to the result, but only if there is no corresponding subtag already in the tag.
     *  2. Five special deprecated grandfathered codes (such as i-default) are in type attributes, and are also replaced.
     */
    // From https://github.com/unicode-org/icu/blob/master/icu4j/main/classes/core/src/com/ibm/icu/util/ULocale.java#L1246
    // Try language _ variant
    var finalLangAst = unicodeLanguageId;
    if (unicodeLanguageId.variants.length) {
        var replacedLang_1 = '';
        for (var _i = 0, _a = unicodeLanguageId.variants; _i < _a.length; _i++) {
            var variant = _a[_i];
            if ((replacedLang_1 =
                aliases_generated_1.languageAlias[(0, emitter_1.emitUnicodeLanguageId)({
                    lang: unicodeLanguageId.lang,
                    variants: [variant],
                })])) {
                var replacedLangAst = (0, parser_1.parseUnicodeLanguageId)(replacedLang_1.split(parser_1.SEPARATOR));
                finalLangAst = {
                    lang: replacedLangAst.lang,
                    script: finalLangAst.script || replacedLangAst.script,
                    region: finalLangAst.region || replacedLangAst.region,
                    variants: mergeVariants(finalLangAst.variants, replacedLangAst.variants),
                };
                break;
            }
        }
    }
    // language _ script _ country
    // ug-Arab-CN -> ug-CN
    if (finalLangAst.script && finalLangAst.region) {
        var replacedLang_2 = aliases_generated_1.languageAlias[(0, emitter_1.emitUnicodeLanguageId)({
            lang: finalLangAst.lang,
            script: finalLangAst.script,
            region: finalLangAst.region,
            variants: [],
        })];
        if (replacedLang_2) {
            var replacedLangAst = (0, parser_1.parseUnicodeLanguageId)(replacedLang_2.split(parser_1.SEPARATOR));
            finalLangAst = {
                lang: replacedLangAst.lang,
                script: replacedLangAst.script,
                region: replacedLangAst.region,
                variants: finalLangAst.variants,
            };
        }
    }
    // language _ country
    // eg. az_AZ -> az_Latn_A
    if (finalLangAst.region) {
        var replacedLang_3 = aliases_generated_1.languageAlias[(0, emitter_1.emitUnicodeLanguageId)({
            lang: finalLangAst.lang,
            region: finalLangAst.region,
            variants: [],
        })];
        if (replacedLang_3) {
            var replacedLangAst = (0, parser_1.parseUnicodeLanguageId)(replacedLang_3.split(parser_1.SEPARATOR));
            finalLangAst = {
                lang: replacedLangAst.lang,
                script: finalLangAst.script || replacedLangAst.script,
                region: replacedLangAst.region,
                variants: finalLangAst.variants,
            };
        }
    }
    // only language
    // e.g. twi -> ak
    var replacedLang = aliases_generated_1.languageAlias[(0, emitter_1.emitUnicodeLanguageId)({
        lang: finalLangAst.lang,
        variants: [],
    })];
    if (replacedLang) {
        var replacedLangAst = (0, parser_1.parseUnicodeLanguageId)(replacedLang.split(parser_1.SEPARATOR));
        finalLangAst = {
            lang: replacedLangAst.lang,
            script: finalLangAst.script || replacedLangAst.script,
            region: finalLangAst.region || replacedLangAst.region,
            variants: finalLangAst.variants,
        };
    }
    if (finalLangAst.region) {
        var region = finalLangAst.region.toUpperCase();
        var regionAlias = aliases_generated_1.territoryAlias[region];
        var replacedRegion = void 0;
        if (regionAlias) {
            var regions = regionAlias.split(' ');
            replacedRegion = regions[0];
            var likelySubtag = likelySubtags_generated_1.likelySubtags[(0, emitter_1.emitUnicodeLanguageId)({
                lang: finalLangAst.lang,
                script: finalLangAst.script,
                variants: [],
            })];
            if (likelySubtag) {
                var likelyRegion = (0, parser_1.parseUnicodeLanguageId)(likelySubtag.split(parser_1.SEPARATOR)).region;
                if (likelyRegion && regions.indexOf(likelyRegion) > -1) {
                    replacedRegion = likelyRegion;
                }
            }
        }
        if (replacedRegion) {
            finalLangAst.region = replacedRegion;
        }
        finalLangAst.region = finalLangAst.region.toUpperCase();
    }
    if (finalLangAst.script) {
        finalLangAst.script =
            finalLangAst.script[0].toUpperCase() +
                finalLangAst.script.slice(1).toLowerCase();
        if (aliases_generated_1.scriptAlias[finalLangAst.script]) {
            finalLangAst.script = aliases_generated_1.scriptAlias[finalLangAst.script];
        }
    }
    if (finalLangAst.variants.length) {
        for (var i = 0; i < finalLangAst.variants.length; i++) {
            var variant = finalLangAst.variants[i].toLowerCase();
            if (aliases_generated_1.variantAlias[variant]) {
                var alias = aliases_generated_1.variantAlias[variant];
                if ((0, parser_1.isUnicodeVariantSubtag)(alias)) {
                    finalLangAst.variants[i] = alias;
                }
                else if ((0, parser_1.isUnicodeLanguageSubtag)(alias)) {
                    // Yes this can happen per the spec
                    finalLangAst.lang = alias;
                }
            }
        }
        finalLangAst.variants.sort();
    }
    return finalLangAst;
}
exports.canonicalizeUnicodeLanguageId = canonicalizeUnicodeLanguageId;
/**
 * Canonicalize based on
 * https://www.unicode.org/reports/tr35/tr35.html#Canonical_Unicode_Locale_Identifiers
 * https://tc39.es/ecma402/#sec-canonicalizeunicodelocaleid
 * IMPORTANT: This modifies the object inline
 * @param locale
 */
function canonicalizeUnicodeLocaleId(locale) {
    locale.lang = canonicalizeUnicodeLanguageId(locale.lang);
    if (locale.extensions) {
        for (var _i = 0, _a = locale.extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            switch (extension.type) {
                case 'u':
                    extension.keywords = canonicalizeKVs(extension.keywords);
                    if (extension.attributes) {
                        extension.attributes = canonicalizeAttrs(extension.attributes);
                    }
                    break;
                case 't':
                    if (extension.lang) {
                        extension.lang = canonicalizeUnicodeLanguageId(extension.lang);
                    }
                    extension.fields = canonicalizeKVs(extension.fields);
                    break;
                default:
                    extension.value = extension.value.toLowerCase();
                    break;
            }
        }
        locale.extensions.sort(compareExtension);
    }
    return locale;
}
exports.canonicalizeUnicodeLocaleId = canonicalizeUnicodeLocaleId;
