import React from 'react';
// import AppDelegate from 'terra-app-delegate';
import { Link, withRouter } from 'react-router-dom';

const propTypes = {
//   app: AppDelegate.propType,
//   routingManager: RoutingManagerDelegate.propType,
};

const RootMenu = ({ layoutConfig }) => (
  <div style={{ height: '100%', position: 'relative' }}>
    <Link to="/home" onClick={() => { layoutConfig.toggleMenu(); }}>Home</Link>
    <br />
    <Link to="/components">Components</Link>
    <br />
    <Link to="/tests">Tests</Link>
    <br />
  </div>
);
RootMenu.propTypes = propTypes;

export default withRouter(RootMenu);
