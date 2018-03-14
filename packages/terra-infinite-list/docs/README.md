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


render() {
  const items = this.getListItemsFromData();

  const fullLoading = <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />;

  const progressLoading = (
    <OverlayContainer style={{ height: '90px', width: '100%' }}>
      <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />
    </OverlayContainer>
  );

  const infiniteProps = {
    isFinishedLoading: !this.state.stillLoading,
    onRequestItems: this.handleOnRequestItems,
    initialLoadingIndicator: fullLoading,
    progressiveLoadingIndicator: progressLoading,
  };

  return (
    <InfiniteList
      infiniteProps={infiniteProps}
      isSelectable
      isDivided
      onChange={this.handleOnChange}
      selectedIndexes={this.state.selectedIndexes}
    >
      {items}
    </InfiniteList>
  );
}

```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

