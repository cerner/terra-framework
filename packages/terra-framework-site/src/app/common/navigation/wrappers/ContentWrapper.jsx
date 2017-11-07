import React from 'react';
import PropTypes from 'prop-types';

import AppDelegate from 'terra-app-delegate';
import BaseWrapper from './_BaseWrapper';

const propTypes = {
  app: AppDelegate.propType,
  routingManager: PropTypes.object,
  size: PropTypes.string,
};

class ContentWrapper extends React.Component {
  render() {
    const { app, routingManager } = this.props;

    return (
      <BaseWrapper
        app={app}
        routingManager={routingManager}
        routes={routingManager.routeConfig.contentRoutes}
      />
    );
  }
}

ContentWrapper.propTypes = propTypes;

export default ContentWrapper;
