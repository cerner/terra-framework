/* global TERRA_AGGREGATED_LOCALES TERRA_THEME_CONFIG */
import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import AppSettingsContext from './_AppSettingsContext';
import { settingsConfigShape } from './siteConfigShapes';

const propTypes = {
  children: PropTypes.element.isRequired,
  settingsConfig: settingsConfigShape.isRequired,
};

/* Use default locales or fall back on default. terra-toolkit v5.21.0 provides configurations from terraI18n,
  * so this reduces the number of places users need to define their locales.
  */
const locales = typeof TERRA_AGGREGATED_LOCALES === 'object' ? TERRA_AGGREGATED_LOCALES : ['en'];
const themesConfig = typeof TERRA_THEME_CONFIG === 'object' ? TERRA_THEME_CONFIG : {};
const scopedThemes = themesConfig.scoped || [];
const defaultThemeName = themesConfig.theme || 'terra-default-theme';

const themesMap = {
  ...scopedThemes.reduce((acc, name) => {
    acc[name] = name;
    return acc;
  }, {}),
  [defaultThemeName]: undefined,
};

// Sort themes alphabetically
const themes = Object.keys(themesMap).sort((a, b) => {
  const nameA = a.toUpperCase(); // ignore upper and lowercase
  const nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});

const AppSettingsProvider = ({ settingsConfig, children }) => {
  const {
    defaultLocale = 'en',
    defaultTheme = defaultThemeName,
    defaultDirection = 'ltr',
  } = settingsConfig;

  const [currentLocale, setCurrentLocale] = useState(defaultLocale);
  const [currentDirection, setCurrentDirection] = useState(defaultDirection);
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  /**
   * Place settings on dom
   */
  useEffect(() => {
    const htmlNode = document.getElementsByTagName('html')[0];

    if (htmlNode.getAttribute('lang') !== currentLocale) {
      htmlNode.setAttribute('lang', currentLocale);
    }

    if (htmlNode.getAttribute('dir') !== currentDirection) {
      htmlNode.setAttribute('dir', currentDirection);
    }
  }, [currentLocale, currentDirection]);

  const appSettings = useMemo(() => {
    /**
     * Handle setting update and store new settings in state.
     * @param {*} newSettings
     */
    const onUpdate = ({ locale, theme, direction }) => {
      if (locale) {
        setCurrentLocale(locale);
      }

      if (theme) {
        setCurrentTheme(theme);
      }

      if (direction) {
        setCurrentDirection(direction);
      }
    };

    return ({
      locales,
      currentLocale,
      currentTheme,
      currentDirection,
      directions: ['ltr', 'rtl'],
      themes,
      currentThemeClassName: themesMap[currentTheme],
      onUpdate,
    });
  }, [currentLocale, currentTheme, currentDirection]);

  return (
    <AppSettingsContext.Provider value={appSettings}>
      {children}
    </AppSettingsContext.Provider>
  );
};

AppSettingsProvider.propTypes = propTypes;

export default AppSettingsProvider;
