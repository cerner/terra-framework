# Package Json Lint Config Terra

[![NPM version](https://badgen.net/npm/v/@cerner/package-json-lint-config-terra)](https://www.npmjs.org/package/@cerner/package-json-lint-config-terra)
[![Build Status](https://badgen.net/travis/cerner/terra-toolkit)](https://travis-ci.com/cerner/terra-toolkit)

Terra's sharable package json lint configuration for their UI library and build tools.

Features:

- defaults the rules require-no-terra-base-peer-dependency-versions and require-theme-context-versions to warn.

## What is Package Json Lint

[Package Json Lint](https://www.npmjs.org/package/@cerner/package-json-lint) is a pluggable linting utility for projects package json files.

## Installation

Install the module

```shell
npm install @cerner/package-json-lint --save-dev
npm install @cerner/package-json-lint-config-terra --save-dev
```

## Usage

First, include the configuration defined by `@cerner/package-json-lint-config-terra` via the extends property.

### package.json

```json
{
  "package-json-lint": {
    "extends": "@cerner/package-json-lint-config-terra"
  },
}
```

## Node version support

This package was developed and tested using Node 10 up to Node 14. Consumers using Node 16 or greater are advised to use it at their own risk since those versions are not officially supported due to lack of thorough testing.

## Versioning

@cerner/package-json-lint-config-terra is considered to be stable and will follow [SemVer](http://semver.org/) for versioning.

1. MAJOR versions represent breaking changes
2. MINOR versions represent added functionality in a backwards-compatible manner
3. PATCH versions represent backwards-compatible bug fixes

Consult the component CHANGELOGs, related issues, and PRs for more information.

## LICENSE

Copyright 2021 - present Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
