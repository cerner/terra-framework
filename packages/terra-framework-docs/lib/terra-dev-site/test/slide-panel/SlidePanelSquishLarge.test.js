"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraSlidePanel = _interopRequireDefault(require("terra-slide-panel"));
var _SlidePanelDocCommonTestModule = _interopRequireDefault(require("./SlidePanelDocCommon.test.module.scss"));
var cx = _bind.default.bind(_SlidePanelDocCommonTestModule.default);
var SlidePanelSquishLarge = function SlidePanelSquishLarge() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper-large')
  }, /*#__PURE__*/_react.default.createElement(_terraSlidePanel.default, {
    mainContent: /*#__PURE__*/_react.default.createElement("div", {
      className: cx('main-content')
    }),
    panelContent: /*#__PURE__*/_react.default.createElement("div", {
      className: cx('panel-content')
    }),
    panelBehavior: "squish",
    panelSize: "large",
    isOpen: true,
    fill: true
  }));
};
var _default = SlidePanelSquishLarge;
exports.default = _default;