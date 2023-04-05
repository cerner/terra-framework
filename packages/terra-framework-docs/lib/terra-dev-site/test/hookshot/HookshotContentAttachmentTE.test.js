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
var HookshotExample = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(HookshotExample, _React$Component);
  var _super = _createSuper(HookshotExample);
  function HookshotExample(props) {
    var _this;
    (0, _classCallCheck2.default)(this, HookshotExample);
    _this = _super.call(this, props);
    _this.handleTargetAttachment = _this.handleTargetAttachment.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      attachment: 'top start'
    };
    return _this;
  }
  (0, _createClass2.default)(HookshotExample, [{
    key: "handleTargetAttachment",
    value: function handleTargetAttachment(event) {
      this.setState({
        attachment: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_HookshotTestTemplate.default, {
        id: "attachment",
        hookshotContentProps: {
          closeOnEsc: false,
          closeOnOutsideClick: false,
          closeOnResize: false
        },
        contentAttachment: "top end",
        type: "primary",
        targetAttachment: this.state.attachment,
        isOpen: true
      }), /*#__PURE__*/_react.default.createElement("p", null, " Content attachement: top end "), /*#__PURE__*/_react.default.createElement("p", null, " Choose the target attachement: "), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "attach-TS",
        value: "top start",
        onClick: this.handleTargetAttachment
      }, "TOP START"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "attach-TC",
        value: "top center",
        onClick: this.handleTargetAttachment
      }, "TOP CENTER"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "attach-TE",
        value: "top end",
        onClick: this.handleTargetAttachment
      }, "TOP END"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "attach-MS",
        value: "middle start",
        onClick: this.handleTargetAttachment
      }, "MIDDLE START"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "attach-MC",
        value: "middle center",
        onClick: this.handleTargetAttachment
      }, "MIDDLE CENTER"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "attach-ME",
        value: "middle end",
        onClick: this.handleTargetAttachment
      }, "MIDDLE END"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "attach-BS",
        value: "bottom start",
        onClick: this.handleTargetAttachment
      }, "BOTTOM START"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "attach-BC",
        value: "bottom center",
        onClick: this.handleTargetAttachment
      }, "BOTTOM CENTER"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "attach-BE",
        value: "bottom end",
        onClick: this.handleTargetAttachment
      }, "BOTTOM END"));
    }
  }]);
  return HookshotExample;
}(_react.default.Component);
var _default = HookshotExample;
exports.default = _default;