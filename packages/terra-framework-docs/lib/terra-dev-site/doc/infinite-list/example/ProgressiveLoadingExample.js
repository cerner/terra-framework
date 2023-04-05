"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraInfiniteList = _interopRequireWildcard(require("terra-infinite-list"));
var _terraDocs = require("@cerner/terra-docs");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _MyProgressiveLoadingIndicator = _interopRequireDefault(require("../common/MyProgressiveLoadingIndicator"));
var _MyExampleContainer = _interopRequireDefault(require("../common/MyExampleContainer"));
var _InfiniteListDocExampleCommonModule = _interopRequireDefault(require("./InfiniteListDocExampleCommon.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_InfiniteListDocExampleCommonModule.default);
var ProgressiveLoadingExample = function ProgressiveLoadingExample() {
  return /*#__PURE__*/_react.default.createElement(_MyExampleContainer.default, null, /*#__PURE__*/_react.default.createElement(_terraInfiniteList.default, {
    dividerStyle: "standard",
    ariaLabel: "Progressive Loading",
    progressiveLoadingIndicator: /*#__PURE__*/_react.default.createElement(_MyProgressiveLoadingIndicator.default, null)
  }, /*#__PURE__*/_react.default.createElement(_terraInfiniteList.Item, {
    key: "item-1"
  }, /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
    title: "Item 1",
    className: cx('placeholder')
  }))));
};
var _default = ProgressiveLoadingExample;
exports.default = _default;