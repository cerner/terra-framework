"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraModalManager = _interopRequireDefault(require("terra-modal-manager"));
var _DisclosureComponent = _interopRequireDefault(require("./DisclosureComponent"));
var _ModalManagerCommonTestModule = _interopRequireDefault(require("./ModalManagerCommon.test.module.scss"));
var cx = _bind.default.bind(_ModalManagerCommonTestModule.default);
var ModalManagerWithDisclosureAccessory = function ModalManagerWithDisclosureAccessory() {
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "main",
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraModalManager.default, {
    disclosureAccessory: /*#__PURE__*/_react.default.createElement("div", {
      className: cx('disclosure-accessory')
    }, "Disclosure Accessory")
  }, /*#__PURE__*/_react.default.createElement(_DisclosureComponent.default, {
    identifier: "root-component",
    disclosureType: "modal",
    renderHeaderAdapter: true
  })));
};
var _default = ModalManagerWithDisclosureAccessory;
exports.default = _default;