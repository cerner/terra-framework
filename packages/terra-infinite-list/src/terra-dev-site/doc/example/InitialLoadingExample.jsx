import React from 'react';
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import InfiniteList from 'terra-infinite-list/lib/index';
/* eslint-enable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */

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
