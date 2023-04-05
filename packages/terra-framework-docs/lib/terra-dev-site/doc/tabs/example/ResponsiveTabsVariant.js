"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ResponsiveTabsVariantWrapper = _interopRequireDefault(require("./ResponsiveTabsVariantWrapper"));
var _TabsTemplate = _interopRequireDefault(require("./TabsTemplate"));
var _IconOnlyTabs = _interopRequireDefault(require("./IconOnlyTabs"));
var propTypes = {
  renderIconTabs: _propTypes.default.bool
};
var TabsColorVariants = function TabsColorVariants(_ref) {
  var props = (0, _extends2.default)({}, ((0, _objectDestructuringEmpty2.default)(_ref), _ref));
  if (props.renderIconTabs) {
    return /*#__PURE__*/_react.default.createElement(_IconOnlyTabs.default, props);
  }
  return /*#__PURE__*/_react.default.createElement(_TabsTemplate.default, props);
};
TabsColorVariants.propTypes = propTypes;
var _default = (0, _ResponsiveTabsVariantWrapper.default)(TabsColorVariants);
exports.default = _default;