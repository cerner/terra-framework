import React from 'react';
import PropTypes from 'prop-types';
import IconExtension from './_IconExtension';
import InlineExtension from './_InlineExtension';

const propTypes = {
  /**
   * The image to display for the associated extension action≥
   */
  image: PropTypes.element,
  /**
   * Whether or not the extension is hidden by the rollup pattern.
   */
  isHidden: PropTypes.bool,
  /**
   * Meta data to be returned in the onSelect callback.
   */
  metaData: PropTypes.object,
  /**
   * The number of notifications to be displayed for the extension.
   */
  notificationCount: PropTypes.number,
  /**
   * Function callback for closing the extension rollup if hidden.
   */
  onRequestClose: PropTypes.func,
  /**
   * Function callback for selection of the extension. Return (event, metaData).
   */
  onSelect: PropTypes.func,
  /**
   * Callback function for the extension node.
   */
  refCallback: PropTypes.func,
  /**
   * The text display for the extension, either the aira label or the inline text.
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
