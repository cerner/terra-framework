"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _keycodeJs = require("keycode-js");
var _reactIntl = require("react-intl");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _v = _interopRequireDefault(require("uuid/v4"));
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _PillModule = _interopRequireDefault(require("./Pill.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_PillModule.default);
var propTypes = {
  /**
   * Determines if the Pill List is rolled up or not.
   */
  isCollapsed: _propTypes.default.bool,
  /**
   * Callback function triggered on click/key press of the roll-up pill
   */
  onSelectRollUp: _propTypes.default.func,
  /**
   * Number of pills that are rolled up.
   */
  rollupCount: _propTypes.default.number,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired
};
var RollUpPill = function RollUpPill(props) {
  var isCollapsed = props.isCollapsed,
    onSelectRollUp = props.onSelectRollUp,
    intl = props.intl,
    rollupCount = props.rollupCount;
  var rollUpPillRef = (0, _react.useRef)();
  var theme = _react.default.useContext(_terraThemeContext.default);
  var handleOnSelectRollUp = function handleOnSelectRollUp(event) {
    event.preventDefault();
    event.stopPropagation();
    onSelectRollUp(event);
  };
  var handleRollUpPillKeyDown = function handleRollUpPillKeyDown(event) {
    rollUpPillRef.current.setAttribute('data-terra-rollup-pill-show-focus-styles', 'true');
    if (event.keyCode === _keycodeJs.KEY_RETURN || event.keyCode === _keycodeJs.KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelectRollUp(event);
    }
  };
  var handleRollUpPillMouseDown = function handleRollUpPillMouseDown() {
    rollUpPillRef.current.setAttribute('data-terra-rollup-pill-show-focus-styles', 'false');
  };
  var handleOnBlur = function handleOnBlur() {
    rollUpPillRef.current.setAttribute('data-terra-rollup-pill-show-focus-styles', 'true');
  };
  var rollUpLabel = isCollapsed && rollupCount > 0 ? intl.formatMessage({
    id: 'Terra.pills.label.rollupPill'
  }, {
    pillsNotVisibleCount: rollupCount
  }) : intl.formatMessage({
    id: 'Terra.pills.label.showLess'
  });
  var rollUpHint = isCollapsed ? intl.formatMessage({
    id: 'Terra.pills.hint.rollupPill'
  }, {
    pillsNotVisibleCount: rollupCount
  }) : intl.formatMessage({
    id: 'Terra.pills.hint.showLess'
  });
  var rollUpPillId = "terra-rollup-pill-".concat((0, _v.default)());
  var visuallyHiddenContentId = "terra-rollup-pill-".concat((0, _v.default)());
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "listitem",
    className: cx('pill-list-item')
  }, /*#__PURE__*/_react.default.createElement("button", {
    id: rollUpPillId,
    className: cx(['rollup-pill', theme.className]),
    onClick: handleOnSelectRollUp,
    onKeyDown: handleRollUpPillKeyDown,
    onMouseDown: handleRollUpPillMouseDown,
    onBlur: handleOnBlur,
    ref: rollUpPillRef,
    tabIndex: "0",
    type: "button",
    "aria-describedby": visuallyHiddenContentId,
    "data-terra-rollup-pill-show-focus-styles": true,
    "data-terra-rollup-pill": true
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: cx('rollup-pill-label')
  }, rollUpLabel)), /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
    id: visuallyHiddenContentId,
    text: rollUpHint,
    "aria-hidden": "true"
  }));
};
RollUpPill.propTypes = propTypes;
var _default = (0, _reactIntl.injectIntl)(RollUpPill);
exports.default = _default;