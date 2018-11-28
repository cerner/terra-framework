<!-- Logo -->
<p align="center">
  <img height="128" width="128" src="https://github.com/cerner/terra-framework/raw/master/terra.png">
</p>

<!-- Name -->
<h1 align="center">
  Terra Framework
</h1>

[![Cerner OSS](https://badgen.net/badge/Cerner/OSS/blue)](http://engineering.cerner.com/2014/01/cerner-and-open-source/)
[![License](https://badgen.net/github/license/cerner/terra-framework)](https://github.com/cerner/terra-framework/blob/master/LICENSE)
[![Build Status](https://badgen.net/travis/cerner/terra-framework)](https://travis-ci.org/cerner/terra-framework)
[![devDependencies status](https://badgen.net/david/dev/cerner/terra-framework)](https://david-dm.org/cerner/terra-framework?type=dev)
[![lerna](https://badgen.net/badge/maintained%20with/lerna/cc00ff)](https://lernajs.io/)

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
![Stable](https://badgen.net/badge/status/Stable/green)
![Beta](https://badgen.net/badge/status/Beta/orange)
![Deprecated](https://badgen.net/badge/status/Deprecated/grey)

<!-- AUTO-GENERATED-CONTENT:START (SUBPACKAGELIST) -->
| Terra Package      | Version | Status | Dependencies |
|--------------------|---------|--------|--------------|
| [terra-aggregator](https://github.com/cerner/terra-framework/tree/master/packages/terra-aggregator) | [![NPM version](https://badgen.net/npm/v/terra-aggregator)](https://www.npmjs.org/package/terra-aggregator) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-aggregator](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-aggregator)](https://david-dm.org/cerner/terra-framework?path=packages/terra-aggregator) |
| [terra-application-header-layout](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-header-layout) | [![NPM version](https://badgen.net/npm/v/terra-application-header-layout)](https://www.npmjs.org/package/terra-application-header-layout) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-application-header-layout](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-header-layout)](https://david-dm.org/cerner/terra-framework?path=packages/terra-application-header-layout) |
| [terra-application-layout](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-layout) | [![NPM version](https://badgen.net/npm/v/terra-application-layout)](https://www.npmjs.org/package/terra-application-layout) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-application-layout](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-layout)](https://david-dm.org/cerner/terra-framework?path=packages/terra-application-layout) |
| [terra-application-links](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-links) | [![NPM version](https://badgen.net/npm/v/terra-application-links)](https://www.npmjs.org/package/terra-application-links) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-application-links](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-links)](https://david-dm.org/cerner/terra-framework?path=packages/terra-application-links) |
| [terra-application-menu-layout](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-menu-layout) | [![NPM version](https://badgen.net/npm/v/terra-application-menu-layout)](https://www.npmjs.org/package/terra-application-menu-layout) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-application-menu-layout](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-menu-layout)](https://david-dm.org/cerner/terra-framework?path=packages/terra-application-menu-layout) |
| [terra-application-name](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-name) | [![NPM version](https://badgen.net/npm/v/terra-application-name)](https://www.npmjs.org/package/terra-application-name) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-application-name](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-name)](https://david-dm.org/cerner/terra-framework?path=packages/terra-application-name) |
| [terra-application-utility](https://github.com/cerner/terra-framework/tree/master/packages/terra-application-utility) | [![NPM version](https://badgen.net/npm/v/terra-application-utility)](https://www.npmjs.org/package/terra-application-utility) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-application-utility](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-application-utility)](https://david-dm.org/cerner/terra-framework?path=packages/terra-application-utility) |
| [terra-brand-footer](https://github.com/cerner/terra-framework/tree/master/packages/terra-brand-footer) | [![NPM version](https://badgen.net/npm/v/terra-brand-footer)](https://www.npmjs.org/package/terra-brand-footer) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-brand-footer](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-brand-footer)](https://david-dm.org/cerner/terra-framework?path=packages/terra-brand-footer) |
| [terra-dialog-modal](https://github.com/cerner/terra-framework/tree/master/packages/terra-dialog-modal) | [![NPM version](https://badgen.net/npm/v/terra-dialog-modal)](https://www.npmjs.org/package/terra-dialog-modal) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-dialog-modal](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-dialog-modal)](https://david-dm.org/cerner/terra-framework?path=packages/terra-dialog-modal) |
| [terra-disclosure-manager](https://github.com/cerner/terra-framework/tree/master/packages/terra-disclosure-manager) | [![NPM version](https://badgen.net/npm/v/terra-disclosure-manager)](https://www.npmjs.org/package/terra-disclosure-manager) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-disclosure-manager](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-disclosure-manager)](https://david-dm.org/cerner/terra-framework?path=packages/terra-disclosure-manager) |
| [terra-form-validation](https://github.com/cerner/terra-framework/tree/master/packages/terra-form-validation) | [![NPM version](https://badgen.net/npm/v/terra-form-validation)](https://www.npmjs.org/package/terra-form-validation) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-form-validation](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-form-validation)](https://david-dm.org/cerner/terra-framework?path=packages/terra-form-validation) |
| [terra-hookshot](https://github.com/cerner/terra-framework/tree/master/packages/terra-hookshot) | [![NPM version](https://badgen.net/npm/v/terra-hookshot)](https://www.npmjs.org/package/terra-hookshot) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-hookshot](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-hookshot)](https://david-dm.org/cerner/terra-framework?path=packages/terra-hookshot) |
| [terra-infinite-list](https://github.com/cerner/terra-framework/tree/master/packages/terra-infinite-list) | [![NPM version](https://badgen.net/npm/v/terra-infinite-list)](https://www.npmjs.org/package/terra-infinite-list) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-infinite-list](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-infinite-list)](https://david-dm.org/cerner/terra-framework?path=packages/terra-infinite-list) |
| [terra-layout](https://github.com/cerner/terra-framework/tree/master/packages/terra-layout) | [![NPM version](https://badgen.net/npm/v/terra-layout)](https://www.npmjs.org/package/terra-layout) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-layout](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-layout)](https://david-dm.org/cerner/terra-framework?path=packages/terra-layout) |
| [terra-modal-manager](https://github.com/cerner/terra-framework/tree/master/packages/terra-modal-manager) | [![NPM version](https://badgen.net/npm/v/terra-modal-manager)](https://www.npmjs.org/package/terra-modal-manager) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-modal-manager](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-modal-manager)](https://david-dm.org/cerner/terra-framework?path=packages/terra-modal-manager) |
| [terra-navigation-layout](https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-layout) | [![NPM version](https://badgen.net/npm/v/terra-navigation-layout)](https://www.npmjs.org/package/terra-navigation-layout) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-navigation-layout](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-navigation-layout)](https://david-dm.org/cerner/terra-framework?path=packages/terra-navigation-layout) |
| [terra-navigation-side-menu](https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-side-menu) | [![NPM version](https://badgen.net/npm/v/terra-navigation-side-menu)](https://www.npmjs.org/package/terra-navigation-side-menu) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-navigation-side-menu](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-navigation-side-menu)](https://david-dm.org/cerner/terra-framework?path=packages/terra-navigation-side-menu) |
| [terra-notification-dialog](https://github.com/cerner/terra-framework/tree/master/packages/terra-notification-dialog) | [![NPM version](https://badgen.net/npm/v/terra-notification-dialog)](https://www.npmjs.org/package/terra-notification-dialog) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-notification-dialog](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-notification-dialog)](https://david-dm.org/cerner/terra-framework?path=packages/terra-notification-dialog) |
| [terra-popup](https://github.com/cerner/terra-framework/tree/master/packages/terra-popup) | [![NPM version](https://badgen.net/npm/v/terra-popup)](https://www.npmjs.org/package/terra-popup) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-popup](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-popup)](https://david-dm.org/cerner/terra-framework?path=packages/terra-popup) |
| [terra-slide-panel](https://github.com/cerner/terra-framework/tree/master/packages/terra-slide-panel) | [![NPM version](https://badgen.net/npm/v/terra-slide-panel)](https://www.npmjs.org/package/terra-slide-panel) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-slide-panel](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-slide-panel)](https://david-dm.org/cerner/terra-framework?path=packages/terra-slide-panel) |
| [terra-slide-panel-manager](https://github.com/cerner/terra-framework/tree/master/packages/terra-slide-panel-manager) | [![NPM version](https://badgen.net/npm/v/terra-slide-panel-manager)](https://www.npmjs.org/package/terra-slide-panel-manager) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-slide-panel-manager](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-slide-panel-manager)](https://david-dm.org/cerner/terra-framework?path=packages/terra-slide-panel-manager) |
| [terra-theme-provider](https://github.com/cerner/terra-framework/tree/master/packages/terra-theme-provider) | [![NPM version](https://badgen.net/npm/v/terra-theme-provider)](https://www.npmjs.org/package/terra-theme-provider) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-theme-provider](https://badgen.net/david/dep/cerner/terra-framework/packages/terra-theme-provider)](https://david-dm.org/cerner/terra-framework?path=packages/terra-theme-provider) |
<!-- AUTO-GENERATED-CONTENT:END *-->

### Deprecated

| Terra Package      | Version | Status | Dependencies |
|--------------------|---------|--------|--------------|
| [terra-app-delegate](https://github.com/cerner/terra-framework/tree/master/packages/terra-app-delegate) | [![NPM version](https://badgen.net/npm/v/terra-app-delegate)](https://www.npmjs.org/package/terra-app-delegate) | ![Deprecated](https://badgen.net/badge/status/Stable/grey) | [![terra-app-delegate]](https://badgen.net/badge/dependencies/n%2Fa/grey) |

## Supported Browsers

| Browser                     | Version |
|-----------------------------|---------|
| Chrome & Chrome for Android | Current |
| Edge                        | Current |
| Firefox                     | Current |
| Internet Explorer           | 10 & 11 |
| Safari & Mobile Safari      | Current |

## Internationalization (I18n)
Please review [Terra's Internationalization documentation](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization) for more information. Included are directions on consumption and how internationalization is setup.

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
