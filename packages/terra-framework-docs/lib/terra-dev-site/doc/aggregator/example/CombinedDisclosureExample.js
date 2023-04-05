"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraModalManager = _interopRequireDefault(require("terra-modal-manager"));
var _terraSlidePanelManager = _interopRequireDefault(require("terra-slide-panel-manager"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _terraAggregator = _interopRequireDefault(require("terra-aggregator"));
var _AggregatorItem = _interopRequireDefault(require("../common/AggregatorItem"));
var _SimpleAggregatorItem = _interopRequireDefault(require("../common/SimpleAggregatorItem"));
var items = Object.freeze([{
  key: 'SECTION_0',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Slide Panel Section",
    disclosureType: "panel",
    discloseOnSelect: true
  })
}, {
  key: 'SECTION_1',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Modal Section",
    disclosureType: "modal",
    discloseOnSelect: true
  })
}, {
  key: 'SECTION_2',
  component: /*#__PURE__*/_react.default.createElement(_SimpleAggregatorItem.default, {
    name: "No Disclosure Section"
  })
}]);
var Wrapper = (0, _terraDisclosureManager.withDisclosureManager)(function (_ref) {
  var disclosureManager = _ref.disclosureManager;
  return /*#__PURE__*/_react.default.createElement(_terraAggregator.default, {
    items: items,
    disclose: disclosureManager.disclose
  });
});
var CombinedDisclosureExample = function CombinedDisclosureExample() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_terraModalManager.default, null, /*#__PURE__*/_react.default.createElement(_terraSlidePanelManager.default, null, /*#__PURE__*/_react.default.createElement(Wrapper, null))));
};
var _default = CombinedDisclosureExample;
exports.default = _default;