import React from 'react';
import InfiniteList, { Item } from 'terra-infinite-list';
import classNames from 'classnames/bind';
import styles from './InfiniteListDocExampleCommon.module.scss';

const cx = classNames.bind(styles);
let listElement;

const createListRef = (list) => {
  listElement = list;
};

const scrollToActiveItem = () => {
  for (let i = 0; i < listElement.children.length; i += 1) {
    const listItem = listElement.children[i];
    if (listItem.getAttribute('aria-selected') === 'true') {
      listItem.scrollIntoView({ block: 'nearest' });
    }
  }
};

const RefcallBackExample = () => (
  <div>
    <button type="button" id="test-click" onClick={scrollToActiveItem}>Scroll to Selected Item</button>
    <div className={cx('main-content')}>
      <InfiniteList
        dividerStyle="standard"
        isFinishedLoading
        refCallback={createListRef}
      >
        <Item isSelectable key="item-0"><div className={cx('item-content')}>Item 0</div></Item>
        <Item isSelectable key="item-1"><div className={cx('item-content')}>Item 1</div></Item>
        <Item isSelectable key="item-2"><div className={cx('item-content')}>Item 2</div></Item>
        <Item isSelectable key="item-3"><div className={cx('item-content')}>Item 3</div></Item>
        <Item isSelectable key="item-4"><div className={cx('item-content')}>Item 4</div></Item>
        <Item isSelectable key="item-5"><div className={cx('item-content')}>Item 5</div></Item>
        <Item isSelectable key="item-6"><div className={cx('item-content')}>Item 6</div></Item>
        <Item isSelectable isSelected key="item-7"><div className={cx('item-content')}>Item 7</div></Item>
        <Item isSelectable key="item-8"><div className={cx('item-content')}>Item 8</div></Item>
        <Item isSelectable key="item-9"><div className={cx('item-content')}>Item 9</div></Item>
        <Item isSelectable key="item-10"><div className={cx('item-content')}>Item 10</div></Item>
      </InfiniteList>
    </div>
  </div>
);

export default RefcallBackExample;
