"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _NotificationDialogVariant = _interopRequireDefault(require("./NotificationDialogVariant"));
var _CustomVariantModule = _interopRequireDefault(require("./CustomVariant.module.scss"));
var cx = _bind.default.bind(_CustomVariantModule.default);
var NotificationDialogError = function NotificationDialogError() {
  return /*#__PURE__*/_react.default.createElement(_NotificationDialogVariant.default, {
    variant: "custom",
    custom: {
      iconClassName: cx('custom-notification-dialog-icon'),
      signalWord: 'Custom Signal Word'
    }
  });
};
var _default = NotificationDialogError;
exports.default = _default;