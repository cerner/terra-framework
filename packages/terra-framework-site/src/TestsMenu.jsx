import React from 'react';
// import AppDelegate from 'terra-app-delegate';
import { Link, withRouter } from 'react-router-dom';

const propTypes = {
//   app: AppDelegate.propType,
//   routingManager: RoutingManagerDelegate.propType,
};

const TestsMenu = () => (
  <div style={{ height: '100%', position: 'relative' }}>
    <Link to="/tests/layout-tests">Layout</Link>
    <br />
  </div>
);
TestsMenu.propTypes = propTypes;

export default withRouter(TestsMenu);
