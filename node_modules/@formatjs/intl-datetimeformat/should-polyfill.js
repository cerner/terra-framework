"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldPolyfill = void 0;
var intl_localematcher_1 = require("@formatjs/intl-localematcher");
var supported_locales_1 = require("./supported-locales");
function supportsDateStyle() {
    try {
        return !!new Intl.DateTimeFormat(undefined, {
            dateStyle: 'short',
        }).resolvedOptions().dateStyle;
    }
    catch (e) {
        return false;
    }
}
/**
 * https://bugs.chromium.org/p/chromium/issues/detail?id=865351
 */
function hasChromeLt71Bug() {
    try {
        return (new Intl.DateTimeFormat('en', {
            hourCycle: 'h11',
            hour: 'numeric',
        }).formatToParts(0)[2].type !== 'dayPeriod');
    }
    catch (e) {
        return false;
    }
}
/**
 * Node 14's version of Intl.DateTimeFormat does not throw
 * when dateStyle/timeStyle is used with other options.
 * This was fixed in newer V8 versions
 */
function hasUnthrownDateTimeStyleBug() {
    try {
        return !!new Intl.DateTimeFormat('en', {
            dateStyle: 'short',
            hour: 'numeric',
        }).format(new Date(0));
    }
    catch (e) {
        return false;
    }
}
function supportedLocalesOf(locale) {
    if (!locale) {
        return true;
    }
    var locales = Array.isArray(locale) ? locale : [locale];
    return (Intl.DateTimeFormat.supportedLocalesOf(locales).length === locales.length);
}
function shouldPolyfill(locale) {
    if (locale === void 0) { locale = 'en'; }
    if (!('DateTimeFormat' in Intl) ||
        !('formatToParts' in Intl.DateTimeFormat.prototype) ||
        !('formatRange' in Intl.DateTimeFormat.prototype) ||
        hasChromeLt71Bug() ||
        hasUnthrownDateTimeStyleBug() ||
        !supportsDateStyle() ||
        !supportedLocalesOf(locale)) {
        return locale ? (0, intl_localematcher_1.match)([locale], supported_locales_1.supportedLocales, 'en') : undefined;
    }
}
exports.shouldPolyfill = shouldPolyfill;
