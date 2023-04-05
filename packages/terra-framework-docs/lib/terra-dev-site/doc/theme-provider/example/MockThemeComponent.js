"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _MockThemeComponentModule = _interopRequireDefault(require("./MockThemeComponent.module.scss"));
require("../../../theme/theme-provider-scoped-theme.scss");
var _excluded = ["children"];
var cx = _bind.default.bind(_MockThemeComponentModule.default);
var propTypes = {
  /**
   * Child node. Component to display next to the status indicator.
   */
  children: _propTypes.default.node.isRequired
};
var MockThemeComponent = function MockThemeComponent(_ref) {
  var children = _ref.children,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
    className: cx('mock-theme-component', customProps.className)
  }), children);
};
MockThemeComponent.propTypes = propTypes;
var _default = MockThemeComponent;
exports.default = _default;