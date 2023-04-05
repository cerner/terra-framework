"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _index = _interopRequireWildcard(require("terra-infinite-list/lib/index"));
var _InfiniteListVirtualTestModule = _interopRequireDefault(require("./InfiniteListVirtual.test.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_InfiniteListVirtualTestModule.default);
var InfiniteListUpdating = function InfiniteListUpdating() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "test-click",
    onClick: function onClick() {
      document.querySelector('#test-infinite-list').scrollTop = 1600;
    }
  }, "button"), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('infinite-list-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    id: "test-infinite-list",
    dividerStyle: "standard",
    isFinishedLoading: true,
    ariaLabel: "Virtual"
  }, /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 0")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 1")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 2")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 3")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 4")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 5")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 6")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-7"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 7")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-8"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 8")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-9"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 9")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 10")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-11"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 11")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 12")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-13"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 13")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-14"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 14")), /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: "item-15"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('item-content')
  }, "Item 15")))));
};
var _default = InfiniteListUpdating;
exports.default = _default;