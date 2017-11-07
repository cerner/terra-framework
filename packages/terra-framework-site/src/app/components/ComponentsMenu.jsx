import React from 'react';
// import AppDelegate from 'terra-app-delegate';
import { withRouter } from 'react-router-dom';
import MenuList from '../common/menu/MenuList';
import RoutingDelegate from '../common/navigation/routing/RoutingDelegate';

const propTypes = {
  routingManager: RoutingDelegate.propType,
};

const ComponentsMenu = props => (
  <MenuList
    headerText="Components"
    routingManager={props.routingManager}
    links={[
      { id: '/components/layout', path: '/components/layout', text: 'Layout' },
    ]}
  />
);
ComponentsMenu.propTypes = propTypes;

export default withRouter(ComponentsMenu);
