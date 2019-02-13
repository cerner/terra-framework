import React from 'react';
import InfiniteList, { Item } from '../../src/index';

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

    const component = <InfiniteList {...infiniteProps} />;
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with initial children', () => {
    const component = (
      <InfiniteList
        isFinishedLoading
      >
        <Item key={`item-${1}`}>
          <div style={{ height: '20px', width: '100%' }}>item 1</div>
        </Item>
        <Item key={`item-${2}`}>
          <div style={{ height: '20px', width: '100%' }}>item 2</div>
        </Item>
        <Item key={`item-${3}`}>
          <div style={{ height: '20px', width: '100%' }}>item 3</div>
        </Item>
        <Item key={`item-${4}`}>
          <div style={{ height: '20px', width: '100%' }}>item 4</div>
        </Item>
      </InfiniteList>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with list props', () => {
    const component = (
      <InfiniteList
        isFinishedLoading
        dividerStyle="standard"
        paddingStyle="standard"
        role="listbox"
      >
        <Item isSelectable key={`item-${1}`}>
          <div style={{ height: '20px', width: '100%' }}>item 1</div>
        </Item>
        <Item isSelectable isSelected key={`item-${2}`}>
          <div style={{ height: '20px', width: '100%' }}>item 2</div>
        </Item>
        <Item isSelectable key={`item-${3}`}>
          <div style={{ height: '20px', width: '100%' }}>item 3</div>
        </Item>
        <Item isSelectable key={`item-${4}`}>
          <div style={{ height: '20px', width: '100%' }}>item 4</div>
        </Item>
      </InfiniteList>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with list with style props', () => {
    const component = (
      <InfiniteList
        isFinishedLoading
        dividerStyle="standard"
        paddingStyle="standard"
        role="listbox"
      >
        <Item isSelectable style={{ backgroundColor: 'pink' }} key={`item-${1}`}>
          <div style={{ height: '20px', width: '100%' }}>item 1</div>
        </Item>
        <Item isSelectable isSelected style={{ backgroundColor: 'red' }} key={`item-${2}`}>
          <div style={{ height: '20px', width: '100%' }}>item 2</div>
        </Item>
        <Item isSelectable style={{ backgroundColor: 'blue' }} key={`item-${3}`}>
          <div style={{ height: '20px', width: '100%' }}>item 3</div>
        </Item>
        <Item isSelectable style={{ backgroundColor: 'yellow' }} key={`item-${4}`}>
          <div style={{ height: '20px', width: '100%' }}>item 4</div>
        </Item>
      </InfiniteList>
    );
    const wrapper = render(component);
    expect(wrapper).toMatchSnapshot();
  });
});
