/* global TERRA_AGGREGATED_LOCALES */

// The fallback locale that will be used if a supported locale is unable to be retrieved from the browser.
const DEFAULT_LOCALE = 'en';

/**
 * Returns a boolean indicating if the locale is supported.
 * @param {string} locale - The locale.
 * @returns {bool} - A boolean indicating the locale is supported.
 */
const isSupported = (locale) => {
  if (typeof TERRA_AGGREGATED_LOCALES === 'object' && Array.isArray(TERRA_AGGREGATED_LOCALES) && locale) {
    return TERRA_AGGREGATED_LOCALES.indexOf(locale) > -1;
  }

  return false;
};

/**
 * Filters the user's preferred languages from the browser and returns the first language found that is included in the supported locale list.
 * @returns {string|null} - A supported locale. Null if not found.
 */
const filterLanguages = () => {
  if (navigator.languages && navigator.languages.length > 0) {
    for (let index = 0; index < navigator.languages.length; index += 1) {
      const locale = navigator.languages[index];
      const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : undefined;

      if (isSupported(locale)) {
        return locale;
      }

      if (fallbackLocale && isSupported(fallbackLocale)) {
        return fallbackLocale;
      }
    }
  }

  return null;
};

/**
 * Retrieves the preferred browser locale.
 * @returns {string} - A supported browser locale. Falls back to en.
 */
const getBrowserLocale = () => {
  const preferredLocale = filterLanguages();

  if (preferredLocale) {
    return preferredLocale;
  }

  if (isSupported(navigator.language)) {
    return navigator.language;
  }

  if (isSupported(navigator.userLanguage)) {
    return navigator.userLanguage;
  }

  if (isSupported(navigator.browserLanguage)) {
    return navigator.browserLanguage;
  }

  return DEFAULT_LOCALE;
};

export default getBrowserLocale;
export { isSupported, filterLanguages };
