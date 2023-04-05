"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _terraDocs = require("@cerner/terra-docs");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var HEIGHT_KEYS = Object.keys(_terraPopup.default.Opts.heights);
var WIDTH_KEYS = Object.keys(_terraPopup.default.Opts.widths);
function PopupDimensions() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)('Default'),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    popupContentHeight = _useState4[0],
    setPopupContentHeight = _useState4[1];
  var _useState5 = (0, _react.useState)('Default'),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    popupContentWidth = _useState6[0],
    setPopupContentWidth = _useState6[1];
  /* eslint-disable */
  var PopupContent = function PopupContent(_ref) {
    var contentStyle = _ref.contentStyle,
      isHeightBounded = _ref.isHeightBounded,
      isWidthBounded = _ref.isWidthBounded;
    var title = 'Popup Content';
    if (isHeightBounded) {
      title += ' HeightBounded';
    }
    if (isWidthBounded) {
      title += ' WidthBounded';
    }
    return /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
      title: title,
      style: contentStyle
    });
  };
  /* eslint-enable */

  var generateOptions = function generateOptions(values) {
    return values.map(function (currentValue, index) {
      var keyValue = index;
      return /*#__PURE__*/_react.default.createElement("option", {
        key: keyValue,
        value: currentValue
      }, currentValue);
    });
  };
  var handleButtonClick = function handleButtonClick() {
    setOpen(true);
  };
  var handleRequestClose = function handleRequestClose() {
    setOpen(false);
  };
  var handleSelectHeightChange = function handleSelectHeightChange(event) {
    setPopupContentHeight(event.target.value);
  };
  var handleSelectWidthChange = function handleSelectWidthChange(event) {
    setPopupContentWidth(event.target.value);
  };
  var contentDimensions = {};
  if (popupContentHeight !== 'Default') {
    contentDimensions.contentHeight = popupContentHeight;
  }
  if (popupContentWidth !== 'Default') {
    contentDimensions.contentWidth = popupContentWidth;
  }
  var contentStyle = {};
  if (popupContentHeight === 'auto') {
    contentStyle.height = '500px';
  }
  if (popupContentWidth === 'auto') {
    contentStyle.width = '500px';
  }
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "popupContentHeight"
  }, "Pop Content Height"), /*#__PURE__*/_react.default.createElement("select", {
    id: "popupContentHeight",
    name: "popupContentHeight",
    value: popupContentHeight,
    onChange: handleSelectHeightChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "Default"
  }, "Default"), generateOptions(HEIGHT_KEYS)), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "popupContentWidth"
  }, "Pop Content Width"), /*#__PURE__*/_react.default.createElement("select", {
    id: "popupContentWidth",
    name: "popupContentWidth",
    value: popupContentWidth,
    onChange: handleSelectWidthChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "Default"
  }, "Default"), generateOptions(WIDTH_KEYS)), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_terraPopup.default, (0, _extends2.default)({}, contentDimensions, {
    classNameContent: "test-content",
    isOpen: open,
    onRequestClose: handleRequestClose,
    targetRef: function targetRef() {
      return document.getElementById('popup-dimensions');
    }
  }), /*#__PURE__*/_react.default.createElement(PopupContent, {
    contentStyle: contentStyle
  })), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "popup-dimensions",
    text: "".concat(popupContentHeight || 'Default', " x ").concat(popupContentWidth || 'Default', " Popup"),
    onClick: handleButtonClick
  })));
}
var _default = PopupDimensions;
exports.default = _default;