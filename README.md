<!-- Logo -->
<p align="center">
  <img height="128" width="128" src="https://github.com/cerner/terra-framework/raw/master/terra.png">
</p>

<!-- Name -->
<h1 align="center">
  Terra Framework
</h1>

[![Cerener OSS](https://img.shields.io/badge/Cerner-OSS-blue.svg?style=flat)](http://engineering.cerner.com/2014/01/cerner-and-open-source/)
[![Build Status](https://travis-ci.org/cerner/terra-framework.svg?branch=master)](https://travis-ci.org/cerner/terra-framework)
[![lerna](https://img.shields.io/badge/Maintained%20With-Lerna-cc00ff.svg)](https://lernajs.io/)
[![devDependencies status](https://david-dm.org/cerner/terra-framework/dev-status.svg)](https://david-dm.org/cerner/terra-framework?type=dev)

- [Supported Browsers](#supported-browsers)
- [Packages](#packages)
- [Internationalization](#internationalizationi18n)
  - [Packages Required I18n](#packages-required-i18n)
- [Contributing](#contributing)
- [LICENSE](#license)

## Packages

### Versioning

When a component reaches v1.0.0., it is considered to be stable and will follow [SemVer](http://semver.org/) for versioning.
1. MAJOR versions represent breaking changes
2. MINOR versions represent added functionality in a backwards-compatible manner
3. PATCH versions represent backwards-compatible bug fixes

Consult the component CHANGELOGs, related issues, and PRs for more information.

We view the React.js props API of our components as our main public API. We use this to guide us when versioning components.

Prior to components reaching v1.0.0, a component is considered to be in a beta stage.
Components in beta stage may include breaking changes, new features, and bug fixes all within v0.x.x releases.

### Status
:white_check_mark: Stable
:large_orange_diamond: Beta
:construction: In Progress
:x: Deprecated


| Terra Package      | Version | Status |
|--------------------|---------|--------|
<!-- | [terra-toggle-button](https://github.com/cerner/terra-core/tree/master/packages/terra-toggle-button) | [![NPM version](http://img.shields.io/npm/v/terra-toggle-button.svg)](https://www.npmjs.org/package/terra-toggle-button) | :white_check_mark: | -->

## Supported Browsers

| Browser                     | Version |
|-----------------------------|---------|
| Chrome & Chrome for Android | Current |
| Edge                        | Current |
| Firefox                     | Current |
| Internet Explorer           | 10 & 11 |
| Safari & Mobile Safari      | Current |

## Internationalization (I18n)

1. Please follow [Base Getting Started](packages/terra-base/README.md#getting-started) to install `Base`, and consume it with `locale` props.
2. Install and config `terra-i18n-plugin`:
    - Follow [terra-i18n-plugin Getting Started](packages/terra-i18n-plugin#getting-started) to install `terra-i18n-plugin` to aggregate translations in `node_modules`.
    - Follow [terra-i18n-plugin Wiki Guide](https://github.com/cerner/terra-core/wiki/Terra-i18n-plugin-Guide) to config i18n plugin.
3. Install and config `react-intl`
    - Install it `npm install --save react-intl`.
    - Add alias webpack config to avoid importing duplicate `react-intl`.
        ```
        resolve: {
          extensions: ['.js', '.jsx'],
          alias: {
            'react-intl': path.resolve(__dirname, 'node_modules/react-intl'),
          },
        },
        ```
4. Provide values for `locale` and `customMessages` prop of `Base`.
5. Follow [react-intl wiki](https://github.com/yahoo/react-intl/wiki/API) to use `injectIntl`([pass translations to props](https://github.com/cerner/terra-core/wiki/terra-i18n-Guide#pass-translated-message-as-props)) or `FormattedMessage`([render translations](https://github.com/cerner/terra-core/wiki/terra-i18n-Guide#display-transalated-message-without-default-message-fallback)) to consume translations.

### Packages Requiring I18n

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

## LICENSE

Copyright 2017 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
