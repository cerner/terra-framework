"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraApplicationUtility = require("terra-application-utility");
/**
 * Shape for the `layoutConfig` prop provided to components within the ApplicationLayout.
 */
var layoutConfigPropType = _propTypes.default.shape({
  size: _propTypes.default.string,
  toggleMenu: _propTypes.default.func,
  menuIsOpen: _propTypes.default.bool,
  togglePin: _propTypes.default.bool,
  menuIsPinned: _propTypes.default.bool
});

/**
 * Shape for ApplicationLayout's `nameConfig` prop.
 */
var nameConfigPropType = _propTypes.default.shape({
  accessory: _propTypes.default.element,
  title: _propTypes.default.string
});

/**
   * Alignment of the navigational tabs.
   */
var navigationAlignmentPropType = _propTypes.default.oneOf(['start', 'center', 'end']);

/**
 * Shape for ApplicationLayout's `navigationItems` prop.
 */
var navigationItemsPropType = _propTypes.default.arrayOf(_propTypes.default.shape({
  path: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired,
  hasSubMenu: _propTypes.default.bool,
  icon: _propTypes.default.node
}));

/**
 * Shape for ApplicationLayout's `utilityConfig` prop.
 */
var utilityConfigPropType = _propTypes.default.shape({
  title: _propTypes.default.string,
  accessory: _propTypes.default.element,
  onChange: _propTypes.default.func.isRequired,
  menuItems: _propTypes.default.arrayOf(_terraApplicationUtility.UtilityUtils.itemShape).isRequired,
  initialSelectedKey: _propTypes.default.string.isRequired
});

/**
 * Shape for utilityConfig's menuItem.
 */
var utilityMenuItemPropType = _terraApplicationUtility.UtilityUtils.itemShape;
var _default = {
  utilityConfigPropType: utilityConfigPropType,
  utilityMenuItemPropType: utilityMenuItemPropType,
  layoutConfigPropType: layoutConfigPropType,
  nameConfigPropType: nameConfigPropType,
  navigationAlignmentPropType: navigationAlignmentPropType,
  navigationItemsPropType: navigationItemsPropType
};
exports.default = _default;