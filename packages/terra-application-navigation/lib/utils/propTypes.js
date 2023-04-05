"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utilityItemsPropType = exports.userConfigPropType = exports.titleConfigPropType = exports.navigationItemsPropType = exports.extensionItemsPropType = exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var titleConfigPropType = _propTypes.default.shape({
  /**
   * Title to be displayed or set as the aria-label if a title element is passed.
   */
  title: _propTypes.default.string.isRequired,
  /**
   * Super text to be display above the main title text.
   */
  headline: _propTypes.default.string,
  /**
   * Sub text to be display below the main title text.
   */
  subline: _propTypes.default.string,
  /**
   * Element to use in place of title text.
   */
  element: _propTypes.default.element,
  /**
   * Whether or not the title should be hidden when at the compact breakpoint.
   */
  hideTitleWithinDrawerMenu: _propTypes.default.bool
});
exports.titleConfigPropType = titleConfigPropType;
var userConfigPropType = _propTypes.default.shape({
  /**
   * User name to be displayed.
   */
  name: _propTypes.default.string.isRequired,
  /**
   * Additional user details.
   */
  detail: _propTypes.default.string,
  /**
   * User initials to be displayed within the avatar if no image is present.
   */
  initials: _propTypes.default.string,
  /**
   * Src to provide to the avatar component.
   */
  imageSrc: _propTypes.default.string
});
exports.userConfigPropType = userConfigPropType;
var navigationItemsPropType = _propTypes.default.arrayOf(_propTypes.default.shape({
  /**
   * Key matching the notification key, used as react key, and returned in the onSelect
   */
  key: _propTypes.default.string.isRequired,
  /**
   * Text display and/or aria-label.
   */
  text: _propTypes.default.string.isRequired,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: _propTypes.default.object
}));
exports.navigationItemsPropType = navigationItemsPropType;
var utilityItemsPropType = _propTypes.default.arrayOf(_propTypes.default.shape({
  /**
   * Key used as react key, and returned in the onSelect.
   */
  key: _propTypes.default.string.isRequired,
  /**
   * Icon to be rendered.
   */
  icon: _propTypes.default.element,
  /**
   * Text display and/or aria-label.
   */
  text: _propTypes.default.string.isRequired,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: _propTypes.default.object
}));
exports.utilityItemsPropType = utilityItemsPropType;
var extensionItemsPropType = _propTypes.default.arrayOf(_propTypes.default.shape({
  /**
   * Key matching the notification key, used as react key, and returned in the onSelect.
   */
  key: _propTypes.default.string.isRequired,
  /**
   * Icon to be rendered.
   */
  icon: _propTypes.default.element.isRequired,
  /**
   * Text display and/or aria-label.
   */
  text: _propTypes.default.string.isRequired,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: _propTypes.default.object
}));
exports.extensionItemsPropType = extensionItemsPropType;
var _default = {
  titleConfigPropType: titleConfigPropType,
  userConfigPropType: userConfigPropType,
  navigationItemsPropType: navigationItemsPropType,
  utilityItemsPropType: utilityItemsPropType,
  extensionItemsPropType: extensionItemsPropType
};
exports.default = _default;