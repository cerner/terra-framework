# Terra Open Source Scripts

[![NPM version](https://badgen.net/npm/v/@cerner/terra-open-source-scripts)](https://www.npmjs.org/package/@cerner/terra-open-source-scripts)
[![Build Status](https://badgen.net/travis/cerner/terra-toolkit)](https://travis-ci.com/cerner/terra-toolkit)

Terra's common open source scripts provided as [terra-cli](https://www.npmjs.org/package/@cerner/terra-cli) commands. These are intended to be used by terra projects and not for use outside of that ecosystem. Currently, this package provides:

* prepare-for-release - prepares a given project for release by updating versions and changelogs. Supports both single and mono repos
* release - releases a given project to npm and tags it in git. Supports both single and mono repos

## Node version support

This package was developed and tested using Node 10 up to Node 14. Consumers using Node 16 or greater are advised to use it at their own risk since those versions are not officially supported due to lack of thorough testing.

## Versioning

terra-cli is considered to be stable and will follow [SemVer](http://semver.org/) for versioning.

1. MAJOR versions represent breaking changes
2. MINOR versions represent added functionality in a backwards-compatible manner
3. PATCH versions represent backwards-compatible bug fixes

Consult the component CHANGELOGs, related issues, and PRs for more information.

## LICENSE

Copyright 2020 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
