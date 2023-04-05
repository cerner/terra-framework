#!/usr/bin/env node
'use strict'
const cac = require('cac')
const chalk = require('chalk')
const install = require('../')

const cli = cac()

cli.usage(`Usage: ${chalk.yellow('yarn-remove')} [dependencies] [options]`)

cli
  .option('global, g', 'Remove globallly')

cli.command('*', 'Run yarn remove with npm fallback', (input, flags) => {
  if (input.length === 0) {
    throw new Error('Dependencies are required to run `remove` command')
  }
  const opts = Object.assign({
    deps: input,
    remove: true
  }, flags)
  install(opts)
})

cli.parse()
