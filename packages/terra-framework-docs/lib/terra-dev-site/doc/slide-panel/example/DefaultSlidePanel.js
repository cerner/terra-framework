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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraSlidePanel = _interopRequireDefault(require("terra-slide-panel"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _DefaultSlidePanelModule = _interopRequireDefault(require("./DefaultSlidePanel.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_DefaultSlidePanelModule.default);
var mainContentForSlidePanel = function mainContentForSlidePanel(togglePanelHandler) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("header", {
    className: cx('header-content')
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Main Content"), /*#__PURE__*/_react.default.createElement("button", {
    id: "mainToggleBtn",
    type: "button",
    onClick: togglePanelHandler,
    className: cx('custom-button')
  }, "Main Toggle Panel")), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("p", null, "This is the main content area of the slide panel. The overall height of the SlidePanel is determined by the intrinsic height of the content in this container."), /*#__PURE__*/_react.default.createElement("p", null, 'Focus is moved to the toggle button in the panel container when the panel is opened via the componentDidUpdate lifecycle hook in ', /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/cerner/terra-framework/blob/main/packages/terra-slide-panel/src/terra-dev-site/doc/example/DefaultSlidePanel.jsx"
  }, "the example code"), "."), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Item 1"), /*#__PURE__*/_react.default.createElement("li", null, "Item 2"), /*#__PURE__*/_react.default.createElement("li", null, "Item 3"), /*#__PURE__*/_react.default.createElement("li", null, "Item 4"), /*#__PURE__*/_react.default.createElement("li", null, "Item 5"), /*#__PURE__*/_react.default.createElement("li", null, "Item 6"), /*#__PURE__*/_react.default.createElement("li", null, "Item 7"), /*#__PURE__*/_react.default.createElement("li", null, "Item 8"))));
};
var panelContentForSlidePanel = function panelContentForSlidePanel(togglePanelHandler, toggleFullscreenHandler) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("header", {
    className: cx('header-content')
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: cx('heading')
  }, "Panel Content"), /*#__PURE__*/_react.default.createElement("button", {
    id: "panelToggleBtn",
    type: "button",
    onClick: togglePanelHandler,
    className: cx('extension-button')
  }, "Panel Toggle Panel"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: toggleFullscreenHandler,
    className: cx('extension-button')
  }, "Toggle Fullscreen")), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("p", null, "This is the panel content area of the slide panel."), /*#__PURE__*/_react.default.createElement("p", null, 'Focus is moved to the toggle button in the main container when the panel is closed via the componentDidUpdate lifecycle hook in ', /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/cerner/terra-framework/blob/main/packages/terra-slide-panel/src/terra-dev-site/doc/example/DefaultSlidePanel.jsx"
  }, "the example code"), "."), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Item 1"), /*#__PURE__*/_react.default.createElement("li", null, "Item 2"), /*#__PURE__*/_react.default.createElement("li", null, "Item 3"), /*#__PURE__*/_react.default.createElement("li", null, "Item 4"), /*#__PURE__*/_react.default.createElement("li", null, "Item 5"), /*#__PURE__*/_react.default.createElement("li", null, "Item 6"), /*#__PURE__*/_react.default.createElement("li", null, "Item 7"), /*#__PURE__*/_react.default.createElement("li", null, "Item 8"), /*#__PURE__*/_react.default.createElement("li", null, "Item 9"), /*#__PURE__*/_react.default.createElement("li", null, "Item 10"), /*#__PURE__*/_react.default.createElement("li", null, "Item 11"), /*#__PURE__*/_react.default.createElement("li", null, "Item 12"), /*#__PURE__*/_react.default.createElement("li", null, "Item 13"), /*#__PURE__*/_react.default.createElement("li", null, "Item 14"), /*#__PURE__*/_react.default.createElement("li", null, "Item 15"))));
};
var DefaultSlidePanel = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DefaultSlidePanel, _React$Component);
  var _super = _createSuper(DefaultSlidePanel);
  function DefaultSlidePanel(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DefaultSlidePanel);
    _this = _super.call(this, props);
    _this.state = {
      panelIsOpen: props.isOpen || false,
      panelIsFullscreen: props.isFullscreen || false
    };
    _this.handlePanelToggle = _this.handlePanelToggle.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFullscreenToggle = _this.handleFullscreenToggle.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(DefaultSlidePanel, [{
    key: "handlePanelToggle",
    value: function handlePanelToggle() {
      this.setState(function (prevState) {
        return {
          panelIsOpen: !prevState.panelIsOpen,
          panelIsFullscreen: prevState.panelIsOpen
        };
      });
    }
  }, {
    key: "handleFullscreenToggle",
    value: function handleFullscreenToggle() {
      var newState = this.state;
      newState.panelIsFullscreen = !this.state.panelIsFullscreen;
      this.setState(newState);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('container')
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('container-attributes')
      }, /*#__PURE__*/_react.default.createElement(_terraSlidePanel.default, {
        mainContent: mainContentForSlidePanel(this.handlePanelToggle),
        panelContent: panelContentForSlidePanel(this.handlePanelToggle, this.handleFullscreenToggle),
        panelSize: this.props.panelSize,
        panelBehavior: this.props.panelBehavior,
        panelPosition: this.props.panelPosition,
        isOpen: this.state.panelIsOpen,
        isFullscreen: this.state.panelIsFullscreen,
        fill: this.props.fill
      })));
    }
  }]);
  return DefaultSlidePanel;
}(_react.default.Component);
DefaultSlidePanel.propTypes = {
  panelBehavior: _propTypes.default.oneOf(['overlay', 'squish']),
  panelPosition: _propTypes.default.oneOf(['start', 'end']),
  panelSize: _propTypes.default.oneOf(['small', 'large']),
  isFullscreen: _propTypes.default.bool,
  isOpen: _propTypes.default.bool,
  fill: _propTypes.default.bool
};
var _default = DefaultSlidePanel;
exports.default = _default;