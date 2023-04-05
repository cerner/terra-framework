# Stylelint Config Terra

[![NPM version](https://badgen.net/npm/v/stylelint-config-terra)](https://www.npmjs.org/package/@cerner/stylelint-config-terra)
[![Build Status](https://badgen.net/travis/cerner/terra-toolkit)](https://travis-ci.com/cerner/terra-toolkit)

This configuration reflects Terra's supported stylelint policy for their UI library stylesheets. It extends the  [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) configuration which is based on [sass-guidelines](https://sass-guidelin.es/). Additionally, this configuration utilizes the [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features) plugin to check if the styles used are supported by the local browserslist being targeted.

## What is Stylelint?

[Stylelint](https://stylelint.io/) is a mighty, modern CSS linter and fixer that helps you avoid errors and enforce consistent conventions in your stylesheets.

## Installation

Install the module

```shell
$ npm install stylelint --save-dev
$ npm install @cerner/stylelint-config-terra --save-dev
```

## Usage

### package.json

```json
{
  "stylelint": {
    "extends": "@cerner/stylelint-config-terra"
  }
}
```

### Extending Terra's Configuration

It is possible to specify and override the rules defined by stylelint-config-terra. Read more about it [here](https://stylelint.io/user-guide/configuration/#extends).

For example, it is possible to override the browsers specified to the no-unsupported-browser-features plugin.

```json
{
  "stylelint": {
    "extends @cerner/stylelint-config-terra",
    "rules": {
      "plugin/no-unsupported-browser-features": [
        true,
        "browsers": ["iOS >= 10"],
        "severity": "warning",
      ]
    }
  }
}
```

## Custom Lint Rules

The following custom rules are enabled by default.

* [terra/custom-property-name](https://github.com/cerner/terra-toolkit/blob/main/packages/stylelint-config-terra/src/rules/custom-property-name): Requires custom properties to be suffixed with the css property name.
* [terra/custom-property-namespace](https://github.com/cerner/terra-toolkit/blob/main/packages/stylelint-config-terra/src/rules/custom-property-namespace): Requires custom properties to be prefixed with a namespace.
* [terra/custom-property-pattern](https://github.com/cerner/terra-toolkit/blob/main/packages/stylelint-config-terra/src/rules/custom-property-pattern): Requires custom properties to be written in lowercase alphanumeric characters and hyphens.
* [terra/custom-property-pseudo-selectors](https://github.com/cerner/terra-toolkit/blob/main/packages/stylelint-config-terra/src/rules/custom-property-pseudo-selectors): Requires custom properties to include all ancestor pseudo selectors in order.

## Node version support

This package was developed and tested using Node 10 up to Node 14. Consumers using Node 16 or greater are advised to use it at their own risk since those versions are not officially supported due to lack of thorough testing.

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

## LICENSE

Copyright 2018 - 2020 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
