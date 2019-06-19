import React from 'react';
import classNames from 'classnames/bind';

import InfiniteList from '../../../index';
import styles from './InfiniteListTestCommon.scss';

const cx = classNames.bind(styles);

const InfiniteListLoading = () => (
  <InfiniteList
    id="test-infinite-list"
    isFinishedLoading={false}
    initialLoadingIndicator={(
      <div className={cx('content-wrapper')}>
        Loading
      </div>
)}
  />
);

export default InfiniteListLoading;
