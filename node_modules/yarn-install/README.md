# yarn-install [![NPM version](https://img.shields.io/npm/v/yarn-install.svg?style=flat-square)](https://npmjs.com/package/yarn-install) [![NPM downloads](https://img.shields.io/npm/dm/yarn-install.svg?style=flat-square)](https://npmjs.com/package/yarn-install) [![Build Status](https://img.shields.io/circleci/project/egoist/yarn-install/master.svg?style=flat-square)](https://circleci.com/gh/egoist/yarn-install)

If command `yarn` exists it uses Yarn to install, otherwise fallbacks to npm.

## Install

```bash
$ npm install --save yarn-install
```

## Usage

```js
const install = require('yarn-install')

const result = install({
  deps: ['webpack', 'mocha']
})
//=> result, returned by child_process.spawnSync
```

## CLI

```bash
yarn global add yarn-install

# then you will have `yarn-install` & `yarn-remove` commands
yarn-install pokemon --dev
yarn-install yo --global
yarn-remove xo
# don't forget that `yarn-install` with dependencies is always `--save` by default.

yarn-install help
yarn-remove help
```

## API

### install([options])

#### options

##### deps

Type: `array`

An array of dependencies to install, you can omit it to install dependencies in `package.json`. If `dependencies` is present, it defaults to `--save` mode.

```js
install({
  deps: ['ava', 'koa']
})
```

##### cwd

Type: `string`

The directory to run the command.

##### registry

Type: `string`  

Specfic a custom npm registry to use.

##### dev

Type: `boolean`

Use `--dev` for Yarn and `--save-dev` for npm.

##### global

Type: `boolean`

Install globally, stands for `npm --global` or `yarn global`.

##### remove

Type: `boolean`<br>
Default: `undefined`

The reversed behavior to `install`, ie. `yarn remove` and `npm uninstall`

##### production

Type: `boolean`<br>
Default: `undefined`

Only install `dependencies` in `package.json`.

##### respectNpm5

Type: `boolean`<br>
Default: `undefined`

Use npm if it's >= npm5.

### install.getPm([options])

Get the package manager that will be used to install.

#### options

##### respectNpm5

```js
// Given you have yarn & npm 4 installed
const pm = install.getPm()
//=> yarn

// Given you have yarn & npm 5 installed
const pm = install.getPm()
//=> yarn

// Given you have yarn & npm 5 installed
const pm = install.getPm({ respectNpm5: true })
//=> npm
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
