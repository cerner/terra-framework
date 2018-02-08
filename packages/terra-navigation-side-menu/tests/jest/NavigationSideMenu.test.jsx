import React from 'react';

import NavigationSideMenu from '../../src/NavigationSideMenu';

describe('Layout', () => {
  it('should render a NavigationSideMenu with default props', () => {
    const result = shallow((
      <NavigationSideMenu
        onChange={() => {}}
        routingStackDelegate={{ showParent: () => {} }}
      />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render a NavigationSideMenu with selectedKey', () => {
    const result = shallow((
      <NavigationSideMenu
        menuItems={[
          { key: 'test1', text: 'Test Menu 1' },
          { key: 'test2', text: 'Test Menu 2' },
          { key: 'test3', text: 'Test Menu 3' },
          { key: 'test4', text: 'Test Menu 4' },
        ]}
        onChange={() => {}}
        routingStackDelegate={{ showParent: () => {} }}
        selectedKey="test1"
        title="Test Menu"
      />
    ));
    expect(result).toMatchSnapshot();
  });
});
