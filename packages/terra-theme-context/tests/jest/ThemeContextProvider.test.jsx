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
        <ThemeContextProvider theme={{ className: 'test-theme' }}>
          <div />
        </ThemeContextProvider>
      ));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
