const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultWdioConfig = require('@cerner/terra-functional-testing/lib/config/wdio.conf');

const wdioConfig = defaultWdioConfig.config;

if (process.env.npm_package_name !== 'terra-framework') {
  wdioConfig.specs = [path.join(__dirname, 'packages', process.env.npm_package_name, 'tests', 'wdio', '**', '*-spec.js')];
} else {
  wdioConfig.specs = [
    path.join(__dirname, 'packages', 'terra-abstract-modal', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-aggregator', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-application-header-layout', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-application-layout', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-application-links', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-application-menu-layout', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-application-name', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-application-navigation', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-application-utility', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-brand-footer', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-collapsible-menu-view', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-date-input', 'tests', 'wdio', '**', '*-spec.js'),
  ];
}

const travis = process.env.TRAVIS;

if (travis) {
  wdioConfig.host = 'localhost';
}

exports.config = wdioConfig;
