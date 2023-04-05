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
var HookshotAttachmentBehaviorAuto = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(HookshotAttachmentBehaviorAuto, _React$Component);
  var _super = _createSuper(HookshotAttachmentBehaviorAuto);
  function HookshotAttachmentBehaviorAuto(props) {
    var _this;
    (0, _classCallCheck2.default)(this, HookshotAttachmentBehaviorAuto);
    _this = _super.call(this, props);
    _this.handlePositionClick = _this.handlePositionClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      position: 'primary'
    };
    return _this;
  }
  (0, _createClass2.default)(HookshotAttachmentBehaviorAuto, [{
    key: "handlePositionClick",
    value: function handlePositionClick(event) {
      this.setState({
        position: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var type = 'primary';
      if (this.state.position === 'flipped') {
        type = 'auto-flipped';
      } else if (this.state.position === '90') {
        type = 'auto-90';
      } else if (this.state.position === '-90') {
        type = 'auto-neg-90';
      } else if (this.state.position === 'pushed') {
        type = 'auto-pushed';
      }
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
        attachmentBehavior: "auto",
        id: "attachment-behavior-auto",
        isOpen: false,
        type: type
      }), /*#__PURE__*/_react.default.createElement("p", null, " Choose the positioning behavior "), /*#__PURE__*/_react.default.createElement("p", null, " Primary position is on the middle right"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "position-primary",
        value: "primary",
        onClick: this.handlePositionClick
      }, "Primary"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "position-flipped",
        value: "flipped",
        onClick: this.handlePositionClick
      }, "Flipped"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "position-90-deg",
        value: "90",
        onClick: this.handlePositionClick
      }, "Rotateed 90 Degrees"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "position-neg-90-deg",
        value: "-90",
        onClick: this.handlePositionClick
      }, "Rotateed -90 Degrees"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "position-pushed",
        value: "pushed",
        onClick: this.handlePositionClick
      }, "Pushed by bounds"));
    }
  }]);
  return HookshotAttachmentBehaviorAuto;
}(_react.default.Component);
var _default = HookshotAttachmentBehaviorAuto;
exports.default = _default;