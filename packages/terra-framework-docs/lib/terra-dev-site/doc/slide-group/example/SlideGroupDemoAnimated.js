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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraSlideGroup = _interopRequireDefault(require("terra-slide-group"));
var _SlideGroupDemoModule = _interopRequireDefault(require("./SlideGroupDemo.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_SlideGroupDemoModule.default);
var SlideGroupDemo = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SlideGroupDemo, _React$Component);
  var _super = _createSuper(SlideGroupDemo);
  function SlideGroupDemo(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SlideGroupDemo);
    _this = _super.call(this, props);
    _this.increment = _this.increment.bind((0, _assertThisInitialized2.default)(_this));
    _this.decrement = _this.decrement.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      counter: 1
    };
    return _this;
  }
  (0, _createClass2.default)(SlideGroupDemo, [{
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
      for (var i = 0; i < this.state.counter; i += 1) {
        slides.push( /*#__PURE__*/_react.default.createElement("div", {
          key: "Slide ".concat(i),
          className: cx('slide')
        }, /*#__PURE__*/_react.default.createElement("h2", null, "Slide", i), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          onClick: this.increment
        }, "Increment"), i !== 0 ? /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          onClick: this.decrement
        }, "Decrement") : null));
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('container')
      }, /*#__PURE__*/_react.default.createElement(_terraSlideGroup.default, {
        items: slides,
        isAnimated: this.props.isAnimated
      }));
    }
  }]);
  return SlideGroupDemo;
}(_react.default.Component);
SlideGroupDemo.propTypes = {
  isAnimated: _propTypes.default.bool
};
var AnimatedSlideGroup = function AnimatedSlideGroup() {
  return /*#__PURE__*/_react.default.createElement(SlideGroupDemo, {
    isAnimated: true
  });
};
var _default = AnimatedSlideGroup;
exports.default = _default;