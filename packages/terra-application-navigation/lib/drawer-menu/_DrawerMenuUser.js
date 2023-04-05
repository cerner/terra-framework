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
var _terraAvatar = _interopRequireWildcard(require("terra-avatar"));
var _propTypes2 = require("../utils/propTypes");
var _DrawerMenuUserModule = _interopRequireDefault(require("./DrawerMenuUser.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_DrawerMenuUserModule.default);
var propTypes = {
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: _propTypes2.userConfigPropType.isRequired,
  /**
   * Size variant of the user. One of values [`small`, `large`].
   */
  variant: _propTypes.default.oneOf(['small', 'large'])
};
var defaultProps = {
  variant: 'small'
};
var DrawerMenuUser = function DrawerMenuUser(_ref) {
  var userConfig = _ref.userConfig,
    variant = _ref.variant;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: variant === 'small' ? cx('small-user-layout') : cx('large-user-layout')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('avatar-container')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('avatar-outline')
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('avatar-inner')
  }, userConfig.initials || userConfig.imageSrc ? /*#__PURE__*/_react.default.createElement(_terraAvatar.default, {
    alt: userConfig.name,
    image: userConfig.imageSrc,
    initials: userConfig.initials || userConfig.name,
    isAriaHidden: true
  }) : /*#__PURE__*/_react.default.createElement(_terraAvatar.Generic, {
    alt: userConfig.name,
    isAriaHidden: true
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('info-container')
  }, /*#__PURE__*/_react.default.createElement("div", {
    "aria-hidden": true,
    className: cx('name')
  }, userConfig.name), userConfig.detail ? /*#__PURE__*/_react.default.createElement("div", {
    className: cx('detail')
  }, userConfig.detail) : null));
};
DrawerMenuUser.propTypes = propTypes;
DrawerMenuUser.defaultProps = defaultProps;
var _default = DrawerMenuUser;
exports.default = _default;