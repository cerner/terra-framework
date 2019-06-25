import React from 'react';
import classNames from 'classnames/bind';
import Menu from '../../../../Menu';
import styles from './MenuItemCommon.module.scss';

const cx = classNames.bind(styles);

const MenuItemSubMenu = () => (
  <ul className={cx('unordered-list')} role="menu">
    <Menu.Item
      className="TestSubMenuItem"
      text="MenuItem - Submenu"
      subMenuItems={[
        <Menu.Item text="Not Visible" />,
      ]}
    />
  </ul>
);

export default MenuItemSubMenu;
