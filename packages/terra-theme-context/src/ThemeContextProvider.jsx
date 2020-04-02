import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';

const propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.string,
};

const ThemeContextProvider = ({ theme, children }) => (
  <ThemeContext.Provider value={{ theme }}>
    {children}
  </ThemeContext.Provider>
);

ThemeContextProvider.propTypes = propTypes;

export default ThemeContextProvider;
