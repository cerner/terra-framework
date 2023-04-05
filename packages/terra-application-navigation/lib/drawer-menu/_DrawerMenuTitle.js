"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = require("../utils/propTypes");
var _DrawerMenuTitleModule = _interopRequireDefault(require("./DrawerMenuTitle.module.scss"));
var cx = _bind.default.bind(_DrawerMenuTitleModule.default);
var propTypes = {
  /**
   * A configuration object with information pertaining to the application's title.
   */
  titleConfig: _propTypes.titleConfigPropType.isRequired
};
var DrawerMenuTitle = function DrawerMenuTitle(_ref) {
  var titleConfig = _ref.titleConfig;
  return titleConfig.element ? /*#__PURE__*/_react.default.createElement("div", {
    title: titleConfig.title,
    className: cx('title-container')
  }, titleConfig.element) : /*#__PURE__*/_react.default.createElement("div", {
    className: cx('title-container')
  }, titleConfig.headline ? /*#__PURE__*/_react.default.createElement("div", {
    className: cx('headline'),
    title: titleConfig.headline
  }, titleConfig.headline) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('title'),
    title: titleConfig.title
  }, titleConfig.title), titleConfig.subline ? /*#__PURE__*/_react.default.createElement("div", {
    className: cx('subline'),
    title: titleConfig.subline
  }, titleConfig.subline) : null);
};
DrawerMenuTitle.propTypes = propTypes;
var _default = DrawerMenuTitle;
exports.default = _default;