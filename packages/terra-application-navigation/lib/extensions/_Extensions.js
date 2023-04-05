"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _reactIntl = require("react-intl");
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _PopupMenu = _interopRequireDefault(require("../common/_PopupMenu"));
var _propTypes2 = require("../utils/propTypes");
var _ExtensionRollup = _interopRequireDefault(require("./_ExtensionRollup"));
var _Extension = _interopRequireDefault(require("./_Extension"));
var _ExtensionUtils = require("./_ExtensionUtils");
var _helpers = require("../utils/helpers");
var _ExtensionsModule = _interopRequireDefault(require("./Extensions.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_ExtensionsModule.default);
var propTypes = {
  /**
   * The currently active breakpoint.
   */
  activeBreakpoint: _propTypes.default.string,
  /**
   * The extension config for breakpoint display and items.
   */
  extensionItems: _propTypes2.extensionItemsPropType,
  /**
   * An id used to generate unique ids for extension items
   */
  id: _propTypes.default.string,
  /**
   * A function to be executed upon selection of a tab.
   */
  onSelect: _propTypes.default.func,
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: _propTypes.default.object,
  /**
   * @private
   * Object containing intl APIs
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  })
};
var defaultProps = {
  activeBreakpoint: '',
  extensionItems: [],
  notifications: {}
};
var Extensions = function Extensions(_ref) {
  var activeBreakpoint = _ref.activeBreakpoint,
    extensionItems = _ref.extensionItems,
    id = _ref.id,
    notifications = _ref.notifications,
    onSelect = _ref.onSelect,
    intl = _ref.intl;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    popupIsOpen = _useState2[0],
    setPopupIsOpen = _useState2[1];
  var extensionRollupRef = (0, _react.useRef)();
  var popupSelectionCallbackRef = (0, _react.useRef)();
  var previousNotificationsRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    previousNotificationsRef.current = notifications;
    if (popupSelectionCallbackRef.current) {
      popupSelectionCallbackRef.current();
      popupSelectionCallbackRef.current = undefined;
    }
  });
  var sliceIndex = (0, _ExtensionUtils.sliceIndexForBreakpoint)(activeBreakpoint, extensionItems);
  var visibleExtensions = extensionItems.slice(0, sliceIndex);
  var hiddenExtensions = extensionItems.slice(sliceIndex);
  function renderRollupButton() {
    if (!hiddenExtensions || !hiddenExtensions.length) {
      return null;
    }
    var showNotifications = hiddenExtensions.some(function (extension) {
      return !!notifications[extension.key];
    });
    var shouldPulse = previousNotificationsRef.current && hiddenExtensions.some(function (extension) {
      var previousCount = previousNotificationsRef.current[extension.key];
      var newCount = notifications[extension.key];
      return newCount && (!previousCount || newCount > previousCount);
    });
    return /*#__PURE__*/_react.default.createElement(_ExtensionRollup.default, {
      onSelect: function onSelect() {
        return setPopupIsOpen(true);
      },
      extensionRef: extensionRollupRef,
      hasChildNotifications: showNotifications,
      isPulsed: showNotifications && shouldPulse
    });
  }
  function renderPopup() {
    var attachmentSpread;
    if ((0, _helpers.shouldRenderCompactNavigation)(activeBreakpoint)) {
      attachmentSpread = {
        contentAttachment: 'top right',
        targetAttachment: 'bottom center'
      };
    }
    return /*#__PURE__*/_react.default.createElement(_terraPopup.default, (0, _extends2.default)({}, attachmentSpread, {
      contentHeight: "auto",
      contentWidth: "320",
      isArrowDisplayed: true,
      isOpen: popupIsOpen,
      targetRef: function targetRef() {
        return extensionRollupRef.current;
      },
      onRequestClose: function onRequestClose() {
        return setPopupIsOpen(false);
      },
      isContentFocusDisabled: true
    }), /*#__PURE__*/_react.default.createElement(_PopupMenu.default, {
      title: intl.formatMessage({
        id: 'Terra.applicationNavigation.extensions.rollupMenuHeaderTitle'
      }),
      role: "menu",
      menuItems: hiddenExtensions.map(function (item) {
        return {
          id: id && (0, _helpers.extensionItemId)(id, item.key),
          key: item.key,
          icon: item.icon,
          text: item.text,
          notificationCount: notifications[item.key],
          metaData: item.metaData
        };
      }),
      onSelectMenuItem: function onSelectMenuItem(itemKey, metaData) {
        popupSelectionCallbackRef.current = function () {
          return onSelect(itemKey, metaData);
        };
        setPopupIsOpen(false);
      }
    }));
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('extensions-row')
  }, visibleExtensions.map(function (extension) {
    return /*#__PURE__*/_react.default.createElement(_Extension.default, {
      id: id && (0, _helpers.extensionItemId)(id, extension.key),
      notificationCount: notifications[extension.key],
      key: extension.key,
      icon: extension.icon,
      text: extension.text,
      onSelect: onSelect && onSelect.bind(null, extension.key, extension.metaData)
    });
  }), renderRollupButton()), renderPopup());
};
Extensions.propTypes = propTypes;
Extensions.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(Extensions);
exports.default = _default;