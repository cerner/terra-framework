import { __assign, __spreadArray } from "tslib";
import { GetOption, invariant, SameValue, CoerceOptionsToObject, } from '@formatjs/ecma402-abstract';
import { isStructurallyValidLanguageTag, isUnicodeLanguageSubtag, isUnicodeRegionSubtag, parseUnicodeLanguageId, isUnicodeScriptSubtag, emitUnicodeLocaleId, parseUnicodeLocaleId, emitUnicodeLanguageId, likelySubtags, } from '@formatjs/intl-getcanonicallocales';
import getInternalSlots from './get_internal_slots';
var RELEVANT_EXTENSION_KEYS = ['ca', 'co', 'hc', 'kf', 'kn', 'nu'];
var UNICODE_TYPE_REGEX = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i;
function applyOptionsToTag(tag, options) {
    invariant(typeof tag === 'string', 'language tag must be a string');
    invariant(isStructurallyValidLanguageTag(tag), 'malformed language tag', RangeError);
    var language = GetOption(options, 'language', 'string', undefined, undefined);
    if (language !== undefined) {
        invariant(isUnicodeLanguageSubtag(language), 'Malformed unicode_language_subtag', RangeError);
    }
    var script = GetOption(options, 'script', 'string', undefined, undefined);
    if (script !== undefined) {
        invariant(isUnicodeScriptSubtag(script), 'Malformed unicode_script_subtag', RangeError);
    }
    var region = GetOption(options, 'region', 'string', undefined, undefined);
    if (region !== undefined) {
        invariant(isUnicodeRegionSubtag(region), 'Malformed unicode_region_subtag', RangeError);
    }
    var languageId = parseUnicodeLanguageId(tag);
    if (language !== undefined) {
        languageId.lang = language;
    }
    if (script !== undefined) {
        languageId.script = script;
    }
    if (region !== undefined) {
        languageId.region = region;
    }
    return Intl.getCanonicalLocales(emitUnicodeLocaleId(__assign(__assign({}, parseUnicodeLocaleId(tag)), { lang: languageId })))[0];
}
function applyUnicodeExtensionToTag(tag, options, relevantExtensionKeys) {
    var unicodeExtension;
    var keywords = [];
    var ast = parseUnicodeLocaleId(tag);
    for (var _i = 0, _a = ast.extensions; _i < _a.length; _i++) {
        var ext = _a[_i];
        if (ext.type === 'u') {
            unicodeExtension = ext;
            if (Array.isArray(ext.keywords))
                keywords = ext.keywords;
        }
    }
    var result = Object.create(null);
    for (var _b = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _b < relevantExtensionKeys_1.length; _b++) {
        var key = relevantExtensionKeys_1[_b];
        var value = void 0, entry = void 0;
        for (var _c = 0, keywords_1 = keywords; _c < keywords_1.length; _c++) {
            var keyword = keywords_1[_c];
            if (keyword[0] === key) {
                entry = keyword;
                value = entry[1];
            }
        }
        invariant(key in options, "".concat(key, " must be in options"));
        var optionsValue = options[key];
        if (optionsValue !== undefined) {
            invariant(typeof optionsValue === 'string', "Value for ".concat(key, " must be a string"));
            value = optionsValue;
            if (entry) {
                entry[1] = value;
            }
            else {
                keywords.push([key, value]);
            }
        }
        result[key] = value;
    }
    if (!unicodeExtension) {
        if (keywords.length) {
            ast.extensions.push({
                type: 'u',
                keywords: keywords,
                attributes: [],
            });
        }
    }
    else {
        unicodeExtension.keywords = keywords;
    }
    result.locale = Intl.getCanonicalLocales(emitUnicodeLocaleId(ast))[0];
    return result;
}
function mergeUnicodeLanguageId(lang, script, region, variants, replacement) {
    if (variants === void 0) { variants = []; }
    if (!replacement) {
        return {
            lang: lang || 'und',
            script: script,
            region: region,
            variants: variants,
        };
    }
    return {
        lang: !lang || lang === 'und' ? replacement.lang : lang,
        script: script || replacement.script,
        region: region || replacement.region,
        variants: __spreadArray(__spreadArray([], variants, true), replacement.variants, true),
    };
}
function addLikelySubtags(tag) {
    var ast = parseUnicodeLocaleId(tag);
    var unicodeLangId = ast.lang;
    var lang = unicodeLangId.lang, script = unicodeLangId.script, region = unicodeLangId.region, variants = unicodeLangId.variants;
    if (script && region) {
        var match_1 = likelySubtags[emitUnicodeLanguageId({ lang: lang, script: script, region: region, variants: [] })];
        if (match_1) {
            var parts_1 = parseUnicodeLanguageId(match_1);
            ast.lang = mergeUnicodeLanguageId(undefined, undefined, undefined, variants, parts_1);
            return emitUnicodeLocaleId(ast);
        }
    }
    if (script) {
        var match_2 = likelySubtags[emitUnicodeLanguageId({ lang: lang, script: script, variants: [] })];
        if (match_2) {
            var parts_2 = parseUnicodeLanguageId(match_2);
            ast.lang = mergeUnicodeLanguageId(undefined, undefined, region, variants, parts_2);
            return emitUnicodeLocaleId(ast);
        }
    }
    if (region) {
        var match_3 = likelySubtags[emitUnicodeLanguageId({ lang: lang, region: region, variants: [] })];
        if (match_3) {
            var parts_3 = parseUnicodeLanguageId(match_3);
            ast.lang = mergeUnicodeLanguageId(undefined, script, undefined, variants, parts_3);
            return emitUnicodeLocaleId(ast);
        }
    }
    var match = likelySubtags[lang] ||
        likelySubtags[emitUnicodeLanguageId({ lang: 'und', script: script, variants: [] })];
    if (!match) {
        throw new Error("No match for addLikelySubtags");
    }
    var parts = parseUnicodeLanguageId(match);
    ast.lang = mergeUnicodeLanguageId(undefined, script, region, variants, parts);
    return emitUnicodeLocaleId(ast);
}
/**
 * From: https://github.com/unicode-org/icu/blob/4231ca5be053a22a1be24eb891817458c97db709/icu4j/main/classes/core/src/com/ibm/icu/util/ULocale.java#L2395
 * @param tag
 */
