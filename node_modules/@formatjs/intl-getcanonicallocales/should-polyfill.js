"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldPolyfill = void 0;
function shouldPolyfill() {
    return (typeof Intl === 'undefined' ||
        !('getCanonicalLocales' in Intl) ||
        // Native Intl.getCanonicalLocales is just buggy
        // https://bugs.chromium.org/p/v8/issues/detail?id=10682
        Intl.getCanonicalLocales('und-x-private')[0] ===
            'x-private');
}
exports.shouldPolyfill = shouldPolyfill;
