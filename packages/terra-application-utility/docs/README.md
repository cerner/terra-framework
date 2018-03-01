# Terra Application Utility

Houses the utilities menu and user data component (used as the first menu item). The menu items are generated from a config file. There are two versions - a header version and menu version. These should be used with the corresponding header and menu layouts.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application-utility`

## Usage

```jsx
import React from 'react';
import { ApplicationHeaderUtility, ApplicationMenuUtility, UserData } from 'terra-application-utility';

<ApplicationHeaderUtility
  menuItems={menuItems}
  onChange={this.handleOnChange}
  onDisclose={this.onDiscloseUtility}
  userName={userName}
  userPhoto={image}
/>

<ApplicationMenuUtility
  menuItems={menuItems}
  onChange={this.handleOnChange}
  onDisclose={this.onDiscloseUtility}
  userName={userName}
  userPhoto={image}
/>

<UserData userDetail={userDetail} userName={userName} userPhoto={userPhoto}>

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
