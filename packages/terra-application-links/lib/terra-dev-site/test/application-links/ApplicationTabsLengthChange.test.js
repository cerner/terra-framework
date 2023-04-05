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
var _reactRouterDom = require("react-router-dom");
var _ApplicationTabs = _interopRequireDefault(require("../../../tabs/ApplicationTabs"));
var _testShortConfig = _interopRequireDefault(require("../common/testShortConfig"));
var _testLinkConfig = _interopRequireDefault(require("../common/testLinkConfig"));
var _demoStylesModule = _interopRequireDefault(require("./demoStyles.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _default = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(_default, _React$Component);
  var _super = _createSuper(_default);
  function _default(props) {
    var _this;
    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this, props);
    _this.handleToggle = _this.handleToggle.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      shortLinks: true
    };
    return _this;
  }
  (0, _createClass2.default)(_default, [{
    key: "handleToggle",
    value: function handleToggle() {
      this.setState(function (prevState) {
        return {
          shortLinks: !prevState.shortLinks
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, {
        initialEntries: _testLinkConfig.default.map(function (link) {
          return link.path;
        }),
        initialIndex: 0
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: _demoStylesModule.default['demo-header']
      }, /*#__PURE__*/_react.default.createElement(_ApplicationTabs.default, {
        id: "test-tabs",
        links: this.state.shortLinks ? _testShortConfig.default : _testLinkConfig.default
      })), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: this.handleToggle
      }, "Click to toggle link length")));
    }
  }]);
  return _default;
}(_react.default.Component);
exports.default = _default;