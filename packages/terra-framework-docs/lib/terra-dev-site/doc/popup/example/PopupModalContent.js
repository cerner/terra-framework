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
var _terraDisclosureManager = require("terra-disclosure-manager");
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _terraDocs = require("@cerner/terra-docs");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _PopupModalContentModule = _interopRequireDefault(require("./PopupModalContent.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_PopupModalContentModule.default);
function ModalContainer(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var handlePopupButtonClick = function handlePopupButtonClick() {
    setOpen(true);
  };
  var handlePopupRequestClose = function handlePopupRequestClose() {
    setOpen(false);
  };
  var disclosureManager = props.disclosureManager;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-container')
  }, /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
    isArrowDisplayed: true,
    isOpen: open,
    onRequestClose: handlePopupRequestClose,
    targetRef: function targetRef() {
      return document.getElementById('popup-in-modal');
    }
  }, /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
    title: "Popup Content"
  })), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "popup-in-modal",
    text: "Popup In Modal",
    onClick: handlePopupButtonClick
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    className: "close-disclosure",
    text: "Close Disclosure",
    onClick: disclosureManager.closeDisclosure
  })));
}
ModalContainer.propTypes = {
  disclosureManager: _terraDisclosureManager.disclosureManagerShape
};
var _default = (0, _terraDisclosureManager.withDisclosureManager)(ModalContainer);
exports.default = _default;