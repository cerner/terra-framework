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
var applicationLinkConfig = [{
  path: '/item1',
  text: 'Item 1',
  icon: /*#__PURE__*/_react.default.createElement(_IconTrash.default, null)
}, {
  path: '/item23',
  text: 'Item 23',
  icon: /*#__PURE__*/_react.default.createElement(_IconFolder.default, null)
}, {
  path: '/item45',
  text: 'Item 45',
  icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null)
}, {
  path: '/item67',
  text: 'Very very very very long long item 67',
  icon: /*#__PURE__*/_react.default.createElement(_IconPrinter.default, null)
}, {
  path: '/item89',
  text: 'Item 89',
  icon: /*#__PURE__*/_react.default.createElement(_IconAllergy.default, null)
}, {
  path: '/item0',
  text: 'Item 0',
  icon: /*#__PURE__*/_react.default.createElement(_IconPadlock.default, null)
}, {
  path: '/item11',
  text: 'Item 11',
  icon: /*#__PURE__*/_react.default.createElement(_IconFeatured.default, null)
}, {
  path: '/item22',
  text: 'Super super super super very very long long item 22',
  icon: /*#__PURE__*/_react.default.createElement(_IconTrash.default, null)
}, {
  path: '/item3',
  text: 'Item 3',
  icon: /*#__PURE__*/_react.default.createElement(_IconFolder.default, null)
}, {
  path: '/item444',
  text: 'Item 444',
  icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null)
}, {
  path: '/item55',
  text: 'Item 55',
  icon: /*#__PURE__*/_react.default.createElement(_IconPrinter.default, null)
}, {
  path: '/item6666',
  text: 'Item 6666',
  icon: /*#__PURE__*/_react.default.createElement(_IconAllergy.default, null)
}];
var _default = applicationLinkConfig;
exports.default = _default;