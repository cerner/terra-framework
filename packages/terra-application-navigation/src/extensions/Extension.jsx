import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Extension.module.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

const propTypes = {
  /**
   * The currently active breakpoint.
   */
  alertCount: PropTypes.number,
  /**
   * The currently active breakpoint.
   */
  image: PropTypes.element,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  text: PropTypes.string,
  /**
   * Function callback for closing the drawer.
   */
  onRequestClose: PropTypes.func,
  /**
   * Function callback for closing the drawer.
   */
  onSelect: PropTypes.func,
  /**
   * The configuration values for the ApplicationName component.
   */
  metaData: PropTypes.object,
  /**
   * Function callback for closing the drawer.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  text: '',
};

const Extension = ({
  alertCount,
  image,
  text,
  metaData,
  onRequestClose,
  onSelect,
  refCallback,
}) => {
  const keyDown = (event) => {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
      event.preventDefault();
      if (onRequestClose) {
        onRequestClose(event);
      }
      onSelect(event, metaData);
    }
  };
  const onClick = (event) => {
    if (onRequestClose) {
      onRequestClose(event);
    }
    onSelect(event, metaData);
  };

  return (
    <div
      aria-label={text}
      onKeyDown={keyDown}
      className={cx(['extension', { 'extension-count': alertCount > 0 }])}
      role="button"
      tabIndex="0"
      onClick={onClick}
      ref={refCallback}
    >
      {image}
    </div>
  );
};

Extension.propTypes = propTypes;
Extension.defaultProps = defaultProps;

export default Extension;
