import ThemeContext from '../../src/ThemeContext';

describe('TerraThemeContext', () => {
  it('should export a Context object', () => {
    expect(ThemeContext.Provider).toBeDefined();
    expect(ThemeContext.Consumer).toBeDefined();
  });
});
