import React from 'react';

import InfiniteList from '../../lib/InfiniteList';

const InfiniteListLoading = () => {
  const infiniteProps = {
    isFinishedLoading: false,
    initialLoadingIndicator: <div style={{ height: '100%', width: '100%', position: 'relative', backgroundColor: 'aliceblue' }}>Loading</div>,
  };

  return (
    <InfiniteList
      id="test-infinite-list"
      infiniteProps={infiniteProps}
    />
  );
};

export default InfiniteListLoading;
