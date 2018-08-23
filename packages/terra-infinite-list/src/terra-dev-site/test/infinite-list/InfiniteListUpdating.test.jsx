import React from 'react';

import InfiniteList from '../../../InfiniteList';

const InfiniteListUpdating = () => (
  <InfiniteList
    id="test-infinite-list"
    isFinishedLoading={false}
    progressiveLoadingIndicator={(
      <div style={{
        height: '50px', width: '100%', position: 'relative', backgroundColor: 'aliceblue',
      }}
      >
Progressive Loading
      </div>
)}
  >
    <InfiniteList.Item key="item-0" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'bisque' }}>Item 0</div>} />
    <InfiniteList.Item key="item-1" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'darkgoldenrod' }}>Item 1</div>} />
    <InfiniteList.Item key="item-2" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'bisque' }}>Item 2</div>} />
    <InfiniteList.Item key="item-3" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'darkgoldenrod' }}>Item 3</div>} />
  </InfiniteList>
);

export default InfiniteListUpdating;
