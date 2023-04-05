"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraDocs = require("@cerner/terra-docs");
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraPills = _interopRequireWildcard(require("@cerner/terra-pills"));
var _terraText = _interopRequireDefault(require("terra-text"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _terraToolbar = _interopRequireDefault(require("terra-toolbar"));
var _FilterPillsCommonModule = _interopRequireDefault(require("./FilterPillsCommon.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_FilterPillsCommonModule.default);
var AppliedFiltersExample = function AppliedFiltersExample() {
  var theme = _react.default.useContext(_terraThemeContext.default);
  var pillsData = [];
  for (var pillCount = 1; pillCount < 11; pillCount += 1) {
    var pillData = {
      label: "Selection ".concat(pillCount),
      labelCategory: 'Category',
      id: "terra-filter-pills-category-selection-".concat(pillCount)
    };
    pillsData.push(pillData);
  }
  var _useState = (0, _react.useState)(pillsData),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    pills = _useState2[0],
    setPills = _useState2[1];
  var isResetButtonDisabled = pills.length === pillsData.length;
  var handleOnRemove = function handleOnRemove(id, metaData) {
    var pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills((0, _toConsumableArray2.default)(pillsArray));
  };
  var appliedFiltersLabel = 'Applied Filters:';
  var appliedFiltersLabelId = 'terra-filter-pills-example-applied-filters-label';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: cx(['terra-filter-pills-doc-example-applied-filters', theme.className])
  }, /*#__PURE__*/_react.default.createElement(_terraToolbar.default, {
    className: cx('terra-filter-pills-doc-example-applied-filters-toolbar')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('toolbar-flex-container')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('toolbar-flex-item-start')
  }, /*#__PURE__*/_react.default.createElement(_terraText.default, {
    id: appliedFiltersLabelId,
    className: cx('applied-filters-label')
  }, appliedFiltersLabel)), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('toolbar-flex-item-fill')
  }, /*#__PURE__*/_react.default.createElement(_terraPills.default, {
    ariaLabel: appliedFiltersLabel,
    ariaLabelledBy: appliedFiltersLabelId,
    isCollapsible: true,
    onRemove: handleOnRemove
  }, pills.map(function (pill, index) {
    return /*#__PURE__*/_react.default.createElement(_terraPills.Pill, {
      label: pill.label,
      labelCategory: pill.labelCategory,
      id: pill.id,
      key: pill.id,
      metaData: {
        index: index
      }
    });
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('toolbar-flex-item-end')
  }, /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    text: "Clear All Filters",
    "aria-label": "Clear All Applied Filters",
    variant: "de-emphasis",
    onClick: function onClick() {
      return setPills([]);
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('applied-filters-content-panel')
  }, /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
    title: "Filtered Content Goes Here"
  }))), /*#__PURE__*/_react.default.createElement(_terraDocs.Button, {
    "aria-disabled": isResetButtonDisabled,
    className: cx(['terra-docs-example-reset-button', {
      'is-disabled': isResetButtonDisabled
    }, theme.className]),
    disabled: isResetButtonDisabled,
    onClick: function onClick() {
      return setPills(pillsData);
    }
  }, "Reset Example"));
};
AppliedFiltersExample.contextType = _terraThemeContext.default;
var _default = AppliedFiltersExample;
exports.default = _default;