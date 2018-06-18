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
![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg)
![Stable](https://img.shields.io/badge/status-Beta-orange.svg)
![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg)


| Terra Package      | Version | Status |
|--------------------|---------|--------|
| [terra-aggregator](https://github.com/cerner/terra-framework/tree/master/packages/terra-aggregator) | [![NPM version](https://img.shields.io/npm/v/terra-aggregator.svg)](https://www.npmjs.org/package/terra-aggregator) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg)|
| [terra-app-delegate](https://github.com/cerner/terra-framework/tree/master/packages/terra-app-delegate) | [![NPM version](https://img.shields.io/npm/v/terra-app-delegate.svg)](https://www.npmjs.org/package/terra-app-delegate) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg)|
| [terra-application-header-layout](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-header-layout) | [![NPM version](https://img.shields.io/npm/v/terra-application-header-layout.svg)](https://www.npmjs.org/package/terra-application-header-layout) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-application-layout](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-layout) | [![NPM version](https://img.shields.io/npm/v/terra-application-layout.svg)](https://www.npmjs.org/package/terra-application-layout) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-application-links](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-links) | [![NPM version](https://img.shields.io/npm/v/terra-application-links.svg)](https://www.npmjs.org/package/terra-application-links) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-application-menu-layout](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-menu-layout) | [![NPM version](https://img.shields.io/npm/v/terra-application-menu-layout.svg)](https://www.npmjs.org/package/terra-application-menu-layout) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-application-name](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-name) | [![NPM version](https://img.shields.io/npm/v/terra-application-name.svg)](https://www.npmjs.org/package/terra-application-name) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-application-utility](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-utility) | [![NPM version](https://img.shields.io/npm/v/terra-application-utility.svg)](https://www.npmjs.org/package/terra-application-utility) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-disclosure-manager](https://github.com/cerner/terra-framework/tree/master/packages/terra-disclosure-manager) | [![NPM version](https://img.shields.io/npm/v/terra-disclosure-manager.svg)](https://www.npmjs.org/package/terra-disclosure-manager) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-hookshot](https://github.com/cerner/terra-framework/tree/master/packages/terra-hookshot) | [![NPM version](https://img.shields.io/npm/v/terra-hookshot.svg)](https://www.npmjs.org/package/terra-hookshot) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-infinite-list](https://github.com/cerner/terra-framework/tree/master/packages/terra-infinite-list) | [![NPM version](https://img.shields.io/npm/v/terra-infinite-list.svg)](https://www.npmjs.org/package/terra-infinite-list) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-layout](https://github.com/cerner/terra-framework/tree/master/packages/terra-layout) | [![NPM version](https://img.shields.io/npm/v/terra-layout.svg)](https://www.npmjs.org/package/terra-layout) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-modal-manager](https://github.com/cerner/terra-framework/tree/master/packages/terra-modal-manager) | [![NPM version](https://img.shields.io/npm/v/terra-modal-manager.svg)](https://www.npmjs.org/package/terra-modal-manager) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-navigation-layout](https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-layout) | [![NPM version](https://img.shields.io/npm/v/terra-navigation-layout.svg)](https://www.npmjs.org/package/terra-navigation-layout) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-navigation-side-menu](https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-side-menu) | [![NPM version](https://img.shields.io/npm/v/terra-navigation-side-menu.svg)](https://www.npmjs.org/package/terra-navigation-side-menu) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-notification-dialog](https://github.com/cerner/terra-framework/tree/master/packages/terra-notification-dialog) | [![NPM version](https://img.shields.io/npm/v/terra-notification-dialog.svg)](https://www.npmjs.org/package/terra-notification-dialog) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-popup](https://github.com/cerner/terra-framework/tree/master/packages/terra-popup) | [![NPM version](https://img.shields.io/npm/v/terra-popup.svg)](https://www.npmjs.org/package/terra-popup) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-slide-panel-manager](https://github.com/cerner/terra-framework/tree/master/packages/terra-slide-panel-manager) | [![NPM version](https://img.shields.io/npm/v/terra-slide-panel-manager.svg)](https://www.npmjs.org/package/terra-slide-panel-manager) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-slide-panel](https://github.com/cerner/terra-framework/tree/master/packages/terra-slide-panel) | [![NPM version](https://img.shields.io/npm/v/terra-slide-panel.svg)](https://www.npmjs.org/package/terra-slide-panel) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-theme-provider](https://github.com/cerner/terra-framework/tree/master/packages/terra-theme-provider) | [![NPM version](https://img.shields.io/npm/v/terra-theme-provider.svg)](https://www.npmjs.org/package/terra-theme-provider) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |

## Supported Browsers

| Browser                     | Version |
|-----------------------------|---------|
| Chrome & Chrome for Android | Current |
| Edge                        | Current |
| Firefox                     | Current |
| Internet Explorer           | 10 & 11 |
| Safari & Mobile Safari      | Current |

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

## Local Development

1. Install docker https://www.docker.com/ to run browser tests.
2. Install dependencies and run tests.
```sh
npm install
npm run test
```

## LICENSE

Copyright 2017 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
