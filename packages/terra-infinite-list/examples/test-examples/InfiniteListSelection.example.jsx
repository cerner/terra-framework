import React from 'react';

import InfiniteList from '../../lib/InfiniteList';

const InfiniteListUpdating = () => {
  const infiniteProps = {
    isFinishedLoading: true,
  };

  return (
    <InfiniteList
      id="test-infinite-list"
      infiniteProps={infiniteProps}
      selectedIndexes={[0]}
      isSelectable
    >
      <InfiniteList.Item key="item-0" content={<div style={{ height: '50px', width: '100%' }}>Item 0</div>} />
      <InfiniteList.Item key="item-1" content={<div style={{ height: '50px', width: '100%' }}>Item 1</div>} />
      <InfiniteList.Item key="item-2" content={<div style={{ height: '50px', width: '100%' }}>Item 2</div>} />
      <InfiniteList.Item key="item-3" content={<div style={{ height: '50px', width: '100%' }}>Item 3</div>} />
    </InfiniteList>
  );
};

export default InfiniteListUpdating;
