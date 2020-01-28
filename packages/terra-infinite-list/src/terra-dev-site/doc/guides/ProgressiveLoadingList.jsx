import React from 'react';
import Placeholder from 'terra-doc-template/lib/Placeholder';

import InfiniteList, { Item } from 'terra-infinite-list/lib/index';
import classNames from 'classnames/bind';

import MyInitialLoadingIndicator from '../common/MyInitialLoadingIndicator';
import MyProgressiveLoadingIndicator from '../common/MyProgressiveLoadingIndicator';
import MyExampleContainer from '../common/MyExampleContainer';

import mockRequest from './mock-data/mock-progressive';
import styles from '../example/InfiniteListDocExampleCommon.module.scss';

const cx = classNames.bind(styles);

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
        <Placeholder title={item.title} className={cx('placeholder')} />
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
          ariaLabel="Progressive Loading"
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
