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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraMenu = _interopRequireDefault(require("terra-menu"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var childContextTypes = {
  isSelectableMenu: _propTypes.default.bool
};
var MenuItemSelectable = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuItemSelectable, _React$Component);
  var _super = _createSuper(MenuItemSelectable);
  function MenuItemSelectable(props) {
    var _this;
    (0, _classCallCheck2.default)(this, MenuItemSelectable);
    _this = _super.call(this, props);
    _this.state = {
      isSelected: false
    };
    _this.handleSelection = _this.handleSelection.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(MenuItemSelectable, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isSelectableMenu: true
      };
    }
  }, {
    key: "handleSelection",
    value: function handleSelection(event, isSelected) {
      this.setState({
        isSelected: isSelected
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        id: "isSelected"
      }, /*#__PURE__*/_react.default.createElement("h3", null, "Item is selected:", this.state.isSelected ? 'yes' : 'no')), /*#__PURE__*/_react.default.createElement("ul", {
        role: "menu"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Selectable Menu Item",
        key: "1",
        className: "TestSelectableItem",
        isSelectable: true,
        onChange: this.handleSelection
      })));
    }
  }]);
  return MenuItemSelectable;
}(_react.default.Component);
MenuItemSelectable.childContextTypes = childContextTypes;
var _default = MenuItemSelectable;
exports.default = _default;