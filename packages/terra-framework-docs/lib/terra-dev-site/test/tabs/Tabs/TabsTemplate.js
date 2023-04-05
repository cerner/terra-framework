"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraTabs = _interopRequireDefault(require("terra-tabs"));
var _TabContentTemplate = _interopRequireDefault(require("./TabContentTemplate"));
var _TabsTemplateModule = _interopRequireDefault(require("./TabsTemplate.module.scss"));
var cx = _bind.default.bind(_TabsTemplateModule.default);
var propTypes = {
  fill: _propTypes.default.bool,
  tabFill: _propTypes.default.bool,
  id: _propTypes.default.string,
  containerClassName: _propTypes.default.string,
  responsiveTo: _propTypes.default.string
};
var defaultProps = {
  containerClassName: 'content-wrapper-default',
  responsiveTo: 'parent'
};
var TabsTemplate = function TabsTemplate(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx(props.containerClassName),
    id: "tabs-container"
  }, /*#__PURE__*/_react.default.createElement(_terraTabs.default, {
    tabFill: props.tabFill,
    fill: props.fill,
    id: props.id,
    responsiveTo: props.responsiveTo
  }, /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab 1",
    key: "Tab1",
    id: "tab1"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab 1",
    id: "tab1Content"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab 2",
    key: "Tab2",
    id: "tab2"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab 2",
    id: "tab2Content"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Disabled Tab",
    key: "disabled",
    id: "disabled",
    isDisabled: true
  }), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab 4",
    key: "Tab4",
    id: "tab4"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab 4",
    id: "tab4Content"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab 5",
    key: "Tab5",
    id: "tab5"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab 5",
    id: "tab5Content"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab 6",
    key: "Tab6",
    id: "tab6"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab 6",
    id: "tab6Content"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab 7",
    key: "Tab7",
    id: "tab7"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab 7",
    id: "tab7Content"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab 8 with longer text that should truncate",
    key: "Tab8",
    id: "tab8"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab 8",
    id: "tab8Content"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab 9",
    key: "Tab9",
    id: "tab9"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab 9",
    id: "tab9Content"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab 10",
    key: "Tab10",
    id: "tab10"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab 10",
    id: "tab10Content"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab 11",
    key: "Tab11",
    id: "tab11"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab 11",
    id: "tab11Content"
  })), /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Tab 12",
    key: "Tab12",
    id: "tab12"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Tab 12",
    id: "tab12Content"
  }))));
};
TabsTemplate.propTypes = propTypes;
TabsTemplate.defaultProps = defaultProps;
var _default = TabsTemplate;
exports.default = _default;