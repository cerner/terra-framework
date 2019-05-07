import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconTile from 'terra-icon/lib/icon/IconTile';
import { createKeyDown, createOnClick } from './_ExtensionUtils';
import ExtensionCount from './_ExtensionCount';

import styles from './ExtensionRollup.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not hidden extensions have notifications.
   */
  hasChildNotifications: PropTypes.bool,
  /**
   * Function callback for selection of the extension rollup.
   */
  onSelect: PropTypes.func,
  /**
   * Callback function for the rollup node.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the notification count should pulse.
   */
  isPulsed: PropTypes.bool,
};

const defaultProps = {
  hasChildNotifications: false,
  isPulsed: false,
};

const ExtensionRollup = ({
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
      className={cx('extension-rollup')}
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
      <div className={cx('extension-rollup-inner')}>
        <div className={cx('extension-rollup-image')}>
          <IconTile />
        </div>
        {hasChildNotifications && <ExtensionCount isRollup className={cx('extension-rollup-count')} value={isPulsed ? 1 : 0} />}
      </div>
    </div>
  );
};

ExtensionRollup.propTypes = propTypes;
ExtensionRollup.defaultProps = defaultProps;

export default ExtensionRollup;
