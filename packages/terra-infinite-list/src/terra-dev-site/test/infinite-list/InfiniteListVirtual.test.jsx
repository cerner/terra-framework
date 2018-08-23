import React from 'react';

import InfiniteList from '../../../InfiniteList';

const InfiniteListUpdating = () => {
  const style = { height: '100px', width: '100%' };

  return (
    <div>
      <button type="button" id="test-click" onClick={() => { document.querySelector('#test-infinite-list').scrollTop = 1600; }}>button</button>
      <div style={{ height: '380px' }}>
        <InfiniteList
          id="test-infinite-list"
          isDivided
          isFinishedLoading
        >
          <InfiniteList.Item key="item-0" content={<div style={style}>Item 0</div>} />
          <InfiniteList.Item key="item-1" content={<div style={style}>Item 1</div>} />
          <InfiniteList.Item key="item-2" content={<div style={style}>Item 2</div>} />
          <InfiniteList.Item key="item-3" content={<div style={style}>Item 3</div>} />
          <InfiniteList.Item key="item-4" content={<div style={style}>Item 4</div>} />
          <InfiniteList.Item key="item-5" content={<div style={style}>Item 5</div>} />
          <InfiniteList.Item key="item-6" content={<div style={style}>Item 6</div>} />
          <InfiniteList.Item key="item-7" content={<div style={style}>Item 7</div>} />
          <InfiniteList.Item key="item-8" content={<div style={style}>Item 8</div>} />
          <InfiniteList.Item key="item-9" content={<div style={style}>Item 9</div>} />
          <InfiniteList.Item key="item-10" content={<div style={style}>Item 10</div>} />
          <InfiniteList.Item key="item-11" content={<div style={style}>Item 11</div>} />
          <InfiniteList.Item key="item-12" content={<div style={style}>Item 12</div>} />
          <InfiniteList.Item key="item-13" content={<div style={style}>Item 13</div>} />
          <InfiniteList.Item key="item-14" content={<div style={style}>Item 14</div>} />
          <InfiniteList.Item key="item-15" content={<div style={style}>Item 15</div>} />
        </InfiniteList>
      </div>
    </div>
  );
};

export default InfiniteListUpdating;
