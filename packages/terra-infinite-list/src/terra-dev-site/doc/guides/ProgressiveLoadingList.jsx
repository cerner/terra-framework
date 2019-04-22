import React from 'react';
import Placeholder from 'terra-doc-template/lib/Placeholder';

/* eslint-disable import/no-unresolved, import/extensions */
import InfiniteList, { Item } from 'terra-infinite-list/lib/index';
/* eslint-enable import/no-unresolved, import/extensions */

import MyInitialLoadingIndicator from '../common/MyInitialLoadingIndicator';
import MyProgressiveLoadingIndicator from '../common/MyProgressiveLoadingIndicator';
import MyExampleContainer from '../common/MyExampleContainer';

import mockRequest from './mock-data/mock-progressive';

class ProgressiveLoadingList extends React.Component {
  constructor(props) {
    super(props);
    this.requestData = this.requestData.bind(this);
    this.state = { isFinishedLoading: false, currentPageKey: null, items: [] };
  }

  requestData() {
    mockRequest(this.state.currentPageKey).then(response => (
      this.setState(prevState => ({
        isFinishedLoading: response.isFinalPage,
        currentPageKey: response.nextPageKey,
        items: prevState.items.concat(response.items),
      }))
    ));
  }

  createItems() {
    return this.state.items.map(item => (
      <Item key={item.key}>
        <Placeholder title={item.title} style={{ height: '50px' }} />
      </Item>
    ));
  }

  render() {
    return (
      <MyExampleContainer>
        <InfiniteList
          dividerStyle="standard"
          isFinishedLoading={this.state.isFinishedLoading}
          onRequestItems={this.requestData}
          initialLoadingIndicator={<MyInitialLoadingIndicator />}
          progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}
        >
          {this.createItems()}
        </InfiniteList>
      </MyExampleContainer>
    );
  }
}
export default ProgressiveLoadingList;
