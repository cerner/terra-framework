"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _terraAggregator = _interopRequireDefault(require("terra-aggregator"));
var _AggregatorItem = _interopRequireDefault(require("./AggregatorItem"));
var _SimpleAggregatorItem = _interopRequireDefault(require("./SimpleAggregatorItem"));
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
var ModalAggregator = function ModalAggregator(_ref) {
  var disclosureManager = _ref.disclosureManager;
  return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
    fill: true,
    header: /*#__PURE__*/_react.default.createElement(_terraActionHeader.default, {
      onClose: disclosureManager.closeDisclosure,
      onBack: disclosureManager.goBack
    })
  }, /*#__PURE__*/_react.default.createElement(_terraAggregator.default, {
    items: items,
    disclose: disclosureManager.disclose
  }));
};
ModalAggregator.propTypes = {
  disclosureManager: _terraDisclosureManager.disclosureManagerShape
};
var _default = (0, _terraDisclosureManager.withDisclosureManager)(ModalAggregator);
exports.default = _default;