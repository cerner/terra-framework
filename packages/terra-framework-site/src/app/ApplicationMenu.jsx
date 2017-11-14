import React from 'react';
import { withRouter } from 'react-router-dom';
import RoutingDelegate from 'terra-navigation/lib/routing/RoutingDelegate';

import MenuList from './common/menu/MenuList';

const propTypes = {
  routingManager: RoutingDelegate.propType,
};

const ApplicationMenu = ({ routingManager }) => (
  <MenuList
    headerText="Terra Framework"
    routingManager={routingManager}
    links={[
      { id: '/home', path: '/home', text: 'Home' },
      { id: '/components', path: '/components', text: 'Components' },
      { id: '/tests', path: '/tests', text: 'Tests' },
    ]}
  />
);

ApplicationMenu.propTypes = propTypes;

export default withRouter(ApplicationMenu);
