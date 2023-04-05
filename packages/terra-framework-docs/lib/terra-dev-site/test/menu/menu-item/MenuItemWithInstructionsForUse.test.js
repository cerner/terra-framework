"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraList = _interopRequireDefault(require("terra-list"));
var _terraMenu = _interopRequireDefault(require("terra-menu"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var childContextTypes = {
  isSelectableMenu: _propTypes.default.bool
};
var MenuItemWithInstructionsForUse = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuItemWithInstructionsForUse, _React$Component);
  var _super = _createSuper(MenuItemWithInstructionsForUse);
  function MenuItemWithInstructionsForUse() {
    (0, _classCallCheck2.default)(this, MenuItemWithInstructionsForUse);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(MenuItemWithInstructionsForUse, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isSelectableMenu: true
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        id: "isSelected"
      }, /*#__PURE__*/_react.default.createElement("p", null, "Menu Items with eIFU Icon")), /*#__PURE__*/_react.default.createElement(_terraList.default, {
        role: "menu"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "eIFU Icon Menu Item",
        key: "1",
        className: "TestMenuItem",
        isInstructionsForUse: true
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        isSelectable: true,
        text: "eIFU Icon Nested Menu",
        key: "2",
        className: "TestMenuItem",
        isInstructionsForUse: true,
        subMenuItems: [/*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Default 2.1",
          key: "2.1",
          className: "TestNestedMenuContent"
        })]
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Selectable+Selected eIFU Icon Menu Item",
        key: "3",
        className: "TestMenuItem",
        isSelectable: true,
        isSelected: true,
        isInstructionsForUse: true
      })));
    }
  }]);
  return MenuItemWithInstructionsForUse;
}(_react.default.Component);
MenuItemWithInstructionsForUse.childContextTypes = childContextTypes;
var _default = MenuItemWithInstructionsForUse;
exports.default = _default;