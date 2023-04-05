"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
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
var _xfc = require("xfc");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _EmbeddedContentProviderTestTemplate = _interopRequireDefault(require("terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate"));
var _EmbeddedContentConsumerCommonModule = _interopRequireDefault(require("./EmbeddedContentConsumerCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_EmbeddedContentConsumerCommonModule.default);
var EmbeddedContent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(EmbeddedContent, _React$Component);
  var _super = _createSuper(EmbeddedContent);
  function EmbeddedContent(props) {
    var _this;
    (0, _classCallCheck2.default)(this, EmbeddedContent);
    _this = _super.call(this, props);
    _this.addEventListener = _this.addEventListener.bind((0, _assertThisInitialized2.default)(_this));
    _this.onClickA = _this.onClickA.bind((0, _assertThisInitialized2.default)(_this));
    _this.onClickB = _this.onClickB.bind((0, _assertThisInitialized2.default)(_this));
    _this.addEventListener('Event-Reply');
    return _this;
  }

  // eslint-disable-next-line
  (0, _createClass2.default)(EmbeddedContent, [{
    key: "onClickA",
    value: function onClickA() {
      _xfc.Provider.trigger('EventA');
    }

    // eslint-disable-next-line
  }, {
    key: "onClickB",
    value: function onClickB() {
      _xfc.Provider.trigger('EventB');
    }

    // eslint-disable-next-line
  }, {
    key: "addEventListener",
    value: function addEventListener(eventName) {
      _xfc.Provider.on(eventName, function (event) {
        document.getElementById('embedded-content-consumer-reply').innerHTML = "embedded-content-consumer reply: ".concat(JSON.stringify(event));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement("h1", null, "Communication Between the Consumer and Embedded Content"), /*#__PURE__*/_react.default.createElement("p", null, "Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider."), /*#__PURE__*/_react.default.createElement("p", null, "This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content."), /*#__PURE__*/_react.default.createElement("ol", {
        id: "embedded-content-custom-events-communication-explination"
      }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("p", null, "Click the button `Trigger Event A!` below for the provider (i.e. embedded web content) to send the message `EventA`.")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("p", null, "The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("p", null, "Click the button `Trigger Event B!` below for the provider to send the second event message `EventB`.")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("p", null, "The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider."))), /*#__PURE__*/_react.default.createElement("p", null, "Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. "), /*#__PURE__*/_react.default.createElement("button", {
        id: "EventA",
        onClick: this.onClickA,
        type: "button"
      }, "Trigger Event A!"), /*#__PURE__*/_react.default.createElement("button", {
        id: "EventB",
        onClick: this.onClickB,
        type: "button"
      }, "Trigger Event B!"), /*#__PURE__*/_react.default.createElement("div", {
        id: "embedded-content-consumer-reply"
      }, "No message has been sent."));
    }
  }]);
  return EmbeddedContent;
}(_react.default.Component);
var CustomEventsProvider = function CustomEventsProvider() {
  return /*#__PURE__*/_react.default.createElement(_EmbeddedContentProviderTestTemplate.default, null, /*#__PURE__*/_react.default.createElement(EmbeddedContent, null));
};
var _default = CustomEventsProvider;
exports.default = _default;