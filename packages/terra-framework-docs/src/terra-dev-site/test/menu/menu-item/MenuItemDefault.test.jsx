import React from 'react';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import styles from './MenuItemCommon.module.scss';

const cx = classNames.bind(styles);

const DefaultMenuItem = () => (
  <div>
    <p>Below is a default Menu Item with text</p>
    <br />
    <ul className={cx('unordered-list')} role="menu">
      <Menu.Item text="DefaultMenuItem" className="TestMenuItem" />
    </ul>
  </div>
);

export default DefaultMenuItem;
