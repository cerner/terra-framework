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
var _HookshotTestTemplate = _interopRequireDefault(require("./common/HookshotTestTemplate"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var HookshotBoundingContainer = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(HookshotBoundingContainer, _React$Component);
  var _super = _createSuper(HookshotBoundingContainer);
  function HookshotBoundingContainer(props) {
    var _this;
    (0, _classCallCheck2.default)(this, HookshotBoundingContainer);
    _this = _super.call(this, props);
    _this.handlePositionClick = _this.handlePositionClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      position: 'up'
    };
    return _this;
  }
  (0, _createClass2.default)(HookshotBoundingContainer, [{
    key: "handlePositionClick",
    value: function handlePositionClick(event) {
      this.setState({
        position: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var type = 'up';
      var targetAttachment;
      var contentAttachment;
      if (this.state.position === 'up') {
        type = 'container-up';
      } else if (this.state.position === 'down') {
        type = 'container-down';
      } else if (this.state.position === 'left') {
        type = 'container-left';
        targetAttachment = 'middle end';
        contentAttachment = 'middle start';
      } else if (this.state.position === 'right') {
        type = 'container-right';
      }
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
        isOpen: false,
        type: type,
        targetAttachment: targetAttachment,
        contentAttachment: contentAttachment,
        id: "bounding-container"
      }), /*#__PURE__*/_react.default.createElement("p", null, " Position should be pushed by bounding container "), /*#__PURE__*/_react.default.createElement("p", null, " Choose position behavior "), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "push-up",
        value: "up",
        onClick: this.handlePositionClick
      }, "Pushed Up"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "push-down",
        value: "down",
        onClick: this.handlePositionClick
      }, "Pushed Down"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "push-left",
        value: "left",
        onClick: this.handlePositionClick
      }, "Pushed Left"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "push-right",
        value: "right",
        onClick: this.handlePositionClick
      }, "Pushed Right"));
    }
  }]);
  return HookshotBoundingContainer;
}(_react.default.Component);
var _default = HookshotBoundingContainer;
exports.default = _default;