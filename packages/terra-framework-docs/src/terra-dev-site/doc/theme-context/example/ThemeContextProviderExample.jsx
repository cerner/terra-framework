import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import ThemedComponent from './ThemedComponent';

const ThemeContextProviderExample = () => (
  <ThemeContextProvider theme={{ name: 'test-theme', className: 'test-theme' }}>
    <ThemedComponent />
  </ThemeContextProvider>
);

export default ThemeContextProviderExample;
