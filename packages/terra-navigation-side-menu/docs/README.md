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
    { key: 'menu', title: 'Menu', children: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },
    { key: 'submenu1', title: 'Sub Menu 1', children: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'] },
    { key: 'submenu2', title: 'Sub Menu 2' },
    { key: 'submenu3', title: 'Sub Menu 3' },
    { key: 'submenu4', title: 'Sub Menu 4' },
    { key: 'subsubmenu1', title: 'Sub-Sub Menu 1' },
    { key: 'subsubmenu2', title: 'Sub-Sub Menu 2' },
    { key: 'subsubmenu3', title: 'Sub-Sub Menu 3' },
  ]}
  onChange={() => {}}
  initialSelectedKey="menu"
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
