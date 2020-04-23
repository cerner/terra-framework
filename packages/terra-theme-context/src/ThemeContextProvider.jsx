import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';

const propTypes = {
  /**
   * The components to be rendered within the context of the ThemeContextProvider. Components rendered here are able to interact with ThemeContextProvider through the ThemeContext.
   */
  children: PropTypes.element.isRequired,
  /**
   * An object containing the className of the selected theme.
   */
  theme: PropTypes.shape({
    className: PropTypes.string,
  }),
};

const defaultProps = {
  theme: {},
};

const ThemeContextProvider = ({ theme, children }) => {
  const contextValue = useMemo(() => ({ className: theme.className }), [theme.className]);
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = propTypes;
ThemeContextProvider.defaultProps = defaultProps;

export default ThemeContextProvider;
