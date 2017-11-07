/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import MenuList from '../common/menu/MenuList';
import RoutingDelegate from '../common/navigation/routing/RoutingDelegate';

const propTypes = {
  routingManager: RoutingDelegate.propType,
};

const LayoutTests = props => (
  <MenuList
    headerText="Layout Tests"
    routingManager={props.routingManager}
    links={[
      { id: '/tests/layout/default', path: '/tests/layout/default', text: 'Default' },
      { id: '/tests/layout/no-menu', path: '/tests/layout/no-menu', text: 'No Menu' },
      { id: '/tests/layout/long-text', path: '/tests/layout/long-text', text: 'Long Menu Text' },
    ]}
  />
);

LayoutTests.propTypes = propTypes;

export default LayoutTests;
