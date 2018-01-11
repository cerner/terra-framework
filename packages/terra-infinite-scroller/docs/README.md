# Terra Infinite Scroller

The infinite scroller component provides a means of triggering callbacks for additional scroller items.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-infinite-scroller`
  - `yarn add terra-infinite-scroller`

## Usage

```jsx
import React from 'react';
import InfiniteScroller from 'terra-infinite-scroller';


render() {
  return (
    <DataScroller
      isFinishedLoading={!this.state.stillLoading}
      onRequestItems={this.addMoreData}
      initialLoadingIndicator={fullLoading}
      progressiveLoadingIndicator={progressLoading}
    >
      {items}
    </InfiniteScroller>
  );
}

```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

