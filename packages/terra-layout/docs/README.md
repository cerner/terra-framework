# Terra Layout

The Layout component provides a responsive starting point for the position of high-level application components.

The Layout is responsive at the following breakpoints (as defined by the [terra-responsive-element](https://github.com/cerner/terra-core/blob/master/packages/terra-responsive-element/src/breakpoints.scss)):
* Desktop [`medium`, `large`, `huge`] - The menu is disclosed using a Layout-provided hover mechanism. It can also be pinned open, at which point the menu will squish the content region instead of overlay it. Also, at these breakpoints, the menu does not overlay or squish the header content.
* Tablet [`small`] - The menu is disclosed by a programatic toggle provided to the header content. The header content must adhere to a Layout-specific prop API and properly display a toggle button if necessary. The header is overlaid by the menu when open, and the menu is dismissed by clicking in the negative overlay space.
* Phone [`tiny`] - This breakpoint's behavior is similar to that of Tablet, with the only difference being the menu size. The menu is presented as nearly full-screen, leaving only enough negative space to allow for dismissal.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-layout`
  - `yarn add terra-layout`

## Usage

```jsx
import React from 'react';
import Layout from 'terra-layout';
import { HeaderExample, MenuExample, ContentExample } from './your/examples';

<Layout
  header={<HeaderExample />}
  menu={<MenuExample />}
  menuText="Menu"
>
  <ContentExample />
</Layout>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
