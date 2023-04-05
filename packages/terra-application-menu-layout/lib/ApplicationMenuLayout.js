"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ApplicationMenuLayoutModule = _interopRequireDefault(require("./ApplicationMenuLayout.module.scss"));
var _excluded = ["content", "extensions", "footer", "header"];
var cx = _bind.default.bind(_ApplicationMenuLayoutModule.default);
var propTypes = {
  /**
   * Content element to be placed within the fill area of the header.
   * */
  content: _propTypes.default.element,
  /**
   * Extensions element to be placed before the end of the header.
   * */
  extensions: _propTypes.default.element,
  /**
   * Footer element to be placed at the end of the header.
   * */
  footer: _propTypes.default.element,
  /**
   * Header element to be placed at the start of the header.
   * */
  header: _propTypes.default.element
};
var ApplicationMenuLayout = function ApplicationMenuLayout(_ref) {
  var content = _ref.content,
    extensions = _ref.extensions,
    footer = _ref.footer,
    header = _ref.header,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var menuClassNames = cx(['menu', 'fill', customProps.className]);
  var headerElement;
  if (header) {
    headerElement = /*#__PURE__*/_react.default.createElement("div", {
      className: cx(['fit', 'header'])
    }, header);
  }
  var contentElement;
  if (content) {
    contentElement = /*#__PURE__*/_react.default.createElement("div", {
      className: cx(['fill', 'content'])
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: cx('normalizer')
    }, content));
  }
  var extensionsElement;
  if (extensions) {
    extensionsElement = /*#__PURE__*/_react.default.createElement("div", {
      className: cx(['fit', 'widget'])
    }, extensions);
  }
  var footerElement;
  if (footer) {
    footerElement = /*#__PURE__*/_react.default.createElement("div", {
      className: cx(['fit', 'footer'])
    }, footer);
  }
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
    className: menuClassNames
  }), headerElement, /*#__PURE__*/_react.default.createElement("div", {
    className: cx(['fill', 'body'])
  }, extensionsElement, contentElement), footerElement);
};
ApplicationMenuLayout.propTypes = propTypes;
var _default = ApplicationMenuLayout;
exports.default = _default;