"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraNotificationDialog = _interopRequireDefault(require("terra-notification-dialog"));
var _PromptRegistrationContext = _interopRequireWildcard(require("./PromptRegistrationContext"));
var _withPromptRegistration = _interopRequireDefault(require("./_withPromptRegistration"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var propTypes = {
  /**
   * Components to render within the context of the NavigationPromptCheckpoint. Any NavigationPrompts rendered within
   * these child components will be registered to this NavigationPromptCheckpoint instance.
   */
  children: _propTypes.default.node,
  /**
   * A function that will be executed when NavigationPrompts are registered to or unregistered from the NavigationPromptCheckpoint instance.
   * This can be used to track registered prompts outside of a NavigationPromptCheckpoint and handle prompt resolution directly, if necessary.
   * The function will be provided with an array of data objects representing the registered NavigationPrompts as the sole argument. An empty
   * Array will be provided when no prompts are registered.
   *
   * Function Example:
   *
   * ```
   * (arrayOfPrompts) => {
   *   arrayOfPrompts.forEach((prompt) => {
   *     console.log(prompt.description);
   *     console.log(prompt.metaData);
   *   })
   *   this.myLocalPromptRegistry = arrayOfPrompts;
   * }
   * ```
   */
  onPromptChange: _propTypes.default.func,
  /**
   * @private
   * An object containing prompt registration APIs provided through the PromptRegistrationContext.
   */
  promptRegistration: _PromptRegistrationContext.promptRegistrationContextValueShape.isRequired
};
var NavigationPromptCheckpoint = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(NavigationPromptCheckpoint, _React$Component);
  var _super = _createSuper(NavigationPromptCheckpoint);
  function NavigationPromptCheckpoint(props) {
    var _this;
    (0, _classCallCheck2.default)(this, NavigationPromptCheckpoint);
    _this = _super.call(this, props);
    _this.registerPrompt = _this.registerPrompt.bind((0, _assertThisInitialized2.default)(_this));
    _this.unregisterPrompt = _this.unregisterPrompt.bind((0, _assertThisInitialized2.default)(_this));
    _this.resolvePrompts = _this.resolvePrompts.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderNotificationDialog = _this.renderNotificationDialog.bind((0, _assertThisInitialized2.default)(_this));
    _this.registeredPrompts = {};
    _this.promptProviderValue = {
      registerPrompt: _this.registerPrompt,
      unregisterPrompt: _this.unregisterPrompt
    };
    _this.state = {
      notificationDialogProps: undefined
    };
    return _this;
  }
  (0, _createClass2.default)(NavigationPromptCheckpoint, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var onPromptChange = this.props.onPromptChange;
      if (onPromptChange) {
        /**
         * The consumer is notified on unmount with an empty set of prompt data to clean up any previously mounted prompts.
         */
        onPromptChange([]);
      }
    }
  }, {
    key: "registerPrompt",
    value: function registerPrompt(promptId, description, metaData) {
      var _this$props = this.props,
        onPromptChange = _this$props.onPromptChange,
        promptRegistration = _this$props.promptRegistration;
      if (!promptId && process.env.NODE_ENV !== 'production') {
        /* eslint-disable no-console */
        console.warn('A NavigationPrompt cannot be registered without an identifier.');
        /* eslint-enable no-console */
        return;
      }
      this.registeredPrompts[promptId] = {
        description: description,
        metaData: metaData
      };
      if (onPromptChange) {
        onPromptChange(NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts));
      }
      promptRegistration.registerPrompt(promptId, description, metaData);
    }
  }, {
    key: "unregisterPrompt",
    value: function unregisterPrompt(promptId) {
      var _this$props2 = this.props,
        onPromptChange = _this$props2.onPromptChange,
        promptRegistration = _this$props2.promptRegistration;
      if (!this.registeredPrompts[promptId]) {
        return;
      }
      delete this.registeredPrompts[promptId];
      if (onPromptChange) {
        onPromptChange(NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts));
      }
      promptRegistration.unregisterPrompt(promptId);
    }

    /**
     * `resolvePrompts` returns a Promise that will be resolved or rejected based upon the presence of child prompts and
     * the the actions taken by a user from the checkpoint's NotificationDialog.
     *
     * This function is part of the NavigationPromptCheckpoint's public API. Changes to this function name or overall functionality
     * will impact the package's version.
     */
  }, {
    key: "resolvePrompts",
    value: function resolvePrompts() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      /**
        * If no prompts are registered, then no prompts must be rendered.
        */
      if (!Object.keys(this.registeredPrompts).length) {
        return Promise.resolve();
      }
      var showDialogOptions = options;
      if (typeof showDialogOptions === 'function') {
        showDialogOptions = showDialogOptions(NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts));
      }

      /**
       * Otherwise, the NotificationDialog is shown.
       */
      return new Promise(function (resolve, reject) {
        _this2.setState({
          notificationDialogProps: {
            dialogTitle: showDialogOptions.dialogTitle,
            title: showDialogOptions.title,
            message: showDialogOptions.message,
            startMessage: showDialogOptions.startMessage,
            content: showDialogOptions.content,
            endMessage: showDialogOptions.endMessage,
            acceptButtonText: showDialogOptions.acceptButtonText,
            rejectButtonText: showDialogOptions.rejectButtonText,
            emphasizedAction: showDialogOptions.emphasizedAction,
            buttonOrder: showDialogOptions.buttonOrder,
            onAccept: resolve,
            onReject: reject
          }
        });
      });
    }
  }, {
    key: "renderNotificationDialog",
    value: function renderNotificationDialog() {
      var _this3 = this;
      var _this$state$notificat = this.state.notificationDialogProps,
        dialogTitle = _this$state$notificat.dialogTitle,
        title = _this$state$notificat.title,
        message = _this$state$notificat.message,
        startMessage = _this$state$notificat.startMessage,
        endMessage = _this$state$notificat.endMessage,
        content = _this$state$notificat.content,
        acceptButtonText = _this$state$notificat.acceptButtonText,
        rejectButtonText = _this$state$notificat.rejectButtonText,
        emphasizedAction = _this$state$notificat.emphasizedAction,
        buttonOrder = _this$state$notificat.buttonOrder,
        onAccept = _this$state$notificat.onAccept,
        onReject = _this$state$notificat.onReject;
      var acceptButton = {
        text: acceptButtonText,
        onClick: function onClick() {
          _this3.setState({
            notificationDialogProps: undefined
          }, onAccept);
        }
      };
      var rejectButton = {
        text: rejectButtonText,
        onClick: function onClick() {
          _this3.setState({
            notificationDialogProps: undefined
          }, onReject);
        }
      };
      return /*#__PURE__*/_react.default.createElement(_terraNotificationDialog.default, {
        dialogTitle: dialogTitle || title,
        startMessage: startMessage || message,
        endMessage: endMessage,
        content: content,
        acceptAction: acceptButton,
        rejectAction: rejectButton,
        buttonOrder: buttonOrder,
        emphasizedAction: emphasizedAction,
        variant: "hazard-medium"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var notificationDialogProps = this.state.notificationDialogProps;
      return /*#__PURE__*/_react.default.createElement(_PromptRegistrationContext.default.Provider, {
        value: this.promptProviderValue
      }, children, notificationDialogProps ? this.renderNotificationDialog() : undefined);
    }
  }], [{
    key: "getPromptArray",
    value: function getPromptArray(prompts) {
      return Object.keys(prompts).map(function (id) {
        return prompts[id];
      });
    }
  }]);
  return NavigationPromptCheckpoint;
}(_react.default.Component);
NavigationPromptCheckpoint.propTypes = propTypes;
var _default = (0, _withPromptRegistration.default)(NavigationPromptCheckpoint);
exports.default = _default;