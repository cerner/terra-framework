"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
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
var DefaultMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DefaultMenu, _React$Component);
  var _super = _createSuper(DefaultMenu);
  function DefaultMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DefaultMenu);
    _this = _super.call(this, props);
    _this.handleButtonClick = _this.handleButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRequestClose = _this.handleRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.setButtonNode = _this.setButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.getButtonNode = _this.getButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.addMenuItems = _this.addMenuItems.bind((0, _assertThisInitialized2.default)(_this));
    _this.removeMenuItems = _this.removeMenuItems.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      open: false,
      items: [0]
    };
    return _this;
  }
  (0, _createClass2.default)(DefaultMenu, [{
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
    key: "addMenuItems",
    value: function addMenuItems() {
      this.setState(function (prevState) {
        return {
          items: [].concat((0, _toConsumableArray2.default)(prevState.items), [prevState.items.length])
        };
      });
    }
  }, {
    key: "removeMenuItems",
    value: function removeMenuItems() {
      this.setState(function (prevState) {
        var newItems = prevState.items.slice();
        newItems.pop();
        return {
          items: newItems
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_terraMenu.default, {
        isOpen: this.state.open,
        targetRef: this.getButtonNode,
        onRequestClose: this.handleRequestClose
      }, this.state.items.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          key: item,
          text: "Menu Item ".concat(item),
          id: "TestContent".concat(item)
        });
      })), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "default-button",
        onClick: this.handleButtonClick,
        ref: this.setButtonNode
      }, "Default Menu"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "add-button",
        onClick: this.addMenuItems
      }, "Add Menu Item"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "remove-button",
        onClick: this.removeMenuItems
      }, "Remove Menu Item"));
    }
  }]);
  return DefaultMenu;
}(_react.default.Component);
var _default = DefaultMenu;
exports.default = _default;