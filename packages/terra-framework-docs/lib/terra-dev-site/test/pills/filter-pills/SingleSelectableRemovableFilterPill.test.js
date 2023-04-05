"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _PillTemplate = _interopRequireDefault(require("./common/PillTemplate"));
var _FilterPillsTestCommonModule = _interopRequireDefault(require("./common/FilterPillsTestCommon.module.scss"));
var cx = _bind.default.bind(_FilterPillsTestCommonModule.default);
var SingleSelectableRemovableFilterPill = function SingleSelectableRemovableFilterPill() {
  var pillsData = [{
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar magna non erat eleifend auctor. Ut rhoncus nibh sed ante mollis, ac iaculis libero lacinia.',
    labelCategory: 'Long Label',
    id: 'terra-filter-pills-selectable-removable-pill-asthma'
  }];
  return /*#__PURE__*/_react.default.createElement(_PillTemplate.default, {
    data: pillsData,
    ariaLabel: "Example of single selectable and removable Filter Pill with long label",
    className: cx(['show-border', 'width-10'])
  });
};
var _default = SingleSelectableRemovableFilterPill;
exports.default = _default;