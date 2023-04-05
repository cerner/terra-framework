"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactIntl = require("react-intl");
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _ModalOverlay = _interopRequireDefault(require("./_ModalOverlay"));
var _inertHelpers = require("./inertHelpers");
var _ModalContentModule = _interopRequireDefault(require("./ModalContent.module.scss"));
var _excluded = ["ariaLabel", "children", "classNameModal", "classNameOverlay", "closeOnOutsideClick", "onRequestClose", "role", "isFullscreen", "isScrollable", "rootSelector", "zIndex"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_ModalContentModule.default);
var zIndexes = ['6000', '7000', '8000', '9000'];
var propTypes = {
  /**
   * String that labels the modal for screen readers.
   */
  ariaLabel: _propTypes.default.string.isRequired,
  /**
   * Content inside the modal dialog.
   */
  children: _propTypes.default.node.isRequired,
  /**
   * CSS classnames that are appended to the modal.
   */
  classNameModal: _propTypes.default.string,
  /**
   * CSS classnames that are appended to the overlay.
   */
  classNameOverlay: _propTypes.default.string,
  /**
   * If set to true, the modal will close when a mouseclick is triggered outside the modal.
   */
  closeOnOutsideClick: _propTypes.default.bool,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: _propTypes.default.func.isRequired,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes.
   */
  isFullscreen: _propTypes.default.bool,
  /**
   * If set to true, the modal dialog with have overflow-y set to scroll.
   */
  isScrollable: _propTypes.default.bool,
  /**
   * Role attribute on the modal dialog.
   */
  role: _propTypes.default.string,
  /**
   * Allows assigning of root element custom data attribute for easy selecting of document base component.
   */
  rootSelector: _propTypes.default.string,
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay.
   */
  zIndex: _propTypes.default.oneOf(zIndexes)
};
var defaultProps = {
  classNameModal: null,
  classNameOverlay: null,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isScrollable: false,
  role: 'dialog',
  rootSelector: '#root',
  zIndex: '6000'
};
var ModalContent = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var ariaLabel = props.ariaLabel,
    children = props.children,
    classNameModal = props.classNameModal,
    classNameOverlay = props.classNameOverlay,
    closeOnOutsideClick = props.closeOnOutsideClick,
    onRequestClose = props.onRequestClose,
    role = props.role,
    isFullscreen = props.isFullscreen,
    isScrollable = props.isScrollable,
    rootSelector = props.rootSelector,
    zIndex = props.zIndex,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  (0, _react.useEffect)(function () {
    // Store element that was last focused prior to modal opening
    var modalTrigger = document.activeElement;
    (0, _inertHelpers.showModalDomUpdates)(ref.current, rootSelector);
    return function () {
      (0, _inertHelpers.hideModalDomUpdates)(modalTrigger, rootSelector);
    };
  }, [ref, rootSelector]);
  var zIndexLayer = '6000';
  if (zIndexes.indexOf(zIndex) >= 0) {
    zIndexLayer = zIndex;
  }
  var theme = _react.default.useContext(_terraThemeContext.default);
  var modalClassName = (0, _classnames.default)(cx('abstract-modal', {
    'is-fullscreen': isFullscreen
  }, "layer-".concat(zIndexLayer), theme.className), classNameModal);

  // Delete the closePortal prop that comes from react-portal.
  delete customProps.closePortal;
  delete customProps.fallbackFocus;
  var platformIsiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ModalOverlay.default, {
    onClick: closeOnOutsideClick ? onRequestClose : null,
    className: classNameOverlay,
    zIndex: zIndexLayer
  }), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
    tabIndex: platformIsiOS ? '-1' : '0',
    "aria-label": ariaLabel,
    className: modalClassName,
    role: role,
    ref: ref
  }), /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Terra.AbstractModal.BeginModalDialog"
  }, function (text) {
    // In the latest version of react-intl this param is an array, when previous versions it was a string.
    var useText = text;
    if (Array.isArray(text)) {
      useText = text.join('');
    }
    return /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
      "data-terra-abstract-modal-begin": true,
      tabIndex: "-1",
      text: useText
    });
  }), children, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Terra.AbstractModal.EndModalDialog"
  }, function (text) {
    // In the latest version of react-intl this param is an array, when previous versions it was a string.
    var useText = text;
    if (Array.isArray(text)) {
      useText = text.join('');
    }
    return /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
      text: useText
    });
  })));
});
ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;
var _default = ModalContent;
exports.default = _default;