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
var _terraNotificationDialog = _interopRequireDefault(require("terra-notification-dialog"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var NoVariantNotificationDialog = function NoVariantNotificationDialog() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    buttonOrder = _useState4[0],
    setButtonOrder = _useState4[1];
  var handleCloseModal = function handleCloseModal() {
    setIsOpen(false);
  };
  var handleOpenModal = function handleOpenModal(buttonOrderClicked) {
    setButtonOrder(buttonOrderClicked);
    setIsOpen(true);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen && /*#__PURE__*/_react.default.createElement(_terraNotificationDialog.default, {
    buttonOrder: buttonOrder,
    variant: "hazard-low",
    dialogTitle: "Use a Title That Relates Directly to The Choices",
    startMessage: "The Main Instruction is text used to provide more detail or define terminology. Don\u2019t repeat the title verbatim.",
    acceptAction: {
      text: 'accept',
      onClick: handleCloseModal
    },
    rejectAction: {
      text: 'reject',
      onClick: handleCloseModal
    }
  }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    text: "Accept Button First",
    onClick: function onClick() {
      return handleOpenModal('acceptFirst');
    }
  }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    text: "Reject Button First",
    onClick: function onClick() {
      return handleOpenModal('rejectFirst');
    }
  }));
};
var _default = NoVariantNotificationDialog;
exports.default = _default;