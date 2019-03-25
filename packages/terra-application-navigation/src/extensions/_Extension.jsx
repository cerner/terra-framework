import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Extension.module.scss';
import { createKeyDown, createOnClick } from './_ExtensionUtils';
import Count from './_ExtensionCount';

const cx = classNames.bind(styles);

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

const createRowStyle = (notificationCount, onClick, keyDown, refCallback, image, text) => (
  <div
    onClick={onClick}
    onKeyDown={keyDown}
    className={cx('extension-row')}
    role="button"
    tabIndex="0"
    ref={refCallback}
    data-item-show-focus
    onBlur={(event) => {
      event.currentTarget.setAttribute('data-item-show-focus', 'true');
    }}
    onMouseDown={(event) => {
      event.currentTarget.setAttribute('data-item-show-focus', 'false');
    }}
  >
    <div className={cx('extension-icon')}>
      {image}
    </div>
    <div className={cx('extension-text')}>
      {text}
    </div>
    {notificationCount > 0 && <Count value={notificationCount} isInline className={cx('extension-row-count')} />}
  </div>
);

const createIconStyle = (notificationCount, onClick, keyDown, refCallback, image, text) => (
  <div
    aria-label={text}
    onKeyDown={keyDown}
    className={cx('extension')}
    role="button"
    tabIndex="0"
    onClick={onClick}
    ref={refCallback}
    data-item-show-focus
    onBlur={(event) => {
      event.currentTarget.setAttribute('data-item-show-focus', 'true');
    }}
    onMouseDown={(event) => {
      event.currentTarget.setAttribute('data-item-show-focus', 'false');
    }}
  >
    <div className={cx('extension-inner')}>
      <div className={cx('extension-image')}>
        {image}
      </div>
      {notificationCount > 0 && <Count value={notificationCount} className={cx('extension-count')} />}
    </div>
  </div>
);

const Extension = ({
  notificationCount,
  image,
  isHidden,
  text,
  metaData,
  onRequestClose,
  onSelect,
  refCallback,
}) => {
  const keyDown = createKeyDown(onRequestClose, onSelect, metaData);
  const onClick = createOnClick(onRequestClose, onSelect, metaData);

  if (isHidden) {
    return createRowStyle(notificationCount, onClick, keyDown, refCallback, image, text);
  }
  return createIconStyle(notificationCount, onClick, keyDown, refCallback, image, text);
};

Extension.propTypes = propTypes;
Extension.defaultProps = defaultProps;

export default Extension;
