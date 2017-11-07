import React from 'react';
// import AppDelegate from 'terra-app-delegate';
import { withRouter } from 'react-router-dom';
import MenuList from '../common/menu/MenuList';

const propTypes = {
//   app: AppDelegate.propType,
//   routingManager: RoutingManagerDelegate.propType,
};

const TestsMenu = props => (
  <MenuList
    headerText="Tests"
    routingManager={props.routingManager}
    links={[
      { id: '/tests/layout', path: '/tests/layout', text: 'Layout Tests' },
    ]}
  />
);

TestsMenu.propTypes = propTypes;

export default withRouter(TestsMenu);
