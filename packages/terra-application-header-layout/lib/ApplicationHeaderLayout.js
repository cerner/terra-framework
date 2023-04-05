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
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _reactIntl = require("react-intl");
var _ApplicationHeaderLayoutModule = _interopRequireDefault(require("./ApplicationHeaderLayout.module.scss"));
var _excluded = ["extensions", "logo", "navigation", "intl", "toggle", "utilities"];
var cx = _bind.default.bind(_ApplicationHeaderLayoutModule.default);
var propTypes = {
  /**
   * Extensions element to be placed before the end of the header.
   * */
  extensions: _propTypes.default.element,
  /**
   * Logo element to be placed at the start of the header after the toggle element.
   * */
  logo: _propTypes.default.element,
  /**
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired,
  /**
   * Navigation element to be placed within the fill area of the header.
   * */
  navigation: _propTypes.default.element,
  /**
   * Toggle element to be placed at the start of the header.
   * */
  toggle: _propTypes.default.element,
  /**
   * Utilities element to be placed at the end of the header.
   * */
  utilities: _propTypes.default.element
};
var ApplicationHeaderLayout = function ApplicationHeaderLayout(_ref) {
  var extensions = _ref.extensions,
    logo = _ref.logo,
    navigation = _ref.navigation,
    intl = _ref.intl,
    toggle = _ref.toggle,
    utilities = _ref.utilities,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var headerClassNames = (0, _classnames.default)(cx('header', 'fill', theme.className), customProps.className);
  var logoElement;
  if (logo) {
    logoElement = /*#__PURE__*/_react.default.createElement("div", {
      className: cx('fit', 'start', 'logo')
    }, logo);
  }
  var navigationElement;
  if (navigation) {
    navigationElement = /*#__PURE__*/_react.default.createElement("nav", {
      role: "navigation",
      className: cx('fill')
    }, navigation);
  }
  var extensionsElement;
  if (extensions) {
    extensionsElement = /*#__PURE__*/_react.default.createElement("div", {
      className: cx('fit', 'end', 'extensions')
    }, extensions);
  }
  var utilitiesElement;
  if (utilities) {
    utilitiesElement = /*#__PURE__*/_react.default.createElement("div", {
      className: cx('fit', 'end', 'utilities')
    }, utilities);
  }
  var headerToggle;
  if (toggle) {
    headerToggle = /*#__PURE__*/_react.default.createElement("div", {
      className: cx('fit')
    }, toggle);
  }
  var headerInner = /*#__PURE__*/_react.default.createElement("div", {
    className: cx('fill', 'header-inner')
  }, navigationElement, extensionsElement);
  var skipToContent = function skipToContent() {
    var mainContainer = document.querySelector(['[data-terra-layout-main]']);
    if (mainContainer) {
      mainContainer.setAttribute('tabindex', '-1');
      mainContainer.focus();
      mainContainer.removeAttribute('tabindex');
    }
  };
  var skipToContentButton = /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: skipToContent,
    className: cx('skip-content')
  }, intl.formatMessage({
    id: 'Terra.ApplicationHeaderLayout.SkipToContent'
  }));
  var headerBody;
  if (headerInner || logoElement || utilitiesElement) {
    headerBody = /*#__PURE__*/_react.default.createElement("div", {
      className: cx('fill', 'header-body')
    }, logoElement, headerInner, utilitiesElement);
  }
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
    className: headerClassNames
  }), skipToContentButton, headerToggle, headerBody);
};
ApplicationHeaderLayout.propTypes = propTypes;
var _default = (0, _reactIntl.injectIntl)(ApplicationHeaderLayout);
exports.default = _default;