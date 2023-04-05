"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PlaceholderModule = _interopRequireDefault(require("./Placeholder.module.scss"));
var cx = _bind.default.bind(_PlaceholderModule.default);
var propTypes = {
  text: _propTypes.default.string,
  size: _propTypes.default.string
};
var defaultProps = {
  text: 'PlaceHolder',
  size: 'tiny'
};
var Placeholder = function Placeholder(_ref) {
  var text = _ref.text,
    size = _ref.size;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx("wrapper1-".concat(size))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('wrapper2')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('wrapper3')
  }, /*#__PURE__*/_react.default.createElement("h3", null, text))));
};
Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;
var _default = Placeholder;
exports.default = _default;