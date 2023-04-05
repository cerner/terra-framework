"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _reactIntl = require("react-intl");
var _terraAvatar = _interopRequireWildcard(require("terra-avatar"));
var _IconCaretDown = _interopRequireDefault(require("terra-icon/lib/icon/IconCaretDown"));
var _IconRollup = _interopRequireDefault(require("terra-icon/lib/icon/IconRollup"));
var _helpers = require("../utils/helpers");
var _propTypes2 = require("../utils/propTypes");
var _UtilityMenuHeaderButtonModule = _interopRequireDefault(require("./UtilityMenuHeaderButton.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_UtilityMenuHeaderButtonModule.default);
var propTypes = {
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: _propTypes2.userConfigPropType,
  /**
   * A function executed upon selection of the button.
   */
  onClick: _propTypes.default.func,
  /**
   * A ref Object that will be provided a reference to the created button.
   */
  popupAnchorRef: _propTypes.default.shape({
    current: _propTypes.default.instanceOf(Element)
  }),
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  })
};
var UtilityMenuHeaderButton = function UtilityMenuHeaderButton(_ref) {
  var userConfig = _ref.userConfig,
    onClick = _ref.onClick,
    popupAnchorRef = _ref.popupAnchorRef,
    intl = _ref.intl;
  var ariaLabel;
  var content;
  if (userConfig) {
    ariaLabel = intl.formatMessage({
      id: 'Terra.applicationNavigation.header.utilityButtonTitleUser'
    }, {
      currentUserName: userConfig.name
    });
    content = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: cx('image')
    }, userConfig.initials || userConfig.imageSrc ? /*#__PURE__*/_react.default.createElement(_terraAvatar.default, {
      alt: userConfig.name,
      image: userConfig.imageSrc,
      initials: userConfig.initials || userConfig.name,
      className: cx('avatar'),
      isAriaHidden: true
    }) : /*#__PURE__*/_react.default.createElement(_terraAvatar.Generic, {
      alt: userConfig.name,
      className: cx('avatar'),
      isAriaHidden: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: cx('title')
    }, userConfig.name), /*#__PURE__*/_react.default.createElement(_IconCaretDown.default, {
      className: cx('caret-icon')
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: cx('popup-anchor'),
      ref: popupAnchorRef
    }));
  } else {
    ariaLabel = intl.formatMessage({
      id: 'Terra.applicationNavigation.header.utilityButtonTitleNoUser'
    });
    content = /*#__PURE__*/_react.default.createElement("div", {
      className: cx('no-user-image')
    }, /*#__PURE__*/_react.default.createElement(_IconRollup.default, {
      className: cx('rollup-icon')
    }));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "button",
    tabIndex: "0",
    className: cx('utility-button', {
      'no-user': !userConfig
    }),
    onClick: onClick,
    onKeyDown: (0, _helpers.generateKeyDownSelection)(onClick),
    onBlur: _helpers.enableFocusStyles,
    onMouseDown: _helpers.disableFocusStyles,
    ref: !userConfig ? popupAnchorRef : undefined,
    "aria-label": ariaLabel,
    "aria-haspopup": true,
    "data-focus-styles-enabled": true,
    "data-application-header-utility": true
  }, content);
};
UtilityMenuHeaderButton.propTypes = propTypes;
var _default = (0, _reactIntl.injectIntl)(UtilityMenuHeaderButton);
exports.default = _default;