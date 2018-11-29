/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import DevSiteRoutingMenu from '../../../menu/DevSiteRoutingMenu';

export default () => (
  <div style={{ height: '100%' }} id="dev-site-routing-menu-test">
    <MemoryRouter>
      <DevSiteRoutingMenu
        title="Test Dev Site Routing Menu"
        menuItems={[{
          text: 'Item 1',
          path: '/item_1',
          hasSubMenu: true,
        }, {
          text: 'Item 2',
          path: '/item_2',
          hasSubMenu: true,
        }, {
          text: 'Item 3',
          path: '/item_3',
          hasSubMenu: false,
          externalLink: {
            path: 'http://test.brokenurl.terra-framework.com',
            target: '_self',
          },
        }]}
        layoutConfig={{}}
        routingStackDelegate={{
          showParent: () => {},
        }}
      />
    </MemoryRouter>
  </div>
);
