import React from 'react';

import InfiniteList, { Item } from '../../../index';

const InfiniteListUpdating = () => (
  <InfiniteList
    id="test-infinite-list"
    isFinishedLoading
  >
    <Item isSelectable isSelected key="item-0"><div style={{ height: '50px', width: '100%' }}>Item 0</div></Item>
    <Item isSelectable key="item-1"><div style={{ height: '50px', width: '100%' }}>Item 1</div></Item>
    <Item isSelectable key="item-2"><div style={{ height: '50px', width: '100%' }}>Item 2</div></Item>
    <Item isSelectable key="item-3"><div style={{ height: '50px', width: '100%' }}>Item 3</div></Item>
  </InfiniteList>
);

export default InfiniteListUpdating;
