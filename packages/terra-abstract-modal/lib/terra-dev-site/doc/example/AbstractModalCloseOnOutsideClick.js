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
var _terraAbstractModal = _interopRequireDefault(require("terra-abstract-modal"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ExampleAbstractSizeModule = _interopRequireDefault(require("./ExampleAbstractSize.module.scss"));
var _AbstractModalDocCommonModule = _interopRequireDefault(require("./AbstractModalDocCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_AbstractModalDocCommonModule.default);
var AbstractModalCloseOnOutsideClick = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AbstractModalCloseOnOutsideClick, _React$Component);
  var _super = _createSuper(AbstractModalCloseOnOutsideClick);
  function AbstractModalCloseOnOutsideClick() {
    var _this;
    (0, _classCallCheck2.default)(this, AbstractModalCloseOnOutsideClick);
    _this = _super.call(this);
    _this.state = {
      isOpen: false
    };
    _this.handleOpenModal = _this.handleOpenModal.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleCloseModal = _this.handleCloseModal.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(AbstractModalCloseOnOutsideClick, [{
    key: "handleOpenModal",
    value: function handleOpenModal() {
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: "handleCloseModal",
    value: function handleCloseModal() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_terraAbstractModal.default, {
        ariaLabel: "Modal disable close on outside click",
        isOpen: this.state.isOpen,
        closeOnOutsideClick: false,
        onRequestClose: this.handleCloseModal,
        classNameModal: _ExampleAbstractSizeModule.default['fixed-size']
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement("h1", null, "Modal disable close on outside click"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "You can close the modal by:"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "- Pressing the ESC key"), /*#__PURE__*/_react.default.createElement("li", null, "- Clicking on the close button")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: this.handleCloseModal
      }, "Close Modal"))), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: this.handleOpenModal
      }, "Open Modal"));
    }
  }]);
  return AbstractModalCloseOnOutsideClick;
}(_react.default.Component);
var _default = AbstractModalCloseOnOutsideClick;
exports.default = _default;