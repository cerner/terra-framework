import React from 'react';
import classNames from 'classnames/bind';

import InfiniteList from 'terra-infinite-list/lib/index';
import styles from './InfiniteListTestCommon.module.scss';

const cx = classNames.bind(styles);

const InfiniteListLoading = () => (
  <InfiniteList
    id="test-infinite-list"
    isFinishedLoading={false}
    ariaLabel="Loading"
    initialLoadingIndicator={(
      <div className={cx('content-wrapper')}>
        Loading
      </div>
)}
  />
);

export default InfiniteListLoading;
