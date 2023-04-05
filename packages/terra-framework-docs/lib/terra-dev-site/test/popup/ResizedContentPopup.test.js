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
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _TestPopupContent = _interopRequireDefault(require("./common/TestPopupContent"));
var _AutomaticHeightAndResizedContentCommonModule = _interopRequireDefault(require("./AutomaticHeightAndResizedContentCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_AutomaticHeightAndResizedContentCommonModule.default);
var PopupExample = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(PopupExample, _React$Component);
  var _super = _createSuper(PopupExample);
  function PopupExample(props) {
    var _this;
    (0, _classCallCheck2.default)(this, PopupExample);
    _this = _super.call(this, props);
    _this.handleButtonClick = _this.handleButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRequestClose = _this.handleRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.setButtonNode = _this.setButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.getButtonNode = _this.getButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      open: true,
      size: 'small'
    };
    return _this;
  }
  (0, _createClass2.default)(PopupExample, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
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
    key: "setButtonNode",
    value: function setButtonNode(node) {
      this.buttonNode = node;
    }
  }, {
    key: "getButtonNode",
    value: function getButtonNode() {
      return this.buttonNode;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: "test-popup-area",
        className: cx('test-popup-area')
      }, /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
        classNameArrow: "test-arrow",
        classNameContent: "test-content",
        contentHeight: "auto",
        contentWidth: "auto",
        isArrowDisplayed: true,
        isOpen: this.state.open,
        targetRef: this.getButtonNode,
        onRequestClose: this.handleRequestClose
      }, /*#__PURE__*/_react.default.createElement(_TestPopupContent.default, {
        size: this.state.size,
        onClick: function onClick() {
          return _this2.setState({
            size: 'large'
          });
        }
      })), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: cx('popup-button'),
        id: "default-button",
        onClick: this.handleButtonClick,
        ref: this.setButtonNode
      }, "Default Popup"));
    }
  }]);
  return PopupExample;
}(_react.default.Component);
var _default = PopupExample;
exports.default = _default;