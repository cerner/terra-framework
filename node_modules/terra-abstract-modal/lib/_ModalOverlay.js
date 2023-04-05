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
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ModalOverlayModule = _interopRequireDefault(require("./ModalOverlay.module.scss"));
var _excluded = ["zIndex"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_ModalOverlayModule.default);
var zIndexes = ['6000', '7000', '8000', '9000'];
var propTypes = {
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay.
   */
  zIndex: _propTypes.default.oneOf(zIndexes)
};
var ModalOverlay = function ModalOverlay(props) {
  (0, _react.useEffect)(function () {
    var overflow = document.documentElement.style.overflow;
    // Disable scrolling on the page when Overlay is displayed
    document.documentElement.style.overflow = 'hidden';
    return function () {
      // Enable scrolling on the page since Overlay has gone away
      document.documentElement.style.overflow = overflow;
    };
  }, []);
  var zIndex = props.zIndex,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var overlayClassName = (0, _classnames.default)(cx('overlay', "layer-".concat(zIndex), theme.className), customProps.className);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
    className: overlayClassName
  }));
};
ModalOverlay.propTypes = propTypes;
var _default = ModalOverlay;
exports.default = _default;