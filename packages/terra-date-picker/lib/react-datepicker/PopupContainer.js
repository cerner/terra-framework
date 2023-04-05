"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var propTypes = {
  /**
   * Prop to determine whether or not the container height is bounded.
   */
  isHeightBounded: _propTypes.default.bool,
  /**
   * Prop to determine whether or not the container width is bounded.
   */
  isWidthBounded: _propTypes.default.bool,
  /**
   * A callback function to execute when a key is pressed.
   */
  onKeyDown: _propTypes.default.func,
  /**
   * Components to be included in the popup container.
   */
  children: _propTypes.default.node
};
var defaultProps = {
  isHeightBounded: false,
  isWidthBounded: false
};
var PopupContent = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    onKeyDown: props.onKeyDown
  }, props.children);
});
PopupContent.propTypes = propTypes;
PopupContent.defaultProps = defaultProps;
var _default = PopupContent;
exports.default = _default;