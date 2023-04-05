import { __assign } from "tslib";
var ALPHANUM_1_8 = /^[a-z0-9]{1,8}$/i;
var ALPHANUM_2_8 = /^[a-z0-9]{2,8}$/i;
var ALPHANUM_3_8 = /^[a-z0-9]{3,8}$/i;
var KEY_REGEX = /^[a-z0-9][a-z]$/i;
var TYPE_REGEX = /^[a-z0-9]{3,8}$/i;
var ALPHA_4 = /^[a-z]{4}$/i;
// alphanum-[tTuUxX]
var OTHER_EXTENSION_TYPE = /^[0-9a-svwyz]$/i;
var UNICODE_REGION_SUBTAG_REGEX = /^([a-z]{2}|[0-9]{3})$/i;
var UNICODE_VARIANT_SUBTAG_REGEX = /^([a-z0-9]{5,8}|[0-9][a-z0-9]{3})$/i;
var UNICODE_LANGUAGE_SUBTAG_REGEX = /^([a-z]{2,3}|[a-z]{5,8})$/i;
var TKEY_REGEX = /^[a-z][0-9]$/i;
export var SEPARATOR = '-';
export function isUnicodeLanguageSubtag(lang) {
    return UNICODE_LANGUAGE_SUBTAG_REGEX.test(lang);
}
export function isStructurallyValidLanguageTag(tag) {
    try {
        parseUnicodeLanguageId(tag.split(SEPARATOR));
    }
    catch (e) {
        return false;
    }
    return true;
}
export function isUnicodeRegionSubtag(region) {
    return UNICODE_REGION_SUBTAG_REGEX.test(region);
}
export function isUnicodeScriptSubtag(script) {
    return ALPHA_4.test(script);
}
export function isUnicodeVariantSubtag(variant) {
    return UNICODE_VARIANT_SUBTAG_REGEX.test(variant);
}
export function parseUnicodeLanguageId(chunks) {
    if (typeof chunks === 'string') {
        chunks = chunks.split(SEPARATOR);
    }
    var lang = chunks.shift();
    if (!lang) {
        throw new RangeError('Missing unicode_language_subtag');
    }
    if (lang === 'root') {
        return { lang: 'root', variants: [] };
    }
    // unicode_language_subtag
    if (!isUnicodeLanguageSubtag(lang)) {
        throw new RangeError('Malformed unicode_language_subtag');
    }
    var script;
    // unicode_script_subtag
    if (chunks.length && isUnicodeScriptSubtag(chunks[0])) {
        script = chunks.shift();
    }
    var region;
    // unicode_region_subtag
    if (chunks.length && isUnicodeRegionSubtag(chunks[0])) {
        region = chunks.shift();
    }
    var variants = {};
    while (chunks.length && isUnicodeVariantSubtag(chunks[0])) {
        var variant = chunks.shift();
        if (variant in variants) {
            throw new RangeError("Duplicate variant \"".concat(variant, "\""));
        }
        variants[variant] = 1;
    }
    return {
        lang: lang,
        script: script,
        region: region,
        variants: Object.keys(variants),
    };
}
function parseUnicodeExtension(chunks) {
    var keywords = [];
    var keyword;
    while (chunks.length && (keyword = parseKeyword(chunks))) {
        keywords.push(keyword);
    }
    if (keywords.length) {
        return {
            type: 'u',
            keywords: keywords,
            attributes: [],
        };
    }
    // Mix of attributes & keywords
    // Check for attributes first
    var attributes = [];
    while (chunks.length && ALPHANUM_3_8.test(chunks[0])) {
        attributes.push(chunks.shift());
    }
    while (chunks.length && (keyword = parseKeyword(chunks))) {
        keywords.push(keyword);
    }
    if (keywords.length || attributes.length) {
        return {
            type: 'u',
            attributes: attributes,
            keywords: keywords,
        };
    }
    throw new RangeError('Malformed unicode_extension');
}
function parseKeyword(chunks) {
    var key;
    if (!KEY_REGEX.test(chunks[0])) {
        return;
    }
    key = chunks.shift();
    var type = [];
    while (chunks.length && TYPE_REGEX.test(chunks[0])) {
        type.push(chunks.shift());
    }
    var value = '';
    if (type.length) {
        value = type.join(SEPARATOR);
    }
    return [key, value];
}
function parseTransformedExtension(chunks) {
    var lang;
    try {
        lang = parseUnicodeLanguageId(chunks);
    }
    catch (e) {
        // Try just parsing tfield
    }
    var fields = [];
    while (chunks.length && TKEY_REGEX.test(chunks[0])) {
        var key = chunks.shift();
        var value = [];
        while (chunks.length && ALPHANUM_3_8.test(chunks[0])) {
            value.push(chunks.shift());
        }
        if (!value.length) {
            throw new RangeError("Missing tvalue for tkey \"".concat(key, "\""));
        }
        fields.push([key, value.join(SEPARATOR)]);
    }
    if (fields.length) {
        return {
            type: 't',
            fields: fields,
            lang: lang,
        };
    }
    throw new RangeError('Malformed transformed_extension');
}
function parsePuExtension(chunks) {
    var exts = [];
    while (chunks.length && ALPHANUM_1_8.test(chunks[0])) {
        exts.push(chunks.shift());
    }
    if (exts.length) {
        return {
            type: 'x',
            value: exts.join(SEPARATOR),
        };
    }
    throw new RangeError('Malformed private_use_extension');
}
function parseOtherExtensionValue(chunks) {
    var exts = [];
    while (chunks.length && ALPHANUM_2_8.test(chunks[0])) {
        exts.push(chunks.shift());
    }
    if (exts.length) {
        return exts.join(SEPARATOR);
    }
    return '';
}
function parseExtensions(chunks) {
    if (!chunks.length) {
        return { extensions: [] };
    }
    var extensions = [];
    var unicodeExtension;
    var transformedExtension;
    var puExtension;
    var otherExtensionMap = {};
    do {
        var type = chunks.shift();
        switch (type) {
            case 'u':
            case 'U':
                if (unicodeExtension) {
                    throw new RangeError('There can only be 1 -u- extension');
                }
                unicodeExtension = parseUnicodeExtension(chunks);
                extensions.push(unicodeExtension);
                break;
            case 't':
            case 'T':
                if (transformedExtension) {
                    throw new RangeError('There can only be 1 -t- extension');
                }
                transformedExtension = parseTransformedExtension(chunks);
                extensions.push(transformedExtension);
                break;
            case 'x':
            case 'X':
                if (puExtension) {
                    throw new RangeError('There can only be 1 -x- extension');
                }
                puExtension = parsePuExtension(chunks);
                extensions.push(puExtension);
                break;
            default:
                if (!OTHER_EXTENSION_TYPE.test(type)) {
                    throw new RangeError('Malformed extension type');
                }
                if (type in otherExtensionMap) {
                    throw new RangeError("There can only be 1 -".concat(type, "- extension"));
                }
                var extension = {
                    type: type,
                    value: parseOtherExtensionValue(chunks),
                };
                otherExtensionMap[extension.type] = extension;
                extensions.push(extension);
                break;
        }
    } while (chunks.length);
    return { extensions: extensions };
}
export function parseUnicodeLocaleId(locale) {
    var chunks = locale.split(SEPARATOR);
    var lang = parseUnicodeLanguageId(chunks);
    return __assign({ lang: lang }, parseExtensions(chunks));
}
