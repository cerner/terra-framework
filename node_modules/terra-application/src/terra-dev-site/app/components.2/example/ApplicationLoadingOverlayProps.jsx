import React from 'react';

import PropTypes from 'prop-types';

/**
 * The props table parser continues to have trouble detecting the propTypes of a component that
 * returns `null`. I've duplicated the propType definition here so that a table could be parsed for it.
 */

const propTypes = {
  /**
   * A boolean value indicating whether the loading overlay should be visible or not.
   */
  isOpen: PropTypes.bool,
  /**
   * A string indicating the background style for the overlay. One of: `dark`, `light`, `clear`.
   */
  backgroundStyle: PropTypes.oneOf(['dark', 'light', 'clear']),
};

const ApplicationLoadingOverlayProps = ({ isOpen, backgroundStyle }) => <div />; // eslint-disable-line no-unused-vars

ApplicationLoadingOverlayProps.propTypes = propTypes;

export default ApplicationLoadingOverlayProps;
