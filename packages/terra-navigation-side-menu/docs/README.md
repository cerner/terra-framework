# Terra Navigation Side Menu

A structual component for nesting navigational items within the content section of the terra-menu-layout.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-navigation-side-menu`
  - `yarn add terra-navigation-side-menu`

## Usage

```jsx
import React from 'react';
import NavigationSideMenu from 'terra-navigation-side-menu';

<NavigationSideMenu
  menuItems={[
    { key: 'submenu1', text: 'Sub Menu 1' },
    { key: 'submenu2', text: 'Sub Menu 2' },
    { key: 'submenu3', text: 'Sub Menu 3' },
    { key: 'submenu4', text: 'Sub Menu 4' },
  ]}
  onChange={this.handleOnChange}
  selectedKey={this.state.selectedKey}
  title="Menu"
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
