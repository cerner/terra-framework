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
var BasicConsumer = function BasicConsumer() {
  return /*#__PURE__*/_react.default.createElement(_terraEmbeddedContentConsumer.default, {
    src: "/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider",
    options: {
      iframeAttrs: {
        title: 'Basic content example'
      }
    }
  });
};
var _default = BasicConsumer;
exports.default = _default;