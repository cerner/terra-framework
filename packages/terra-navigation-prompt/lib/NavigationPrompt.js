"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _v = _interopRequireDefault(require("uuid/v4"));
var _withPromptRegistration = _interopRequireDefault(require("./_withPromptRegistration"));
var _PromptRegistrationContext = require("./PromptRegistrationContext");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var propTypes = {
  /**
   * A string describing the content or concept for which the NavigationPrompt is being rendered.
   */
  description: _propTypes.default.string,
  /**
   * An object containing any other pertinent information related to the NavigationPrompt.
   */
  metaData: _propTypes.default.object,
  /**
   * @private
   * An object containing prompt registration APIs provided through the PromptRegistrationContext.
   */
  promptRegistration: _PromptRegistrationContext.promptRegistrationContextValueShape.isRequired
};
var NavigationPrompt = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(NavigationPrompt, _React$Component);
  var _super = _createSuper(NavigationPrompt);
  function NavigationPrompt(props) {
    var _this;
    (0, _classCallCheck2.default)(this, NavigationPrompt);
    _this = _super.call(this, props);

    /**
     * A unique identifier is generated for each NavigationPrompt during construction. This will be used to
     * uniquely register/unregister the prompt with ancestor checkpoints without requiring consumers to
     * define unique identifiers themselves.
     */
    _this.uuid = (0, _v.default)();
    return _this;
  }
  (0, _createClass2.default)(NavigationPrompt, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        description = _this$props.description,
        metaData = _this$props.metaData,
        promptRegistration = _this$props.promptRegistration;

      /**
       * If the promptRegistration value is the ProviderRegistrationContext's default value,
       * then there is not a matching NavigationPromptCheckpoint above it in the hierarchy.
       * This is possible but likely not intentional, so the component warns.
       */
      if (promptRegistration.isDefaultContextValue && process.env.NODE_ENV !== 'production') {
        /* eslint-disable no-console */
        console.warn('A NavigationPrompt was not rendered within the context of a NavigationPromptCheckpoint. If this is unexpected, validate that the expected version of the terra-navigation-prompt package is installed.');
        /* eslint-enable no-console */
      }

      promptRegistration.registerPrompt(this.uuid, description, metaData);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props2 = this.props,
        description = _this$props2.description,
        metaData = _this$props2.metaData;
      if (description !== nextProps.description || metaData !== nextProps.metaData) {
        return true;
      }
      return false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
        description = _this$props3.description,
        metaData = _this$props3.metaData,
        promptRegistration = _this$props3.promptRegistration;
      promptRegistration.registerPrompt(this.uuid, description, metaData);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.promptRegistration.unregisterPrompt(this.uuid);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return NavigationPrompt;
}(_react.default.Component);
NavigationPrompt.propTypes = propTypes;
var _default = (0, _withPromptRegistration.default)(NavigationPrompt);
exports.default = _default;