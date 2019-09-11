import React from 'react';
import InfiniteList, { Item } from 'terra-infinite-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';

import mockData from './mock-data/virtualizedData';
import MyExampleContainer from '../common/MyExampleContainer';
import styles from './InfiniteListDocExampleCommon.module.scss';

const cx = classNames.bind(styles);

const createListItem = itemData => (
  <Item key={itemData.key}>
    <Placeholder title={itemData.title} className={cx('placeholder')} />
  </Item>
);

const createItems = data => data.map(item => createListItem(item));

const VirtualizedExample = () => (
  <MyExampleContainer>
    <InfiniteList
      dividerStyle="standard"
      isFinishedLoading
    >
      {createItems(mockData)}
    </InfiniteList>
  </MyExampleContainer>
);

export default VirtualizedExample;
