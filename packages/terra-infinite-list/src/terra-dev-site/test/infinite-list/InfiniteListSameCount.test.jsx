import React from 'react';
import InfiniteList from '../../../InfiniteList';

class InfiniteListSameCount extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdateItems = this.handleUpdateItems.bind(this);
    this.state = { useItemOne: true };
  }

  handleUpdateItems() {
    this.setState(prevState => ({ useItemOne: !prevState.useItemOne }));
  }

  render() {
    const items1 = [
      <InfiniteList.Item key="item-0" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'bisque' }}>Item 0</div>} />,
      <InfiniteList.Item key="item-1" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'darkgoldenrod' }}>Item 1</div>} />,
      <InfiniteList.Item key="item-2" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'bisque' }}>Item 2</div>} />,
      <InfiniteList.Item key="item-3" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'darkgoldenrod' }}>Item 3</div>} />,
    ];

    const items2 = [
      <InfiniteList.Item key="item-0" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'cadetblue' }}>Item 0</div>} />,
      <InfiniteList.Item key="item-1" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'crimson' }}>Item 1</div>} />,
      <InfiniteList.Item key="item-2" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'cadetblue' }}>Item 2</div>} />,
      <InfiniteList.Item key="item-3" content={<div style={{ height: '50px', width: '100%', backgroundColor: 'crimson' }}>Item 3</div>} />,
    ];

    return (
      <div>
        <button type="button" id="test-click" onClick={this.handleUpdateItems}>update items</button>
        <div style={{ width: '100%', height: '250px' }}>
          <InfiniteList
            id="test-infinite-list"
            isFinishedLoading
          >
            {this.state.useItemOne ? items1 : items2}
          </InfiniteList>
        </div>
      </div>
    );
  }
}
export default InfiniteListSameCount;
