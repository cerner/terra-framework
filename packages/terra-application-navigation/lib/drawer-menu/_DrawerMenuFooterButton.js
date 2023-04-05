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
var _helpers = require("../utils/helpers");
var _DrawerMenuFooterButtonModule = _interopRequireDefault(require("./DrawerMenuFooterButton.module.scss"));
var _excluded = ["text", "id", "onClick"];
var cx = _bind.default.bind(_DrawerMenuFooterButtonModule.default);
var propTypes = {
  /**
   * Text display for the footer button.
   */
  text: _propTypes.default.string,
  /**
   * Text display for the footer button.
   */
  id: _propTypes.default.string,
  /**
   * Function callback for button selection.
   */
  onClick: _propTypes.default.func
};
var DrawerMenuFooterButton = function DrawerMenuFooterButton(_ref) {
  var text = _ref.text,
    id = _ref.id,
    onClick = _ref.onClick,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({}, customProps, {
    id: id || undefined,
    className: cx('drawer-menu-footer-button'),
    type: "button",
    onClick: onClick,
    onBlur: _helpers.enableFocusStyles,
    onMouseDown: _helpers.disableFocusStyles,
    "data-focus-styles-enabled": true
  }), text);
};
DrawerMenuFooterButton.propTypes = propTypes;
var _default = DrawerMenuFooterButton;
exports.default = _default;