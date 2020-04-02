import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import ThemedComponent from './ThemedComponent';

const ThemeContextProviderExample = () => (
  <ThemeContextProvider theme="test-theme">
    <ThemedComponent />
  </ThemeContextProvider>
);

export default ThemeContextProviderExample;
