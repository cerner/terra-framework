"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _NotificationDialogVariant = _interopRequireDefault(require("./NotificationDialogVariant"));
var NotificationDialogError = function NotificationDialogError() {
  return /*#__PURE__*/_react.default.createElement(_NotificationDialogVariant.default, {
    variant: "hazard-high"
  });
};
var _default = NotificationDialogError;
exports.default = _default;