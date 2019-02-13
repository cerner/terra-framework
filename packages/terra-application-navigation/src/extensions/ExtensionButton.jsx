import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../ApplicationLayout.module.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  TAB: 9,
};

const propTypes = {
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
   * Function callback for closing the drawer.
   */
  isLastItem: PropTypes.bool,
  /**
   * The configuration values for the ApplicationName component.
   */
  metaData: PropTypes.object,
};

const defaultProps = {
  text: '',
  isLastItem: false,
};

const ExtensionButton = ({
  image,
  text,
  metaData,
  onRequestClose,
  onSelect,
  isLastItem,
  ...customProps
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
  let wrappedKeyDown;
  if (isLastItem) {
    wrappedKeyDown = (event) => {
      if (event.nativeEvent.keyCode === KEYCODES.TAB) {
        event.preventDefault();
        if (onRequestClose) {
          onRequestClose(event);
        }
        return;
      }
      keyDown(event);
    };
  }
  const onClick = (event) => {
    if (onRequestClose) {
      onRequestClose(event);
    }
    onSelect(event, metaData);
  };

  return (
    <div
      {...customProps}
      onKeyDown={wrappedKeyDown || keyDown}
      className={cx('extensions-item')}
      role="button"
      tabIndex="0"
      onClick={onClick}
    >
      {image}
    </div>
  );
};

ExtensionButton.propTypes = propTypes;
ExtensionButton.defaultProps = defaultProps;

export default ExtensionButton;
