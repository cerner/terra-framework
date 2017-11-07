import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuList from '../common/menu/MenuList';
import RoutingDelegate from '../common/navigation/routing/RoutingDelegate';

const propTypes = {
  routingManager: RoutingDelegate.propType,
};

const TestsMenu = props => (
  <MenuList
    headerText="Tests"
    routingManager={props.routingManager}
    links={[
      { id: '/tests/layout', path: '/tests/layout', text: 'Layout' },
    ]}
  />
);

TestsMenu.propTypes = propTypes;

export default withRouter(TestsMenu);
