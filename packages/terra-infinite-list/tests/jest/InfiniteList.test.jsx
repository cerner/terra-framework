import React from 'react';
import InfiniteList from '../../src/InfiniteList';

describe('InfiniteList', () => {
  it('should render a default component', () => {
    const wrapper = shallow(<InfiniteList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with no children and loading', () => {
    const infiniteProps = {
      isFinishedLoading: false,
      initialLoadingIndicator: <div style={{ height: '100%', width: '100%', position: 'relative' }} />,
      progressiveLoadingIndicator: <div style={{ height: '40px', width: '100%' }} />,
    };

    const component = <InfiniteList infiniteProps={infiniteProps} />;
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with initial children', () => {
    const component = (
      <InfiniteList
        isFinishedLoading
      >
        <InfiniteList.Item key={`item-${1}`} content={<div style={{ height: '20px', width: '100%' }}>item 1</div>} />
        <InfiniteList.Item key={`item-${2}`} content={<div style={{ height: '20px', width: '100%' }}>item 2</div>} />
        <InfiniteList.Item key={`item-${3}`} content={<div style={{ height: '20px', width: '100%' }}>item 3</div>} />
        <InfiniteList.Item key={`item-${4}`} content={<div style={{ height: '20px', width: '100%' }}>item 4</div>} />
      </InfiniteList>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with list props', () => {
    const component = (
      <InfiniteList
        isFinishedLoading
        isSelectable
        isDivided
        selectedIndexes={[1]}
      >
        <InfiniteList.Item key={`item-${1}`} content={<div style={{ height: '20px', width: '100%' }}>item 1</div>} />
        <InfiniteList.Item key={`item-${2}`} content={<div style={{ height: '20px', width: '100%' }}>item 2</div>} />
        <InfiniteList.Item key={`item-${3}`} content={<div style={{ height: '20px', width: '100%' }}>item 3</div>} />
        <InfiniteList.Item key={`item-${4}`} content={<div style={{ height: '20px', width: '100%' }}>item 4</div>} />
      </InfiniteList>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with list with style props', () => {
    const component = (
      <InfiniteList
        isFinishedLoading
        isSelectable
        isDivided
        selectedIndexes={[1]}
      >
        <InfiniteList.Item style={{ backgroundColor: 'pink' }} key={`item-${1}`} content={<div style={{ height: '20px', width: '100%' }}>item 1</div>} />
        <InfiniteList.Item style={{ backgroundColor: 'red' }} key={`item-${2}`} content={<div style={{ height: '20px', width: '100%' }}>item 2</div>} />
        <InfiniteList.Item style={{ backgroundColor: 'blue' }} key={`item-${3}`} content={<div style={{ height: '20px', width: '100%' }}>item 3</div>} />
        <InfiniteList.Item style={{ backgroundColor: 'yellow' }} key={`item-${4}`} content={<div style={{ height: '20px', width: '100%' }}>item 4</div>} />
      </InfiniteList>
    );
    const wrapper = render(component);
    expect(wrapper).toMatchSnapshot();
  });
});
