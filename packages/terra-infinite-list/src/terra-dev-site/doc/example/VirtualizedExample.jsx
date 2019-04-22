import React from 'react';
/* eslint-disable import/no-unresolved, import/extensions */
import InfiniteList, { Item } from 'terra-infinite-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-unresolved, import/extensions */

import mockData from './mock-data/virtualizedData';
import MyExampleContainer from '../common/MyExampleContainer';

const createListItem = itemData => (
  <Item key={itemData.key}>
    <Placeholder title={itemData.title} style={{ height: '50px' }} />
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
