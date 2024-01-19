import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import 'terra-theme-properties';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<ThemeProvider />`
   */
  children: PropTypes.node,

  /**
   * Name of class for specified theme
   */
  themeName: PropTypes.string,

  /**
   * Name of class for specified density
   */
  density: PropTypes.string,
};

const ThemeProvider = ({
  children,
  themeName,
  density,
}) => {
  useEffect(() => {
    const themeClassList = [];

    // Add theme name to array, if it exists
    if (themeName) {
      themeClassList.push(themeName);
    }

    // Add density to array, if it exists
    if (density) {
      themeClassList.push(density);
    }

    // Add theme classes to documentElement class list
    if (themeClassList.length > 0) {
      document.documentElement.classList.add(...themeClassList);
    }
    return () => {
      // Remove theme classes from documentElement class list
      if (themeClassList.length > 0) {
        document.documentElement.classList.remove(...themeClassList);
      }
    };
  }, [density, themeName]);

  return <>{children}</>;
};

ThemeProvider.propTypes = propTypes;

export default ThemeProvider;
