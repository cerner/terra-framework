"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraAggregator = _interopRequireDefault(require("terra-aggregator"));
var _AggregatorItem = _interopRequireDefault(require("./common/AggregatorItem"));
var items = Object.freeze([{
  key: 'SECTION_0',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 0",
    targetId: "section0"
  })
}, {
  key: 'SECTION_1',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 1",
    targetId: "section1"
  })
}, {
  key: 'SECTION_2',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 2",
    targetId: "section2"
  })
}, {
  key: 'SECTION_3',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 3",
    targetId: "section3"
  })
}]);
var AggregatorStandalone = function AggregatorStandalone() {
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "test-aggregator",
    role: "main"
  }, /*#__PURE__*/_react.default.createElement(_terraAggregator.default, {
    items: items
  }));
};
var _default = AggregatorStandalone;
exports.default = _default;