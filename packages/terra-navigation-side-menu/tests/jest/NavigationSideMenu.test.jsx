import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import NavigationSideMenu from '../../src/NavigationSideMenu';

describe('Layout', () => {
  it('should render a NavigationSideMenu with default props', () => {
    const result = shallowWithIntl((
      <NavigationSideMenu
        onChange={() => {}}
        routingStackBack={() => {}}
        selectedMenuKey=""
      />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render a NavigationSideMenu with a toolbar', () => {
    const result = shallowWithIntl((
      <NavigationSideMenu
        onChange={jest.fn()}
        routingStackBack={jest.fn()}
        selectedMenuKey=""
        toolbar={<div>Toolbar</div>}
      />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render a NavigationSideMenu with selectedKey', () => {
    const result = shallowWithIntl((
      <NavigationSideMenu
        menuItems={[
          { key: 'menu', text: 'Test Menu', childKeys: ['test1', 'test2', 'test3', 'test4'] },
          { key: 'test1', text: 'Test Menu 1' },
          { key: 'test2', text: 'Test Menu 2' },
          { key: 'test3', text: 'Test Menu 3' },
          { key: 'test4', text: 'Test Menu 4' },
        ]}
        onChange={() => {}}
        routingStackBack={() => {}}
        selectedMenuKey="menu"
      />
    ));
    expect(result).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const result = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <NavigationSideMenu
          menuItems={[
            { key: 'menu', text: 'Test Menu', childKeys: ['test1', 'test2', 'test3', 'test4'] },
            { key: 'test1', text: 'Test Menu 1' },
            { key: 'test2', text: 'Test Menu 2' },
            { key: 'test3', text: 'Test Menu 3' },
            { key: 'test4', text: 'Test Menu 4' },
          ]}
          onChange={() => {}}
          routingStackBack={() => {}}
          selectedMenuKey="menu"
        />
      </ThemeContextProvider>,
    );
    expect(result).toMatchSnapshot();
  });
});
