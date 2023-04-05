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
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _TabMenu = _interopRequireDefault(require("./_TabMenu"));
var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_TabsModule.default);
var propTypes = {
  /**
   * Key of the current active tab.
   */
  activeKey: _propTypes.default.string.isRequired,
  /**
   * Index of the current active tab.
   */
  activeIndex: _propTypes.default.number.isRequired,
  /**
   * Tabs to be displayed in the collapsible tab bar.
   */
  children: _propTypes.default.node.isRequired,
  /**
   * Tabs style. One of: "modular-centered", "modular-left-aligned", or "structural".
   */
  variant: _propTypes.default.oneOf(['modular-centered', 'modular-left-aligned', 'structural']).isRequired,
  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane element
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   * Callback function when label truncation state has changed.
   * Parameters: 1. Bool indicating if any of the tab labels have been truncated.
   */
  onTruncationChange: _propTypes.default.func
};
var CollapsibleTabs = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CollapsibleTabs, _React$Component);
  var _super = _createSuper(CollapsibleTabs);
  function CollapsibleTabs(props) {
    var _this;
    (0, _classCallCheck2.default)(this, CollapsibleTabs);
    _this = _super.call(this, props);
    _this.setContainer = _this.setContainer.bind((0, _assertThisInitialized2.default)(_this));
    _this.setMenuRef = _this.setMenuRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.resetCache = _this.resetCache.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSelectionAnimation = _this.handleSelectionAnimation.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMenuOnKeyDown = _this.handleMenuOnKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocusLeft = _this.handleFocusLeft.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocusRight = _this.handleFocusRight.bind((0, _assertThisInitialized2.default)(_this));
    _this.resetCache();
    return _this;
  }
  (0, _createClass2.default)(CollapsibleTabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.resizeObserver = new _resizeObserverPolyfill.default(function (entries) {
        _this2.contentWidth = entries[0].contentRect.width;
        if (!_this2.isCalculating) {
          _this2.animationFrameID = window.requestAnimationFrame(function () {
            // Resetting the cache so that all elements will be rendered face-up for width calculations
            _this2.resetCache();
            _this2.forceUpdate();
          });
        }
      });
      this.resizeObserver.observe(this.container);
      this.handleResize(this.contentWidth);
      this.handleSelectionAnimation();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.isCalculating) {
        this.isCalculating = false;
        this.handleResize(this.contentWidth);
      } else if (_react.default.Children.count(this.props.children) !== _react.default.Children.count(prevProps.children)) {
        this.resetCache();
        this.forceUpdate();
      } else {
        this.handleSelectionAnimation();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.cancelAnimationFrame(this.animationFrameID);
      this.resizeObserver.disconnect(this.container);
      this.container = null;
    }
  }, {
    key: "handleResize",
    value: function handleResize(width) {
      var menuMarginLeft = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'), 10);
      var menuMarginRight = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'), 10);
      var menuToggleWidth = this.menuRef.getBoundingClientRect().width + menuMarginLeft + menuMarginRight;
      var availableWidth = width - menuToggleWidth;

      // Calculate hide index
      var childrenCount = _react.default.Children.count(this.props.children);
      var newHideIndex = childrenCount;
      var calcMinWidth = 0;
      var isMenuHidden = true;
      for (var i = 0; i < this.props.children.length; i += 1) {
        var tab = this.container.children[i];
        var tabMarginLeft = parseFloat(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'));
        var tabMarginRight = parseFloat(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'));
        var minWidth = parseFloat(window.getComputedStyle(tab, null).getPropertyValue('min-width'));
        calcMinWidth += minWidth + tabMarginLeft + tabMarginRight;
        if (calcMinWidth > availableWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
          newHideIndex = i;
          isMenuHidden = false;
          break;
        }
      }

      // Calculate if label will be truncated
      var isLabelTruncated = false;
      var calcWidth = 0;
      for (var _i = 0; _i < newHideIndex; _i += 1) {
        var _tab = this.container.children[_i];
        calcWidth += _tab.getBoundingClientRect().width;
        if (isMenuHidden && calcWidth > width || !isMenuHidden && calcWidth > availableWidth) {
          isLabelTruncated = true;
          break;
        }
      }
      this.props.onTruncationChange(isLabelTruncated);
      if (this.menuHidden !== isMenuHidden || this.hiddenStartIndex !== newHideIndex) {
        this.menuHidden = isMenuHidden;
        this.hiddenStartIndex = newHideIndex;
        this.forceUpdate();
      }
    }
  }, {
    key: "handleSelectionAnimation",
    value: function handleSelectionAnimation() {
      if (this.selectionBar && window.getComputedStyle(this.selectionBar, null).getPropertyValue('transition-property').includes('transform')) {
        var activeIndex = this.props.activeIndex > this.hiddenStartIndex ? this.hiddenStartIndex : this.props.activeIndex;
        var selectedTab = this.container.children[activeIndex];
        if (selectedTab) {
          var isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
          var tabRect = selectedTab.getBoundingClientRect();
          var barWidth = tabRect.width;
          var barLeft = tabRect.left - this.container.getBoundingClientRect().left;
          if (isRTL) {
            barLeft = tabRect.right - this.container.getBoundingClientRect().right;
          }
          this.selectionBar.style.width = "".concat(barWidth, "px");
          this.selectionBar.style.transform = "translate3d(".concat(barLeft, "px,0,0)");
        }
      }
    }
  }, {
    key: "handleOnKeyDown",
    value: function handleOnKeyDown(event) {
      // If there are less than 2 children we don't need to worry about keyboard navigation
      if (_react.default.Children.count(this.props.children) < 2) {
        return;
      }

      // We don't want menu keydown events to propagate and conflict when the tabs keydown events
      // Instead of stopping menu key event propagation, we whitelist event.targets so we do tab focus mgmt only on tab based event targets
      var tabList = event.target.getAttribute('role') === 'tablist';
      var tabMoreBtn = event.target.getAttribute('data-terra-tabs-menu') === 'true';
      if (tabList || tabMoreBtn) {
        var isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
        var visibleChildren = this.container.children;
        if (event.nativeEvent.keyCode === KeyCode.KEY_LEFT) {
          if (isRTL) {
            this.handleFocusRight(visibleChildren, event);
          } else {
            this.handleFocusLeft(visibleChildren, event);
          }
        } else if (event.nativeEvent.keyCode === KeyCode.KEY_RIGHT) {
          if (isRTL) {
            this.handleFocusLeft(visibleChildren, event);
          } else {
            this.handleFocusRight(visibleChildren, event);
          }
        }
      }
    }
  }, {
    key: "handleFocusRight",
    value: function handleFocusRight(visibleChildren, event) {
      if (this.props.activeIndex >= this.hiddenStartIndex) {
        return;
      }
      for (var i = this.props.activeIndex + 1; i < visibleChildren.length; i += 1) {
        if (!this.props.children[i].props.isDisabled) {
          if (visibleChildren[i] === this.menuRef) {
            this.menuRef.focus();
            break;
          } else {
            this.props.onChange(event, this.props.children[i]);
            break;
          }
        }
      }
    }
  }, {
    key: "handleFocusLeft",
    value: function handleFocusLeft(visibleChildren, event) {
      var startIndex = this.props.activeIndex - 1;
      if (startIndex >= this.hiddenStartIndex || document.activeElement === this.menuRef) {
        startIndex = this.hiddenStartIndex - 1;
      }
      for (var i = startIndex; i >= 0; i -= 1) {
        if (!this.props.children[i].props.isDisabled) {
          if (document.activeElement === this.menuRef) {
            this.container.focus();
          }
          this.props.onChange(event, this.props.children[i]);
          break;
        }
      }
    }

    /* eslint class-methods-use-this: ["error", { "exceptMethods": ["handleMenuOnKeyDown"] }] */
  }, {
    key: "handleMenuOnKeyDown",
    value: function handleMenuOnKeyDown(event) {
      // Prevent menu key events from propagating up to CollabsibleTabs handleOnKeyDown listener
      // This prevents left / right arrow key usage in menu from shifting to different tabs
      event.stopPropagation();
    }
  }, {
    key: "setContainer",
    value: function setContainer(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.container = node;
    }
  }, {
    key: "setMenuRef",
    value: function setMenuRef(node) {
      if (node === null) {
        return;
      }
      this.menuRef = node;
    }
  }, {
    key: "resetCache",
    value: function resetCache() {
      this.animationFrameID = null;
      this.hiddenStartIndex = -1;
      this.isCalculating = true;
      this.menuHidden = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var visibleChildren = [];
      var hiddenChildren = [];
      _react.default.Children.forEach(this.props.children, function (child, index) {
        if (index < _this3.hiddenStartIndex || _this3.hiddenStartIndex < 0) {
          visibleChildren.push(child);
        } else {
          hiddenChildren.push(child);
        }
      });
      var theme = this.context;
      var selectedTab = this.props.children[this.props.activeIndex];
      var menu = this.menuHidden ? null : /*#__PURE__*/_react.default.createElement(_TabMenu.default, {
        onKeyDown: this.handleMenuOnKeyDown,
        refCallback: this.setMenuRef,
        activeKey: this.props.activeKey,
        selectedTab: selectedTab
      }, hiddenChildren);
      var selectionBar = this.props.variant === 'modular-centered' || this.props.variant === 'modular-left-aligned' ? /*#__PURE__*/_react.default.createElement("div", {
        className: cx('selection-bar'),
        ref: function ref(node) {
          if (node) {
            _this3.selectionBar = node;
          }
        }
      }) : null;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('collapsible-tabs-container', {
          'is-calculating': this.isCalculating
        }, theme.className),
        ref: this.setContainer,
        tabIndex: "0",
        onKeyDown: this.handleOnKeyDown,
        role: "tablist"
      }, visibleChildren, menu), selectionBar);
    }
  }]);
  return CollapsibleTabs;
}(_react.default.Component);
CollapsibleTabs.propTypes = propTypes;
CollapsibleTabs.contextType = _terraThemeContext.default;
var _default = CollapsibleTabs;
exports.default = _default;