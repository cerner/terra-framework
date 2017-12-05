import React from 'react';
// import AppDelegate from 'terra-app-delegate';
import { Link, withRouter } from 'react-router-dom';

const propTypes = {
//   app: AppDelegate.propType,
//   routingManager: RoutingManagerDelegate.propType,
};

const ComponentsMenu = () => (
  <div style={{ height: '100%', position: 'relative' }}>
    <Link to="/components/layout">Layout</Link>
    <br />
    <Link to="/components/navigation">Navigation</Link>
    <br />
    <Link to="/components/application-toolbar">Application Toolbar</Link>
    <br />
  </div>
);
ComponentsMenu.propTypes = propTypes;

export default withRouter(ComponentsMenu);
