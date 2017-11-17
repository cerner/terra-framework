import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
} from 'react-router-dom';
import classNames from 'classnames/bind';

import AppDelegate from 'terra-app-delegate';
import RoutingStack from './routing/RoutingStack';
import { supportedComponentBreakpoints, routeConfigPropType } from './configurationPropTypes';

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
  routeConfig: routeConfigPropType,
  /**
   * The current responsive size.
   */
  navigationLayoutSize: PropTypes.oneOf(supportedComponentBreakpoints),
  /**
   * The String path to redirect to should the routes specified by the routeConfig all fail to match.
   */
  redirect: PropTypes.string,
  /**
   * Flag to enable navigation within the RoutingStack.
   */
  stackNavigationIsEnabled: PropTypes.bool,
};

const NavigationLayoutContent = ({ app, routeConfig, navigationLayoutSize, redirect, stackNavigationIsEnabled }) => (
  <div className={cx('content')}>
    <RoutingStack
      navEnabled={stackNavigationIsEnabled}
      size={navigationLayoutSize}
      app={app}
      routeConfig={routeConfig}
    >
      {redirect && <Redirect to={redirect} />}
    </RoutingStack>
  </div>
);

NavigationLayoutContent.propTypes = propTypes;

export default NavigationLayoutContent;
