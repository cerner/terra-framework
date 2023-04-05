"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraThemeProvider = _interopRequireDefault(require("terra-theme-provider"));
var _MockThemeComponent = _interopRequireDefault(require("./common/MockThemeComponent"));
var DefaultThemeProvider = function DefaultThemeProvider() {
  return (
    /*#__PURE__*/
    // Showing use of a default theme provider with a mock theme.
    // No theme switching in this example
    _react.default.createElement(_terraThemeProvider.default, {
      id: "themeProvider",
      themeName: "cerner-mock-theme"
    }, /*#__PURE__*/_react.default.createElement(_MockThemeComponent.default, {
      id: "themedComponent"
    }, "Theme Provider Test"))
  );
};
var _default = DefaultThemeProvider;
exports.default = _default;