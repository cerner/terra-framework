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
var _UtilityMenu = _interopRequireDefault(require("terra-application-utility/lib/utility/_UtilityMenu"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _MenuUtilityMenuExampleModule = _interopRequireDefault(require("./MenuUtilityMenuExample.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_MenuUtilityMenuExampleModule.default);
var MenuUtilityMenuExample = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuUtilityMenuExample, _React$Component);
  var _super = _createSuper(MenuUtilityMenuExample);
  function MenuUtilityMenuExample(props) {
    var _this;
    (0, _classCallCheck2.default)(this, MenuUtilityMenuExample);
    _this = _super.call(this, props);
    _this.handleOnChange = _this.handleOnChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnRequestClose = _this.handleOnRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      selectedKey: null,
      requestCloseCount: 0
    };
    return _this;
  }
  (0, _createClass2.default)(MenuUtilityMenuExample, [{
    key: "handleOnChange",
    value: function handleOnChange(event, object) {
      this.setState({
        selectedKey: object.key
      });
    }
  }, {
    key: "handleOnRequestClose",
    value: function handleOnRequestClose() {
      this.setState(function (prevState) {
        return {
          requestCloseCount: prevState.requestCloseCount + 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var customComponent = /*#__PURE__*/_react.default.createElement(_terraImage.default, {
        alt: "Fallback Avatar",
        src: _FallbackAvatar.default,
        className: cx('avatar')
      });
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement(_UtilityMenu.default, {
        initialSelectedKey: "menu",
        isHeightBounded: true,
        menuItems: (0, _MockConfig.default)(customComponent),
        onChange: this.handleOnChange,
        onRequestClose: this.handleOnRequestClose,
        variant: _terraApplicationUtility.UtilityUtils.VARIANTS.MENU
      })), /*#__PURE__*/_react.default.createElement("div", null, "Trigger event for: ".concat(this.state.selectedKey)), /*#__PURE__*/_react.default.createElement("div", null, "Request close count: ".concat(this.state.requestCloseCount)));
    }
  }]);
  return MenuUtilityMenuExample;
}(_react.default.Component);
var _default = MenuUtilityMenuExample;
exports.default = _default;