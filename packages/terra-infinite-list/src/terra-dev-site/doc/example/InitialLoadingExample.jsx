import React from 'react';
import InfiniteList from 'terra-infinite-list/lib/index';

import MyInitialLoadingIndicator from '../common/MyInitialLoadingIndicator';
import MyExampleContainer from '../common/MyExampleContainer';

const InitialLoadingExample = () => (
  <MyExampleContainer>
    <InfiniteList
      dividerStyle="standard"
      initialLoadingIndicator={<MyInitialLoadingIndicator />}
    />
  </MyExampleContainer>
);

export default InitialLoadingExample;
