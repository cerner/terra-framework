import React from 'react';
import InfiniteList, { Item } from '../../src/index';
import styles from './InfiniteList.test.module.scss';

describe('InfiniteList', () => {
  it('should render a default component', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<InfiniteList ariaLabel="Infinite List" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with no children and loading', () => {
    const infiniteProps = {
      isFinishedLoading: false,
      initialLoadingIndicator: <div className={styles.initialLoadingIndicator} />,
      progressiveLoadingIndicator: <div className={styles.progressiveLoadingIndicator} />,
    };

    const component = <InfiniteList ariaLabel="Infinite List" {...infiniteProps} />;
    const wrapper = enzymeIntl.shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with initial children', () => {
    const component = (
      <InfiniteList
        isFinishedLoading
        ariaLabel="Infinite List"
      >
        <Item key={`item-${1}`}>
          <div className={styles.item}>item 1</div>
        </Item>
        <Item key={`item-${2}`}>
          <div className={styles.item}>item 2</div>
        </Item>
        <Item key={`item-${3}`}>
          <div className={styles.item}>item 3</div>
        </Item>
        <Item key={`item-${4}`}>
          <div className={styles.item}>item 4</div>
        </Item>
      </InfiniteList>
    );
    const wrapper = enzymeIntl.shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with list props', () => {
    const component = (
      <InfiniteList
        isFinishedLoading
        dividerStyle="standard"
        paddingStyle="standard"
        role="listbox"
        progressiveLoadingMessage="Loading allergies..."
        ariaLabel="Infinite List"
      >
        <Item isSelectable key={`item-${1}`}>
          <div className={styles.item}>item 1</div>
        </Item>
        <Item isSelectable isSelected key={`item-${2}`}>
          <div className={styles.item}>item 2</div>
        </Item>
        <Item isSelectable key={`item-${3}`}>
          <div className={styles.item}>item 3</div>
        </Item>
        <Item isSelectable key={`item-${4}`}>
          <div className={styles.item}>item 4</div>
        </Item>
      </InfiniteList>
    );
    const wrapper = enzymeIntl.shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with list with style props', () => {
    const component = (
      <InfiniteList
        isFinishedLoading
        dividerStyle="standard"
        paddingStyle="standard"
        role="listbox"
        ariaLabel="Infinite List"
      >
        <Item isSelectable className={styles.item1} key={`item-${1}`}>
          <div className={styles.item}>item 1</div>
        </Item>
        <Item isSelectable isSelected className={styles.item2} key={`item-${2}`}>
          <div className={styles.item}>item 2</div>
        </Item>
        <Item isSelectable className={styles.item3} key={`item-${3}`}>
          <div className={styles.item}>item 3</div>
        </Item>
        <Item isSelectable className={styles.item4} key={`item-${4}`}>
          <div className={styles.item}>item 4</div>
        </Item>
      </InfiniteList>
    );
    const wrapper = enzymeIntl.shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });
});
