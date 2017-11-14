import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
} from 'react-router-dom';

import AppDelegate from 'terra-app-delegate';
import RoutingStack from '../routing/RoutingStack';

const propTypes = {
  app: AppDelegate.propType,
  routes: PropTypes.any,
  routingManager: PropTypes.object,
};

const BaseWrapper = ({ app, routingManager, routes, redirect }) => (
  <div style={{ height: '100%' }}>
    <RoutingStack
      navEnabled
      size={routingManager.size}
      app={app}
      routeConfig={routes}
      location={routingManager.location}
      routingManager={routingManager}
    >
      {redirect && <Redirect to={redirect} />}
    </RoutingStack>
  </div>
);

BaseWrapper.propTypes = propTypes;

export default BaseWrapper;
