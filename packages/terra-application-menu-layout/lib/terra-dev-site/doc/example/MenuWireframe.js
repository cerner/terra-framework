"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraApplicationMenuLayout = _interopRequireDefault(require("terra-application-menu-layout"));
var _Placeholder = _interopRequireDefault(require("terra-application-menu-layout/lib/terra-dev-site/doc/common/Placeholder"));
var _MenuWireframeModule = _interopRequireDefault(require("./MenuWireframe.module.scss"));
var cx = _bind.default.bind(_MenuWireframeModule.default);
var Menu = function Menu() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraApplicationMenuLayout.default, {
    header: /*#__PURE__*/_react.default.createElement(_Placeholder.default, {
      text: "Header",
      type: "header"
    }),
    footer: /*#__PURE__*/_react.default.createElement(_Placeholder.default, {
      text: "Footer",
      type: "footer"
    }),
    extensions: /*#__PURE__*/_react.default.createElement(_Placeholder.default, {
      text: "Extensions",
      type: "extensions"
    }),
    content: /*#__PURE__*/_react.default.createElement(_Placeholder.default, {
      text: "Content"
    })
  }));
};
var _default = Menu;
exports.default = _default;