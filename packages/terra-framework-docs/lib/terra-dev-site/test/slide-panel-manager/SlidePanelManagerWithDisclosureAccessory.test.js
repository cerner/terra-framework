"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraSlidePanelManager = _interopRequireDefault(require("terra-slide-panel-manager"));
var _DisclosureComponent = _interopRequireDefault(require("./DisclosureComponent"));
var _SlidePanelManagerDefaultTestModule = _interopRequireDefault(require("./SlidePanelManagerDefault.test.module.scss"));
var cx = _bind.default.bind(_SlidePanelManagerDefaultTestModule.default);
var SlidePanelManagerWithDisclosureAccessory = function SlidePanelManagerWithDisclosureAccessory() {
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "main",
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraSlidePanelManager.default, {
    disclosureAccessory: /*#__PURE__*/_react.default.createElement("div", {
      className: cx('disclosure-accessory')
    }, "Disclosure Accessory")
  }, /*#__PURE__*/_react.default.createElement(_DisclosureComponent.default, {
    identifier: "root-component",
    disclosureType: "panel",
    renderHeaderAdapter: true
  })));
};
var _default = SlidePanelManagerWithDisclosureAccessory;
exports.default = _default;