import React from 'react';
import classNames from 'classnames/bind';
import InfiniteList, { Item } from '../../src/index';
import styles from './InfiniteList.test.scss';

const cx = classNames.bind(styles);

describe('InfiniteList', () => {
  it('should render a default component', () => {
    const wrapper = shallow(<InfiniteList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with no children and loading', () => {
    const infiniteProps = {
      isFinishedLoading: false,
      initialLoadingIndicator: <div className={cx('initial-loading-indicator')} />,
      progressiveLoadingIndicator: <div className={cx('progressive-loading-indicator')} />,
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
          <div className={cx('item-content')}>item 1</div>
        </Item>
        <Item key={`item-${2}`}>
          <div className={cx('item-content')}>item 2</div>
        </Item>
        <Item key={`item-${3}`}>
          <div className={cx('item-content')}>item 3</div>
        </Item>
        <Item key={`item-${4}`}>
          <div className={cx('item-content')}>item 4</div>
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
          <div className={cx('item-content')}>item 1</div>
        </Item>
        <Item isSelectable isSelected key={`item-${2}`}>
          <div className={cx('item-content')}>item 2</div>
        </Item>
        <Item isSelectable key={`item-${3}`}>
          <div className={cx('item-content')}>item 3</div>
        </Item>
        <Item isSelectable key={`item-${4}`}>
          <div className={cx('item-content')}>item 4</div>
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
        <Item isSelectable className={cx('item1')} key={`item-${1}`}>
          <div className={cx('item-content')}>item 1</div>
        </Item>
        <Item isSelectable isSelected className={cx('item2')} key={`item-${2}`}>
          <div className={cx('item-content')}>item 2</div>
        </Item>
        <Item isSelectable className={cx('item3')} key={`item-${3}`}>
          <div className={cx('item-content')}>item 3</div>
        </Item>
        <Item isSelectable className={cx('item4')} key={`item-${4}`}>
          <div className={cx('item-content')}>item 4</div>
        </Item>
      </InfiniteList>
    );
    const wrapper = render(component);
    expect(wrapper).toMatchSnapshot();
  });
});
