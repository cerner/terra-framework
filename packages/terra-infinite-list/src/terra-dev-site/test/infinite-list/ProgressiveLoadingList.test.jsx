import React from 'react';
import classNames from 'classnames/bind';
import Placeholder from 'terra-doc-template/lib/Placeholder';

/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import InfiniteList, { Item } from 'terra-infinite-list/lib/index';
/* eslint-enable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import styles from './InfiniteListTestCommon.module.scss';

import MyInitialLoadingIndicator from '../../doc/common/MyInitialLoadingIndicator';
import MyProgressiveLoadingIndicator from '../../doc/common/MyProgressiveLoadingIndicator';
import MyExampleContainer from '../../doc/common/MyExampleContainer';

import mockRequest from '../../doc/guides/mock-data/mock-progressive';

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
        <Placeholder title={item.title} className={cx('item-placeholder')} />
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
          progressiveLoadingMessage="Loading allergies..."
        >
          {this.createItems()}
        </InfiniteList>
      </MyExampleContainer>
    );
  }
}
export default ProgressiveLoadingList;
