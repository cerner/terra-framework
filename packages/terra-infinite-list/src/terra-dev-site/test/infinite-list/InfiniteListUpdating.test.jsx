import React from 'react';

import InfiniteList, { Item } from '../../../InfiniteList';

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
    <Item key="item-0"><div style={{ height: '50px', width: '100%', backgroundColor: 'bisque' }}>Item 0</div></Item>
    <Item key="item-1"><div style={{ height: '50px', width: '100%', backgroundColor: 'darkgoldenrod' }}>Item 1</div></Item>
    <Item key="item-2"><div style={{ height: '50px', width: '100%', backgroundColor: 'bisque' }}>Item 2</div></Item>
    <Item key="item-3"><div style={{ height: '50px', width: '100%', backgroundColor: 'darkgoldenrod' }}>Item 3</div></Item>
  </InfiniteList>
);

export default InfiniteListUpdating;
