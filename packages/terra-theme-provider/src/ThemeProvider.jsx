import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<ThemeProvider />`
   */
  children: PropTypes.node.isRequired,
  /**
   * Name of class for specified theme
   */
  themeName: PropTypes.string,
};

const ThemeProvider = ({
  children,
  themeName,
}) => {
  useEffect(() => {
    if (themeName) {
      document.documentElement.classList.add(themeName);
    }
    return () => {
      if (themeName) {
        document.documentElement.classList.remove(themeName);
      }
    };
  }, [themeName]);

  return <React.Fragment>{children}</React.Fragment>;
};

ThemeProvider.propTypes = propTypes;

export default ThemeProvider;
