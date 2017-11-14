/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import MenuList from '../common/menu/MenuList';
import RoutingDelegate from 'terra-navigation/lib/routing/RoutingDelegate';
import { itemConfigPropType } from '../../componentConfig';

const propTypes = {
  routingManager: RoutingDelegate.propType,
  config: itemConfigPropType,
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
