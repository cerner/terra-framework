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
var _PopupArrowModule = _interopRequireDefault(require("./PopupArrow.module.scss"));
var _excluded = ["refCallback"];
var cx = _bind.default.bind(_PopupArrowModule.default);
/**
 * Half the base of the arrow, to use for arrow positioning offset.
 */
var ARROW_OFFSET = 11;
/**
 * Directional attribute to be applied by a presenting component.
 */
var ARROW_ATTR = 'data-align-arrow';
var propTypes = {
  /**
   * The function returning the frame html reference.
   */
  refCallback: _propTypes.default.func
};
var PopupArrow = function PopupArrow(props) {
  var refCallback = props.refCallback,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var arrowClass = (0, _classnames.default)(cx('popup-arrow', theme.className), customProps.className);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
    className: arrowClass,
    ref: refCallback
  }));
};
PopupArrow.propTypes = propTypes;
PopupArrow.Opts = {
  arrowSize: ARROW_OFFSET,
  positionAttr: ARROW_ATTR
};
var _default = PopupArrow;
exports.default = _default;