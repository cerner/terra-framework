"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraEmbeddedContentConsumer = _interopRequireDefault(require("terra-embedded-content-consumer"));
var _xfc = require("xfc");
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
    src: "/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-event-provider",
    options: {
      iframeAttrs: {
        title: 'Custom Event Example'
      }
    },
    eventHandlers: eventHandlers
  }));
};
var _default = CustomEventConsumer;
exports.default = _default;