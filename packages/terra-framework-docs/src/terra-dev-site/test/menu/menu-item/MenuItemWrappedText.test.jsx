import React from 'react';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import styles from './MenuItemCommon.module.scss';

const cx = classNames.bind(styles);

const WrappedTextMenuItem = () => (
  <ul className={cx('unordered-list')} role="menu">
    <Menu.Item text="This menu item has a really long text that should wrap." className="testWrappedItem" />
  </ul>
);

export default WrappedTextMenuItem;
