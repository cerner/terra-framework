"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraSlidePanelManager = _interopRequireDefault(require("terra-slide-panel-manager"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraAggregator = _interopRequireDefault(require("terra-aggregator"));
var _AggregatorWithDisclosureTestModule = _interopRequireDefault(require("./AggregatorWithDisclosure.test.module.scss"));
var _AggregatorItem = _interopRequireDefault(require("./common/AggregatorItem"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_AggregatorWithDisclosureTestModule.default);
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
}]);
var flippedItems = Object.freeze([{
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
var Wrapper = (0, _terraDisclosureManager.withDisclosureManager)(function (_ref) {
  var itemsList = _ref.itemsList,
    disclosureManager = _ref.disclosureManager;
  return /*#__PURE__*/_react.default.createElement(_terraAggregator.default, {
    items: itemsList,
    disclose: disclosureManager.disclose
  });
});
function AggregatorWithDisclosure() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    flip = _useState2[0],
    setFlip = _useState2[1];
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "test-aggregator",
    role: "main",
    className: cx('aggregator-with-disclosure-test')
  }, /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "flip-button",
    text: "Flip Items",
    onClick: function onClick() {
      return setFlip(!flip);
    }
  }), /*#__PURE__*/_react.default.createElement(_terraSlidePanelManager.default, null, /*#__PURE__*/_react.default.createElement(Wrapper, {
    itemsList: flip ? flippedItems : items
  })));
}
var _default = AggregatorWithDisclosure;
exports.default = _default;