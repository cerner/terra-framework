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
var _terraHookshot = _interopRequireDefault(require("terra-hookshot"));
var _HookshotTestDocCommonModule = _interopRequireDefault(require("./common/HookshotTestDocCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_HookshotTestDocCommonModule.default);
var HookshotStandard = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(HookshotStandard, _React$Component);
  var _super = _createSuper(HookshotStandard);
  function HookshotStandard(props) {
    var _this;
    (0, _classCallCheck2.default)(this, HookshotStandard);
    _this = _super.call(this, props);
    _this.handleButtonClick = _this.handleButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRequestClose = _this.handleRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      open: false
    };
    return _this;
  }
  (0, _createClass2.default)(HookshotStandard, [{
    key: "handleButtonClick",
    value: function handleButtonClick() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "handleRequestClose",
    value: function handleRequestClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var hookshotContent = /*#__PURE__*/_react.default.createElement(_terraHookshot.default.Content, {
        onEsc: this.handleRequestClose,
        onOutsideClick: this.handleRequestClose,
        onResize: this.handleRequestClose,
        id: "testDefaultContent"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('default-hookshot-wrapper')
      }, "Hookshot"));
      return /*#__PURE__*/_react.default.createElement("div", {
        id: "default-bounds",
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement(_terraHookshot.default, {
        contentAttachment: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        isEnabled: true,
        isOpen: this.state.open,
        targetRef: function targetRef() {
          return document.getElementById('hookshot-standard-button');
        }
      }, hookshotContent), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "hookshot-standard-button",
        onClick: this.handleButtonClick
      }, "Default Hookshot"));
    }
  }]);
  return HookshotStandard;
}(_react.default.Component);
var _default = HookshotStandard;
exports.default = _default;