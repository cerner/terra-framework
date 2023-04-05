<!-- Logo -->
<p align="center">
  <img height="128" width="128" src="https://github.com/cerner/terra-dev-site/raw/main/terra.png" alt="terra logo" />
</p>

<!-- Name -->
<h1 align="center">
  Terra Dev Site
</h1>

[![NPM version](https://badgen.net/npm/v/terra-dev-site)](https://www.npmjs.org/package/@cerner/terra-dev-site)
[![Cerner OSS](https://badgen.net/badge/Cerner/OSS/blue)](http://engineering.cerner.com/2014/01/cerner-and-open-source/)
[![License](https://badgen.net/github/license/cerner/terra-dev-site)](https://github.com/cerner/terra-dev-site/blob/main/LICENSE)
[![Build Status](https://badgen.net/travis/cerner/terra-dev-site)](https://travis-ci.com/cerner/terra-dev-site)
[![Dependencies status](https://badgen.net/david/dep/cerner/terra-dev-site)](https://david-dm.org/cerner/terra-dev-site)
[![devDependencies status](https://badgen.net/david/dev/cerner/terra-dev-site)](https://david-dm.org/cerner/terra-dev-site?type=dev)

A webpack plugin to dynamically build a documentation and testing site using terra-application as the foundation. See [terra-ui](https://engineering.cerner.com/terra-ui/dev_tools/terra-dev-site/terra-dev-site/about) for documentation.

## Installing the package

```bash
npm install --save-dev @cerner/terra-dev-site

// Install Peer Dependencies
npm install --save-dev terra-application react-dom@^16.8.5 react@^16.8.5 webpack@^5
```

## Node version support

This package was developed and tested using Node 10 up to Node 14. Consumers using Node 16 or greater are advised to use it at their own risk since those versions are not officially supported due to lack of thorough testing.

## Versioning

terra-dev-site is considered to be stable and will follow [SemVer](https://semver.org/) for versioning.

1. MAJOR versions represent breaking changes
2. MINOR versions represent added functionality in a backwards-compatible manner
3. PATCH versions represent backwards-compatible bug fixes

Consult the component CHANGELOGs, related issues, and PRs for more information.

## Contributing

Please read through our [contributing guidelines](https://engineering.cerner.com/terra-ui/about/terra-ui/contributing/contribution-guidelines). Included are directions for issue reporting and pull requests.

## LICENSE

Copyright 2018 - present Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
