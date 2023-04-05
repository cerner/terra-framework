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
var _terraNotificationDialog = _interopRequireWildcard(require("terra-notification-dialog"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ContentNotificationDialog = function ContentNotificationDialog() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var handleOpenModal = function handleOpenModal() {
    setIsOpen(true);
  };
  var handleCloseModal = function handleCloseModal() {
    setIsOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen && /*#__PURE__*/_react.default.createElement(_terraNotificationDialog.default, {
    variant: "hazard-medium",
    dialogTitle: "Use a Title That Relates Directly to the Actions",
    startMessage: "The message should clearly provide a contextual description of the issue concisely, use ContentLayoutAsList when enumerating a list of relevant items:",
    content: /*#__PURE__*/_react.default.createElement(_terraNotificationDialog.ContentLayoutAsList, {
      items: ['Item 1', 'Item 2']
    }),
    endMessage: "If further action is needed, provide relevant actions and ask the user to confirm how to proceed, or include a resolution statement that explains how to resolve the issue or what steps to take next.",
    acceptAction: {
      text: 'Emphasized Accept Action',
      onClick: handleCloseModal
    },
    rejectAction: {
      text: 'Reject Action',
      onClick: handleCloseModal
    },
    buttonOrder: "acceptFirst",
    emphasizedAction: "accept"
  }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    text: "Trigger Notification Dialog",
    onClick: handleOpenModal
  }));
};
var _default = ContentNotificationDialog;
exports.default = _default;