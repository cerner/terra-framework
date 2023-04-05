"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraNotificationDialog = _interopRequireDefault(require("terra-notification-dialog"));
var _excluded = ["variant"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = {
  variant: _propTypes.default.oneOf(['hazard-high', 'hazard-medium', 'hazard-low', 'error', 'custom'])
};
var NotificationDialogVariant = function NotificationDialogVariant(props) {
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
  var variant = props.variant,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen && /*#__PURE__*/_react.default.createElement(_terraNotificationDialog.default, (0, _extends2.default)({}, customProps, {
    variant: variant,
    dialogTitle: "The title relates directly to the choices.",
    startMessage: "The Main Instruction is text used to provide more detail or define terminology. Don\u2019t repeat the title verbatim.",
    acceptAction: {
      text: 'Confirm',
      onClick: handleCloseModal
    },
    rejectAction: {
      text: 'Close',
      onClick: handleCloseModal
    },
    buttonOrder: "acceptFirst",
    emphasizedAction: "accept"
  })), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "trigger-notification-dialog",
    text: "Trigger NotificationDialog",
    onClick: handleOpenModal
  }));
};
NotificationDialogVariant.propTypes = propTypes;
var _default = NotificationDialogVariant;
exports.default = _default;