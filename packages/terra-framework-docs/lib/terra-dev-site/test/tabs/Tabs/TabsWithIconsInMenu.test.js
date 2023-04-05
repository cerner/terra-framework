"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraTabs = _interopRequireDefault(require("terra-tabs"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _IconRequired = _interopRequireDefault(require("terra-icon/lib/icon/IconRequired"));
var _IconAlert = _interopRequireDefault(require("terra-icon/lib/icon/IconAlert"));
var _IconInformation = _interopRequireDefault(require("terra-icon/lib/icon/IconInformation"));
var _IconWarning = _interopRequireDefault(require("terra-icon/lib/icon/IconWarning"));
var _IconError = _interopRequireDefault(require("terra-icon/lib/icon/IconError"));
var _TabContentTemplate = _interopRequireDefault(require("./TabContentTemplate"));
/* eslint-disable react/forbid-component-props */

var TabsWithIconsInMenu = function TabsWithIconsInMenu() {
  return /*#__PURE__*/_react.default.createElement(_terraTabs.default, {
    id: "tabsWithIconsInMenu",
    responsiveTo: "parent"
  }, /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    id: "search",
    label: "Search",
    icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null),
    key: "Search"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Search Icon"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    id: "required",
    label: "Required",
    icon: /*#__PURE__*/_react.default.createElement(_IconRequired.default, {
      style: {
        color: 'red'
      }
    }),
    isIconOnly: true,
    key: "Required"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Required Icon, Icon Only"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    id: "alert",
    label: "Alert",
    icon: /*#__PURE__*/_react.default.createElement(_IconAlert.default, null),
    showIcon: true,
    key: "Alert"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Alert Icon, Show in Tab and Menu"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    id: "warning",
    label: "Warning",
    icon: /*#__PURE__*/_react.default.createElement(_IconWarning.default, null),
    isIconOnly: true,
    showIcon: true,
    key: "Warning"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Warning Icon, Icon Only, Show in Tab and Menu"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    id: "error",
    label: "Error",
    icon: /*#__PURE__*/_react.default.createElement(_IconError.default, null),
    showIcon: true,
    key: "Error"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Error Icon, Show in Tab and Menu"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    id: "information",
    label: "Information",
    isDisabled: true,
    icon: /*#__PURE__*/_react.default.createElement(_IconInformation.default, null),
    showIcon: true,
    key: "Information"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Information Icon, Disabled, Show in Tab and Menu"
  })));
};
var _default = TabsWithIconsInMenu;
exports.default = _default;