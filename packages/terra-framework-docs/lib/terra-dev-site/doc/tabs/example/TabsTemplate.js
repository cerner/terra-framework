"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _IconBriefcase = _interopRequireDefault(require("terra-icon/lib/icon/IconBriefcase"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _terraTabs = _interopRequireDefault(require("terra-tabs"));
var _TabContentTemplate = _interopRequireDefault(require("./TabContentTemplate"));
var _TabExampleModule = _interopRequireDefault(require("./common/TabExample.module.scss"));
var cx = _bind.default.bind(_TabExampleModule.default);
var propTypes = {
  tabFill: _propTypes.default.bool
};
var TabsTemplate = function TabsTemplate(props) {
  var labelTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab with label",
    key: "LabelTab"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab with label"
  }));
  var iconTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab with icon",
    icon: /*#__PURE__*/_react.default.createElement(_IconBriefcase.default, null),
    key: "IconTab"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab with icon"
  }));
  var customTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    customDisplay: /*#__PURE__*/_react.default.createElement("div", {
      className: cx('custom-display')
    }, "Custom display"),
    label: "Custom display",
    key: "CustomTab"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Custom display"
  }));
  var longLabel = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    key: "longLabel"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }));
  var lastTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Last Tab",
    key: "lastTab"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Last Tab"
  }));
  var disabledTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Disabled Tab",
    icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null),
    isDisabled: true,
    key: "DisabledTab"
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraTabs.default, {
    defaultActiveKey: "LabelTab",
    tabFill: props.tabFill
  }, labelTab, iconTab, customTab, disabledTab, longLabel, lastTab));
};
TabsTemplate.propTypes = propTypes;
var _default = TabsTemplate;
exports.default = _default;