import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
} from 'react-router-dom';

import AppDelegate from 'terra-app-delegate';
import RoutingStack from '../routing/RoutingStack';

const propTypes = {
  app: AppDelegate.propType,
  routingManager: PropTypes.object,
  routes: PropTypes.any,
};

const BaseWrapper = ({ app, routingManager, routes }) => (
  <div style={{ height: '100%' }}>
    <RoutingStack
      size={routingManager.size}
      navEnabled
      app={app}
      routeConfig={routes}
      location={routingManager.location}
      routingManager={routingManager}
    >
      <Redirect to={routingManager.routeConfig.navigation.index} />
    </RoutingStack>
  </div>
);

BaseWrapper.propTypes = propTypes;

export default BaseWrapper;
