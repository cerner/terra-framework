"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _xfc = require("xfc");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraEmbeddedContentConsumer = _interopRequireDefault(require("terra-embedded-content-consumer"));
var _ConsumerModule = _interopRequireDefault(require("./Consumer.module.scss"));
var cx = _bind.default.bind(_ConsumerModule.default);
_xfc.Consumer.init();
var eventHandlers = [{
  key: 'EventA',
  handler: function handler() {
    document.getElementById('CustomEvent').style.border = 'thick dashed #0000FF';
  }
}];
var CustomEventConsumer = function CustomEventConsumer() {
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "CustomEvent"
  }, /*#__PURE__*/_react.default.createElement(_terraEmbeddedContentConsumer.default, {
    className: cx('iframe'),
    src: "/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-event-provider",
    eventHandlers: eventHandlers,
    options: {
      iframeAttrs: {
        title: 'Basic Consumer'
      }
    }
  }));
};
var _default = CustomEventConsumer;
exports.default = _default;