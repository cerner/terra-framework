import React from 'react';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './_UtilityMenuDivider.scss';

const cx = classNames.bind(styles);

const MenuDivider = () => (
  <div className={cx('divider')} role="separator" />
);

export default MenuDivider;
