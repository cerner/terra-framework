"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _HeaderExampleModule = _interopRequireDefault(require("./HeaderExample.module.scss"));
var cx = _bind.default.bind(_HeaderExampleModule.default);
var propTypes = {
  layoutConfig: _propTypes.default.shape({})
};

/* eslint-disable react/prop-types */
var HeaderExample = function HeaderExample(_ref) {
  var layoutConfig = _ref.layoutConfig;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper1')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper2')
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Header"), layoutConfig.toggleMenu && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: layoutConfig.toggleMenu,
    className: cx('button')
  }, "Toggle Menu"), layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/page1",
    className: cx('link')
  }, "Page 1"), layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/page2",
    className: cx('link')
  }, "Page 2"), layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/page3",
    className: cx('link')
  }, "Page 3")));
};
HeaderExample.propTypes = propTypes;
/* eslint-enable react/prop-types */
var _default = (0, _reactRouterDom.withRouter)(HeaderExample);
exports.default = _default;