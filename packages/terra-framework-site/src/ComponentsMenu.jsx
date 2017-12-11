import React from 'react';
// import AppDelegate from 'terra-app-delegate';
import { Link, withRouter } from 'react-router-dom';

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

export default withRouter(ComponentsMenu);
