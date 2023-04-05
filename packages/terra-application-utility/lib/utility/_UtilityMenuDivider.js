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
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _UtilityMenuDividerModule = _interopRequireDefault(require("./_UtilityMenuDivider.module.scss"));
var _excluded = ["isTop"];
var cx = _bind.default.bind(_UtilityMenuDividerModule.default);
var propTypes = {
  /**
   * If the divider shall be placed before the header
   */
  isTop: _propTypes.default.bool
};
var UtilityMenuDivider = function UtilityMenuDivider(_ref) {
  var isTop = _ref.isTop,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var dividerClassNames = (0, _classnames.default)(cx('divider', {
    'is-bottom': !isTop
  }, {
    'is-top': isTop
  }, theme.className), customProps.className);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
    className: dividerClassNames,
    role: "separator"
  }));
};
UtilityMenuDivider.propTypes = propTypes;
var _default = UtilityMenuDivider;
exports.default = _default;