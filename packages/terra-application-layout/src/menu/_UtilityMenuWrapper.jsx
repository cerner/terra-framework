import React from 'react';
import PropTypes from 'prop-types';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';

import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * DisclosureManagerDelegate instance automatically provided by a DisclosureManagerProvider.
   */
  disclosureManager: disclosureManagerShape,
  /**
   * The utility menu to be wrapped.
   */
  children: PropTypes.node.isRequired,
};

/**
 * The UtilityMenuWrapper handles the plumbing between its disclosureManager and the
 * utility menu dismissal requests.
 */
const UtilityMenuWrapper = ({
  disclosureManager,
  children,
  ...customProps
}) => (
  React.cloneElement(children, { ...customProps, onRequestClose: disclosureManager.dismiss, isHeightBounded: true })
);

UtilityMenuWrapper.propTypes = propTypes;

export default withDisclosureManager(UtilityMenuWrapper);
