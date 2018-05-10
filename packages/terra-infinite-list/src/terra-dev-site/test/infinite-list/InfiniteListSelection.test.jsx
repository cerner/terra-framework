import React from 'react';

import InfiniteList from '../../../InfiniteList';

const InfiniteListUpdating = () => (
  <InfiniteList
    id="test-infinite-list"
    selectedIndexes={[0]}
    isSelectable
    isFinishedLoading
  >
    <InfiniteList.Item key="item-0" content={<div style={{ height: '50px', width: '100%' }}>Item 0</div>} />
    <InfiniteList.Item key="item-1" content={<div style={{ height: '50px', width: '100%' }}>Item 1</div>} />
    <InfiniteList.Item key="item-2" content={<div style={{ height: '50px', width: '100%' }}>Item 2</div>} />
    <InfiniteList.Item key="item-3" content={<div style={{ height: '50px', width: '100%' }}>Item 3</div>} />
  </InfiniteList>
);

export default InfiniteListUpdating;
