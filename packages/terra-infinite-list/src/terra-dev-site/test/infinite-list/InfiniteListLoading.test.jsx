import React from 'react';

import InfiniteList from '../../../index';

const InfiniteListLoading = () => (
  <InfiniteList
    id="test-infinite-list"
    isFinishedLoading={false}
    initialLoadingIndicator={(
      <div style={{
        height: '100%', width: '100%', position: 'relative', backgroundColor: 'aliceblue',
      }}
      >
        Loading
      </div>
)}
  />
);

export default InfiniteListLoading;
