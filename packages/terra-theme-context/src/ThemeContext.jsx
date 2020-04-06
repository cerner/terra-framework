import React from 'react';
import PropTypes from 'prop-types';

const ThemeProviderContext = React.createContext({});

const themeContextShape = PropTypes.shape({
  /**
   * The current application theme className.
   * The default theme is indicated as undefined.
   */
  className: PropTypes.string,
});

export default ThemeProviderContext;
export { themeContextShape };
