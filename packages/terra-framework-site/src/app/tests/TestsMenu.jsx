import React from 'react';
import { withRouter } from 'react-router-dom';
import RoutingStackDelegate from 'terra-navigation/lib/routing/RoutingStackDelegate';

import MenuList from '../common/menu/MenuList';
import { siteConfigPropType } from '../../componentConfig';

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
  config: siteConfigPropType,
};

const TestsMenu = ({ routingStackDelegate, config }) => (
  <MenuList
    headerText="Tests"
    routingStackDelegate={routingStackDelegate}
    links={Object.keys(config).map((componentKey) => {
      const testRoot = config[componentKey].testRoot;
      if (testRoot) {
        return {
          id: testRoot,
          path: testRoot,
          text: config[componentKey].name,
        };
      }
      return undefined;
    }).filter(link => (!!link))}
  />
);

TestsMenu.propTypes = propTypes;

export default withRouter(TestsMenu);
