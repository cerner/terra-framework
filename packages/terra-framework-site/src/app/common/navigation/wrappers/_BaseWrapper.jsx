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
  size: PropTypes.string,
  routes: PropTypes.any,
};

class BaseWrapper extends React.Component {
  render() {
    const { app, routingManager, routes } = this.props;

    return (
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
  }
}

BaseWrapper.propTypes = propTypes;

export default BaseWrapper;
