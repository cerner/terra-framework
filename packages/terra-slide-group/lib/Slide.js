"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _SlideModule = _interopRequireDefault(require("./Slide.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_SlideModule.default);
var propTypes = {
  /**
   * If true, the Slide is marked as hidden using accessiblity attributes.
   */
  isHidden: _propTypes.default.bool,
  /**
   * The components to display inside the Slide.
   */
  children: _propTypes.default.node
};
var defaultProps = {
  isHidden: false
};
var Slide = function Slide(props) {
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    lastClicked = _useState2[0],
    setLastClicked = _useState2[1];
  (0, _react.useEffect)(function () {
    if (!props.isHidden && lastClicked) {
      lastClicked.focus();
    }
  });
  var handleClick = function handleClick(event) {
    setLastClicked(event.target);
  };
  var theme = _react.default.useContext(_terraThemeContext.default);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    _react.default.createElement("div", {
      className: cx('slide', theme.className),
      "aria-hidden": props.isHidden || null,
      onClick: handleClick,
      onKeyUp: handleClick
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: cx('slide-shadow')
    }), props.children)
  );
};
Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;
var _default = Slide;
exports.default = _default;