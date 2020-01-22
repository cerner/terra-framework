import React from 'react';
import classNames from 'classnames/bind';

import InfiniteList, { Item } from '../../../index';
import styles from './InfiniteListTestCommon.module.scss';

const cx = classNames.bind(styles);

const InfiniteListUpdating = () => (
  <InfiniteList
    id="test-infinite-list"
    isFinishedLoading={false}
    ariaLabel="Updating"
    progressiveLoadingIndicator={(
      <div className={cx('progressive-loading-indicator')}>
        Progressive Loading
      </div>
    )}
  >
    <Item key="item-0"><div className={cx('item-type1')}>Item 0</div></Item>
    <Item key="item-1"><div className={cx('item-type2')}>Item 1</div></Item>
    <Item key="item-2"><div className={cx('item-type1')}>Item 2</div></Item>
    <Item key="item-3"><div className={cx('item-type2')}>Item 3</div></Item>
  </InfiniteList>
);

export default InfiniteListUpdating;
