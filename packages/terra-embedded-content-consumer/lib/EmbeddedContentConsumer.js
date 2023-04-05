"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _xfc = require("xfc");
var _excluded = ["src", "onMount", "onLaunch", "onAuthorize", "options", "eventHandlers"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var propTypes = {
  /**
   * The source URL of the content to load.
   */
  src: _propTypes.default.string.isRequired,
  /**
   * Notifies the component that the container has been mounted. Provides a reference
   * to this component to allow triggering messages on the embedded application.
   */
  onMount: _propTypes.default.func,
  /**
   * Notifies the component that the container has been launched.
   */
  onLaunch: _propTypes.default.func,
  /**
   * Notifies the component that the container has been authorized.
   */
  onAuthorize: _propTypes.default.func,
  /**
   * The component can be configured with consumer frame options.
   * See xfc consumer configuration for details: https://github.com/cerner/xfc
   */
  options: _propTypes.default.object,
  /**
  * A set of event handlers keyed by the event name.
  * Note: Binding the event handler is necessary to make `this` work in the callback.
  */
  eventHandlers: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string,
    handler: _propTypes.default.func
  }))
};
var EmbeddedContentConsumer = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(EmbeddedContentConsumer, _React$Component);
  var _super = _createSuper(EmbeddedContentConsumer);
  function EmbeddedContentConsumer() {
    (0, _classCallCheck2.default)(this, EmbeddedContentConsumer);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(EmbeddedContentConsumer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Mount the provided source as the application into the content wrapper.
      this.xfcFrame = _xfc.Consumer.mount(this.embeddedContentWrapper, this.props.src, this.props.options);

      // Notify that the consumer frame has mounted.
      if (this.props.onMount) {
        this.props.onMount(this.xfcFrame);
      }

      // Attach the event handlers to the xfc frame.
      this.addEventListener('xfc.launched', this.props.onLaunch);
      this.addEventListener('xfc.authorized', this.props.onAuthorize);

      // Attach custom event handlers to the xfc frame.
      this.addEventListeners(this.props.eventHandlers);
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(eventName, eventHandler) {
      if (eventName && eventHandler) {
        this.xfcFrame.on(eventName, eventHandler);
      }
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(customEvents) {
      var _this = this;
      (customEvents || []).forEach(function (e) {
        return _this.addEventListener(e.key, e.handler);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        src = _this$props.src,
        onMount = _this$props.onMount,
        onLaunch = _this$props.onLaunch,
        onAuthorize = _this$props.onAuthorize,
        options = _this$props.options,
        eventHandlers = _this$props.eventHandlers,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        ref: function ref(element) {
          _this2.embeddedContentWrapper = element;
        }
      }));
    }
  }]);
  return EmbeddedContentConsumer;
}(_react.default.Component);
EmbeddedContentConsumer.propTypes = propTypes;
var _default = EmbeddedContentConsumer;
exports.default = _default;