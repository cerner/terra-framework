"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _PillTemplate = _interopRequireDefault(require("./common/PillTemplate"));
var _PillData = _interopRequireDefault(require("./common/PillData"));
var _FilterPillsTestCommonModule = _interopRequireDefault(require("./common/FilterPillsTestCommon.module.scss"));
var cx = _bind.default.bind(_FilterPillsTestCommonModule.default);
var SingleRemovableFilterPill = function SingleRemovableFilterPill() {
  return /*#__PURE__*/_react.default.createElement(_PillTemplate.default, {
    data: _PillData.default.slice(0, 1),
    ariaLabel: "Example of Single Removable Filter Pill",
    className: cx(['show-border'])
  });
};
var _default = SingleRemovableFilterPill;
exports.default = _default;