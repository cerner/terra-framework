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
var _terraButton = _interopRequireDefault(require("terra-button"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _PopupModalContentModule = _interopRequireDefault(require("./PopupModalContent.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_PopupModalContentModule.default);
var ModalContent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ModalContent, _React$Component);
  var _super = _createSuper(ModalContent);
  function ModalContent(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ModalContent);
    _this = _super.call(this, props);
    _this.handlePopupButtonClick = _this.handlePopupButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handlePopupRequestClose = _this.handlePopupRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.handlePopupOnChange = _this.handlePopupOnChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      open: false
    };
    return _this;
  }
  (0, _createClass2.default)(ModalContent, [{
    key: "handlePopupButtonClick",
    value: function handlePopupButtonClick() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "handlePopupRequestClose",
    value: function handlePopupRequestClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "handlePopupOnChange",
    value: function handlePopupOnChange() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var disclosureManager = this.props.disclosureManager;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: "test-popup-area",
        className: cx('content-container')
      }, /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
        isArrowDisplayed: true,
        classNameContent: "test-content",
        isOpen: this.state.open,
        onRequestClose: this.handlePopupRequestClose,
        targetRef: function targetRef() {
          return document.getElementById('popup-in-modal');
        }
      }, /*#__PURE__*/_react.default.createElement("p", null, "This is popup content"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button"
      }, "Test button 1"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button"
      }, "Test button 2")), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        id: "popup-in-modal",
        className: cx('popup-button'),
        text: "Popup In Modal",
        onClick: this.handlePopupButtonClick
      }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        className: "close-disclosure",
        text: "Close Disclosure",
        onClick: disclosureManager.closeDisclosure
      }));
    }
  }]);
  return ModalContent;
}(_react.default.Component);
ModalContent.propTypes = {
  disclosureManager: _terraDisclosureManager.disclosureManagerShape
};
var _default = (0, _terraDisclosureManager.withDisclosureManager)(ModalContent);
exports.default = _default;