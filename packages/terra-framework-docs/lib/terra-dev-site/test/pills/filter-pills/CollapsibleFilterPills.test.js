"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _FilterPillsTestCommonModule = _interopRequireDefault(require("./common/FilterPillsTestCommon.module.scss"));
var _PillTemplate = _interopRequireDefault(require("./common/PillTemplate"));
var _PillData = _interopRequireDefault(require("./common/PillData"));
var cx = _bind.default.bind(_FilterPillsTestCommonModule.default);
var CollapsibleFilterPills = function CollapsibleFilterPills() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PillTemplate.default, {
    data: _PillData.default,
    ariaLabel: "Example of collapsed filter pills",
    isCollapsible: true,
    className: cx(['container', 'show-border', 'width-50'])
  }));
};
var _default = CollapsibleFilterPills;
exports.default = _default;