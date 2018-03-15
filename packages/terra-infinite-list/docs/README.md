# Terra Infinite List

The infinite list component provides virtual dom management and data request callbacks to manage large data sets within a list.
InfiniteList is a controlled HOC built upon the terra-list component in order to allow for list style and selection patterns.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-infinite-list`
  - `yarn add terra-infinite-list`

## Usage

```jsx
import React from 'react';
import InfiniteList from 'terra-infinite-list';

class MyHOC extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnRequestItems = this.handleOnRequestItems.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getListItemsForData = this.getListItemsForData.bind(this);

    this.state = { stillLoading: true, items: [], selectedIndexes: [] };
  }

  handleOnRequestItems() {
    // trigger your axios call for additional items here, upon completation ensure your component updates either through state or redux/context
    this.setState( { stillLoading: !result.hasMoreData, items: MyHOC.combineMyDataItems(this.state.items, result.items) } );
  }

  handleOnChange(event, index) {
    // do logic to set selected indexes, whether single or multi-select, etc
    this.setState({ selectedIndexes: myNewSelectedIndexes })
  }

  getListItemsForData() {
    // map your data structure to your component, and then set it as the content of your list item
    return this.state.items.map(item => {
      return <InfiniteList.Item content={<MyComponent itemData={item} />} key={item.myRowKey} />;
    });
  }

  render() {
    const fullLoading = <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />;

    const progressLoading = (
      <OverlayContainer style={{ height: 'myHeightValue', width: '100%' }}>
        <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />
      </OverlayContainer>
    );

    return (
      <InfiniteList
        infiniteProps={infiniteProps}
        isSelectable
        isDivided
        onChange={this.handleOnChange}
        selectedIndexes={this.state.selectedIndexes}
        isFinishedLoading={!this.state.stillLoading}
        onRequestItems={this.addMoreData}
        initialLoadingIndicator={fullLoading}
        progressiveLoadingIndicator={progressLoading}
      >
        {this.getListItemsFromData()}
      </InfiniteList>
    );
  }
}
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

