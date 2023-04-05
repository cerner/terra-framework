"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ThemeContextProvider = _interopRequireDefault(require("terra-theme-context/lib/ThemeContextProvider"));
var _ThemedComponent = _interopRequireDefault(require("./ThemedComponent"));
var ThemeContextProviderExample = function ThemeContextProviderExample() {
  return /*#__PURE__*/_react.default.createElement(_ThemeContextProvider.default, {
    theme: {
      name: 'test-theme',
      className: 'test-theme'
    }
  }, /*#__PURE__*/_react.default.createElement(_ThemedComponent.default, null));
};
var _default = ThemeContextProviderExample;
exports.default = _default;