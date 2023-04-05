# BrowsersList Config Terra

[![NPM version](https://badgen.net/npm/v/@cerner/browserslist-config-terra)](https://www.npmjs.org/package/@cerner/browserslist-config-terra)
[![Build Status](https://badgen.net/travis/cerner/terra-toolkit)](https://travis-ci.com/cerner/terra-toolkit)

This configuration reflects Terra's supported browser policy for their UI library and build tools.

## What is Browserslist

[Browserslist](https://github.com/ai/browserslist) is a library to share a browsers list between different front-end tools, like Autoprefixer, Eslint, and Stylelint.

* Valid Browserslist query syntax validation [browserl.ist](http://browserl.ist)
* ["Browserslist is a Good Idea"](https://css-tricks.com/browserlist-good-idea/) (blog post by [@chriscoyier](https://github.com/chriscoyier))

## Supported Browsers

| Browser                     | Version |
|-----------------------------|---------|
| Chrome & Chrome for Android | Current |
| Edge                        | Current |
| Firefox                     | Current |
| Internet Explorer           | 10 & 11 |
| Safari                      | Current |
| iOS                         | >= 12   |

## Installation

Install the module

```shell
npm install @cerner/browserslist-config-terra --save-dev
```

## Usage

Terra's browserslist configuration should be extended from within a `.browserslistrc` file. Create a `.browserslistrc` if one does not already exist and extend from @cerner/browserslist-config-terra.

.browserslistrc

```
extends @cerner/browserslist-config-terra
```

## Additional Notes

The `.browserslist` file should be added to `.npmignore` to prevent being released. Projects that implement the [files](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#files) key in the package.json do not need to add the `.browserslist` file to the `.npmignore`.

Do not extend the browserslist from within the package.json. This will create an implicit dependency that impacts all downstream consumers of the project.

## LICENSE

Copyright 2018 - 2020 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
