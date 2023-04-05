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
var _Utils = _interopRequireDefault(require("./Utils"));
var _UtilityButton = _interopRequireDefault(require("./utility/_UtilityButton"));
var _excluded = ["menuItems", "onChange", "onDisclose", "initialSelectedKey", "title", "accessory", "menuRole"];
var propTypes = {
  /**
   * The array containing the menu items to be rendered within the menu.
   */
  menuItems: _propTypes.default.arrayOf(_Utils.default.itemShape).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   * Returns `(event, { key: String, metaData: Object})`
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   * The function that discloses the menu.
   */
  onDisclose: _propTypes.default.func.isRequired,
  /**
   * The key of the top level menu page.
   */
  initialSelectedKey: _propTypes.default.string.isRequired,
  /**
   * The text to be displayed.
   */
  title: _propTypes.default.string,
  /**
   * The accessory element to be displayed next to the title.
   */
  accessory: _propTypes.default.element,
  /**
   * The role attribute to set on the menu.
   */
  menuRole: _propTypes.default.string
};
var defaultProps = {
  menuRole: 'navigation'
};
var ApplicationHeaderUtility = function ApplicationHeaderUtility(_ref) {
  var menuItems = _ref.menuItems,
    onChange = _ref.onChange,
    onDisclose = _ref.onDisclose,
    initialSelectedKey = _ref.initialSelectedKey,
    title = _ref.title,
    accessory = _ref.accessory,
    menuRole = _ref.menuRole,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_UtilityButton.default, (0, _extends2.default)({}, customProps, {
    menuItems: menuItems,
    onChange: onChange,
    onDisclose: onDisclose,
    initialSelectedKey: initialSelectedKey,
    title: title,
    accessory: accessory,
    menuRole: menuRole,
    variant: _Utils.default.VARIANTS.HEADER
  }));
};
ApplicationHeaderUtility.propTypes = propTypes;
ApplicationHeaderUtility.defaultProps = defaultProps;
var _default = ApplicationHeaderUtility;
exports.default = _default;