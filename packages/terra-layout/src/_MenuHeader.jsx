import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import 'terra-base/lib/baseStyles';

import IconPin from './_IconPin';

import styles from './MenuHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The String display for the header.
   */
  text: PropTypes.string,
  /**
   * The Function that, if given, will be executed when the 'pin' button is clicked.
   */
  togglePin: PropTypes.func,
  /**
   * Indicates the current pin state.
   */
  isPinned: PropTypes.bool,
};

const defaultProps = {
  isPinned: false,
};

const MenuHeader = ({ text, togglePin, isPinned, ...customProps }) => {
  const headerClassNames = cx([
    'menu-header',
    customProps.className,
  ]);

  let pinButton;
  if (togglePin && !isPinned) {
    pinButton = <Button onClick={togglePin} icon={<IconPin className={cx(['pin-icon', 'unlocked'])} />} variant="link" className={cx('header-button')} data-menu-header-pin-button />;
  }
  let unpinButton;
  if (togglePin && isPinned) {
    unpinButton = <Button onClick={togglePin} icon={<IconPin className={cx('pin-icon')} />} variant="link" className={cx('header-button')} data-menu-header-unpin-button />;
  }

  const toolbarEnd = (
    <div className={cx('header-content-end')}>
      {pinButton}
      {unpinButton}
    </div>
  );

  return (
    <div {...customProps} className={headerClassNames}>
      <div className={cx('header-content-body')}>
        <h3 className={cx('header-text')}>{text}</h3>
      </div>
      {toolbarEnd}
    </div>
  );
};

MenuHeader.propTypes = propTypes;
MenuHeader.defaultProps = defaultProps;

export default MenuHeader;
