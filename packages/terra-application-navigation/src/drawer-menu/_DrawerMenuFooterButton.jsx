import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DrawerMenuFooterButton.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

const DrawerMenuFooterButton = ({ text, onClick }) => (
  <button
    className={cx('drawer-menu-footer-button')}
    type="button"
    onClick={onClick}
    onBlur={(event) => {
      event.currentTarget.setAttribute('data-button-show-focus', 'true');
    }}
    onMouseDown={(event) => {
      event.currentTarget.setAttribute('data-button-show-focus', 'false');
    }}
  >
    {text}
  </button>
);

DrawerMenuFooterButton.propTypes = propTypes;

export default DrawerMenuFooterButton;
