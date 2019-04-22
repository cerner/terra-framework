import React from 'react';
/* eslint-disable import/no-unresolved, import/extensions */
import InfiniteList, { Item } from 'terra-infinite-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-unresolved, import/extensions */

import MyProgressiveLoadingIndicator from '../common/MyProgressiveLoadingIndicator';
import MyExampleContainer from '../common/MyExampleContainer';

const ProgressiveLoadingExample = () => (
  <MyExampleContainer>
    <InfiniteList
      dividerStyle="standard"
      progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}
    >
      <Item key="item-1">
        <Placeholder title="Item 1" style={{ height: '50px' }} />
      </Item>
    </InfiniteList>
  </MyExampleContainer>
);

export default ProgressiveLoadingExample;
