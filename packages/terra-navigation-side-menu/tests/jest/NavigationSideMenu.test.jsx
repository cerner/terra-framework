import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import NavigationSideMenu from '../../src/NavigationSideMenu';

describe('Layout', () => {
  it('should render a NavigationSideMenu with default props', () => {
    const result = enzymeIntl.shallowWithIntl((
      <NavigationSideMenu
        onChange={() => {}}
        routingStackBack={() => {}}
        selectedMenuKey=""
      />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render a NavigationSideMenu with a toolbar', () => {
    const result = enzymeIntl.shallowWithIntl((
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
    const result = enzymeIntl.shallowWithIntl((
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

  it('should render a NavigationSideMenu with ariaLabel', () => {
    const result = enzymeIntl.mountWithIntl((
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
        ariaLabel="Sub Menu List"
      />
    ));
    const navElement = result.find('nav');
    expect(navElement.prop('aria-label')).toEqual('Sub Menu List');
    expect(result).toMatchSnapshot();
  });

  it('should render a drill-in variant of NavigationSideMenu with selectedKey', () => {
    const result = enzymeIntl.mountWithIntl((
      <NavigationSideMenu
        menuItems={[
          { key: 'menu', text: 'Test Menu', childKeys: ['test1', 'test2', 'test3', 'test4'] },
          { key: 'test1', text: 'Test Menu 1', isDisabled: true },
          { key: 'test2', text: 'Test Menu 2' },
          { key: 'test3', text: 'Test Menu 3' },
          { key: 'test4', text: 'Test Menu 4' },
        ]}
        onChange={() => {}}
        routingStackBack={() => {}}
        selectedMenuKey="menu"
        variant="drill-in"
      />
    ));
    expect(result.prop('variant')).toEqual('drill-in');
    expect(result.find('IconDocuments')).toBeDefined();
    expect(result).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const result = enzymeIntl.mountWithIntl(
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
