"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraSlidePanel = _interopRequireDefault(require("terra-slide-panel"));
var _SlidePanelDocCommonTestModule = _interopRequireDefault(require("./SlidePanelDocCommon.test.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_SlidePanelDocCommonTestModule.default);
var ButtonWrapper = function ButtonWrapper() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var increaseCount = function increaseCount() {
    setCount(count + 1);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "panel-content",
    className: cx('panel-content')
  }, /*#__PURE__*/_react.default.createElement("button", {
    id: "focus-button",
    type: "button",
    className: cx('button'),
    onClick: increaseCount
  }, "Increase Count "), count);
};
var SlidePanelSideDemo = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SlidePanelSideDemo, _React$Component);
  var _super = _createSuper(SlidePanelSideDemo);
  function SlidePanelSideDemo(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SlidePanelSideDemo);
    _this = _super.call(this, props);
    _this.state = {
      panelHasStartPostion: false
    };
    _this.handlePanelToggle = _this.handlePanelToggle.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(SlidePanelSideDemo, [{
    key: "handlePanelToggle",
    value: function handlePanelToggle() {
      this.setState(function (prevState) {
        return {
          panelHasStartPostion: !prevState.panelHasStartPostion
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
          id: "test-toggle",
          className: cx('button'),
          onClick: this.handlePanelToggle
        }, "toggle")),
        panelContent: /*#__PURE__*/_react.default.createElement(ButtonWrapper, null),
        panelAriaLabel: "Panel content area",
        mainAriaLabel: "Main content area",
        panelSize: "small",
        panelBehavior: "squish",
        panelPosition: this.state.panelHasStartPostion ? 'start' : 'end',
        isOpen: true,
        fill: true
      }));
    }
  }]);
  return SlidePanelSideDemo;
}(_react.default.Component);
var _default = SlidePanelSideDemo;
exports.default = _default;