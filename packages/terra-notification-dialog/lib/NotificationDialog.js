"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ContentLayoutAsList", {
  enumerable: true,
  get: function get() {
    return _ContentLayoutAsList.default;
  }
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraAbstractModal = _interopRequireDefault(require("terra-abstract-modal"));
var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _reactIntl = require("react-intl");
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _NotificationIcon = _interopRequireDefault(require("./_NotificationIcon"));
var _ContentLayoutAsList = _interopRequireDefault(require("./_ContentLayoutAsList"));
var _NotificationDialogModule = _interopRequireDefault(require("./NotificationDialog.module.scss"));
var _excluded = ["dialogTitle", "startMessage", "endMessage", "content", "acceptAction", "rejectAction", "variant", "buttonOrder", "emphasizedAction", "custom", "intl"];
var cx = _bind.default.bind(_NotificationDialogModule.default);
var variants = ['hazard-high', 'hazard-medium', 'hazard-low', 'error', 'custom'];
var propTypes = {
  /**
   * The variant of notification to be rendered. This renders the dialog with the corresponding header and icon to the
   * variant concept.
   */
  variant: _propTypes.default.oneOf(variants).isRequired,
  /**
   * The title to describe the high-level overview of why the notification-dialog is being displayed to the user. Use a title that relates directly to the
   * message/actions provided in the dialog.
   */
  dialogTitle: _propTypes.default.string,
  /**
   * The text to provide more detail or defined terminology to be displayed at the start of the notification dialog body. Don’t repeat the title verbatim.
   */
  startMessage: _propTypes.default.string,
  /**
   * The text to provide more detail or defined terminology to be displayed at the end of the notification dialog body. Don’t repeat the title verbatim.
   */
  endMessage: _propTypes.default.string,
  /**
   *  The content to be inserted after `startMessage` and/or before `endMessage` to provide more details to the user in the dialog body. Don’t repeat the title verbatim.
   */
  content: _propTypes.default.node,
  /**
   * The button text and onclick values of the accept button.
   */
  acceptAction: _propTypes.default.shape({
    text: _propTypes.default.string,
    onClick: _propTypes.default.func
  }),
  /**
   * The button text and onclick values of the reject button.
   */
  rejectAction: _propTypes.default.shape({
    text: _propTypes.default.string,
    onClick: _propTypes.default.func
  }),
  /**
   * Determines the order of notification action buttons.
   */
  buttonOrder: _propTypes.default.oneOf(['acceptFirst', 'rejectFirst']),
  /**
   * Determines whether acceptAction, rejectAction or neither is emphasizedAction
   */
  emphasizedAction: _propTypes.default.oneOf(['none', 'accept', 'reject']),
  /**
   * The pieces to populate a notification-dialog when `variant="custom"`.
   */
  custom: _propTypes.default.shape({
    /**
     * The keyword used to represent & emphasis the intention of dialog message that is being shown to the user.
     */
    signalWord: _propTypes.default.string,
    /**
     * The class name used to set the icon as the background image to be used as the icon in the notification-dialog.
     */
    iconClassName: _propTypes.default.string
  }),
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  })
};
var defaultProps = {
  buttonOrder: 'acceptFirst',
  emphasizedAction: 'none',
  custom: {}
};
var actionSection = function actionSection(acceptAction, rejectAction, buttonOrder, emphasizedAction) {
  if (!acceptAction && !rejectAction) {
    return null;
  }
  var actionButtons = [];
  if (acceptAction) {
    var buttonVariant = emphasizedAction === 'accept' ? {
      variant: 'emphasis'
    } : {};
    actionButtons.push( /*#__PURE__*/_react.default.createElement(_terraButton.default, (0, _extends2.default)({}, buttonVariant, {
      "data-terra-notification-dialog-button": "accept",
      key: "accept",
      text: acceptAction.text,
      onClick: acceptAction.onClick
    })));
  }
  if (rejectAction) {
    var _buttonVariant = emphasizedAction === 'reject' ? {
      variant: 'emphasis'
    } : {};
    actionButtons.push( /*#__PURE__*/_react.default.createElement(_terraButton.default, (0, _extends2.default)({}, _buttonVariant, {
      "data-terra-notification-dialog-button": "reject",
      key: "reject",
      text: rejectAction.text,
      onClick: rejectAction.onClick
    })));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('actions')
  }, buttonOrder === 'acceptFirst' ? actionButtons : actionButtons.reverse());
};
var NotificationDialog = function NotificationDialog(props) {
  var theme = _react.default.useContext(_terraThemeContext.default);
  var dialogTitle = props.dialogTitle,
    startMessage = props.startMessage,
    endMessage = props.endMessage,
    content = props.content,
    acceptAction = props.acceptAction,
    rejectAction = props.rejectAction,
    variant = props.variant,
    buttonOrder = props.buttonOrder,
    emphasizedAction = props.emphasizedAction,
    custom = props.custom,
    intl = props.intl,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  if (acceptAction === undefined && rejectAction === undefined) {
    throw new Error('Either the `acceptAction` or `rejectAction` props must be provided for Notification dialog');
  }
  if (variant === undefined) {
    throw new Error('The variant must be provided to the Notification dialog');
  }
  var signalWord = variant === 'custom' ? custom.signalWord : intl.formatMessage({
    id: "Terra.notification.dialog.".concat(variant)
  });

  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
  return /*#__PURE__*/_react.default.createElement(_terraAbstractModal.default, {
    ariaLabel: signalWord,
    "aria-labelledby": "notification-dialog-signal-word",
    "aria-describedby": dialogTitle ? 'notification-dialog-title' : 'notification-dialog-signal-word',
    role: "alertdialog",
    classNameModal: (0, _classnames.default)(cx('notification-dialog', theme.className), customProps.className),
    isOpen: true,
    onRequestClose: function onRequestClose() {},
    closeOnEsc: false,
    closeOnOutsideClick: false,
    zIndex: "9000"
  }, /*#__PURE__*/_react.default.createElement(_focusTrapReact.default, {
    focusTrapOptions: {
      returnFocusOnDeactivate: true,
      clickOutsideDeactivates: false,
      escapeDeactivates: false
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('notification-dialog-inner-wrapper')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('notification-dialog-container'),
    tabIndex: "0",
    "data-terra-notification-dialog": true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx(['floating-header-background', variant])
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: cx(['header'])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx(['header-content'])
  }, /*#__PURE__*/_react.default.createElement(_NotificationIcon.default, {
    variant: variant,
    iconClassName: custom.iconClassName
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('header-container')
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "notification-dialog-signal-word",
    className: cx('signal-word')
  }, signalWord), /*#__PURE__*/_react.default.createElement("div", {
    id: "notification-dialog-title",
    className: cx('title')
  }, dialogTitle)))), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('body')
  }, startMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: cx('message')
  }, startMessage), content && /*#__PURE__*/_react.default.createElement("div", {
    className: cx('message')
  }, content), endMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: cx('message')
  }, endMessage)), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('footer')
  }, actionSection(acceptAction, rejectAction, buttonOrder, emphasizedAction))))));
  /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
};

NotificationDialog.propTypes = propTypes;
NotificationDialog.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(NotificationDialog);
exports.default = _default;