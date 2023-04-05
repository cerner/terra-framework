"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _terraModalManager = _interopRequireDefault(require("terra-modal-manager"));
var _terraNotificationDialog = _interopRequireDefault(require("terra-notification-dialog"));
var _exampleStylesModule = _interopRequireDefault(require("./example-styles.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_exampleStylesModule.default);

/**
 * This example file contains three React Components:
 *    - ModalManagerExample - renders a ModalManager and the ModalContainer.
 *    - ModalContainer - provide a button to disclose the ModalContent.
 *    - ModalContent - provides the example showing the Notification Dialog renders over modal content.
 * Typically Terra would recommend breaking these into three files, but we condense them to one for documentation purposes.
 */

var ModalContent = function ModalContent() {
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
    startMessage: "The message should clearly provide a contextual description of the issue concisely, and include a resolution statement that explains how to resolve the issue or what steps to take next.",
    endMessage: "If further action is needed, provide relevant actions and ask the user to confirm how to proceed.",
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
var ModalContainer = function ModalContainer() {
  var disclosureManager = (0, _react.useContext)(_terraDisclosureManager.DisclosureManagerContext);
  var disclose = function disclose() {
    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: 'ModalContent',
        title: 'Example Modal Content',
        component: /*#__PURE__*/_react.default.createElement(ModalContent, null)
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    text: "Trigger Modal",
    onClick: disclose
  });
};
var ModalManagerExample = function ModalManagerExample() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('example-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraModalManager.default, null, /*#__PURE__*/_react.default.createElement(ModalContainer, null)));
};
var _default = ModalManagerExample;
exports.default = _default;