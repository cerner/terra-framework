# Terra Application Header

The ApplicationHeader is a HOC that combines config and menu subcomponents, which are then placed within the header layout.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application-header`
  - `yarn add terra-application-header`

## Usage

```jsx
import React from 'react';
import ApplicationHeader from 'terra-application-header';

<ApplicationHeader
  applicationLinks={[{ path: '/testPath', text: 'Test' }]}
  nameConfig={{
    title: 'Application Name',
  }}
  utilityConfig={{
    userName: 'Some User',
    userDetails: 'Details about user',
    onUtilityChange: (event, key) => { this.stuff(key); },
  }}
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
