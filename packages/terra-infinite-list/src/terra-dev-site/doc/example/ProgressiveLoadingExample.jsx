import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import InfiniteList from 'terra-infinite-list/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import MyProgressiveLoadingIndicator from '../common/MyProgressiveLoadingIndicator';
import MyExampleContainer from '../common/MyExampleContainer';

const InitialLoadingExample = () => (
  <MyExampleContainer>
    <InfiniteList
      dividerStyle="standard"
      progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}
    />
  </MyExampleContainer>
);

export default InitialLoadingExample;
