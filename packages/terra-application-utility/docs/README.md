# Terra Application Utility

The Utility is used to disclose a utility menu. There are two versions - a header version and menu version. These should be used with the corresponding `terra-application-header-layout` and `terra-application-menu-layout` components.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application-utility`

## Usage

```jsx
import React from 'react';
import { ApplicationHeaderUtility, ApplicationMenuUtility } from 'terra-application-utility';

<ApplicationHeaderUtility
  menuItems={menuItems}
  onChange={this.handleOnChange}
  onDisclose={this.onDiscloseUtility}
  title={userName}
  accessory={image}
/>

<ApplicationMenuUtility
  menuItems={menuItems}
  onChange={this.handleOnChange}
  onDisclose={this.onDiscloseUtility}
  title={userName}
  accessory={image}
/>

```

## Component Features

<!-- Uncomment supported features.
 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
 -->
