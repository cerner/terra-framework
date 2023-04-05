"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _terraAbstractModal = _interopRequireDefault(require("terra-abstract-modal"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _DialogModalModule = _interopRequireDefault(require("./DialogModal.module.scss"));
var _excluded = ["header", "footer", "children", "onRequestClose", "isOpen", "ariaLabel", "width", "closeOnOutsideClick", "rootSelector"];
var cx = _bind.default.bind(_DialogModalModule.default);
var widthFromSize = {
  320: 320,
  640: 640,
  960: 960,
  1120: 1120,
  1280: 1280,
  1600: 1600
};
var propTypes = {
  /**
  * Aria Label of the dialog modal.
  */
  ariaLabel: _propTypes.default.string.isRequired,
  /**
  * Header of the dialog modal.
  */
  header: _propTypes.default.element.isRequired,
  /**
  * Footer of the dialog modal.
  */
  footer: _propTypes.default.element.isRequired,
  /**
  * Contents of the dialog modal.
  */
  children: _propTypes.default.node,
  /**
   * Callback function indicating a close condition was met.
   */
  onRequestClose: _propTypes.default.func.isRequired,
  /**
   * Toggle to show dialog modal or not.
   */
  isOpen: _propTypes.default.bool,
  /**
   * Width of the dialog modal. Allows one of `320`, `640`, `960`, `1120`, `1280`, or `1600`.
   *
   * _(Uses same sizes as terra-modal-manager: tiny:320, small:640, medium:960, default:1120, large:1280, huge:1600)_
   */
  width: _propTypes.default.oneOf(Object.keys(widthFromSize)),
  /**
   * **DO NOT USE THIS PROP**
   *
   * This prop was added in error, but has not been removed due to passivity concerns.
   *
   * Modals & Dialogs must be closed by clicking a ui element to prevent accidental clicks and to force an intentional decision by the user to close the dialog.
   *
   * If set to true, the modal will close when a mouse click is triggered outside the modal.
   */
  closeOnOutsideClick: _propTypes.default.bool,
  /**
   * Used to select the root mount DOM node. This is used to help prevent focus from shifting outside of the DialogModal when it is opened.
   */
  rootSelector: _propTypes.default.string
};
var defaultProps = {
  children: null,
  isOpen: false,
  width: '1120',
  closeOnOutsideClick: false,
  rootSelector: '#root'
};
var DialogModal = function DialogModal(props) {
  var header = props.header,
    footer = props.footer,
    children = props.children,
    onRequestClose = props.onRequestClose,
    isOpen = props.isOpen,
    ariaLabel = props.ariaLabel,
    width = props.width,
    closeOnOutsideClick = props.closeOnOutsideClick,
    rootSelector = props.rootSelector,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var theme = _react.default.useContext(_terraThemeContext.default);
  if (!isOpen) {
    return null;
  }
  var classArray = ['dialog-modal-wrapper', theme.className];
  if (width in widthFromSize) {
    classArray.push("width-".concat(widthFromSize[width]));
  } else {
    classArray.push('width-1120');
  }
  return /*#__PURE__*/_react.default.createElement(_terraAbstractModal.default, {
    ariaLabel: ariaLabel,
    role: "dialog",
    classNameModal: cx(classArray),
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    zIndex: "7000",
    closeOnOutsideClick: closeOnOutsideClick,
    rootSelector: rootSelector
  }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
    className: (0, _classnames.default)(cx('dialog-modal-inner-wrapper'), customProps.className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('dialog-modal-container')
  }, /*#__PURE__*/_react.default.createElement("div", null, header), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('dialog-modal-body')
  }, children), /*#__PURE__*/_react.default.createElement("div", null, footer))));
};
DialogModal.propTypes = propTypes;
DialogModal.defaultProps = defaultProps;
var _default = DialogModal;
exports.default = _default;