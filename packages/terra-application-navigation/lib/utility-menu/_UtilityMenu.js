"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactIntl = require("react-intl");
var _IconSettings = _interopRequireDefault(require("terra-icon/lib/icon/IconSettings"));
var _IconQuestionOutline = _interopRequireDefault(require("terra-icon/lib/icon/IconQuestionOutline"));
var _PopupMenu = _interopRequireDefault(require("../common/_PopupMenu"));
var _propTypes2 = require("../utils/propTypes");
var _helpers = require("../utils/helpers");
var propTypes = {
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: _propTypes2.userConfigPropType,
  /**
   * An element to render within the Header's utility menu.
   */
  hero: _propTypes.default.element,
  /**
   * A function to be executed upon the selection of the Settings utility item.
   * If `onSelectSettings` is not provided, the Settings utility item will not be rendered.
   * Ex: `onSelectSettings()`
   */
  onSelectSettings: _propTypes.default.func,
  /**
   * A function to be executed upon the selection of the Help utility item.
   * If `onSelectHelp` is not provided, the Help utility item will not be rendered.
   * Ex: `onSelectLogout()`
   */
  onSelectHelp: _propTypes.default.func,
  /**
   * A function to be executed upon the selection of the Logout action button.
   * If `onSelectLogout` is not provided, the Logout action button will not be rendered.
   * Ex: `onSelectLogout()`
   */
  onSelectLogout: _propTypes.default.func,
  /**
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: _propTypes2.utilityItemsPropType,
  /**
   * A base id used to generate unique ids for utility items
   */
  id: _propTypes.default.string,
  /**
   * A function to be executed upon the selection of a custom utility item.
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey)`
   */
  onSelectUtilityItem: _propTypes.default.func,
  /**
   * Whether or not content is be constrained vertically.
   */
  isHeightBounded: _propTypes.default.bool,
  /**
   * @private
   * Object containing intl APIs
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  })
};
var defaultProps = {
  utilityItems: []
};
var utilityMenuSettingsKey = 'terra-application-navigation.utility-menu.settings';
var utilityMenuHelpKey = 'terra-application-navigation.utility-menu.help';
var UtilityMenu = function UtilityMenu(_ref) {
  var userConfig = _ref.userConfig,
    hero = _ref.hero,
    onSelectSettings = _ref.onSelectSettings,
    onSelectHelp = _ref.onSelectHelp,
    onSelectLogout = _ref.onSelectLogout,
    utilityItems = _ref.utilityItems,
    id = _ref.id,
    onSelectUtilityItem = _ref.onSelectUtilityItem,
    isHeightBounded = _ref.isHeightBounded,
    intl = _ref.intl;
  var menuItems = [];
  menuItems = utilityItems.map(function (item) {
    return {
      id: id && (0, _helpers.utilityItemId)(id, item.key),
      key: item.key,
      text: item.text,
      icon: item.icon,
      dataAttrs: item.dataAttrs,
      metaData: item.metaData
    };
  });
  if (onSelectSettings) {
    menuItems.push({
      id: id && (0, _helpers.settingsUtilityItemId)(id),
      key: utilityMenuSettingsKey,
      text: intl.formatMessage({
        id: 'Terra.applicationNavigation.utilityMenu.settings'
      }),
      icon: /*#__PURE__*/_react.default.createElement(_IconSettings.default, null),
      dataAttrs: {
        'data-navigation-utility-item-settings': 'true'
      }
    });
  }
  if (onSelectHelp) {
    menuItems.push({
      id: id && (0, _helpers.helpUtilityItemId)(id),
      key: utilityMenuHelpKey,
      text: intl.formatMessage({
        id: 'Terra.applicationNavigation.utilityMenu.help'
      }),
      icon: /*#__PURE__*/_react.default.createElement(_IconQuestionOutline.default, null),
      dataAttrs: {
        'data-navigation-utility-item-help': 'true'
      }
    });
  }
  return /*#__PURE__*/_react.default.createElement(_PopupMenu.default, {
    role: "listbox",
    title: intl.formatMessage({
      id: 'Terra.applicationNavigation.utilityMenu.headerTitle'
    }),
    footerText: intl.formatMessage({
      id: 'Terra.applicationNavigation.utilityMenu.logout'
    }),
    onSelectFooterItem: onSelectLogout,
    userConfig: userConfig,
    customContent: hero,
    menuItems: menuItems,
    id: id,
    onSelectMenuItem: function onSelectMenuItem(itemKey, metaData) {
      if (itemKey === utilityMenuSettingsKey) {
        onSelectSettings();
      } else if (itemKey === utilityMenuHelpKey) {
        onSelectHelp();
      } else {
        onSelectUtilityItem(itemKey, metaData);
      }
    },
    isHeightBounded: isHeightBounded
  });
};
UtilityMenu.propTypes = propTypes;
UtilityMenu.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(UtilityMenu);
exports.default = _default;