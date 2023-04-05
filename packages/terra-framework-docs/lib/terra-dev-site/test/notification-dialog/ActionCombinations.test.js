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
var _terraNotificationDialog = _interopRequireDefault(require("terra-notification-dialog"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CompleteNotificationDialog = function CompleteNotificationDialog() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)('accept'),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    emphasizedAction = _useState4[0],
    setEmphasizedAction = _useState4[1];
  var _useState5 = (0, _react.useState)('acceptFirst'),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    buttonOrder = _useState6[0],
    setButtonOrder = _useState6[1];
  var handleCloseModal = function handleCloseModal() {
    setIsOpen(false);
  };
  var acceptAction = (0, _react.useMemo)(function () {
    return {
      text: 'accept',
      onClick: handleCloseModal
    };
  }, []);
  var rejectAction = (0, _react.useMemo)(function () {
    return {
      text: 'reject',
      onClick: handleCloseModal
    };
  }, []);
  var _useState7 = (0, _react.useState)({
      acceptAction: acceptAction
    }),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    actions = _useState8[0],
    setActions = _useState8[1];
  var handleOpenModal = function handleOpenModal(actionType) {
    var actionsProps = {};
    if (actionType.toLowerCase().includes('accept')) {
      actionsProps.acceptAction = acceptAction;
    }
    if (actionType.toLowerCase().includes('reject')) {
      actionsProps.rejectAction = rejectAction;
    }
    setActions(actionsProps);
    setIsOpen(true);
  };
  var handleOpenButtonOrderModal = function handleOpenButtonOrderModal(selectedButtonOrder) {
    setActions({
      acceptAction: acceptAction,
      rejectAction: rejectAction
    });
    setButtonOrder(selectedButtonOrder);
    setIsOpen(true);
  };
  var handleOpenEmphasizedModal = function handleOpenEmphasizedModal(selectedAsEmphasized) {
    setActions({
      acceptAction: acceptAction,
      rejectAction: rejectAction
    });
    setEmphasizedAction(selectedAsEmphasized);
    setIsOpen(true);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen && /*#__PURE__*/_react.default.createElement(_terraNotificationDialog.default, (0, _extends2.default)({
    variant: "hazard-medium",
    dialogTitle: "Action Options in Notification Dialog",
    startMessage: "The notification dialog can display one or two buttons to accept and/or reject the message and close the dialog.",
    content: "The buttonOrder prop can be used to flip which button is first when both buttons are rendered.",
    endMessage: "The emphasizedAction prop indicates whether acceptAction, rejectAction or neither action should be emphasized."
  }, actions, {
    buttonOrder: buttonOrder,
    emphasizedAction: emphasizedAction
  })), /*#__PURE__*/_react.default.createElement("h2", null, "Actions Options"), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "accept",
    text: "Accept Action",
    onClick: function onClick() {
      return handleOpenModal('accept');
    }
  }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "reject",
    text: "Reject Action",
    onClick: function onClick() {
      return handleOpenModal('reject');
    }
  }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "acceptAndReject",
    text: "Accept and Reject Action",
    onClick: function onClick() {
      return handleOpenModal('acceptAndReject');
    }
  }), /*#__PURE__*/_react.default.createElement("h2", null, "Button Order Options"), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "acceptFirst",
    text: "Accept Action First",
    onClick: function onClick() {
      return handleOpenButtonOrderModal('acceptFirst');
    }
  }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "rejectFirst",
    text: "Reject Action First",
    onClick: function onClick() {
      return handleOpenButtonOrderModal('rejectFirst');
    }
  }), /*#__PURE__*/_react.default.createElement("h2", null, "Emphasized Button Options"), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "acceptEmphasized",
    text: "Accept Action Emphasized",
    onClick: function onClick() {
      return handleOpenEmphasizedModal('accept');
    }
  }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "rejectEmphasized",
    text: "Reject Action Emphasized",
    onClick: function onClick() {
      return handleOpenEmphasizedModal('reject');
    }
  }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "neitherEmphasized",
    text: "Neither Emphasized",
    onClick: function onClick() {
      return handleOpenEmphasizedModal('none');
    }
  }));
};
var _default = CompleteNotificationDialog;
exports.default = _default;