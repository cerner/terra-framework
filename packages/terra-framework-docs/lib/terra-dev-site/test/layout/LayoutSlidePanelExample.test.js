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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _LayoutSlidePanel = _interopRequireDefault(require("terra-layout/lib/_LayoutSlidePanel"));
var _TestLayoutCommonModule = _interopRequireDefault(require("./TestLayoutCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_TestLayoutCommonModule.default);
var LayoutSlidePanelExample = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(LayoutSlidePanelExample, _React$Component);
  var _super = _createSuper(LayoutSlidePanelExample);
  function LayoutSlidePanelExample(props) {
    var _this;
    (0, _classCallCheck2.default)(this, LayoutSlidePanelExample);
    _this = _super.call(this, props);
    _this.toggleMenu = _this.toggleMenu.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }
  (0, _createClass2.default)(LayoutSlidePanelExample, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement(_LayoutSlidePanel.default, {
        panelContent: /*#__PURE__*/_react.default.createElement("div", {
          className: cx('panel-content')
        }, /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          id: "test-toggle-2",
          onClick: this.toggleMenu
        }, "toggle")),
        panelBehavior: "overlay",
        size: "medium",
        isOpen: this.state.isOpen,
        isToggleEnabled: true,
        isAnimated: true,
        onToggle: function onToggle() {},
        toggleText: "toggle text"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('layout-slide-panel-content')
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "test-toggle-1",
        onClick: this.toggleMenu
      }, "toggle"))));
    }
  }]);
  return LayoutSlidePanelExample;
}(_react.default.Component);
var _default = LayoutSlidePanelExample;
exports.default = _default;