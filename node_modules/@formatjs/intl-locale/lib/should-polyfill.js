/**
 * https://bugs.chromium.org/p/v8/issues/detail?id=10682
 */
function hasIntlGetCanonicalLocalesBug() {
    try {
        return new Intl.Locale('und-x-private').toString() === 'x-private';
    }
    catch (e) {
        return true;
    }
}
export function shouldPolyfill() {
    return !('Locale' in Intl) || hasIntlGetCanonicalLocalesBug();
}
