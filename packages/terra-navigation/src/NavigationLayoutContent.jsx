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
  routeConfig: PropTypes.any,
  navigationLayoutSize: PropTypes.string,

  redirect: PropTypes.string,
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
