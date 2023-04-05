"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _terraOverlay = _interopRequireDefault(require("terra-overlay"));
var _OverlayContainer = _interopRequireDefault(require("terra-overlay/lib/OverlayContainer"));
var _tabbable = _interopRequireDefault(require("tabbable"));
var _LayoutSlidePanelModule = _interopRequireDefault(require("./LayoutSlidePanel.module.scss"));
var _excluded = ["isAnimated", "isOpen", "isToggleEnabled", "children", "panelBehavior", "panelContent", "size", "onToggle", "toggleText"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_LayoutSlidePanelModule.default);
var propTypes = {
  /**
   * Enables animations for panel state transitions.
   */
  isAnimated: _propTypes.default.bool,
  /**
   * Enables panel visibility.
   */
  isOpen: _propTypes.default.bool,
  /**
   * Enables toggling for the panel.
   */
  isToggleEnabled: _propTypes.default.bool,
  /**
   * The element to display in the main content area.
   */
  children: _propTypes.default.element,
  /**
   * The style of panel presentation. One of `overlay`, `squish`.
   */
  panelBehavior: _propTypes.default.oneOf(['overlay', 'squish']),
  /**
   * The component to display in the panel content area.
   */
  panelContent: _propTypes.default.node,
  /**
   * Current breakpoint size.
   */
  size: _propTypes.default.string.isRequired,
  /**
   * The function called when panel state changes are desired.
   */
  onToggle: _propTypes.default.func,
  /**
   * String to display on menu hover target.
   */
  toggleText: _propTypes.default.string
};
var defaultProps = {
  isAnimated: false,
  isOpen: false,
  isToggleEnabled: false,
  panelBehavior: 'overlay'
};
var LayoutSlidePanel = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(LayoutSlidePanel, _React$Component);
  var _super = _createSuper(LayoutSlidePanel);
  function LayoutSlidePanel(props) {
    var _this;
    (0, _classCallCheck2.default)(this, LayoutSlidePanel);
    _this = _super.call(this, props);
    _this.setPanelNode = _this.setPanelNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleTransitionEnd = _this.handleTransitionEnd.bind((0, _assertThisInitialized2.default)(_this));
    _this.preparePanelForTransition = _this.preparePanelForTransition.bind((0, _assertThisInitialized2.default)(_this));
    _this.isHidden = !props.isOpen;
    return _this;
  }
  (0, _createClass2.default)(LayoutSlidePanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.createElement('main'); // shim for <main> tag not being recognized in IE
      if (this.panelNode) {
        this.panelNode.addEventListener('transitionend', this.handleTransitionEnd);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.lastIsOpen = this.props.isOpen;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.panelNode) {
        this.panelNode.removeEventListener('transitionend', this.handleTransitionEnd);
      }
    }
  }, {
    key: "handleTransitionEnd",
    value: function handleTransitionEnd() {
      if (!this.props.isOpen && this.panelNode) {
        this.panelNode.setAttribute('aria-hidden', 'true');
        this.isHidden = true;

        // Sends focus back to the application layout header toggle button if it exists
        if (document.querySelector('button[data-application-header-toggle]')) {
          document.querySelector('button[data-application-header-toggle]').focus();
          // Else, we'll send focus back to first interactable element in the main panel
        } else if ((0, _tabbable.default)(document.querySelector('[data-terra-layout-main]'))[0]) {
          (0, _tabbable.default)(document.querySelector('[data-terra-layout-main]'))[0].focus();
        }
      }
    }
  }, {
    key: "setPanelNode",
    value: function setPanelNode(node) {
      this.panelNode = node;
    }
  }, {
    key: "preparePanelForTransition",
    value: function preparePanelForTransition() {
      // React 16.3 will be deprecating componentWillRecieveProps and componentWillUpdate, and removed in 17, so code execution prior to render becomes difficult.
      // As a result of this change, we are executing the code in the render block.
      if (this.props.isOpen && !this.lastIsOpen && this.panelNode) {
        // If the panel is opening remove the hidden attribute so the animation performs correctly.
        this.panelNode.setAttribute('aria-hidden', 'false');
        this.isHidden = false;
        if ((0, _tabbable.default)(this.panelNode)[0]) {
          (0, _tabbable.default)(this.panelNode)[0].focus();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        isAnimated = _this$props.isAnimated,
        isOpen = _this$props.isOpen,
        isToggleEnabled = _this$props.isToggleEnabled,
        children = _this$props.children,
        panelBehavior = _this$props.panelBehavior,
        panelContent = _this$props.panelContent,
        size = _this$props.size,
        onToggle = _this$props.onToggle,
        toggleText = _this$props.toggleText,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      this.preparePanelForTransition();
      var isTiny = size === 'tiny';
      var isSmall = size === 'small';
      var compactSize = isTiny || isSmall;
      var isOverlay = compactSize ? true : panelBehavior === 'overlay';
      var isOverlayOpen = isOpen && isOverlay;
      var overlayBackground = compactSize ? 'dark' : 'clear';
      var theme = this.context;
      var slidePanelClassNames = (0, _classnames.default)(cx('layout-slide-panel', {
        'is-open': isOpen
      }, {
        'is-overlay': isOverlay
      }, {
        'is-squish': !isOverlay
      }, theme.className), customProps.className);
      var panelClasses = cx('panel', {
        'is-tiny': isTiny
      }, {
        'is-small': isSmall
      }, {
        'is-animated': isAnimated && isOverlay && !!panelContent
      });
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        className: slidePanelClassNames
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: panelClasses,
        "aria-hidden": this.isHidden ? 'true' : 'false',
        ref: this.setPanelNode
      }, panelContent), /*#__PURE__*/_react.default.createElement(_OverlayContainer.default, {
        className: cx('content')
      }, /*#__PURE__*/_react.default.createElement(_terraOverlay.default, {
        isRelativeToContainer: true,
        onRequestClose: onToggle,
        isOpen: isOverlayOpen,
        backgroundStyle: overlayBackground,
        zIndex: "6000"
      }), /*#__PURE__*/_react.default.createElement("main", {
        role: "main",
        "data-terra-layout-main": true,
        className: cx('main-container')
      }, children)));
    }
  }]);
  return LayoutSlidePanel;
}(_react.default.Component);
LayoutSlidePanel.propTypes = propTypes;
LayoutSlidePanel.defaultProps = defaultProps;
LayoutSlidePanel.contextType = _terraThemeContext.default;
var _default = LayoutSlidePanel;
exports.default = _default;