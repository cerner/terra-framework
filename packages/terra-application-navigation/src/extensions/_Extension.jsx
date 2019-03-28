import React from 'react';
import PropTypes from 'prop-types';
import IconExtension from './_IconExtension';
import InlineExtension from './_InlineExtension';

const propTypes = {
  /**
   * The currently active breakpoint.
   */
  image: PropTypes.element,
  /**
   * The currently active breakpoint.
   */
  isHidden: PropTypes.bool,
  /**
   * The configuration values for the ApplicationName component.
   */
  metaData: PropTypes.object,
  /**
   * The currently active breakpoint.
   */
  notificationCount: PropTypes.number,
  /**
   * Function callback for closing the drawer.
   */
  onRequestClose: PropTypes.func,
  /**
   * Function callback for closing the drawer.
   */
  onSelect: PropTypes.func,
  /**
   * Function callback for closing the drawer.
   */
  refCallback: PropTypes.func,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  text: PropTypes.string,
};

const defaultProps = {
  isHidden: false,
  notificationCount: 0,
  text: '',
};

const Extension = ({
  isHidden,
  ...customProps
}) => {
  if (isHidden) {
    return <InlineExtension {...customProps} />;
  }
  return <IconExtension {...customProps} />;
};

Extension.propTypes = propTypes;
Extension.defaultProps = defaultProps;

export default Extension;
