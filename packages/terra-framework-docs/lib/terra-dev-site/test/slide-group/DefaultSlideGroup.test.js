"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraSlideGroup = _interopRequireDefault(require("terra-slide-group"));
var _SlideGroupDemoModule = _interopRequireDefault(require("../../doc/slide-group/example/SlideGroupDemo.module.scss"));
var cx = _bind.default.bind(_SlideGroupDemoModule.default);
var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "A slide group will display the last item supplied. Checking the DOM, one can see two items are present."), /*#__PURE__*/_react.default.createElement(_terraSlideGroup.default, {
    className: cx('custom-slide'),
    items: [/*#__PURE__*/_react.default.createElement("div", {
      className: "slide1",
      key: "1"
    }, "Slide 1"), /*#__PURE__*/_react.default.createElement("div", {
      className: "slide2",
      key: "2"
    }, "Slide 2")],
    id: "SlideGroup"
  }));
};
exports.default = _default;