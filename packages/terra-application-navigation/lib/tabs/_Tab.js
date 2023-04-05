"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _TabCount = _interopRequireDefault(require("./_TabCount"));
var _helpers = require("../utils/helpers");
var _TabModule = _interopRequireDefault(require("./Tab.module.scss"));
var cx = _bind.default.bind(_TabModule.default);
var propTypes = {
  /**
   * The display text for the tab.
   */
  text: _propTypes.default.string.isRequired,
  /**
   * The id for the tab.
   */
  id: _propTypes.default.string,
  /**
   * The selection callback for the tab.
   */
  onTabSelect: _propTypes.default.func,
  /**
   * The number of notifications to be displayed for the tab.
   */
  notificationCount: _propTypes.default.number,
  /**
   * Boolean indicating whether or not the Tab should render as active.
   */
  isActive: _propTypes.default.bool,
  /**
   * Boolean indicating whether or not the tab is a placeholder for height calculation.
   */
  isPlaceholder: _propTypes.default.bool,
  /**
   * Ref object that will be updated with a reference to the Tab's root element.
   */
  tabRef: _propTypes.default.shape({
    current: _propTypes.default.instanceOf(Element)
  }),
  /**
   * Boolean indicating whether or not the Tab should account for count spacing.
   */
  hasCount: _propTypes.default.bool,
  /**
   * Render prop for dynamic tab contents.
   */
  render: _propTypes.default.func
};
var Tab = function Tab(_ref) {
  var id = _ref.id,
    text = _ref.text,
    hasCount = _ref.hasCount,
    isActive = _ref.isActive,
    isPlaceholder = _ref.isPlaceholder,
    tabRef = _ref.tabRef,
    render = _ref.render,
    notificationCount = _ref.notificationCount,
    onTabSelect = _ref.onTabSelect;
  function renderTabContent() {
    if (render) {
      return render({
        text: text,
        hasCount: hasCount,
        isActive: isActive,
        notificationCount: notificationCount
      });
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      id: id,
      "aria-hidden": true,
      className: cx('tab-inner')
    }, /*#__PURE__*/_react.default.createElement("span", {
      "aria-hidden": true,
      className: cx('tab-label')
    }, text), notificationCount > 0 && /*#__PURE__*/_react.default.createElement("span", {
      className: cx('tab-count')
    }, /*#__PURE__*/_react.default.createElement(_TabCount.default, {
      value: notificationCount
    })));
  }
  var validatedValue = notificationCount;
  if (validatedValue > 99) {
    validatedValue = '99+';
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    type: "button",
    role: "link",
    tabIndex: "0",
    className: cx('tab', {
      'is-disabled': isActive
    }, {
      'is-placeholder': !render && isPlaceholder
    }, {
      'has-count': !render && hasCount
    }),
    onClick: !isActive ? onTabSelect : undefined,
    onKeyDown: !isActive ? (0, _helpers.generateKeyDownSelection)(onTabSelect) : undefined,
    onBlur: _helpers.enableFocusStyles,
    onMouseDown: _helpers.disableFocusStyles,
    ref: tabRef,
    "aria-current": isActive,
    "aria-hidden": isPlaceholder,
    "data-focus-styles-enabled": true,
    "aria-label": validatedValue ? "".concat(text, " ").concat(validatedValue) : text
  }, renderTabContent());
};
Tab.propTypes = propTypes;
var _default = Tab;
exports.default = _default;