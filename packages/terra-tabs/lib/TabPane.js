"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));
var _excluded = ["icon", "label", "customDisplay", "children", "isDisabled", "isIconOnly", "isActive", "showIcon"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var cx = _bind.default.bind(_TabsModule.default);
var propTypes = {
  /**
   * Icon to be displayed on the tab.
   */
  icon: _propTypes.default.element,
  /**
   * Text to be displayed on the tab.
   */
  label: _propTypes.default.string.isRequired,
  /**
   * A custom display for the tab. Component will fallback to label text when collapsed into the menu.
   */
  customDisplay: _propTypes.default.node,
  /**
   * Content to be displayed when the tab is selected.
   */
  children: _propTypes.default.node,
  /**
   * Indicates if the pane should be disabled.
   */
  isDisabled: _propTypes.default.bool,
  /**
   * Indicates if the pane label should only display the icon. When tab collapses into menu the label text will be used.
   */
  isIconOnly: _propTypes.default.bool,
  /**
   * If enabled, this prop will apply the `aria-selected` style to the pane.
   */
  isActive: _propTypes.default.bool,
  /**
   * If enabled, this prop will show the icon on the tab and also in the menu if pane is collapsed.
   */
  showIcon: _propTypes.default.bool
};
var defaultProps = {
  isDisabled: false,
  isIconOnly: false,
  isActive: false,
  showIcon: false
};
var TabPane = function TabPane(_ref) {
  var icon = _ref.icon,
    label = _ref.label,
    customDisplay = _ref.customDisplay,
    children = _ref.children,
    isDisabled = _ref.isDisabled,
    isIconOnly = _ref.isIconOnly,
    isActive = _ref.isActive,
    showIcon = _ref.showIcon,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var attributes = _objectSpread({}, customProps);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var paneClassNames = (0, _classnames.default)(cx('tab', {
    'is-disabled': isDisabled
  }, {
    'is-icon-only': isIconOnly
  }, {
    'is-text-only': !icon
  }, theme.className), attributes.className);
  if (isIconOnly) {
    attributes['aria-label'] = label;
  }
  attributes['aria-selected'] = isActive;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, attributes, {
    role: "tab",
    className: paneClassNames
  }), customDisplay, customDisplay ? null : icon, customDisplay || isIconOnly ? null : /*#__PURE__*/_react.default.createElement("span", {
    className: cx('label')
  }, label));
};
TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;
var _default = TabPane;
exports.default = _default;