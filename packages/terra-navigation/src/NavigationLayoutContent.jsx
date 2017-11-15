import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
} from 'react-router-dom';
import classNames from 'classnames/bind';

import AppDelegate from 'terra-app-delegate';
import RoutingStack from './routing/RoutingStack';

import styles from './NavigationLayoutContent.scss';

const cx = classNames.bind(styles);

const propTypes = {
  app: AppDelegate.propType,
  routes: PropTypes.any,
  redirect: PropTypes.string,
  routingManager: PropTypes.object,
};

const NavigationLayoutContent = ({ app, routingManager, routes, redirect }) => (
  <div className={cx('content')}>
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

NavigationLayoutContent.propTypes = propTypes;

export default NavigationLayoutContent;
