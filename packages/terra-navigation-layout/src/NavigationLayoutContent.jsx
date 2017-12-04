import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
} from 'react-router-dom';
import classNames from 'classnames/bind';

import AppDelegate from 'terra-app-delegate';
import RoutingStack from './routing/RoutingStack';
import { processedRoutesPropType } from './configurationPropTypes';

import styles from './NavigationLayoutContent.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the RoutingStack and its contents.
   */
  app: AppDelegate.propType,
  /**
   * The routing configuration from which Routes will be generated.
   */
  routes: processedRoutesPropType,
  /**
   * The String path to redirect to should the routes specified by the routeConfig all fail to match.
   */
  redirectPath: PropTypes.string,
  /**
   * Flag to enable navigation within the RoutingStack.
   */
  stackNavigationIsEnabled: PropTypes.bool,
};

const NavigationLayoutContent = ({ app, routes, redirectPath, stackNavigationIsEnabled, ...customProps }) => (
  <div className={cx('content')}>
    <RoutingStack
      navEnabled={stackNavigationIsEnabled}
      app={app}
      routes={routes}
      ancestorProps={customProps}
    >
      {redirectPath && <Redirect to={redirectPath} />}
    </RoutingStack>
  </div>
);

NavigationLayoutContent.propTypes = propTypes;

export default NavigationLayoutContent;
