"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _terraDocs = require("@cerner/terra-docs");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function PopupArrow() {
  var buttonElement = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var setButtonNode = function setButtonNode(node) {
    buttonElement.current = node;
  };
  var getButtonNode = function getButtonNode() {
    return buttonElement.current;
  };
  var handleButtonClick = function handleButtonClick() {
    setOpen(true);
  };
  var handleRequestClose = function handleRequestClose() {
    setOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    text: "Arrow Popup",
    onClick: handleButtonClick,
    refCallback: setButtonNode
  }), /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
    isOpen: open,
    onRequestClose: handleRequestClose,
    targetRef: getButtonNode,
    isArrowDisplayed: true
  }, /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
    title: "Popup Content"
  })));
}
var _default = PopupArrow;
exports.default = _default;