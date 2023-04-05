"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var DisclosureManagerHeaderAdapterContext = /*#__PURE__*/_react.default.createContext({
  register: function register() {
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn('DisclosureManagerHeaderAdapter was mounted without the appropriate context present. If this is unexpected, please validate that the terra-disclosure-manager package is not being duplicated in the bundle.');
      /* eslint-enable no-console */
    }
  }
});
var _default = DisclosureManagerHeaderAdapterContext;
exports.default = _default;