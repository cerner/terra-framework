/* eslint-disable import/no-extraneous-dependencies */
const wdioConf = require('terra-dev-site/config/wdio/wdio.conf');

const config = {
  ...wdioConf.config,

  seleniumDocker: {
    enabled: false,
  },

  host: 'standalone-chrome',

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
      'packages/terra-brand-footer/tests/wdio/**/*-spec.js',
      'packages/terra-disclosure-manager/tests/wdio/**/*-spec.js',
    ],
    suite3: [
      'packages/terra-hookshot/tests/wdio/**/*-spec.js',
      'packages/terra-infinite-list/tests/wdio/**/*-spec.js',
      'packages/terra-layout/tests/wdio/**/*-spec.js',
      'packages/terra-modal-manager/tests/wdio/**/*-spec.js',
      'packages/terra-navigation-layout/tests/wdio/**/*-spec.js',
    ],
    suite4: [
      'packages/terra-navigation-side-menu/tests/wdio/**/*-spec.js',
      'packages/terra-popup/tests/wdio/**/*-spec.js',
      'packages/terra-slide-panel-manager/tests/wdio/**/*-spec.js',
      'packages/terra-slide-panel/tests/wdio/**/*-spec.js',
      'packages/terra-theme-provider/tests/wdio/**/*-spec.js',
    ],
  },
};

exports.config = config;
