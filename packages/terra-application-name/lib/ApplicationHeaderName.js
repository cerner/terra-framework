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
var _ApplicationHeaderNameModule = _interopRequireDefault(require("./ApplicationHeaderName.module.scss"));
var _excluded = ["accessory", "title"];
var cx = _bind.default.bind(_ApplicationHeaderNameModule.default);
var propTypes = {
  /**
   * The accessory element to be displayed next to the title.
   * */
  accessory: _propTypes.default.element,
  /**
   * The title branding of the application name.
   * */
  title: _propTypes.default.node
};
var ApplicationHeaderName = function ApplicationHeaderName(_ref) {
  var accessory = _ref.accessory,
    title = _ref.title,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var ApplicationHeaderNameClassNames = (0, _classnames.default)(cx('application-header-name', theme.className), customProps.className);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
    className: ApplicationHeaderNameClassNames
  }), accessory && /*#__PURE__*/_react.default.createElement("div", {
    className: cx('accessory')
  }, accessory), title && /*#__PURE__*/_react.default.createElement("div", {
    className: cx('title')
  }, title));
};
ApplicationHeaderName.propTypes = propTypes;
var _default = ApplicationHeaderName;
exports.default = _default;