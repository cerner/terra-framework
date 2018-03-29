/* eslint-disable import/no-extraneous-dependencies */
const wdioConf = require('terra-toolkit/lib/wdio/conf');
const ExpressDevService = require('terra-toolkit/lib/wdio/services/index').ExpressDevService;
const localIP = require('ip');
const path = require('path');
const webpackConfig = require('terra-dev-site/src/config/webpack.config.js');

const webpackPort = 8080;

// Flex specs search between local pacakge and repo
let specs = path.join('tests', 'wdio', '**', '*-spec.js');
if (__dirname === process.cwd()) {
  specs = path.join('packages', '*', specs);
}

const config = {
  ...wdioConf.config,

  baseUrl: `http://${localIP.address()}:${webpackPort}`,
  specs,

  seleniumDocker: {
    enabled: !process.env.TRAVIS,
  },

  // Ignore deprecation warnings. When chrome supports /actions API we'll update to use those.
  deprecationWarnings: false,

  webpackPort,
  webpackConfig,
  axe: {
    inject: true,
    options: {
      rules: [{
        id: 'landmark-one-main',
        enabled: false,
      }],
    },
  },
  terra: {
    selector: '[data-terra-dev-site-content] *:first-child',
  },
  
  // Define wdio test suites
  suites: {
    suite1: [
      'packages/terra-aggregator/tests/wdio/**/*-spec.js',
      'packages/terra-app-delegate/tests/wdio/**/*-spec.js',
      'packages/terra-application-header-layout/tests/wdio/**/*-spec.js',
      'packages/terra-application-layout/tests/wdio/**/*-spec.js',
      'packages/terra-application-links/tests/wdio/**/*-spec.js',
    ],
    suite2: [
      'packages/terra-application-menu-layout/tests/wdio/**/*-spec.js',
      'packages/terra-application-name/tests/wdio/**/*-spec.js',
      'packages/terra-application-utility/tests/wdio/**/*-spec.js',
      'packages/terra-disclosure-manager/tests/wdio/**/*-spec.js',
      'packages/terra-hookshot/tests/wdio/**/*-spec.js',
    ],
    suite3: [
      'packages/terra-infinite-list/tests/wdio/**/*-spec.js',
      'packages/terra-layout/tests/wdio/**/*-spec.js',
      'packages/terra-modal-manager/tests/wdio/**/*-spec.js',
      'packages/terra-navigation-layout/tests/wdio/**/*-spec.js',
      'packages/terra-navigation-side-menu/tests/wdio/**/*-spec.js',
    ],
    suite4: [
      'packages/terra-popup/tests/wdio/**/*-spec.js',
      'packages/terra-slide-panel-manager/tests/wdio/**/*-spec.js',
      'packages/terra-slide-panel/tests/wdio/**/*-spec.js',
      'packages/terra-theme-provider/tests/wdio/**/*-spec.js',
    ],
  },

  beforeHook() {
    // Being Terra tests are executed on an SPA, a full refresh is required
    // in order to reset the site. This ensures customProperty tests and any
    // other dom modifications are cleared before starting a test.
    global.browser.refresh();
  },
};

config.services = wdioConf.config.services.concat([ExpressDevService]);
exports.config = config;
