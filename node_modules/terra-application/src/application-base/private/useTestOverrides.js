import { useState, useEffect } from 'react';

const APPLICATION_BASE_OVERRIDE_EVENT = 'applicationBase.testOverride';

/**
 * Custom React hook that overrides locale and themes via events. Leveraged by full stack testing to control deployed applications.
 * @returns {Object} Contains the locale, theme to override with.
 */
const useTestOverrides = () => {
  const [localeOverride, setLocaleOverride] = useState();
  const [themeOverride, setThemeOverride] = useState();

  useEffect(() => {
    const handleTestOverrides = (event) => {
      if (!event || !event.metaData) {
        return;
      }

      const { metaData } = event;
      if (typeof metaData.locale !== 'undefined') {
        setLocaleOverride(metaData.locale);
      }

      if (typeof metaData.theme !== 'undefined') {
        setThemeOverride(metaData.theme);
      }
    };

    window.addEventListener(APPLICATION_BASE_OVERRIDE_EVENT, handleTestOverrides);
    return () => {
      window.removeEventListener(APPLICATION_BASE_OVERRIDE_EVENT, handleTestOverrides);
    };
  }, []); // Empty array ensures we setup and teardown event listener once.

  return { localeOverride, themeOverride };
};

export default useTestOverrides;
