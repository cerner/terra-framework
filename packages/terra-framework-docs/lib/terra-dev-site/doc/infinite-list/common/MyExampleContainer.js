"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _InfiniteListDocExampleCommonModule = _interopRequireDefault(require("../example/InfiniteListDocExampleCommon.module.scss"));
var cx = _bind.default.bind(_InfiniteListDocExampleCommonModule.default);

/* eslint-disable */
var MyExampleContainer = function MyExampleContainer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('main-content')
  }, children);
};
var _default = MyExampleContainer;
exports.default = _default;