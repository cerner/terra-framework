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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraList = _interopRequireDefault(require("terra-list"));
var _terraMenu = _interopRequireDefault(require("terra-menu"));
var _IconWarning = _interopRequireDefault(require("terra-icon/lib/icon/IconWarning"));
var _IconRequired = _interopRequireDefault(require("terra-icon/lib/icon/IconRequired"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _MenuItemCommonModule = _interopRequireDefault(require("./MenuItemCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_MenuItemCommonModule.default);
var childContextTypes = {
  isSelectableMenu: _propTypes.default.bool
};
var MenuItemDisabled = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuItemDisabled, _React$Component);
  var _super = _createSuper(MenuItemDisabled);
  function MenuItemDisabled() {
    (0, _classCallCheck2.default)(this, MenuItemDisabled);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(MenuItemDisabled, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isSelectableMenu: true
      };
    }
  }, {
    key: "render",
    value: function render() {
      var theme = this.context;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        id: "isSelected"
      }, /*#__PURE__*/_react.default.createElement("p", null, "The item is disabled. The selection state should not change with any user interaction.")), /*#__PURE__*/_react.default.createElement(_terraList.default, {
        className: cx(['mimic-menu-container']),
        role: "menu"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Disabled Menu Item",
        key: "1",
        className: "TestDisabledItem",
        isSelectable: true,
        isDisabled: true
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        isDisabled: true,
        isSelectable: true,
        text: "Nested Menu",
        key: "2",
        className: "TestNestedMenu",
        subMenuItems: [/*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Default 2.1",
          key: "2.1",
          className: "TestNestedMenuContent"
        })]
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        isDisabled: true,
        text: "Disabled Selected Menu Item",
        key: "3",
        className: "TestDisabledItem",
        isSelectable: true,
        isSelected: true
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        isDisabled: true,
        text: "Disabled eIFU Icon Menu Item",
        key: "4",
        className: "TestDisabledItem",
        isInstructionsForUse: true
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        isDisabled: true,
        text: "Disabled Icon Menu Item",
        key: "5",
        className: "TestDisabledItem",
        icon: /*#__PURE__*/_react.default.createElement(_IconWarning.default, null)
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        isDisabled: true,
        text: "Disabled Themeable Icon Menu Item",
        key: "6",
        className: "TestDisabledItem",
        icon: /*#__PURE__*/_react.default.createElement(_IconRequired.default, {
          className: cx(['red-color', theme.className])
        })
      })));
    }
  }]);
  return MenuItemDisabled;
}(_react.default.Component);
MenuItemDisabled.childContextTypes = childContextTypes;
MenuItemDisabled.contextType = _terraThemeContext.default;
var _default = MenuItemDisabled;
exports.default = _default;