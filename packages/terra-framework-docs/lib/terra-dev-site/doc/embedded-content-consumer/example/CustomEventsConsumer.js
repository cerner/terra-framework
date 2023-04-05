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
var _terraEmbeddedContentConsumer = _interopRequireDefault(require("terra-embedded-content-consumer"));
var _xfc = require("xfc");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
_xfc.Consumer.init();
var CustomEventsConsumer = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CustomEventsConsumer, _React$Component);
  var _super = _createSuper(CustomEventsConsumer);
  function CustomEventsConsumer(props) {
    var _this;
    (0, _classCallCheck2.default)(this, CustomEventsConsumer);
    _this = _super.call(this, props);
    _this.onMount = _this.onMount.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleEventA = _this.handleEventA.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleEventB = _this.handleEventB.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(CustomEventsConsumer, [{
    key: "handleEventA",
    value: function handleEventA() {
      document.getElementById('CustomEvents').style.border = 'thick dashed #0000FF';
      this.frame.trigger('Event-Reply', {
        eventReply: 'eventA',
        borderColor: '#0000FF'
      });
    }
  }, {
    key: "handleEventB",
    value: function handleEventB() {
      document.getElementById('CustomEvents').style.border = 'thick dashed #00FF00';
      this.frame.trigger('Event-Reply', {
        eventReply: 'eventB',
        borderColor: '#00FF00'
      });
    }
  }, {
    key: "onMount",
    value: function onMount(frame) {
      this.frame = frame;
    }
  }, {
    key: "render",
    value: function render() {
      var eventHandlers = [{
        key: 'EventA',
        handler: this.handleEventA
      }, {
        key: 'EventB',
        handler: this.handleEventB
      }];
      return /*#__PURE__*/_react.default.createElement("div", {
        id: "CustomEvents"
      }, /*#__PURE__*/_react.default.createElement(_terraEmbeddedContentConsumer.default, {
        src: "/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider",
        options: {
          iframeAttrs: {
            title: 'Custom events example'
          }
        },
        onMount: this.onMount,
        eventHandlers: eventHandlers
      }));
    }
  }]);
  return CustomEventsConsumer;
}(_react.default.Component);
var _default = CustomEventsConsumer;
exports.default = _default;