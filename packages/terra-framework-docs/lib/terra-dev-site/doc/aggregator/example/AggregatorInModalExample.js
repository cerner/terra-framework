"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _terraModalManager = _interopRequireDefault(require("terra-modal-manager"));
var _ModalAggregator = _interopRequireDefault(require("../common/ModalAggregator"));
var ModalButton = (0, _terraDisclosureManager.withDisclosureManager)(function (_ref) {
  var disclosureManager = _ref.disclosureManager;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      disclosureManager.disclose({
        preferredType: 'modal',
        size: 'large',
        content: {
          key: 'MODAL_EXAMPLE',
          component: /*#__PURE__*/_react.default.createElement(_ModalAggregator.default, {
            identifier: "MODAL_EXAMPLE"
          })
        }
      });
    }
  }, "Launch Modal");
});
ModalButton.propTypes = {
  disclosureManager: _terraDisclosureManager.disclosureManagerShape
};
var SimpleAggregatorExample = function SimpleAggregatorExample() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_terraModalManager.default, null, /*#__PURE__*/_react.default.createElement(ModalButton, null)));
};
var _default = SimpleAggregatorExample;
exports.default = _default;