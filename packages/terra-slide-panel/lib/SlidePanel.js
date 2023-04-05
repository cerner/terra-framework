"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SlidePanelPositions = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _SlidePanelModule = _interopRequireDefault(require("./SlidePanel.module.scss"));
var _excluded = ["panelAriaLabel", "mainAriaLabel", "mainContent", "panelContent", "panelBehavior", "panelPosition", "panelSize", "isFullscreen", "isOpen", "fill"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_SlidePanelModule.default);
var SlidePanelPositions = {
  START: 'start',
  END: 'end'
};
exports.SlidePanelPositions = SlidePanelPositions;
var propTypes = {
  /**
   * String that labels the Panel content area for screen readers.
   */
  panelAriaLabel: _propTypes.default.string,
  /**
   * String that labels the Main content area for screen readers.
   */
  mainAriaLabel: _propTypes.default.string,
  /**
   * The component to display in the main content area.
   */
  mainContent: _propTypes.default.node,
  /**
   * The component to display in the panel content area.
   */
  panelContent: _propTypes.default.node,
  /**
   * The style of panel presentation. One of `overlay`, `squish`.
   */
  panelBehavior: _propTypes.default.oneOf(['overlay', 'squish']),
  /**
   * The position at which the panel will be displayed. This property honors the current direction setting. One of `start`, `end`.
   */
  panelPosition: _propTypes.default.oneOf(['start', 'end']),
  /**
   * The size at which the panel will be displayed. One of `small`, `large`.
   */
  panelSize: _propTypes.default.oneOf(['small', 'large']),
  /**
   * Whether or not, when open, the panel should be displayed with the full width of the SlidePanel.
   */
  isFullscreen: _propTypes.default.bool,
  /**
   * Whether or not the panel should be displayed.
   */
  isOpen: _propTypes.default.bool,
  /**
   * Whether or not the SlidePanel should be sized relative to its parent container.
   */
  fill: _propTypes.default.bool
};
var defaultProps = {
  panelBehavior: 'overlay',
  panelPosition: SlidePanelPositions.END,
  panelSize: 'small'
};
var SlidePanel = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SlidePanel, _React$Component);
  var _super = _createSuper(SlidePanel);
  function SlidePanel(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SlidePanel);
    _this = _super.call(this, props);
    _this.setPanelNode = _this.setPanelNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.mainNode = /*#__PURE__*/_react.default.createRef();
    _this.setLastClicked = _this.setLastClicked.bind((0, _assertThisInitialized2.default)(_this));
    _this.setDisclosingNode = _this.setDisclosingNode.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(SlidePanel, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen && this.props.isOpen !== prevProps.isOpen) {
        // Save the disclosing node for returning focus when panel is closed
        this.setDisclosingNode(this.lastClicked);
        this.panelNode.focus();
      } else if (!this.props.isOpen && this.props.isOpen !== prevProps.isOpen) {
        // Return focus to the disclosing element
        this.disclosingNode.focus();
      }
    }
  }, {
    key: "setPanelNode",
    value: function setPanelNode(node) {
      this.panelNode = node;
    }
  }, {
    key: "setLastClicked",
    value: function setLastClicked(event) {
      this.lastClicked = event.target;
    }
  }, {
    key: "setDisclosingNode",
    value: function setDisclosingNode(node) {
      this.disclosingNode = node;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        panelAriaLabel = _this$props.panelAriaLabel,
        mainAriaLabel = _this$props.mainAriaLabel,
        mainContent = _this$props.mainContent,
        panelContent = _this$props.panelContent,
        panelBehavior = _this$props.panelBehavior,
        panelPosition = _this$props.panelPosition,
        panelSize = _this$props.panelSize,
        isFullscreen = _this$props.isFullscreen,
        isOpen = _this$props.isOpen,
        fill = _this$props.fill,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var theme = this.context;
      var slidePanelClassNames = (0, _classnames.default)(cx('slide-panel', {
        'is-open': isOpen
      }, {
        'is-fullscreen': isFullscreen
      }, {
        fill: fill
      }, theme.className), customProps.className);
      var panelDiv = /*#__PURE__*/_react.default.createElement("div", {
        className: cx(['panel']),
        key: "panel",
        tabIndex: "-1",
        "aria-label": panelAriaLabel,
        "aria-hidden": !isOpen ? 'true' : 'false',
        ref: this.setPanelNode
      }, panelContent);
      var mainDiv =
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      _react.default.createElement("div", {
        className: cx('main'),
        key: "main",
        tabIndex: "-1",
        "aria-label": mainAriaLabel,
        ref: this.mainNode,
        onClick: this.setLastClicked,
        onKeyUp: this.setLastClicked
      }, mainContent);
      var content = panelPosition === SlidePanelPositions.START ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, panelDiv, mainDiv) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, mainDiv, panelDiv);
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        className: slidePanelClassNames,
        "data-slide-panel-panel-behavior": panelBehavior,
        "data-slide-panel-panel-position": panelPosition,
        "data-slide-panel-panel-size": panelSize
      }), content);
    }
  }]);
  return SlidePanel;
}(_react.default.Component);
SlidePanel.propTypes = propTypes;
SlidePanel.defaultProps = defaultProps;
SlidePanel.contextType = _terraThemeContext.default;
var _default = SlidePanel;
exports.default = _default;