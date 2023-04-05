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
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SelectableMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SelectableMenu, _React$Component);
  var _super = _createSuper(SelectableMenu);
  function SelectableMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SelectableMenu);
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
  (0, _createClass2.default)(SelectableMenu, [{
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
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, "This menu contains one selectable child (an Item Group). The menu should allow space for the checkmark and the items in the item group should be selectable."), /*#__PURE__*/_react.default.createElement(_terraMenu.default, {
        isOpen: this.state.open,
        targetRef: this.getButtonNode,
        onRequestClose: this.handleRequestClose
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.ItemGroup, {
        className: "TestGroup",
        onChange: this.handleSelection,
        key: "selectable-group"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Group Item 1",
        key: "1",
        className: "TestGroupItem1"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Group Item 2",
        key: "2",
        className: "TestGroupItem2"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Group Item 3",
        key: "3",
        className: "TestGroupItem3"
      }))), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "selectable-menu-button",
        onClick: this.handleButtonClick,
        ref: this.setButtonNode
      }, "Default Menu"));
    }
  }]);
  return SelectableMenu;
}(_react.default.Component);
var _default = SelectableMenu;
exports.default = _default;