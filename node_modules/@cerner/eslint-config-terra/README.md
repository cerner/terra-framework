# Eslint Config Terra

[![NPM version](https://badgen.net/npm/v/@cerner/eslint-config-terra)](https://www.npmjs.org/package/@cerner/eslint-config-terra)
[![Build Status](https://badgen.net/travis/cerner/terra-toolkit)](https://travis-ci.com/cerner/terra-toolkit)

Terra's sharable ESLint configuration for their UI library and build tools.

Features:

- extends the  [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/main/packages/eslint-config-airbnb), which exports ESLint rules, including rules for ECMAScript 6+ and React.
- checks for proper ReactJS Hooks usage via the [eslint-plugin-react-hooks](https://reactjs.org/docs/hooks-rules.html).
- checks syntax for targeted browsers support via the [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat). It is recommended to use Terra's targeted browsers which are specified by the [browserslist-config-terra](https://github.com/cerner/terra-toolkit/tree/main/packages/browserslist-config-terra) module.
- defines the browser and jest environment
- defines enzyme globals for `shallow`, `render` and `mount` for jest testing

## What is Eslint

[ESlint](https://eslint.org/) is a pluggable linting utility for JavaScript and JSX.

## Installation

Install the module

```shell
npm install eslint --save-dev
npm install @cerner/eslint-config-terra --save-dev
```

## Usage

First, include the configuration defined by `@cerner/eslint-config-terra` via the  [extends](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) property.

Then, [define the browsers](https://github.com/amilajack/eslint-plugin-compat#targeting-browsers) for the `eslint-plugin-compat` plugin to target by add the browsers list configuration in your package.json through the `browserslist` key.

### package.json

```json
{
  "browserslist": [
    "extends @cerner/browserslist-config-terra"
  ],
  "eslintConfig": {
    "extends": "@cerner/terra"
  },
}
```

## Node version support

This package was developed and tested using Node 10 up to Node 14. Consumers using Node 16 or greater are advised to use it at their own risk since those versions are not officially supported due to lack of thorough testing.

## Versioning

eslint-config-terra is considered to be stable and will follow [SemVer](http://semver.org/) for versioning.

1. MAJOR versions represent breaking changes
2. MINOR versions represent added functionality in a backwards-compatible manner
3. PATCH versions represent backwards-compatible bug fixes

Consult the component CHANGELOGs, related issues, and PRs for more information.

## LICENSE

Copyright 2018 - present Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
