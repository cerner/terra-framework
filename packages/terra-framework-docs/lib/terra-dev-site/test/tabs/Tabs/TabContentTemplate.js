"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TabsTemplateModule = _interopRequireDefault(require("./TabsTemplate.module.scss"));
var cx = _bind.default.bind(_TabsTemplateModule.default);
var propTypes = {
  isLabelHidden: _propTypes.default.bool,
  label: _propTypes.default.string,
  id: _propTypes.default.string
};
var TabContentTemplate = function TabContentTemplate(_ref) {
  var isLabelHidden = _ref.isLabelHidden,
    label = _ref.label,
    id = _ref.id;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('tab-content'),
    id: id
  }, isLabelHidden ? /*#__PURE__*/_react.default.createElement("h3", {
    className: "truncationHeader"
  }, label) : null, "Content for", ' ', /*#__PURE__*/_react.default.createElement("i", null, label));
};
TabContentTemplate.propTypes = propTypes;
var _default = TabContentTemplate;
exports.default = _default;