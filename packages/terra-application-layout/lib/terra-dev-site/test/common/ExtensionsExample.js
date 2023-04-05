"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _demoStylesModule = _interopRequireDefault(require("./demoStyles.module.scss"));
var cx = _bind.default.bind(_demoStylesModule.default);
var ApplicationHeaderDefault = function ApplicationHeaderDefault(_ref) {
  var customProps = (0, _extends2.default)({}, ((0, _objectDestructuringEmpty2.default)(_ref), _ref));
  if (customProps.layoutConfig.size !== 'large') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: cx('demo-extensions-small')
    }, "Test Extensions Small");
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx(['demo-extensions'])
  }, "Test Extensions Large");
};
var _default = ApplicationHeaderDefault;
exports.default = _default;