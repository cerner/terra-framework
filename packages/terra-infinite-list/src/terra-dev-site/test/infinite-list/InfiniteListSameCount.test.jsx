import React from 'react';
import InfiniteList, { Item } from '../../../index';

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
      <Item key="item-0"><div style={{ height: '50px', width: '100%', backgroundColor: 'bisque' }}>Item 0</div></Item>,
      <Item key="item-1"><div style={{ height: '50px', width: '100%', backgroundColor: 'darkgoldenrod' }}>Item 1</div></Item>,
      <Item key="item-2"><div style={{ height: '50px', width: '100%', backgroundColor: 'bisque' }}>Item 2</div></Item>,
      <Item key="item-3"><div style={{ height: '50px', width: '100%', backgroundColor: 'darkgoldenrod' }}>Item 3</div></Item>,
    ];

    const items2 = [
      <Item key="item-0"><div style={{ height: '50px', width: '100%', backgroundColor: 'cadetblue' }}>Item 0</div></Item>,
      <Item key="item-1"><div style={{ height: '50px', width: '100%', backgroundColor: 'crimson' }}>Item 1</div></Item>,
      <Item key="item-2"><div style={{ height: '50px', width: '100%', backgroundColor: 'cadetblue' }}>Item 2</div></Item>,
      <Item key="item-3"><div style={{ height: '50px', width: '100%', backgroundColor: 'crimson' }}>Item 3</div></Item>,
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
