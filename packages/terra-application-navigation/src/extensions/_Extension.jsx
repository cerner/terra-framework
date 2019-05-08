import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Extension.module.scss';
import { createKeyDown, createOnClick } from './_ExtensionUtils';
import Count from './_ExtensionCount';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The icon to display for the associated extension action.
   */
  icon: PropTypes.element.isRequired,
  /**
   * The number of notifications to be displayed for the extension.
   */
  notificationCount: PropTypes.number,
  /**
   * Function callback for closing the extension rollup if hidden.
   */
  onRequestClose: PropTypes.func,
  /**
   * Function callback for selection of the extension. Return (metaData).
   */
  onSelect: PropTypes.func,
  /**
   * Callback function for the extension node.
   */
  refCallback: PropTypes.func,
  /**
   * The text display for the extension, either the aira label or the inline text.
   */
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  notificationCount: 0,
};

const Extension = ({
  notificationCount,
  icon,
  text,
  onRequestClose,
  onSelect,
  refCallback,
}) => {
  const keyDown = createKeyDown(onRequestClose, onSelect);
  const onClick = createOnClick(onRequestClose, onSelect);

  return (
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
          {icon}
        </div>
        {notificationCount > 0 && <Count value={notificationCount} className={cx('extension-count')} />}
      </div>
    </div>
  );
};

Extension.propTypes = propTypes;
Extension.defaultProps = defaultProps;

export default Extension;
