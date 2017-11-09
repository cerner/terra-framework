/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import MenuList from '../common/menu/MenuList';
import RoutingDelegate from '../common/navigation/routing/RoutingDelegate';

const propTypes = {
  routingManager: RoutingDelegate.propType,
};

const ComponentTestsMenu = ({ routingManager, config }) => (
  <MenuList
    headerText={`${config.name} Tests`}
    routingManager={routingManager}
    links={config.tests.map(test => ({
      id: config.testRoot + test.path,
      path: config.testRoot + test.path,
      text: test.description,
    }))}
  />
);

ComponentTestsMenu.propTypes = propTypes;

export default ComponentTestsMenu;
