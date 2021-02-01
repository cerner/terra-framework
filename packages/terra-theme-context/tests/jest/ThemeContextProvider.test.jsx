import React from 'react';
import ThemeContextProvider from '../../src/ThemeContextProvider';

describe('ThemeContextProvider', () => {
  describe('Snapshots', () => {
    it('should render with minimal props', () => {
      const wrapper = shallow((
        <ThemeContextProvider>
          <div />
        </ThemeContextProvider>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with a theme', () => {
      const wrapper = shallow((
        <ThemeContextProvider theme={{ name: 'test-theme', className: 'test-theme-class' }}>
          <div />
        </ThemeContextProvider>
      ));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
