import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconTile from 'terra-icon/lib/icon/IconTile';
import { createKeyDown, createOnClick } from './_ExtensionUtils';
import Count from '../count/_Count';

import styles from './Extension.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The currently active breakpoint.
   */
  hasChildNotifications: PropTypes.bool,
  /**
   * Function callback for closing the drawer.
   */
  onSelect: PropTypes.func,
  /**
   * Function callback for closing the drawer.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  hasChildNotifications: false,
};

const Extension = ({
  hasChildNotifications,
  onSelect,
  refCallback,
}) => {
  const keyDown = createKeyDown(null, onSelect, null);
  const onClick = createOnClick(null, onSelect, null);

  // TODO: May use icon instead of exclamation.
  return (
    <div
      aria-label="more button text"// TODO: fix this.
      onKeyDown={keyDown}
      className={cx('extension')}
      role="button"
      tabIndex="0"
      onClick={onClick}
      ref={refCallback}
    >
      <IconTile />
      {hasChildNotifications && <Count isRollup className={cx('extension-count')} />}
    </div>
  );
};

Extension.propTypes = propTypes;
Extension.defaultProps = defaultProps;

export default Extension;
