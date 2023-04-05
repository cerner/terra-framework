"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _IconTrash = _interopRequireDefault(require("terra-icon/lib/icon/IconTrash"));
var _IconFolder = _interopRequireDefault(require("terra-icon/lib/icon/IconFolder"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _IconPrinter = _interopRequireDefault(require("terra-icon/lib/icon/IconPrinter"));
var _IconAllergy = _interopRequireDefault(require("terra-icon/lib/icon/IconAllergy"));
var _IconPadlock = _interopRequireDefault(require("terra-icon/lib/icon/IconPadlock"));
var _IconFeatured = _interopRequireDefault(require("terra-icon/lib/icon/IconFeatured"));
var testLinksWithIconsConfig = [{
  path: '/test1',
  text: 'test 1',
  icon: /*#__PURE__*/_react.default.createElement(_IconTrash.default, null)
}, {
  path: '/test2',
  text: 'test 2',
  icon: /*#__PURE__*/_react.default.createElement(_IconFolder.default, null)
}, {
  path: '/test3',
  text: 'test 3',
  icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null)
}, {
  path: '/test4',
  text: 'test 4',
  icon: /*#__PURE__*/_react.default.createElement(_IconPrinter.default, null)
}, {
  path: '/test5',
  text: 'test 5',
  icon: /*#__PURE__*/_react.default.createElement(_IconAllergy.default, null)
}, {
  path: '/test6',
  text: 'test 6',
  icon: /*#__PURE__*/_react.default.createElement(_IconPadlock.default, null)
}, {
  path: '/test7',
  text: 'test 7',
  icon: /*#__PURE__*/_react.default.createElement(_IconFeatured.default, null)
}];
var _default = testLinksWithIconsConfig;
exports.default = _default;