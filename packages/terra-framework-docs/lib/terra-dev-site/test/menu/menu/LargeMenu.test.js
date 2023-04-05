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
var _terraMenu = _interopRequireDefault(require("terra-menu"));
var _IconPrinter = _interopRequireDefault(require("terra-icon/lib/icon/IconPrinter"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var LargeMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(LargeMenu, _React$Component);
  var _super = _createSuper(LargeMenu);
  function LargeMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, LargeMenu);
    _this = _super.call(this, props);
    _this.handleButtonClick = _this.handleButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRequestClose = _this.handleRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.setButtonNode = _this.setButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.getButtonNode = _this.getButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      open: false
    };
    return _this;
  }
  (0, _createClass2.default)(LargeMenu, [{
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
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, "This menu should have a large height. And all items should be visible without scrolling."), /*#__PURE__*/_react.default.createElement(_terraMenu.default, {
        isOpen: this.state.open,
        targetRef: this.getButtonNode,
        onRequestClose: this.handleRequestClose
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 1",
        key: "1",
        className: "TestFirstItem"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Nested Menu",
        key: "2",
        subMenuItems: [/*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Default 2.1",
          key: "2.1"
        }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Default 2.2",
          key: "2.2"
        }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Default 2.3",
          key: "2.3"
        }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Default 2.4",
          key: "2.4",
          icon: /*#__PURE__*/_react.default.createElement(_IconPrinter.default, null)
        })]
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 3",
        key: "3"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 4",
        key: "4"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 5",
        key: "5"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Divider, {
        key: "Divider1"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.ItemGroup, {
        key: "6"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 61",
        key: "61"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 62",
        key: "62"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 63",
        key: "63"
      })), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Divider, {
        key: "Divider2"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 7",
        key: "7"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 8",
        key: "8"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 9",
        key: "9"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Divider, {
        key: "Divider1"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 10",
        key: "10"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 11",
        key: "11"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 12",
        key: "12"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 13",
        key: "13"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 14",
        key: "14"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Divider, {
        key: "Divider3"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.ItemGroup, {
        key: "15"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 151",
        key: "151"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 152",
        key: "152"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 153",
        key: "153"
      })), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Divider, {
        key: "Divider4"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Default 16",
        key: "16",
        className: "TestLastItem"
      })), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "large-menu-button",
        onClick: this.handleButtonClick,
        ref: this.setButtonNode
      }, "Default Menu"));
    }
  }]);
  return LargeMenu;
}(_react.default.Component);
var _default = LargeMenu;
exports.default = _default;