import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * The text and corresponding callback to populate the action button of the banner.
   */
  bannerAction: PropTypes.shape({
    /**
     * The text to display in the banner button.
     */
    text: PropTypes.string,
    /**
     * The Callback function triggered when the action button is clicked. No parameters are passed.
     */
    onClick: PropTypes.func,
  }),
  /**
   * The message content to display in the banner.
   */
  description: PropTypes.node,
  /**
   * Callback function triggered when the dismiss button is clicked. The presence of this prop will cause
   * the dismiss button to be included on the banner. No parameters are passed.
   */
  onRequestClose: PropTypes.func,
  /**
   * The variant of notification banner to be rendered. This renders the banner with the corresponding header and icon to the
   * variant concept.
   */
  variant: PropTypes.oneOf([
    'hazard-high',
    'hazard-medium',
    'hazard-low',
    'error',
    'unsatisfied',
    'unverified',
    'custom',
  ]).isRequired,
  /**
   * The pieces to populate a banner when `variant="custom"`.
   */
  custom: PropTypes.shape({
    /**
     * The keyword used to represent & emphasis the intention of banner description that is being shown to the user.
     */
    signalWord: PropTypes.string,
    /**
     * The class name used to set the icon as the background image to be used as the icon in the banner.
     */
    iconClassName: PropTypes.string,
  }),
};
/* eslint-enable react/no-unused-prop-types */

const PropTypesExample = () => <div />;

PropTypesExample.propTypes = propTypes;

export default PropTypesExample;
