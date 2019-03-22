import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconTile from 'terra-icon/lib/icon/IconTile';
import { createKeyDown, createOnClick } from './_ExtensionUtils';
import Count from './_ExtensionCount';

import styles from './ExtensionRollup.module.scss';

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
  /**
   * The currently active breakpoint.
   */
  isPulsed: PropTypes.bool,
};

const defaultProps = {
  hasChildNotifications: false,
  isPulsed: false,
};

const Extension = ({
  hasChildNotifications,
  isPulsed,
  onSelect,
  refCallback,
}) => {
  const keyDown = createKeyDown(null, onSelect, null);
  const onClick = createOnClick(null, onSelect, null);

  return (
    <div
      aria-label="more button text"// TODO: fix this.
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
          <IconTile />
        </div>
        {hasChildNotifications && <Count isRollup className={cx('extension-count')} value={isPulsed ? 1 : 0} />}
      </div>
    </div>
  );
};

Extension.propTypes = propTypes;
Extension.defaultProps = defaultProps;

export default Extension;
