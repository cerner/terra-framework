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
    _this.onClick = _this.onClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  // eslint-disable-next-line
  (0, _createClass2.default)(EmbeddedContent, [{
    key: "onClick",
    value: function onClick() {
      _xfc.Provider.trigger('EventA');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement("h1", null, "Listening to Custom Event"), /*#__PURE__*/_react.default.createElement("p", null, "A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. "), /*#__PURE__*/_react.default.createElement("p", null, "This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker."), /*#__PURE__*/_react.default.createElement("ol", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("p", null, "Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("p", null, "The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content"))), /*#__PURE__*/_react.default.createElement("button", {
        id: "EventA",
        onClick: this.onClick,
        type: "button"
      }, "Set Border Color!"));
    }
  }]);
  return EmbeddedContent;
}(_react.default.Component);
var CustomEventProvider = function CustomEventProvider() {
  return /*#__PURE__*/_react.default.createElement(_EmbeddedContentProviderTestTemplate.default, null, /*#__PURE__*/_react.default.createElement(EmbeddedContent, null));
};
var _default = CustomEventProvider;
exports.default = _default;