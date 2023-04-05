"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraSectionHeader = _interopRequireDefault(require("terra-section-header"));
var _excluded = ["name", "aggregatorDelegate"];
var propTypes = {
  aggregatorDelegate: _propTypes.default.object,
  name: _propTypes.default.string
};
var SimpleAggregatorItem = function SimpleAggregatorItem(_ref) {
  var name = _ref.name,
    aggregatorDelegate = _ref.aggregatorDelegate,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, (0, _extends2.default)({}, customProps, {
    header: /*#__PURE__*/_react.default.createElement(_terraSectionHeader.default, {
      title: name
    })
  }), aggregatorDelegate.hasFocus ? /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      aggregatorDelegate.releaseFocus();
    }
  }, "Release Focus") : /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      aggregatorDelegate.requestFocus();
    }
  }, "Get Focus"), aggregatorDelegate.hasFocus ? /*#__PURE__*/_react.default.createElement("h4", null, "Section has focus!") : null);
};
SimpleAggregatorItem.propTypes = propTypes;
var _default = SimpleAggregatorItem;
exports.default = _default;