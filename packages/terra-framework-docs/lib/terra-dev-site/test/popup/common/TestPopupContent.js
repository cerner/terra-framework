"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _TestPopupContentModule = _interopRequireDefault(require("./TestPopupContent.module.scss"));
var cx = _bind.default.bind(_TestPopupContentModule.default);
var propTypes = {
  onClick: _propTypes.default.func,
  size: _propTypes.default.oneOf(['small', 'large'])
};
var TestPopupContent = function TestPopupContent(_ref) {
  var onClick = _ref.onClick,
    size = _ref.size;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx("popup-content-".concat(size))
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "resize-content",
    onClick: onClick
  }, "Resize"));
};
TestPopupContent.propTypes = propTypes;
var _default = TestPopupContent;
exports.default = _default;