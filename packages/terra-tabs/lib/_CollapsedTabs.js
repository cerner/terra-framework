"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _TabMenu = _interopRequireDefault(require("./_TabMenu"));
var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));
var cx = _bind.default.bind(_TabsModule.default);
var propTypes = {
  /**
   * Key of the current active tab.
   */
  activeKey: _propTypes.default.string,
  /**
   * Index of the current active tab.
   */
  activeIndex: _propTypes.default.number.isRequired,
  /**
   * Tabs to display in menu.
   */
  children: _propTypes.default.node,
  /**
   * Callback function when label truncation state has changed.
   * Parameters: 1. Bool indicating if any of the tab labels have been truncated.
   */
  onTruncationChange: _propTypes.default.func
};
var CollapsedTabs = function CollapsedTabs(props) {
  props.onTruncationChange(false);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var selectedTab = props.children[props.activeIndex];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('collapsed-tabs-container', theme.className)
  }, /*#__PURE__*/_react.default.createElement(_TabMenu.default, {
    activeKey: props.activeKey,
    selectedTab: selectedTab
  }, props.children));
};
CollapsedTabs.propTypes = propTypes;
var _default = CollapsedTabs;
exports.default = _default;