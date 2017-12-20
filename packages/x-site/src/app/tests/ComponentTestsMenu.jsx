import React from 'react';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import MenuList from '../common/menu/MenuList';
import { itemConfigPropType } from '../configPropTypes';

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
      path: `/site${config.testRoot}${test.path}`,
      text: test.description,
    }))}
  />
);

ComponentTestsMenu.propTypes = propTypes;

export default ComponentTestsMenu;
