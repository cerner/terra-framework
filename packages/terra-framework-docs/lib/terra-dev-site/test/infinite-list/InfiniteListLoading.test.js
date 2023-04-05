"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _index = _interopRequireDefault(require("terra-infinite-list/lib/index"));
var _InfiniteListTestCommonModule = _interopRequireDefault(require("./InfiniteListTestCommon.module.scss"));
var cx = _bind.default.bind(_InfiniteListTestCommonModule.default);
var InfiniteListLoading = function InfiniteListLoading() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    id: "test-infinite-list",
    isFinishedLoading: false,
    ariaLabel: "Loading",
    initialLoadingIndicator: /*#__PURE__*/_react.default.createElement("div", {
      className: cx('content-wrapper')
    }, "Loading")
  });
};
var _default = InfiniteListLoading;
exports.default = _default;