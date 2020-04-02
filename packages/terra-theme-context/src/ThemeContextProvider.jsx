import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';

const propTypes = {
  /**
   * The components to be rendered within the context of the ThemeContextProvider. Components rendered here are able to interact with ThemeContextProvider through the ThemeContext.
   */
  children: PropTypes.element.isRequired,
  /**
   * The currently selected application theme to be provided via the ThemeContext.
   */
  theme: PropTypes.string,
};

const ThemeContextProvider = ({ theme, children }) => {
  const contextValue = useMemo(() => ({ theme }), [theme]);
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = propTypes;

export default ThemeContextProvider;
