import React from 'react';
import ThemeProvider from 'terra-theme-provider';
import MockThemeComponent from './common/MockThemeComponent';

const DefaultThemeProvider = () => (
  <ThemeProvider id="themeProvider">
    <MockThemeComponent id="themedComponent">
      Theme Provider Test
    </MockThemeComponent>
  </ThemeProvider>
);

export default DefaultThemeProvider;
