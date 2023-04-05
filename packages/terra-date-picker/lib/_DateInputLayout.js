"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DateUtil = _interopRequireDefault(require("./DateUtil"));
var propTypes = {
  /**
   * The date input order based on the locale date format.
   */
  dateFormatOrder: _propTypes.default.string,
  /**
   * The separator component with the locale appropriate separator.
   */
  separator: _propTypes.default.node,
  /**
   * The date day component
   */
  day: _propTypes.default.node,
  /**
   * The date month component
   */
  month: _propTypes.default.node,
  /**
   * The date year component
   */
  year: _propTypes.default.node
};
var DateInputLayout = function DateInputLayout(props) {
  var dateFormatOrder = props.dateFormatOrder,
    separator = props.separator,
    day = props.day,
    month = props.month,
    year = props.year;
  var formatOrder;
  if (dateFormatOrder === _DateUtil.default.dateOrder.DMY) {
    formatOrder = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, day, separator, month, separator, year);
  } else if (dateFormatOrder === _DateUtil.default.dateOrder.MDY) {
    formatOrder = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, month, separator, day, separator, year);
  } else if (dateFormatOrder === _DateUtil.default.dateOrder.YMD) {
    formatOrder = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, year, separator, month, separator, day);
  }
  return formatOrder;
};
DateInputLayout.propTypes = propTypes;
var _default = DateInputLayout;
exports.default = _default;