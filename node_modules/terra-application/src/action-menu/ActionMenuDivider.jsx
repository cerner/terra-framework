import React from 'react';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './ActionMenuDivider.module.scss';

const cx = classNames.bind(styles);

const ActionMenuDivider = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <li
      className={cx('action-menu-divider', theme.className)}
      aria-hidden
    >
      <div className={cx('line')} />
    </li>
  );
};

export default ActionMenuDivider;
