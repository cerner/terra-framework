"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _IconPill = _interopRequireDefault(require("terra-icon/lib/icon/IconPill"));
var _IconVisualization = _interopRequireDefault(require("terra-icon/lib/icon/IconVisualization"));
var _IconLightbulb = _interopRequireDefault(require("terra-icon/lib/icon/IconLightbulb"));
var _ApplicationNavigation = _interopRequireDefault(require("../../../ApplicationNavigation"));
var extensionItems = [{
  icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null),
  key: 'item-a',
  text: 'Item A',
  metaData: {
    test: 'a'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconPill.default, null),
  key: 'item-b',
  text: 'Item B',
  metaData: {
    test: 'b'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconVisualization.default, null),
  key: 'item-c',
  text: 'Item C',
  metaData: {
    test: 'c'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconLightbulb.default, null),
  key: 'item-d',
  text: 'Item D',
  metaData: {
    test: 'd'
  }
}];

/* eslint-disable no-alert */
var handleItemSelection = function handleItemSelection(key, metaData) {
  alert("itemKey: ".concat(key, ", metaData: ").concat(metaData.test));
};
/* eslint-enable no-alert */

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
var ExtensionsTest = function ExtensionsTest() {
  return /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    extensionItems: extensionItems,
    onSelectExtensionItem: handleItemSelection
  });
};
var _default = ExtensionsTest;
exports.default = _default;