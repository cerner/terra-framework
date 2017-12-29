import React from 'react';
import PropTypes from 'prop-types';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import MenuList from '../common/menu/MenuList';
import { itemConfigPropType } from '../configPropTypes';

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
  config: itemConfigPropType,
  siteRoot: PropTypes.string,
};

const ComponentTestsMenu = ({ routingStackDelegate, config, siteRoot }) => (
  <MenuList
    headerText={`${config.name} Tests`}
    routingStackDelegate={routingStackDelegate}
    links={config.tests.map(test => ({
      id: siteRoot + config.testsRoot + test.path,
      path: `${siteRoot}${config.testsRoot}${test.path}`,
      text: test.description,
    }))}
  />
);

ComponentTestsMenu.propTypes = propTypes;

export default ComponentTestsMenu;
