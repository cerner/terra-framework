#!/usr/bin/env node
'use strict'
const cac = require('cac')
const chalk = require('chalk')
const install = require('../')

const cli = cac()

cli.usage(`Usage: ${chalk.yellow('yarn-install')} [dependencies] [options]`)

cli
  .option('d, dev', 'Install as dev dependency')
  .option('g, gloabl', 'Install as global dependency')
  .option('r, registry', 'Use custom registry')

cli.command('*', 'Run yarn install with npm fallback', (input, flags) => {
  if (input.length > 0) {
    install(Object.assign({ deps: input, flags }))
  } else {
    install(flags)
  }
})

cli.parse()
