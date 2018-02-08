import React from 'react';
import Base from 'terra-base';
import NavigationSideMenu from '../../lib/NavigationSideMenu';

const NavigationSideMenuDefault = () => (
  <Base>
    <div style={{ height: '768', width: '300px', position: 'relative' }}>
      <NavigationSideMenu
        id="test-menu"
        menuItems={[
          { key: 'test1', text: 'Test Menu 1', id: 'test-item-1' },
          { key: 'test2', text: 'Test Menu 2', id: 'test-item-2' },
          { key: 'test3', text: 'Test Menu 3', id: 'test-item-3' },
          { key: 'test4', text: 'Test Menu 4', id: 'test-item-4' },
        ]}
        onChange={() => {}}
        routingStackDelegate={{ showParent: () => {} }}
        selectedKey="test1"
        title="Test Tile"
      />
    </div>
  </Base>
);

export default NavigationSideMenuDefault;
