"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _EmbeddedContentProviderTestTemplate = _interopRequireDefault(require("terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate"));
var _EmbeddedContentConsumerCommonModule = _interopRequireDefault(require("./EmbeddedContentConsumerCommon.module.scss"));
var cx = _bind.default.bind(_EmbeddedContentConsumerCommonModule.default);
var Provider = function Provider() {
  return /*#__PURE__*/_react.default.createElement(_EmbeddedContentProviderTestTemplate.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Basic Content"), /*#__PURE__*/_react.default.createElement("p", null, "This example demonstrates that the embedded content consumer will display the providers web content within an iframe.")));
};
var _default = Provider;
exports.default = _default;