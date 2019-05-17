/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ApplicationLayoutCommon.test.scss';

import { RoutingMenu } from '../../../ApplicationLayout';

const cx = classNames.bind(styles);

const AppRouter = () => (
  <div className={cx('application-layout-test-app-router')} id="routing-menu-test">
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
