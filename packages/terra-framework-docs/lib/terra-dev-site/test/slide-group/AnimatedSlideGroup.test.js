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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraSlideGroup = _interopRequireDefault(require("terra-slide-group"));
var _SlideGroupDemoModule = _interopRequireDefault(require("../../doc/slide-group/example/SlideGroupDemo.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_SlideGroupDemoModule.default);
var SlideGroupExample = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SlideGroupExample, _React$Component);
  var _super = _createSuper(SlideGroupExample);
  function SlideGroupExample(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SlideGroupExample);
    _this = _super.call(this, props);
    _this.state = {
      counter: 1
    };
    _this.increment = _this.increment.bind((0, _assertThisInitialized2.default)(_this));
    _this.decrement = _this.decrement.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(SlideGroupExample, [{
    key: "increment",
    value: function increment() {
      this.setState(function (prevState) {
        return {
          counter: prevState.counter + 1
        };
      });
    }
  }, {
    key: "decrement",
    value: function decrement() {
      this.setState(function (prevState) {
        return {
          counter: prevState.counter - 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var slides = [];
      for (var i = 1; i <= this.state.counter; i += 1) {
        slides.push( /*#__PURE__*/_react.default.createElement("div", {
          key: i
        }, /*#__PURE__*/_react.default.createElement("h2", null, "Slide", ' ', i), /*#__PURE__*/_react.default.createElement("br", null), i !== 4 ? /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          id: "increment-".concat(i),
          className: cx('button'),
          onClick: this.increment
        }, "Increment") : null, i !== 1 ? /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          id: "decrement-".concat(i),
          className: cx('button'),
          onClick: this.decrement
        }, "Decrement") : null));
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement(_terraSlideGroup.default, {
        items: slides,
        isAnimated: true,
        id: "SlideGroup"
      }));
    }
  }]);
  return SlideGroupExample;
}(_react.default.Component);
var _default = SlideGroupExample;
exports.default = _default;