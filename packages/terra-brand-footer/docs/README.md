# Terra Brand Footer

A standard footer for application layout which provides content areas to display options such as branding, copyright information, logo and navigation to related pages.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-brand-footer`

## Usage

```jsx
import React from 'react';
import BrandFooter from 'terra-brand-footer';

<BrandFooter
  links=[{
      {text: 'Some link', href: '#'},
      {text: 'Another link', href: '#', target: '_blank'}
  ]}
  contentLeft={<a href="https://www.cerner.com"><img src="cerner.svg" alt="Cerner" /></a>}
  contentRight={<p>some text for copyright information</p>}
  contentBottom={<img src="additional-branding.svg" alt="" />}
/>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
