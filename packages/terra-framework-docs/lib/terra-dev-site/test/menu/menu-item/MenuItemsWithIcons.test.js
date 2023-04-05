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
var _terraMenu = _interopRequireDefault(require("terra-menu"));
var _IconAlert = _interopRequireDefault(require("terra-icon/lib/icon/IconAlert"));
var _IconRequired = _interopRequireDefault(require("terra-icon/lib/icon/IconRequired"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _MenuItemCommonModule = _interopRequireDefault(require("./MenuItemCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_MenuItemCommonModule.default);
var childContextTypes = {
  isSelectableMenu: _propTypes.default.bool
};
var MenuItemWithIcon = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuItemWithIcon, _React$Component);
  var _super = _createSuper(MenuItemWithIcon);
  function MenuItemWithIcon() {
    (0, _classCallCheck2.default)(this, MenuItemWithIcon);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(MenuItemWithIcon, [{
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
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "default icon, themeable, isToggled, isToggleable, and isInstructionsForUse combinations"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("ul", {
        className: cx('mimic-menu-container'),
        role: "menu"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Icon",
        key: "Icon",
        icon: /*#__PURE__*/_react.default.createElement(_IconAlert.default, null)
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Icon, themeable",
        key: "Icon, themeable",
        icon: /*#__PURE__*/_react.default.createElement(_IconRequired.default, {
          className: cx(['red-color', theme.className])
        })
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Icon, isToggleable",
        key: "Icon, isToggleable",
        icon: /*#__PURE__*/_react.default.createElement(_IconAlert.default, null),
        isSelectable: true
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Icon, isToggleable, and isToggled",
        key: "Icon, isToggleable, isToggled",
        icon: /*#__PURE__*/_react.default.createElement(_IconAlert.default, null),
        isSelectable: true,
        isSelected: true
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Icon, isToggled, notToggleable",
        key: "Icon, isToggled, notToggleable",
        icon: /*#__PURE__*/_react.default.createElement(_IconAlert.default, null),
        isSelected: true
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "isInstructionsForUse, icon",
        key: "isInstructionsForUse, icon",
        isSelected: true,
        isSelectable: true,
        icon: /*#__PURE__*/_react.default.createElement(_IconAlert.default, null),
        isInstructionsForUse: true
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "MenuItem - Submenu",
        key: "MenuItem - Submenu",
        subMenuItems: [/*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Not Visible"
        })]
      })));
    }
  }]);
  return MenuItemWithIcon;
}(_react.default.Component);
MenuItemWithIcon.childContextTypes = childContextTypes;
MenuItemWithIcon.contextType = _terraThemeContext.default;
var _default = MenuItemWithIcon;
exports.default = _default;