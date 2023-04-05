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
var _ArrowVerticalRightAdjustmentPopupTestModule = _interopRequireDefault(require("./ArrowVerticalRightAdjustmentPopup.test.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ArrowVerticalRightAdjustmentPopupTestModule.default);

// This tests verifies the PopupUtils.leftOffset methed when (offset > contentBounds.height - cornerOffset)
var AlignmentPopup = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AlignmentPopup, _React$Component);
  var _super = _createSuper(AlignmentPopup);
  function AlignmentPopup(props) {
    var _this;
    (0, _classCallCheck2.default)(this, AlignmentPopup);
    _this = _super.call(this, props);
    _this.handleButtonClick = _this.handleButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRequestClose = _this.handleRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.setButtonNode = _this.setButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.getButtonNode = _this.getButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.setParentNode = _this.setParentNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.getParentNode = _this.getParentNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      open: true
    };
    return _this;
  }
  (0, _createClass2.default)(AlignmentPopup, [{
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
    key: "setParentNode",
    value: function setParentNode(node) {
      this.parentNode = node;
    }
  }, {
    key: "getParentNode",
    value: function getParentNode() {
      return this.parentNode;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        id: "test-popup-area",
        className: cx('test-popup-area'),
        ref: this.setParentNode
      }, /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
        boundingRef: this.getParentNode,
        classNameArrow: "test-arrow",
        classNameContent: "test-content",
        contentAttachment: "top right",
        contentHeight: "120",
        contentWidth: "160",
        isArrowDisplayed: true,
        isOpen: this.state.open,
        onRequestClose: this.handleRequestClose,
        targetRef: this.getButtonNode
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: cx('popup-text')
      }, "This popup arrow has vertical-right attachment, but was adjusted to be on the screen.")), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "alignment-button",
        className: cx('popup-button'),
        onClick: this.handleButtonClick,
        ref: this.setButtonNode,
        "aria-label": "Alignment button"
      }, ''));
    }
  }]);
  return AlignmentPopup;
}(_react.default.Component);
var _default = AlignmentPopup;
exports.default = _default;