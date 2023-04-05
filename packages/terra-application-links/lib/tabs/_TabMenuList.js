"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _ApplicationTabsModule = _interopRequireDefault(require("./ApplicationTabs.module.scss"));
var _excluded = ["title", "children", "isHeightBounded", "isWidthBounded", "refCallback"];
var cx = _bind.default.bind(_ApplicationTabsModule.default);
var propTypes = {
  /**
   * Title of the tab menu list.
   */
  title: _propTypes.default.string,
  /**
   * The child tabs to be placed in the menu.
   */
  children: _propTypes.default.node,
  /**
   * Prop from popup, determines if the menu height is bound by the screen.
   */
  isHeightBounded: _propTypes.default.bool,
  /**
   * Prop from popup, determines if the menu width is bound by the screen.
   */
  isWidthBounded: _propTypes.default.bool,
  /**
   * Ref callback used by the popup for do positioning.
   */
  refCallback: _propTypes.default.func
};
var TabMenuList = function TabMenuList(_ref) {
  var title = _ref.title,
    children = _ref.children,
    isHeightBounded = _ref.isHeightBounded,
    isWidthBounded = _ref.isWidthBounded,
    refCallback = _ref.refCallback,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var listClass = (0, _classnames.default)(cx('tab-menu-list', {
    'height-bounded': isHeightBounded
  }, {
    'width-bounded': isWidthBounded
  }, theme.className));

  /* eslint-disable jsx-a11y/no-redundant-roles */
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, customProps, {
    "aria-label": title,
    "data-application-tab-menu-content": true,
    className: listClass,
    role: "list",
    ref: refCallback
  }), children);
};
TabMenuList.propTypes = propTypes;
var _default = TabMenuList;
exports.default = _default;