import React from 'react';
import RoutingStackDelegate from 'terra-navigation/lib/routing/RoutingStackDelegate';

import MenuList from '../common/menu/MenuList';
import { itemConfigPropType } from '../../componentConfig';

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
  config: itemConfigPropType,
};

const ComponentTestsMenu = ({ routingStackDelegate, config }) => (
  <MenuList
    headerText={`${config.name} Tests`}
    routingStackDelegate={routingStackDelegate}
    links={config.tests.map(test => ({
      id: config.testRoot + test.path,
      path: config.testRoot + test.path,
      text: test.description,
    }))}
  />
);

ComponentTestsMenu.propTypes = propTypes;

export default ComponentTestsMenu;
