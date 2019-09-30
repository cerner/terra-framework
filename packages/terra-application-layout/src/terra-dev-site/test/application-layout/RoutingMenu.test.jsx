import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ApplicationLayoutCommon.test.module.scss';

import { RoutingMenu } from '../../../ApplicationLayout';

const cx = classNames.bind(styles);

const AppRouter = () => (
  <div className={cx('app-router')} id="routing-menu-test">
    <MemoryRouter>
      <RoutingMenu
        title="Test Routing Menu"
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
        routingStackDelegate={{
          showParent: () => {},
        }}
      />
    </MemoryRouter>
  </div>
);

export default AppRouter;
