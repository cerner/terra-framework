"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraModalManager = _interopRequireDefault(require("terra-modal-manager"));
var _PopupModalContainer = _interopRequireDefault(require("./PopupModalContainer"));
function ModalManagerDemo() {
  return /*#__PURE__*/_react.default.createElement(_terraModalManager.default, null, /*#__PURE__*/_react.default.createElement(_PopupModalContainer.default, null));
}
var _default = ModalManagerDemo;
exports.default = _default;