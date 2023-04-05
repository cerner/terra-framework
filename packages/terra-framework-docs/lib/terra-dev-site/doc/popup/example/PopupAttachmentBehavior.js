"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraDocs = require("@cerner/terra-docs");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _PopupAttachmentBehaviorModule = _interopRequireDefault(require("./PopupAttachmentBehavior.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_PopupAttachmentBehaviorModule.default);
function PopupAttachmentBehavior() {
  var buttonElement = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)('auto'),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    contentBehavior = _useState4[0],
    setContentBehavior = _useState4[1];
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
  var handleChange = function handleChange(event) {
    setContentBehavior(event.target.value);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "popup-behavior"
  }, "Attachment Behavior"), /*#__PURE__*/_react.default.createElement("select", {
    id: "popup-behavior",
    onChange: handleChange,
    value: contentBehavior,
    className: cx('selection-list')
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "auto"
  }, "Auto"), /*#__PURE__*/_react.default.createElement("option", {
    value: "flip"
  }, "Flip"), /*#__PURE__*/_react.default.createElement("option", {
    value: "push"
  }, "Push")), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    className: cx('popup-wrapper'),
    text: "Open Popup",
    onClick: handleButtonClick,
    refCallback: setButtonNode
  })), /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
    attachmentBehavior: contentBehavior,
    contentAttachment: "top center",
    isOpen: open,
    targetRef: getButtonNode,
    onRequestClose: handleRequestClose
  }, /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
    title: "Popup Content"
  })));
}
var _default = PopupAttachmentBehavior;
exports.default = _default;