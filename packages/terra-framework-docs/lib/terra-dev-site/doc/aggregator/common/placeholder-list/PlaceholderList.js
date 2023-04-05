"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./PlaceholderList.module.scss");
/* eslint-disable */
var List = function List(_ref) {
  var children = _ref.children,
    isPadded = _ref.isPadded;
  return /*#__PURE__*/_react.default.createElement("ul", {
    "aria-label": "Placeholder List",
    role: "listbox",
    className: isPadded ? 'placeholder-list is-padded' : 'placeholder-list '
  }, children);
};
var _default = List;
exports.default = _default;