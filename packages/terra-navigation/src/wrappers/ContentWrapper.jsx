import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
} from 'react-router-dom';

import AppDelegate from 'terra-app-delegate';
import RoutingStack from '../common/RoutingStack';

const propTypes = {
  app: AppDelegate.propType,
  routingManager: PropTypes.object,
  size: PropTypes.string,
};

class ContentWrapper extends React.Component {
  render() {
    const { app, routingManager, size } = this.props;

    const routes = (
      <RoutingStack
        size={size}
        navEnabled
        app={app}
        routeConfig={routingManager.routeConfig.contentRoutes}
        location={routingManager.location}
        routingManager={routingManager}
      >
        <Redirect to={routingManager.routeConfig.navigation.index} />
      </RoutingStack>
    );

    return (
      <div style={{ height: '100%' }}>
        {routes}
      </div>
    );
  }
}

ContentWrapper.propTypes = propTypes;

export default ContentWrapper;
