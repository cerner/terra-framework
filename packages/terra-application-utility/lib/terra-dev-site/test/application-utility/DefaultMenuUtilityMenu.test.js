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
var _terraImage = _interopRequireDefault(require("terra-image"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _MockConfig = _interopRequireDefault(require("../../doc/common/MockConfig"));
var _FallbackAvatar = _interopRequireDefault(require("../../doc/common/FallbackAvatar.svg"));
var _ApplicationUtility = require("../../../ApplicationUtility");
var _UtilityMenu = _interopRequireDefault(require("../../../utility/_UtilityMenu"));
var _UtilityMenuCommonModule = _interopRequireDefault(require("./UtilityMenuCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_UtilityMenuCommonModule.default);
var DefaultMenuUtilityMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DefaultMenuUtilityMenu, _React$Component);
  var _super = _createSuper(DefaultMenuUtilityMenu);
  function DefaultMenuUtilityMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DefaultMenuUtilityMenu);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  (0, _createClass2.default)(DefaultMenuUtilityMenu, [{
    key: "render",
    value: function render() {
      var customComponent = /*#__PURE__*/_react.default.createElement("div", {
        className: cx('avatar-wrapper')
      }, /*#__PURE__*/_react.default.createElement(_terraImage.default, {
        src: _FallbackAvatar.default,
        className: cx('avatar'),
        alt: "Fallback Avatar"
      }));
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement(_UtilityMenu.default, {
        id: "default",
        initialSelectedKey: "menu",
        isHeightBounded: true,
        menuItems: (0, _MockConfig.default)(customComponent),
        onChange: function onChange() {},
        variant: _ApplicationUtility.UtilityUtils.VARIANTS.MENU
      }));
    }
  }]);
  return DefaultMenuUtilityMenu;
}(_react.default.Component);
var _default = DefaultMenuUtilityMenu;
exports.default = _default;