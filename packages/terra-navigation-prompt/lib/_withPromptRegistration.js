"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _PromptRegistrationContext = _interopRequireDefault(require("./PromptRegistrationContext"));
var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
};
var withPromptRegistration = function withPromptRegistration(WrappedComponent) {
  var WithPromptRegistrationComp = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_PromptRegistrationContext.default.Consumer, null, function (promptRegistration) {
      return /*#__PURE__*/_react.default.createElement(WrappedComponent, (0, _extends2.default)({}, props, {
        ref: ref,
        promptRegistration: promptRegistration
      }));
    });
  });
  WithPromptRegistrationComp.displayName = "withPromptRegistration(".concat(getDisplayName(WrappedComponent), ")");
  WithPromptRegistrationComp.WrappedComponent = WrappedComponent;
  return WithPromptRegistrationComp;
};
var _default = withPromptRegistration;
exports.default = _default;