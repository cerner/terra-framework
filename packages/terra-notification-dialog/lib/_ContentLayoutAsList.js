"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _ContentLayoutAsListModule = _interopRequireDefault(require("./ContentLayoutAsList.module.scss"));
var cx = _bind.default.bind(_ContentLayoutAsListModule.default);
var propTypes = {
  /**
   * The list of strings to display in a list format.
   */
  items: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
};
var ContentLayoutAsList = function ContentLayoutAsList(_ref) {
  var items = _ref.items;
  var theme = _react.default.useContext(_terraThemeContext.default);

  /* eslint-disable react/no-array-index-key */
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: cx('list', theme.className)
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: cx('list-item'),
      key: "".concat(item, "-").concat(index)
    }, item);
  }));
  /* eslint-enable react/no-array-index-key */
};

ContentLayoutAsList.propTypes = propTypes;
var _default = ContentLayoutAsList;
exports.default = _default;