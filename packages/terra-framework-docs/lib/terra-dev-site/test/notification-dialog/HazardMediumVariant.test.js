"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _NotificationDialogVariant = _interopRequireDefault(require("./NotificationDialogVariant"));
var NotificationDialogWarning = function NotificationDialogWarning() {
  return /*#__PURE__*/_react.default.createElement(_NotificationDialogVariant.default, {
    variant: "hazard-medium"
  });
};
var _default = NotificationDialogWarning;
exports.default = _default;