import React from 'react';

import InfiniteList, { Item } from '../../../InfiniteList';

const InfiniteListUpdating = () => {
  const style = { height: '100px', width: '100%' };

  return (
    <div>
      <button type="button" id="test-click" onClick={() => { document.querySelector('#test-infinite-list').scrollTop = 1600; }}>button</button>
      <div style={{ height: '380px' }}>
        <InfiniteList
          id="test-infinite-list"
          dividerStyle="standard"
          isFinishedLoading
        >
          <Item key="item-0"><div style={style}>Item 0</div></Item>
          <Item key="item-1"><div style={style}>Item 1</div></Item>
          <Item key="item-2"><div style={style}>Item 2</div></Item>
          <Item key="item-3"><div style={style}>Item 3</div></Item>
          <Item key="item-4"><div style={style}>Item 4</div></Item>
          <Item key="item-5"><div style={style}>Item 5</div></Item>
          <Item key="item-6"><div style={style}>Item 6</div></Item>
          <Item key="item-7"><div style={style}>Item 7</div></Item>
          <Item key="item-8"><div style={style}>Item 8</div></Item>
          <Item key="item-9"><div style={style}>Item 9</div></Item>
          <Item key="item-10"><div style={style}>Item 10</div></Item>
          <Item key="item-11"><div style={style}>Item 11</div></Item>
          <Item key="item-12"><div style={style}>Item 12</div></Item>
          <Item key="item-13"><div style={style}>Item 13</div></Item>
          <Item key="item-14"><div style={style}>Item 14</div></Item>
          <Item key="item-15"><div style={style}>Item 15</div></Item>
        </InfiniteList>
      </div>
    </div>
  );
};

export default InfiniteListUpdating;
