import React from 'react';
import ThemeProvider from '../../src/ThemeProvider';

beforeEach(() => {
  document.documentElement.className = '';
});

describe('ThemeProvider', () => {
  const defaultRender = (
    <ThemeProvider themeName="cerner-mock-theme" density="compact">
      <p>Child content</p>
    </ThemeProvider>
  );

  // Snapshot Tests
  it('should shallow render a theme provider component', () => {
    const wrapper = enzyme.shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('verify theme name is added to documentElement class list', () => {
    enzyme.mount(defaultRender);

    expect(document.documentElement.classList.contains('cerner-mock-theme')).toBe(true);
  });

  it('verifies density is added to documentElement class list', () => {
    enzyme.mount(
      <ThemeProvider density="compact">
        <p>Child content</p>
      </ThemeProvider>,
    );

    expect(document.documentElement.classList.contains('compact')).toBe(true);
  });

  it('verifies both theme name and density are added to documentElement class list', () => {
    enzyme.mount(
      <ThemeProvider themeName="cerner-mock-theme" density="compact">
        <p>Child content</p>
      </ThemeProvider>,
    );

    expect(document.documentElement.classList.length).toBe(2);
    expect(document.documentElement.classList.contains('cerner-mock-theme')).toBe(true);
    expect(document.documentElement.classList.contains('compact')).toBe(true);
  });

  it('verifies no classes are added to the documentElement class list when props are not passed', () => {
    enzyme.mount(
      <ThemeProvider>
        <p>Child content</p>
      </ThemeProvider>,
    );

    expect(document.documentElement.classList.length).toBe(0);
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      enzyme.shallow(<ThemeProvider />);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });
});
