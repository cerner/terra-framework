# Terra Theme Provider


[![NPM version](https://badgen.net/npm/v/terra-theme-provider)](https://www.npmjs.org/package/terra-theme-provider)
[![Build Status](https://badgen.net/travis/cerner/terra-framework)](https://travis-ci.com/cerner/terra-framework)

The theme provider component provides a theme to Terra UI components via CSS custom properties a.k.a CSS variables. This is accomplished by setting a CSS class, generated from the `themeName` prop, which contains defined CSS custom properties for the specified theme on the `html` element.

*Note:* The CSS custom properties applied via the theme provider only work in browsers which have native support for CSS custom properties.

- [Getting Started](#getting-started)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-theme-provider`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |

<!-- AUTO-GENERATED-CONTENT:END -->

## LICENSE

Copyright 2017 - 2020 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
