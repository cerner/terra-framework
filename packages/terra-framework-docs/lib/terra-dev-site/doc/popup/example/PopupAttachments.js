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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _PopupAttachmentsModule = _interopRequireDefault(require("./PopupAttachments.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_PopupAttachmentsModule.default);
var ATTACHMENT_POSITIONS = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];
var generateOptions = function generateOptions(values) {
  return values.map(function (currentValue, index) {
    var keyValue = index;
    return /*#__PURE__*/_react.default.createElement("option", {
      key: keyValue,
      value: currentValue
    }, currentValue);
  });
};
function PopupAttachment() {
  var buttonElement = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(ATTACHMENT_POSITIONS[0]),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    contentAttachment = _useState4[0],
    setContentAttachment = _useState4[1];
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
  var handleContentAttachmentChange = function handleContentAttachmentChange(event) {
    setContentAttachment(event.target.value);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("select", {
    id: "ContentAttachment",
    name: "popupContentAttachment",
    onChange: handleContentAttachmentChange
  }, generateOptions(ATTACHMENT_POSITIONS)), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    className: cx('popup-wrapper'),
    text: "Open Popup",
    onClick: handleButtonClick,
    refCallback: setButtonNode
  })), /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
    attachmentBehavior: "auto",
    contentAttachment: contentAttachment,
    isOpen: open,
    targetRef: getButtonNode,
    onRequestClose: handleRequestClose
  }, /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
    title: "Popup Content"
  })));
}
var _default = PopupAttachment;
exports.default = _default;