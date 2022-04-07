# Terra Infinite List


[![NPM version](https://badgen.net/npm/v/terra-infinite-list)](https://www.npmjs.org/package/terra-infinite-list)
[![Build Status](https://badgen.net/travis/cerner/terra-framework)](https://travis-ci.com/cerner/terra-framework)
[![Deprecated](https://badgen.net/badge/status/Deprecated/grey)](https://github.com/cerner/terra-framework/blob/main/packages/terra-infinite-list#readme)

---

:warning: **DEPRECATED**

The terra-infinite-list component has been deprecated and is no longer recommended for use.

From a usability perspective, infinite scrolling is a pattern designed and best used when users are casually looking for or discovering things, like shopping and social media. The infinite scrolling pattern should not be used for [goal-oriented tasks](https://www.nngroup.com/articles/infinite-scrolling/). Cerner products and our users most often fall into goal-oriented workflows. Users should have proper navigation methods (pagination) to navigate to predetermined points within the content easily.

Infinite scrolling also poses significant accessibility challenges for multiple user groups:

- Keyboard-only users have to navigate the entire infinite scroll to get to the content below or to the side of the endless loading content. This creates a very time-consuming and unnecessary burden for the keyboard-only user.
- Screen reader users would have the same problem even though they have more ways to navigate content on the page. When content is dynamically loaded and not within the DOM, screen reader users won't have access to any of that content which poses more significant challenges than just navigating.
- Focus can be lost when new content loads. Unless focus is managed, sighted keyboard-only users will have difficulties finding where they are on the page.
- For data with hierarchical relationships, infinite scrolling can make it difficult for screen readers to effectively communicate the required context if related content is split between loaded and unloaded content.

The [terra-paginator](https://www.npmjs.com/package/terra-paginator) should be considered as an alternative approach to paging large amounts of data.

---

The infinite list component provides virtual dom management and data request callbacks to manage large data sets within a list.

- [Getting Started](#getting-started)
- [Documentation](https://engineering.cerner.com/terra-framework/components/terra-infinite-list/infinite-list/infinite-list)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-infinite-list`

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

Copyright 2018 - 2020 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
