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
var _AbstractModal = _interopRequireDefault(require("../../../AbstractModal"));
require("./AbstractModalTestStyles.module.scss");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ModalIsOpen = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ModalIsOpen, _React$Component);
  var _super = _createSuper(ModalIsOpen);
  function ModalIsOpen() {
    var _this;
    (0, _classCallCheck2.default)(this, ModalIsOpen);
    _this = _super.call(this);
    _this.state = {
      isOpen: false
    };
    _this.handleOpenModal = _this.handleOpenModal.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleCloseModal = _this.handleCloseModal.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(ModalIsOpen, [{
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
      return /*#__PURE__*/_react.default.createElement("div", {
        id: "modal"
      }, /*#__PURE__*/_react.default.createElement(_AbstractModal.default, {
        ariaLabel: "Terra Modal",
        isOpen: this.state.isOpen,
        onRequestClose: this.handleCloseModal,
        classNameModal: "test-background-class"
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Terra Modal"), /*#__PURE__*/_react.default.createElement("h2", null, "Subtitle"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "The Terra Modal is appended to the document body."), /*#__PURE__*/_react.default.createElement("p", null, 'Modal is assigned a role of \'document\' for accessibility.'), /*#__PURE__*/_react.default.createElement("button", {
        id: "modal-button",
        type: "button",
        onClick: this.handleCloseModal
      }, "Close Modal"))), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "modal-open-button",
        onClick: this.handleOpenModal
      }, "Open Modal"));
    }
  }]);
  return ModalIsOpen;
}(_react.default.Component);
var _default = ModalIsOpen;
exports.default = _default;