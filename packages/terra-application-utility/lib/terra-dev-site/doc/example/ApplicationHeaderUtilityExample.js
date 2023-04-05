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
var _terraImage = _interopRequireDefault(require("terra-image"));
var _MockConfig = _interopRequireDefault(require("terra-application-utility/lib/terra-dev-site/doc/common/MockConfig"));
var _FallbackAvatar = _interopRequireDefault(require("terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg"));
var _terraApplicationUtility = require("terra-application-utility");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ApplicationHeaderUtilityExampleModule = _interopRequireDefault(require("./ApplicationHeaderUtilityExample.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ApplicationHeaderUtilityExampleModule.default);
var ApplicationHeaderUtilityExample = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ApplicationHeaderUtilityExample, _React$Component);
  var _super = _createSuper(ApplicationHeaderUtilityExample);
  function ApplicationHeaderUtilityExample(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ApplicationHeaderUtilityExample);
    _this = _super.call(this, props);
    _this.onDiscloseUtility = _this.onDiscloseUtility.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      discloseCount: 0
    };
    return _this;
  }
  (0, _createClass2.default)(ApplicationHeaderUtilityExample, [{
    key: "onDiscloseUtility",
    value: function onDiscloseUtility() {
      this.setState(function (prevState) {
        return {
          discloseCount: prevState.discloseCount + 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var accessory = /*#__PURE__*/_react.default.createElement(_terraImage.default, {
        alt: "Fallback Avatar",
        src: _FallbackAvatar.default
      });
      var title = 'User Name';
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('container')
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement(_terraApplicationUtility.ApplicationHeaderUtility, {
        menuItems: (0, _MockConfig.default)(accessory),
        onChange: function onChange() {},
        onDisclose: this.onDiscloseUtility,
        initialSelectedKey: "menu",
        title: title,
        accessory: accessory,
        variant: _terraApplicationUtility.UtilityUtils.VARIANTS.HEADER
      })), /*#__PURE__*/_react.default.createElement("div", null, "Disclose count: ".concat(this.state.discloseCount)));
    }
  }]);
  return ApplicationHeaderUtilityExample;
}(_react.default.Component);
var _default = ApplicationHeaderUtilityExample;
exports.default = _default;