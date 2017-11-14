import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuList from '../common/menu/MenuList';
import RoutingDelegate from 'terra-navigation/lib/routing/RoutingDelegate';
import { siteConfigPropType } from '../../componentConfig';

const propTypes = {
  routingManager: RoutingDelegate.propType,
  config: siteConfigPropType,
};

const TestsMenu = ({ routingManager, config }) => (
  <MenuList
    headerText="Tests"
    routingManager={routingManager}
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
