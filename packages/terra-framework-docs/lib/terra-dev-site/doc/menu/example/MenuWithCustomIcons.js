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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraMenu = _interopRequireDefault(require("terra-menu"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _IconBriefcase = _interopRequireDefault(require("terra-icon/lib/icon/IconBriefcase"));
var _IconBookmark = _interopRequireDefault(require("terra-icon/lib/icon/IconBookmark"));
var _IconCalendar = _interopRequireDefault(require("terra-icon/lib/icon/IconCalendar"));
var _IconEnvelope = _interopRequireDefault(require("terra-icon/lib/icon/IconEnvelope"));
var _IconPrinter = _interopRequireDefault(require("terra-icon/lib/icon/IconPrinter"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _BasicMenuModule = _interopRequireDefault(require("./BasicMenu.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_BasicMenuModule.default);
var propTypes = {
  isArrowDisplayed: _propTypes.default.bool,
  contentWidth: _propTypes.default.string,
  boundingRef: _propTypes.default.func
};
var MenuWithCustomIcons = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuWithCustomIcons, _React$Component);
  var _super = _createSuper(MenuWithCustomIcons);
  function MenuWithCustomIcons(props) {
    var _this;
    (0, _classCallCheck2.default)(this, MenuWithCustomIcons);
    _this = _super.call(this, props);
    _this.handleButtonClick = _this.handleButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRequestClose = _this.handleRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.setButtonNode = _this.setButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.getButtonNode = _this.getButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleAction = _this.handleAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnClick = _this.handleOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      open: false,
      actionClickCount: 0
    };
    return _this;
  }
  (0, _createClass2.default)(MenuWithCustomIcons, [{
    key: "handleButtonClick",
    value: function handleButtonClick() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick(event) {
      event.preventDefault();
      this.handleRequestClose();
    }
  }, {
    key: "handleRequestClose",
    value: function handleRequestClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "handleAction",
    value: function handleAction(event) {
      event.preventDefault();
      var actionClickCount = this.state.actionClickCount;
      actionClickCount += 1;
      this.setState({
        actionClickCount: actionClickCount
      });
      this.handleRequestClose();
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
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('menu-wrapper'),
        ref: this.setButtonNode
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default, {
        isOpen: this.state.open,
        targetRef: this.getButtonNode,
        onRequestClose: this.handleRequestClose,
        contentWidth: this.props.contentWidth,
        isArrowDisplayed: this.props.isArrowDisplayed,
        boundingRef: this.props.boundingRef
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Search Icon",
        key: "Search",
        onClick: this.handleOnClick,
        icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null)
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Briefcase Icon",
        key: "Briefcase",
        onClick: this.handleOnClick,
        icon: /*#__PURE__*/_react.default.createElement(_IconBriefcase.default, null)
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Bookmark Icon",
        key: "Bookmark",
        onClick: this.handleOnClick,
        icon: /*#__PURE__*/_react.default.createElement(_IconBookmark.default, null)
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Calendar Icon",
        key: "Calendar",
        onClick: this.handleOnClick,
        icon: /*#__PURE__*/_react.default.createElement(_IconCalendar.default, null)
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Envelope Icon",
        key: "Envelope",
        onClick: this.handleOnClick,
        icon: /*#__PURE__*/_react.default.createElement(_IconEnvelope.default, null)
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Printer Icon",
        key: "Printer",
        onClick: this.handleOnClick,
        icon: /*#__PURE__*/_react.default.createElement(_IconPrinter.default, null)
      })), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        onClick: this.handleButtonClick,
        text: "Click Me"
      })));
    }
  }]);
  return MenuWithCustomIcons;
}(_react.default.Component);
MenuWithCustomIcons.propTypes = propTypes;
var _default = MenuWithCustomIcons;
exports.default = _default;