import React from 'react';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import MenuList from '../common/menu/MenuList';
import { siteConfigPropType } from '../../componentConfig';

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
  config: siteConfigPropType,
};

const ComponentsMenu = ({ routingStackDelegate, config }) => (
  <MenuList
    headerText="Components"
    routingStackDelegate={routingStackDelegate}
    links={Object.keys(config).map((componentKey) => {
      const example = config[componentKey].example;
      if (example) {
        return {
          id: example.path,
          path: example.path,
          text: example.description,
        };
      }
      return undefined;
    })}
  />
);

ComponentsMenu.propTypes = propTypes;

export default ComponentsMenu;
