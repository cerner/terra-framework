import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ExtensionCount from './_ExtensionCount';
import { enableFocusStyles, disableFocusStyles, generateKeyDownSelection } from '../utils/helpers';

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
   * Function callback for selection of the extension. Return (metaData).
   */
  onSelect: PropTypes.func,
  /**
   * The text display for the extension, either the aria label or the inline text.
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
  onSelect,
}) => {
  let validatedValue = notificationCount;
  if (notificationCount > 99) {
    validatedValue = '99+';
  }

  return (
    <div
      role="button"
      tabIndex="0"
      className={cx('extension')}
      onClick={onSelect}
      onKeyDown={generateKeyDownSelection(onSelect)}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      data-focus-styles-enabled
      aria-label={validatedValue ? `${text} ${validatedValue}` : text}
    >
      <div aria-hidden className={cx('extension-inner')}>
        <div
          className={cx('extension-image')}
          title={text}
        >
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
