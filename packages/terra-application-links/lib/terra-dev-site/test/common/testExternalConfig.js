"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var testLinkConfig = [{
  path: '/test1',
  text: 'test 1'
}, {
  id: 'test-button',
  path: '/test2',
  text: 'External Link Example',
  externalLink: {
    path: 'https://engineering.cerner.com/terra-ui/#/home/terra-ui/index',
    target: '_self'
  }
}];
var _default = testLinkConfig;
exports.default = _default;