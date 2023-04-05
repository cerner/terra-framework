"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _terraAggregator = _interopRequireDefault(require("terra-aggregator"));
var propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string,
    component: _propTypes.default.element
  }))
};
var AggregatorContainer = (0, _terraDisclosureManager.withDisclosureManager)(function (_ref) {
  var items = _ref.items,
    disclosureManager = _ref.disclosureManager;
  return /*#__PURE__*/_react.default.createElement(_terraAggregator.default, {
    items: items,
    disclose: disclosureManager.disclose
  });
});
AggregatorContainer.propTypes = propTypes;
var _default = AggregatorContainer;
exports.default = _default;