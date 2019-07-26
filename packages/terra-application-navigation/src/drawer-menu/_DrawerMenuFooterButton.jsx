import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { enableFocusStyles, disableFocusStyles } from '../utils/helpers';

import styles from './DrawerMenuFooterButton.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Text display for the footer button.
   */
  text: PropTypes.string,
  /**
   * Function callback for button selection.
   */
  onClick: PropTypes.func,
};

const DrawerMenuFooterButton = ({ text, onClick }) => (
  <button
    className={cx('drawer-menu-footer-button')}
    type="button"
    onClick={onClick}
    onBlur={enableFocusStyles}
    onMouseDown={disableFocusStyles}
    data-focus-styles-enabled
  >
    {text}
  </button>
);

DrawerMenuFooterButton.propTypes = propTypes;

export default DrawerMenuFooterButton;
