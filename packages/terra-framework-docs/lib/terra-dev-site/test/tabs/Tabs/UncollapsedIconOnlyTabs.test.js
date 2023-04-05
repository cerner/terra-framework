"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _terraTabs = _interopRequireDefault(require("terra-tabs"));
var _TabContentTemplate = _interopRequireDefault(require("./TabContentTemplate"));
var createTabPanes = function createTabPanes() {
  var tabPanes = [];
  for (var i = 0; i < 15; i += 1) {
    var tabPane = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
      label: "Search".concat(i),
      icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null),
      isIconOnly: true,
      key: "Search".concat(i),
      id: "search".concat(i)
    }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
      label: "Search".concat(i),
      id: "searchContent".concat(i)
    }));
    tabPanes.push(tabPane);
  }
  return tabPanes;
};
var IconOnlyTabs = function IconOnlyTabs() {
  return /*#__PURE__*/_react.default.createElement(_terraTabs.default, {
    id: "iconOnlyTabs",
    responsiveTo: "none"
  }, createTabPanes());
};
var _default = IconOnlyTabs;
exports.default = _default;