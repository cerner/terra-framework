import React from 'react';
import ThemeContextProvider from '../../src/ThemeContextProvider';

describe('ThemeContextProvider', () => {
  describe('Snapshots', () => {
    it('should render with minimal props', () => {
      const wrapper = enzyme.shallow((
        <ThemeContextProvider>
          <div />
        </ThemeContextProvider>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with a theme', () => {
      const wrapper = enzyme.shallow((
        <ThemeContextProvider theme={{ name: 'test-theme', className: 'test-theme-class' }}>
          <div />
        </ThemeContextProvider>
      ));

      const contextValue = wrapper.find('ContextProvider').props().value;

      expect(contextValue.name).toBe('test-theme');
      expect(contextValue.className).toBe('test-theme-class');
      expect(contextValue.density).toBeUndefined();
    });

    it('should render with a theme with a density', () => {
      const wrapper = enzyme.shallow((
        <ThemeContextProvider theme={{ name: 'test-theme', className: 'test-theme-class', density: 'compact' }}>
          <div />
        </ThemeContextProvider>
      ));

      const contextValue = wrapper.find('ContextProvider').props().value;

      expect(contextValue.name).toBe('test-theme');
      expect(contextValue.className).toBe('test-theme-class');
      expect(contextValue.density).toBe('compact');
    });
  });
});
