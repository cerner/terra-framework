# Terra Date Picker

[![NPM version](https://badgen.net/npm/v/terra-date-picker)](https://www.npmjs.org/package/terra-date-picker)
[![Build Status](https://badgen.net/travis/cerner/terra-framework)](https://travis-ci.com/cerner/terra-framework)

Terra-date-picker is a controlled input component that provides users a way to enter or select a date from the date picker. It leverages the [momentjs](http://momentjs.com/docs/) library for date formatting and manipulations. A date can be expressed in many [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formats. To reduce confusion and complexity, the date props in terra-date-picker must be expressed in a specific format of the ISO 8601 representation of the date. That is, any date prop must conform to the `YYYY-MM-DD` format.

This is a controlled component because it manages the state of the value in the input. Because this is a controlled input component, it cannot accept the defaultValue prop as it always uses the value prop. React does not allow having both the defaultValue and value props.

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-framework/tree/master/packages/terra-date-picker/docs)
- [LICENSE](#license)

## Getting Started

- Install with [npm](https://www.npmjs.com): `npm install terra-date-picker`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |
| react-intl | ^2.8.0 |

<!-- AUTO-GENERATED-CONTENT:END -->

## LICENSE

Copyright 2017 - 2019 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
