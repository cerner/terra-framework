import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';

import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: AppDelegate.propType,
  /**
   * The utility menu to be wrapped.
   */
  children: PropTypes.node.isRequired,
};

const UtilityMenuWrapper = ({
  app,
  children,
  ...customProps
}) => (
    React.cloneElement(children, { ...customProps, onRequestClose: app.dismiss, isHeightBounded: true })
);

UtilityMenuWrapper.propTypes = propTypes;

export default UtilityMenuWrapper;
