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
var _terraSlidePanel = _interopRequireDefault(require("terra-slide-panel"));
var _SlidePanelDocCommonTestModule = _interopRequireDefault(require("./SlidePanelDocCommon.test.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_SlidePanelDocCommonTestModule.default);
var SlidePanelDemo = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SlidePanelDemo, _React$Component);
  var _super = _createSuper(SlidePanelDemo);
  function SlidePanelDemo(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SlidePanelDemo);
    _this = _super.call(this, props);
    _this.state = {
      panelIsOpen: false
    };
    _this.handlePanelToggle = _this.handlePanelToggle.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(SlidePanelDemo, [{
    key: "handlePanelToggle",
    value: function handlePanelToggle() {
      this.setState(function (prevState) {
        return {
          panelIsOpen: !prevState.panelIsOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper-toggle')
      }, /*#__PURE__*/_react.default.createElement(_terraSlidePanel.default, {
        id: "test-slide",
        mainContent: /*#__PURE__*/_react.default.createElement("div", {
          className: cx('main-content')
        }, /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          id: "other-button-1",
          className: cx('button'),
          onClick: SlidePanelDemo.handleOtherButton
        }, "Other Button 1"), /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          id: "test-toggle",
          className: cx('button'),
          onClick: this.handlePanelToggle
        }, "toggle"), /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          id: "another-button",
          className: cx('button'),
          onClick: SlidePanelDemo.handleOtherButton
        }, "Another Button")),
        panelContent: /*#__PURE__*/_react.default.createElement("div", {
          id: "panel-content",
          className: cx('panel-content')
        }, /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          id: "other-button-2",
          className: cx('button'),
          onClick: SlidePanelDemo.handleOtherButton
        }, "Other Button 2"), /*#__PURE__*/_react.default.createElement("button", {
          id: "focus-button",
          type: "button",
          className: cx('button'),
          onClick: this.handlePanelToggle
        }, "Close panel")),
        panelAriaLabel: "Panel content area",
        mainAriaLabel: "Main content area",
        panelSize: "small",
        panelBehavior: "overlay",
        isOpen: this.state.panelIsOpen,
        fill: true
      }));
    }
  }], [{
    key: "handleOtherButton",
    value: function handleOtherButton() {
      // eslint-disable-next-line no-console
      console.log('Other button pressed');
    }
  }]);
  return SlidePanelDemo;
}(_react.default.Component);
var _default = SlidePanelDemo;
exports.default = _default;