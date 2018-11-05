import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames/bind';

import RoutingStack from './RoutingStack';
import { processedRoutesPropType } from './configurationPropTypes';

import styles from './NavigationLayoutContent.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The routing configuration from which Routes will be generated.
   */
  navigationLayoutRoutes: processedRoutesPropType,
  /**
   * The String path to redirect to should the routes specified by the routeConfig all fail to match.
   */
  redirectPath: PropTypes.string,
  /**
   * Flag to enable navigation within the RoutingStack.
   */
  stackNavigationIsEnabled: PropTypes.bool,
};

const NavigationLayoutContent = ({
  navigationLayoutRoutes, redirectPath, stackNavigationIsEnabled, ...customProps
}) => (
  <div className={cx('content')}>
    <RoutingStack
      navEnabled={stackNavigationIsEnabled}
      routes={navigationLayoutRoutes}
      ancestorProps={customProps}
    >
      {redirectPath && <Redirect to={redirectPath} />}
    </RoutingStack>
  </div>
);

NavigationLayoutContent.propTypes = propTypes;

export default NavigationLayoutContent;
