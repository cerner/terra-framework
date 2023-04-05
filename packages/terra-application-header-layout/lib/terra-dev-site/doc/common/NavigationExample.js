"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Placeholder = _interopRequireDefault(require("./Placeholder"));
var propTypes = {
  size: _propTypes.default.string
};
var ExtensionsExample = function ExtensionsExample(_ref) {
  var size = _ref.size;
  var text = 'Navigation';
  if (size === 'tiny') {
    text = 'N';
  } else if (size === 'small') {
    text = 'Nav';
  }
  return /*#__PURE__*/_react.default.createElement(_Placeholder.default, {
    text: text,
    size: "default"
  });
};
ExtensionsExample.propTypes = propTypes;
var _default = ExtensionsExample;
exports.default = _default;