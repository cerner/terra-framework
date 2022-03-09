import React from 'react';
import classNames from 'classnames/bind';

import InfiniteList, { Item } from 'terra-infinite-list/lib/index';
import styles from './InfiniteListVirtual.test.module.scss';

const cx = classNames.bind(styles);

const InfiniteListUpdating = () => (
  <div>
    <button type="button" id="test-click" onClick={() => { document.querySelector('#test-infinite-list').scrollTop = 1600; }}>button</button>
    <div className={cx('infinite-list-wrapper')}>
      <InfiniteList
        id="test-infinite-list"
        dividerStyle="standard"
        isFinishedLoading
        ariaLabel="Virtual"
      >
        <Item key="item-0"><div className={cx('item-content')}>Item 0</div></Item>
        <Item key="item-1"><div className={cx('item-content')}>Item 1</div></Item>
        <Item key="item-2"><div className={cx('item-content')}>Item 2</div></Item>
        <Item key="item-3"><div className={cx('item-content')}>Item 3</div></Item>
        <Item key="item-4"><div className={cx('item-content')}>Item 4</div></Item>
        <Item key="item-5"><div className={cx('item-content')}>Item 5</div></Item>
        <Item key="item-6"><div className={cx('item-content')}>Item 6</div></Item>
        <Item key="item-7"><div className={cx('item-content')}>Item 7</div></Item>
        <Item key="item-8"><div className={cx('item-content')}>Item 8</div></Item>
        <Item key="item-9"><div className={cx('item-content')}>Item 9</div></Item>
        <Item key="item-10"><div className={cx('item-content')}>Item 10</div></Item>
        <Item key="item-11"><div className={cx('item-content')}>Item 11</div></Item>
        <Item key="item-12"><div className={cx('item-content')}>Item 12</div></Item>
        <Item key="item-13"><div className={cx('item-content')}>Item 13</div></Item>
        <Item key="item-14"><div className={cx('item-content')}>Item 14</div></Item>
        <Item key="item-15"><div className={cx('item-content')}>Item 15</div></Item>
      </InfiniteList>
    </div>
  </div>
);

export default InfiniteListUpdating;
