"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraModalManager = _interopRequireDefault(require("terra-modal-manager"));
var _terraSlidePanelManager = _interopRequireDefault(require("terra-slide-panel-manager"));
var _terraAggregator = _interopRequireDefault(require("terra-aggregator"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _AggregatorItem = _interopRequireDefault(require("../common/AggregatorItem"));
var Wrapper = (0, _terraDisclosureManager.withDisclosureManager)(function (_ref) {
  var items = _ref.items,
    disclosureManager = _ref.disclosureManager;
  return /*#__PURE__*/_react.default.createElement(_terraAggregator.default, {
    items: items,
    disclose: disclosureManager.disclose
  });
});
var ModalManagerBypass = (0, _terraDisclosureManager.withDisclosureManager)(function (_ref2) {
  var disclosureManager = _ref2.disclosureManager;
  var items = Object.freeze([{
    key: 'SECTION_0',
    component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
      name: "Section 0",
      disclosureType: "panel",
      key: "SECTION_0",
      customDisclose: disclosureManager.disclose,
      discloseOnSelect: true
    })
  }, {
    key: 'SECTION_1',
    component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
      name: "Section 1",
      disclosureType: "panel",
      key: "SECTION_1",
      customDisclose: disclosureManager.disclose,
      discloseOnSelect: true
    })
  }]);
  return /*#__PURE__*/_react.default.createElement(_terraSlidePanelManager.default, null, /*#__PURE__*/_react.default.createElement(Wrapper, {
    items: items
  }));
});
var ModalBypassExample = function ModalBypassExample() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "In this example, the Aggregator items are provided with the ModalManager disclosure function directly. Calling that function does not require Aggregator focus and will bypass the Aggregator entirely. This can be useful for simple Modal workflows that should not impact Aggregator state."), /*#__PURE__*/_react.default.createElement(_terraModalManager.default, null, /*#__PURE__*/_react.default.createElement(ModalManagerBypass, null)));
};
var _default = ModalBypassExample;
exports.default = _default;