import React from 'react';
import ThemeProvider from '../../../ThemeProvider';
import MockThemeComponent from '../common/MockThemeComponent';

const DefaultThemeProvider = () => (
  <ThemeProvider id="themeProvider" themeName="cerner-mock-theme" isGlobalTheme>
    <MockThemeComponent id="themedComponent">
      Theme Provider Test
    </MockThemeComponent>
  </ThemeProvider>
);

export default DefaultThemeProvider;
