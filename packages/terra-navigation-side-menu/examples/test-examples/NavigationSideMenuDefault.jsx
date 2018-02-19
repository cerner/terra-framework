import React from 'react';
import Base from 'terra-base';
import NavigationSideMenu from '../../lib/NavigationSideMenu';

const NavigationSideMenuDefault = () => (
  <Base>
    <div style={{ height: '768', width: '300px', position: 'relative' }}>
      <NavigationSideMenu
        id="test-menu"
        menuItems={[
          { key: 'menu', text: 'Menu', children: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },
          { key: 'submenu1', text: 'Sub Menu 1', children: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1' },
          { key: 'submenu2', text: 'Sub Menu 2' },
          { key: 'submenu3', text: 'Sub Menu 3' },
          { key: 'submenu4', text: 'Sub Menu 4' },
          { key: 'subsubmenu1', text: 'Sub-Sub Menu 1', id: 'test-item-2' },
          { key: 'subsubmenu2', text: 'Sub-Sub Menu 2' },
          { key: 'subsubmenu3', text: 'Sub-Sub Menu 3' },
        ]}
        onChange={() => {}}
        routingStackDelegate={{ showParent: () => {} }}
        initialSelectedKey="menu"
      />
    </div>
  </Base>
);

export default NavigationSideMenuDefault;
