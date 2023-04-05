"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraInfiniteList = _interopRequireDefault(require("terra-infinite-list"));
var _MyInitialLoadingIndicator = _interopRequireDefault(require("../common/MyInitialLoadingIndicator"));
var _MyExampleContainer = _interopRequireDefault(require("../common/MyExampleContainer"));
var InitialLoadingExample = function InitialLoadingExample() {
  return /*#__PURE__*/_react.default.createElement(_MyExampleContainer.default, null, /*#__PURE__*/_react.default.createElement(_terraInfiniteList.default, {
    dividerStyle: "standard",
    ariaLabel: "Initial Loading",
    initialLoadingIndicator: /*#__PURE__*/_react.default.createElement(_MyInitialLoadingIndicator.default, null)
  }));
};
var _default = InitialLoadingExample;
exports.default = _default;