import React from 'react';
import classNames from 'classnames/bind';
import Menu from '../../../../Menu';
import styles from './MenuItemCommon.module.scss';

const cx = classNames.bind(styles);

const MenuItemWithInstructionsForUse = () => (
  <div>
    <p>Below is a Menu Item with eIFU Icon</p>
    <br />
    <ul className={cx('unordered-list')} role="menu">
      <Menu.Item text="Instructions" isSelected isInstructionsForUse className="TestMenuItem" />
    </ul>
  </div>
);

export default MenuItemWithInstructionsForUse;
