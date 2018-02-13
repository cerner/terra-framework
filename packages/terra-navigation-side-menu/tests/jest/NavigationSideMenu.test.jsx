import React from 'react';

import NavigationSideMenu from '../../src/NavigationSideMenu';

describe('Layout', () => {
  it('should render a NavigationSideMenu with default props', () => {
    const result = shallow((
      <NavigationSideMenu
        onChange={() => {}}
        routingStackDelegate={{ showParent: () => {} }}
        initialSelectedKey=""
      />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render a NavigationSideMenu with selectedKey', () => {
    const result = shallow((
      <NavigationSideMenu
        menuItems={[
          { key: 'menu', title: 'Test Menu', children: ['test1', 'test2', 'test3', 'test4'] },
          { key: 'test1', title: 'Test Menu 1' },
          { key: 'test2', title: 'Test Menu 2' },
          { key: 'test3', title: 'Test Menu 3' },
          { key: 'test4', title: 'Test Menu 4' },
        ]}
        onChange={() => {}}
        routingStackDelegate={{ showParent: () => {} }}
        initialSelectedKey="menu"
      />
    ));
    expect(result).toMatchSnapshot();
  });
});
