import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { createKeyDown, createOnClick } from './_ExtensionUtils';
import ExtensionCount from './_ExtensionCount';
import { enableFocusStyles, disableFocusStyles } from '../utils/helpers';

import styles from './Extension.module.scss';

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
}) => {
  const keyDown = createKeyDown(onRequestClose, onSelect);
  const onClick = createOnClick(onRequestClose, onSelect);

  return (
    <div
      role="button"
      tabIndex="0"
      className={cx('extension')}
      onClick={onClick}
      onKeyDown={keyDown}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      aria-label={text}
      title={text}
      data-focus-styles-enabled
    >
      <div className={cx('extension-inner')}>
        <div className={cx('extension-image')}>
          {icon}
        </div>
        {notificationCount > 0 && <ExtensionCount value={notificationCount} className={cx('extension-count')} />}
      </div>
    </div>
  );
};

Extension.propTypes = propTypes;
Extension.defaultProps = defaultProps;

export default Extension;
