import React from 'react';
import classNames from 'classnames/bind';

import InfiniteList, { Item } from '../../../index';
import styles from './InfiniteListTestCommon.module.scss';

const cx = classNames.bind(styles);

const InfiniteListUpdating = () => (
  <InfiniteList
    id="test-infinite-list"
    isFinishedLoading
    ariaLabel="Selection"
  >
    <Item isSelectable isSelected key="item-0"><div className={cx('item-content')}>Item 0</div></Item>
    <Item isSelectable key="item-1"><div className={cx('item-content')}>Item 1</div></Item>
    <Item isSelectable key="item-2"><div className={cx('item-content')}>Item 2</div></Item>
    <Item isSelectable key="item-3"><div className={cx('item-content')}>Item 3</div></Item>
  </InfiniteList>
);

export default InfiniteListUpdating;
