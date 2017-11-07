/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import MenuList from '../common/menu/MenuList';

const LayoutTests = props => (
  <MenuList
    headerText="Layout Tests"
    routingManager={props.routingManager}
    links={[
      { id: '/tests/layout/default', path: '/tests/layout/default', text: 'Layout - Default' },
      { id: '/tests/layout/no-menu', path: '/tests/layout/no-menu', text: 'Layout - No Menu' },
      { id: '/tests/layout/long-text', path: '/tests/layout/long-text', text: 'Layout - Long Text' },
    ]}
  />
);

export default LayoutTests;
