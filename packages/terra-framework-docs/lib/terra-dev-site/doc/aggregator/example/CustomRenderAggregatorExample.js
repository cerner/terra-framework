"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraGrid = _interopRequireDefault(require("terra-grid"));
var _terraAggregator = _interopRequireDefault(require("terra-aggregator"));
var _AggregatorItem = _interopRequireDefault(require("../common/AggregatorItem"));
var items = Object.freeze([{
  key: 'SECTION_0',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 0"
  })
}, {
  key: 'SECTION_1',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 1"
  })
}, {
  key: 'SECTION_2',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 2"
  })
}, {
  key: 'SECTION_3',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 3"
  })
}]);
var CustomRenderAggregatorExample = function CustomRenderAggregatorExample() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_terraAggregator.default, {
    items: items,
    render: function render(renderData) {
      return /*#__PURE__*/_react.default.createElement(_terraGrid.default, null, /*#__PURE__*/_react.default.createElement(_terraGrid.default.Row, null, /*#__PURE__*/_react.default.createElement(_terraGrid.default.Column, {
        tiny: 6
      }, renderData.items[0]), /*#__PURE__*/_react.default.createElement(_terraGrid.default.Column, {
        tiny: 6
      }, renderData.items[1])), /*#__PURE__*/_react.default.createElement(_terraGrid.default.Row, null, /*#__PURE__*/_react.default.createElement(_terraGrid.default.Column, {
        tiny: 6
      }, renderData.items[2]), /*#__PURE__*/_react.default.createElement(_terraGrid.default.Column, {
        tiny: 6
      }, renderData.items[3])));
    }
  }));
};
var _default = CustomRenderAggregatorExample;
exports.default = _default;