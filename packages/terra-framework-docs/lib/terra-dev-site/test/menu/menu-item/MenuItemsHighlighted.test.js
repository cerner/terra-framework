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
var _Spacer = _interopRequireDefault(require("terra-spacer/lib/Spacer"));
var _MenuItemCommonModule = _interopRequireDefault(require("./MenuItemCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_MenuItemCommonModule.default);
var childContextTypes = {
  isSelectableMenu: _propTypes.default.bool
};
var MenuItemsHighlighted = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuItemsHighlighted, _React$Component);
  var _super = _createSuper(MenuItemsHighlighted);
  function MenuItemsHighlighted() {
    (0, _classCallCheck2.default)(this, MenuItemsHighlighted);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(MenuItemsHighlighted, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isSelectableMenu: true
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "default isHighlighted, icon, isToggled, isToggleable, and isInstructionsForUse combinations"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("ul", {
        className: cx('mimic-menu-container'),
        role: "menu"
      }, /*#__PURE__*/_react.default.createElement(_Spacer.default, {
        marginBottom: "medium"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "isHighlighted",
        key: "isHighlighted",
        isHighlighted: true
      })), /*#__PURE__*/_react.default.createElement(_Spacer.default, {
        marginBottom: "medium"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "isHighlighted, isToggleable",
        key: "isHiwghlighted, isToggleable",
        isHighlighted: true,
        isSelectable: true
      })), /*#__PURE__*/_react.default.createElement(_Spacer.default, {
        marginBottom: "medium"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "isHighlighted, isToggleable, and isToggled",
        key: "isHighlighted, isToggleable, isToggled",
        isHighlighted: true,
        isSelectable: true,
        isSelected: true
      })), /*#__PURE__*/_react.default.createElement(_Spacer.default, {
        marginBottom: "medium"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "isHighlighted, isToggled, notToggleable",
        key: "isHighlighted, isToggled, notToggleable",
        isHighlighted: true,
        isSelected: true
      })), /*#__PURE__*/_react.default.createElement(_Spacer.default, {
        marginBottom: "medium"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "isHighlighted isInstructionsForUse",
        key: "isHighlighted isInstructionsForUse",
        isHighlighted: true,
        isInstructionsForUse: true
      })), /*#__PURE__*/_react.default.createElement(_Spacer.default, {
        marginBottom: "medium"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "isHighlighted icon",
        key: "isHighlighted icon",
        isHighlighted: true,
        icon: /*#__PURE__*/_react.default.createElement(_IconAlert.default, null)
      })), /*#__PURE__*/_react.default.createElement(_Spacer.default, {
        marginBottom: "medium"
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "isHighlighted - Submenu",
        key: "isHighlighted - Submenu",
        isHighlighted: true,
        subMenuItems: [/*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Not Visible"
        })]
      }))));
    }
  }]);
  return MenuItemsHighlighted;
}(_react.default.Component);
MenuItemsHighlighted.childContextTypes = childContextTypes;
var _default = MenuItemsHighlighted;
exports.default = _default;