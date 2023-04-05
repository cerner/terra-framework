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
var DataStatusProvider2 = function DataStatusProvider2() {
  return /*#__PURE__*/_react.default.createElement(_EmbeddedContentProviderTestTemplate.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Embedded Application Lifecycle"), /*#__PURE__*/_react.default.createElement("p", null, "The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame."), /*#__PURE__*/_react.default.createElement("p", null, "In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):"), /*#__PURE__*/_react.default.createElement("ul", {
    id: "DataStatus-LifeCycleStatuses"
  })));
};
var _default = DataStatusProvider2;
exports.default = _default;