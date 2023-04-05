"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promptRegistrationContextValueShape = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
/**
 * The default value for the PromptRegistrationContext includes a flag to indicate that the value is the default value,
 * which can be used to detect whether any matching context Providers are rendered. Also included are no-op implementations
 * for register/unregisterPrompt to minimize branching logic in the context consumers.
 */
var _default = /*#__PURE__*/_react.default.createContext({
  isDefaultContextValue: true,
  registerPrompt: function registerPrompt() {},
  unregisterPrompt: function unregisterPrompt() {}
});
exports.default = _default;
var promptRegistrationContextValueShape = _propTypes.default.shape({
  isDefaultContextValue: _propTypes.default.bool,
  registerPrompt: _propTypes.default.func.isRequired,
  unregisterPrompt: _propTypes.default.func.isRequired
});
exports.promptRegistrationContextValueShape = promptRegistrationContextValueShape;