function removeLikelySubtags(tag) {
    var maxLocale = addLikelySubtags(tag);
    if (!maxLocale) {
        return tag;
    }
    maxLocale = emitUnicodeLanguageId(__assign(__assign({}, parseUnicodeLanguageId(maxLocale)), { variants: [] }));
    var ast = parseUnicodeLocaleId(tag);
    var _a = ast.lang, lang = _a.lang, script = _a.script, region = _a.region, variants = _a.variants;
    var trial = addLikelySubtags(emitUnicodeLanguageId({ lang: lang, variants: [] }));
    if (trial === maxLocale) {
        return emitUnicodeLocaleId(__assign(__assign({}, ast), { lang: mergeUnicodeLanguageId(lang, undefined, undefined, variants) }));
    }
    if (region) {
        var trial_1 = addLikelySubtags(emitUnicodeLanguageId({ lang: lang, region: region, variants: [] }));
        if (trial_1 === maxLocale) {
            return emitUnicodeLocaleId(__assign(__assign({}, ast), { lang: mergeUnicodeLanguageId(lang, undefined, region, variants) }));
        }
    }
    if (script) {
        var trial_2 = addLikelySubtags(emitUnicodeLanguageId({ lang: lang, script: script, variants: [] }));
        if (trial_2 === maxLocale) {
            return emitUnicodeLocaleId(__assign(__assign({}, ast), { lang: mergeUnicodeLanguageId(lang, script, undefined, variants) }));
        }
    }
    return tag;
}
var Locale = /** @class */ (function () {
    function Locale(tag, opts) {
        // test262/test/intl402/RelativeTimeFormat/constructor/constructor/newtarget-undefined.js
        // Cannot use `new.target` bc of IE11 & TS transpiles it to something else
        var newTarget = this && this instanceof Locale ? this.constructor : void 0;
        if (!newTarget) {
            throw new TypeError("Intl.Locale must be called with 'new'");
        }
        var relevantExtensionKeys = Locale.relevantExtensionKeys;
        var internalSlotsList = [
            'initializedLocale',
            'locale',
            'calendar',
            'collation',
            'hourCycle',
            'numberingSystem',
        ];
        if (relevantExtensionKeys.indexOf('kf') > -1) {
            internalSlotsList.push('caseFirst');
        }
        if (relevantExtensionKeys.indexOf('kn') > -1) {
            internalSlotsList.push('numeric');
        }
        if (tag === undefined) {
            throw new TypeError("First argument to Intl.Locale constructor can't be empty or missing");
        }
        if (typeof tag !== 'string' && typeof tag !== 'object') {
            throw new TypeError('tag must be a string or object');
        }
        var internalSlots;
        if (typeof tag === 'object' &&
            (internalSlots = getInternalSlots(tag)) &&
            internalSlots.initializedLocale) {
            tag = internalSlots.locale;
        }
        else {
            tag = tag.toString();
        }
        internalSlots = getInternalSlots(this);
        var options = CoerceOptionsToObject(opts);
        tag = applyOptionsToTag(tag, options);
        var opt = Object.create(null);
        var calendar = GetOption(options, 'calendar', 'string', undefined, undefined);
        if (calendar !== undefined) {
            if (!UNICODE_TYPE_REGEX.test(calendar)) {
                throw new RangeError('invalid calendar');
            }
        }
        opt.ca = calendar;
        var collation = GetOption(options, 'collation', 'string', undefined, undefined);
        if (collation !== undefined) {
            if (!UNICODE_TYPE_REGEX.test(collation)) {
                throw new RangeError('invalid collation');
            }
        }
        opt.co = collation;
        var hc = GetOption(options, 'hourCycle', 'string', ['h11', 'h12', 'h23', 'h24'], undefined);
        opt.hc = hc;
        var kf = GetOption(options, 'caseFirst', 'string', ['upper', 'lower', 'false'], undefined);
        opt.kf = kf;
        var _kn = GetOption(options, 'numeric', 'boolean', undefined, undefined);
        var kn;
        if (_kn !== undefined) {
            kn = String(_kn);
        }
        opt.kn = kn;
        var numberingSystem = GetOption(options, 'numberingSystem', 'string', undefined, undefined);
        if (numberingSystem !== undefined) {
            if (!UNICODE_TYPE_REGEX.test(numberingSystem)) {
                throw new RangeError('Invalid numberingSystem');
            }
        }
        opt.nu = numberingSystem;
        var r = applyUnicodeExtensionToTag(tag, opt, relevantExtensionKeys);
        internalSlots.locale = r.locale;
        internalSlots.calendar = r.ca;
        internalSlots.collation = r.co;
        internalSlots.hourCycle = r.hc;
        if (relevantExtensionKeys.indexOf('kf') > -1) {
            internalSlots.caseFirst = r.kf;
        }
        if (relevantExtensionKeys.indexOf('kn') > -1) {
            internalSlots.numeric = SameValue(r.kn, 'true');
        }
        internalSlots.numberingSystem = r.nu;
    }
    /**
     * https://www.unicode.org/reports/tr35/#Likely_Subtags
     */
    Locale.prototype.maximize = function () {
        var locale = getInternalSlots(this).locale;
        try {
            var maximizedLocale = addLikelySubtags(locale);
            return new Locale(maximizedLocale);
        }
        catch (e) {
            return new Locale(locale);
        }
    };
    /**
     * https://www.unicode.org/reports/tr35/#Likely_Subtags
     */
    Locale.prototype.minimize = function () {
        var locale = getInternalSlots(this).locale;
        try {
            var minimizedLocale = removeLikelySubtags(locale);
            return new Locale(minimizedLocale);
        }
        catch (e) {
            return new Locale(locale);
        }
    };
    Locale.prototype.toString = function () {
        return getInternalSlots(this).locale;
    };
    Object.defineProperty(Locale.prototype, "baseName", {
        get: function () {
            var locale = getInternalSlots(this).locale;
            return emitUnicodeLanguageId(parseUnicodeLanguageId(locale));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "calendar", {
        get: function () {
            return getInternalSlots(this).calendar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "collation", {
        get: function () {
            return getInternalSlots(this).collation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "hourCycle", {
        get: function () {
            return getInternalSlots(this).hourCycle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "caseFirst", {
        get: function () {
            return getInternalSlots(this).caseFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "numeric", {
        get: function () {
            return getInternalSlots(this).numeric;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "numberingSystem", {
        get: function () {
            return getInternalSlots(this).numberingSystem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "language", {
        /**
         * https://tc39.es/proposal-intl-locale/#sec-Intl.Locale.prototype.language
         */
        get: function () {
            var locale = getInternalSlots(this).locale;
            return parseUnicodeLanguageId(locale).lang;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "script", {
        /**
         * https://tc39.es/proposal-intl-locale/#sec-Intl.Locale.prototype.script
         */
        get: function () {
            var locale = getInternalSlots(this).locale;
            return parseUnicodeLanguageId(locale).script;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Locale.prototype, "region", {
        /**
         * https://tc39.es/proposal-intl-locale/#sec-Intl.Locale.prototype.region
         */
        get: function () {
            var locale = getInternalSlots(this).locale;
            return parseUnicodeLanguageId(locale).region;
        },
        enumerable: false,
        configurable: true
    });
    Locale.relevantExtensionKeys = RELEVANT_EXTENSION_KEYS;
    return Locale;
}());
export { Locale };
try {
    if (typeof Symbol !== 'undefined') {
        Object.defineProperty(Locale.prototype, Symbol.toStringTag, {
            value: 'Intl.Locale',
            writable: false,
            enumerable: false,
            configurable: true,
        });
    }
    Object.defineProperty(Locale.prototype.constructor, 'length', {
        value: 1,
        writable: false,
        enumerable: false,
        configurable: true,
    });
}
catch (e) {
    // Meta fix so we're test262-compliant, not important
}
export default Locale;
