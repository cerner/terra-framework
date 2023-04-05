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
var _reactPortal = require("react-portal");
var _keycodeJs = require("keycode-js");
require("mutationobserver-shim");
require("./_contains-polyfill");
require("./_matches-polyfill");
var _ModalContent = _interopRequireDefault(require("./_ModalContent"));
var _excluded = ["ariaLabel", "children", "classNameModal", "classNameOverlay", "closeOnEsc", "closeOnOutsideClick", "isFullscreen", "isOpen", "role", "rootSelector", "onRequestClose", "zIndex"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
   * If set to true, the modal will close when the esc key is pressed.
   */
  closeOnEsc: _propTypes.default.bool,
  /**
   * If set to true, the modal will close when a mouse click is triggered outside the modal.
   */
  closeOnOutsideClick: _propTypes.default.bool,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes.
   */
  isFullscreen: _propTypes.default.bool,
  /**
   * If set to true, the modal will rendered as opened.
   */
  isOpen: _propTypes.default.bool.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: _propTypes.default.func.isRequired,
  /**
   * Role attribute on the modal dialog.
   */
  role: _propTypes.default.string,
  /**
   * Allows assigning of root element custom data attribute for easy selecting of document base component.
   */
  rootSelector: _propTypes.default.string,
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are the standard modal layer: '6000', and the max layer: '8000'.
   */
  zIndex: _propTypes.default.oneOf(zIndexes)
};
var defaultProps = {
  classNameModal: null,
  classNameOverlay: null,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  isFullscreen: false,
  role: 'dialog',
  rootSelector: '#root',
  zIndex: '6000'
};
var AbstractModal = function AbstractModal(props) {
  var ariaLabel = props.ariaLabel,
    children = props.children,
    classNameModal = props.classNameModal,
    classNameOverlay = props.classNameOverlay,
    closeOnEsc = props.closeOnEsc,
    closeOnOutsideClick = props.closeOnOutsideClick,
    isFullscreen = props.isFullscreen,
    isOpen = props.isOpen,
    role = props.role,
    rootSelector = props.rootSelector,
    onRequestClose = props.onRequestClose,
    zIndex = props.zIndex,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var modalElementRef = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(function () {
    // eslint-disable-next-line no-prototype-builtins
    if (!Element.prototype.hasOwnProperty('inert')) {
      // IE10 throws an error if wicg-inert is imported too early, as wicg-inert tries to set an observer on document.body which may not exist on import
      // eslint-disable-next-line global-require
      require('wicg-inert/dist/inert');
    }
  }, []);
  (0, _react.useEffect)(function () {
    function handleDocumentKeydown(e) {
      if (e.keyCode === _keycodeJs.KEY_ESCAPE && closeOnEsc && isOpen) {
        var body = document.querySelector('body');
        if (e.target === body) {
          onRequestClose();
        }
      }
    }
    document.addEventListener('keydown', handleDocumentKeydown);
    return function () {
      document.removeEventListener('keydown', handleDocumentKeydown);
    };
  }, [closeOnEsc, isOpen, onRequestClose]);
  var handleKeydown = (0, _react.useCallback)(function (e) {
    if (e.keyCode === _keycodeJs.KEY_ESCAPE && closeOnEsc && isOpen) {
      var currentModalNode = modalElementRef.current;
      if (currentModalNode && (e.target === currentModalNode || currentModalNode.contains(e.target))) {
        if (e.target === modalElementRef.current || modalElementRef.current.contains(e.target)) {
          onRequestClose();
        }
      }
    }
  }, [closeOnEsc, isOpen, onRequestClose, modalElementRef]);
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_reactPortal.Portal, {
    isOpened: isOpen
  }, /*#__PURE__*/_react.default.createElement(_ModalContent.default, (0, _extends2.default)({}, customProps, {
    closeOnOutsideClick: closeOnOutsideClick,
    ariaLabel: ariaLabel,
    classNameModal: classNameModal,
    classNameOverlay: classNameOverlay,
    role: role,
    isFullscreen: isFullscreen,
    onRequestClose: onRequestClose,
    rootSelector: rootSelector,
    zIndex: zIndex,
    "aria-modal": "true",
    ref: modalElementRef,
    onKeyDown: handleKeydown
  }), children));
};
AbstractModal.propTypes = propTypes;
AbstractModal.defaultProps = defaultProps;
var _default = AbstractModal;
exports.default = _default;