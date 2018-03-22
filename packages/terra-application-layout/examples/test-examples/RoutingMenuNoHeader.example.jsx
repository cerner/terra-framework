/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { RoutingMenu } from '../../lib/ApplicationLayout';

const AppRouter = () => (
  <div style={{ height: '100%' }} id="routing-menu-test">
    <MemoryRouter>
      <RoutingMenu
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
        }]}
        layoutConfig={{}}
        routingStackDelegate={{}}
      />
    </MemoryRouter>
  </div>
);

export default AppRouter;
