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
var _WhitespaceModule = _interopRequireDefault(require("./Whitespace.module.scss"));
var _excluded = ["newline"];
var cx = _bind.default.bind(_WhitespaceModule.default);
var propTypes = {
  /**
   * Sets the height of a newline spacer, equivalent to number of lines based on lineheight, not fontsize.
   * One of `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, default is `1`.
   */
  newline: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8])
};
var defaultProps = {
  newline: 1
};
var Whitespace = function Whitespace(_ref) {
  var newline = _ref.newline,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var WhitespaceClassNames = (0, _classnames.default)(cx('whitespace', "newline-".concat(newline)), customProps.className);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
    className: WhitespaceClassNames,
    "aria-hidden": "true"
  }));
};
Whitespace.propTypes = propTypes;
Whitespace.defaultProps = defaultProps;
var _default = Whitespace;
exports.default = _default;