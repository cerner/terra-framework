import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuDivider = () => (
  <li className={cx('divider')} role="separator" />
);

export default MenuDivider;
