"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeContextShape = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var ThemeProviderContext = /*#__PURE__*/_react.default.createContext({});
var themeContextShape = _propTypes.default.shape({
  /**
   * The current application theme className.
   * The default theme is indicated as undefined.
   */
  className: _propTypes.default.string
});
exports.themeContextShape = themeContextShape;
var _default = ThemeProviderContext;
exports.default = _default;