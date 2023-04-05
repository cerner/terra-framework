"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _helpers = require("../utils/helpers");
var _PopupCountModule = _interopRequireDefault(require("./PopupCount.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_PopupCountModule.default);
var propTypes = {
  /**
   * Whether or not the count should be present for height calculations, but hidden from view.
   * To ensure that row heights are consistent, we need the ability to have the count and not see it.
   */
  isHidden: _propTypes.default.bool,
  /**
   * The number of notifications to display.
   */
  value: _propTypes.default.number
};
var PopupCount = function PopupCount(_ref) {
  var isHidden = _ref.isHidden,
    value = _ref.value;
  var countRef = (0, _react.useRef)();
  (0, _helpers.useAnimatedCount)(countRef, value);
  var validatedValue = value;
  if (value >= 999) {
    validatedValue = '999+';
  }
  var attrSpread = isHidden ? {
    'aria-hidden': true
  } : undefined;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, attrSpread, {
    ref: countRef,
    className: cx('popup-count', {
      'is-hidden': isHidden
    })
  }), validatedValue);
};
PopupCount.propTypes = propTypes;
var _default = PopupCount;
exports.default = _default;