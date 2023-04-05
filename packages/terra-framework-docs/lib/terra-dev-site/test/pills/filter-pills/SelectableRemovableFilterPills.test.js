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
var SelectableRemovableFilterPills = function SelectableRemovableFilterPills() {
  return /*#__PURE__*/_react.default.createElement(_PillTemplate.default, {
    data: _PillData.default.slice(0, 3),
    ariaLabel: "Example of selectable and removable Filter Pills",
    className: cx(['show-border', 'width-10'])
  });
};
var _default = SelectableRemovableFilterPills;
exports.default = _default;