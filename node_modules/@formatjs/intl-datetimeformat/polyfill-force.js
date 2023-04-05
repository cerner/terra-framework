"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var ecma402_abstract_1 = require("@formatjs/ecma402-abstract");
var to_locale_string_1 = require("./src/to_locale_string");
(0, ecma402_abstract_1.defineProperty)(Intl, 'DateTimeFormat', { value: _1.DateTimeFormat });
(0, ecma402_abstract_1.defineProperty)(Date.prototype, 'toLocaleString', {
    value: function toLocaleString(locales, options) {
        return (0, to_locale_string_1.toLocaleString)(this, locales, options);
    },
});
(0, ecma402_abstract_1.defineProperty)(Date.prototype, 'toLocaleDateString', {
    value: function toLocaleDateString(locales, options) {
        return (0, to_locale_string_1.toLocaleDateString)(this, locales, options);
    },
});
(0, ecma402_abstract_1.defineProperty)(Date.prototype, 'toLocaleTimeString', {
    value: function toLocaleTimeString(locales, options) {
        return (0, to_locale_string_1.toLocaleTimeString)(this, locales, options);
    },
});
