# Terra Time Input

[![NPM version](https://badgen.net/npm/v/terra-time-input)](https://www.npmjs.org/package/terra-time-input)
[![Build Status](https://badgen.net/travis/cerner/terra-framework)](https://travis-ci.com/cerner/terra-framework)

The terra-time-input component is a controlled input component for entering time. It is a controlled component because it manages the state of the value in the input. Because this is a controlled input component, it cannot accept the defaultValue prop as it always uses the value prop. React does not allow having both the defaultValue and value props.

The currently supported time formats are (hh:mm) and (hh:mm:ss), in both 24-hour and 12-hour format. All present input fields are required to be filled in and the time input enforces that the entry matches the format. The hour input only accepts values between 00 and 23 for 24-hour format or 01 and 12 in the 12-hour format and the minute and second inputs only accepts values between 00 and 59. For example, a time of 25:65 cannot be entered. A 0 will automatically be prepended to the hour if the entered hour is greater than 2. Likewise, a 0 will automatically be prepended to the minute or second if the entered number is greater than 5.

- [Getting Started](#getting-started)
- [Documentation](https://engineering.cerner.com/terra-framework/components/terra-time-input/time-input/time-input)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-time-input`

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

Copyright 2017 - 2020 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
