"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
var _lodash = _interopRequireDefault(require("lodash.debounce"));
var _reactIntl = require("react-intl");
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _Tab = _interopRequireDefault(require("./_Tab"));
var _TabRollup = _interopRequireDefault(require("./_TabRollup"));
var _PopupMenu = _interopRequireDefault(require("../common/_PopupMenu"));
var _helpers = require("../utils/helpers");
var _propTypes2 = require("../utils/propTypes");
var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_TabsModule.default);
var propTypes = {
  /**
   * An array of configuration objects with information specifying the creation of navigation items.
   */
  navigationItems: _propTypes2.navigationItemsPropType,
  /**
   * The base id used to generate ids of navigation, utility, and extension items
   */
  id: _propTypes.default.string,
  /**
   * A function to be executed for the render of each navigation item.
   */
  navigationRenderFunction: _propTypes.default.func,
  /**
   * A string identifying the currently active tab.
   */
  activeTabKey: _propTypes.default.string,
  /**
   * A function to be executed upon selection of a tab.
   */
  onTabSelect: _propTypes.default.func,
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: _propTypes.default.object,
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired
};
var defaultProps = {
  navigationItems: [],
  notifications: {}
};
var Tabs = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Tabs, _React$Component);
  var _super = _createSuper(Tabs);
  function Tabs(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Tabs);
    _this = _super.call(this, props);
    _this.getRollupTabWidth = _this.getRollupTabWidth.bind((0, _assertThisInitialized2.default)(_this));
    _this.closePopup = _this.closePopup.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderRollup = _this.renderRollup.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderPopup = _this.renderPopup.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderVisibleTabs = _this.renderVisibleTabs.bind((0, _assertThisInitialized2.default)(_this));
    _this.updateSize = (0, _lodash.default)(_this.updateSize.bind((0, _assertThisInitialized2.default)(_this)), 100);
    _this.resetCalculations = _this.resetCalculations.bind((0, _assertThisInitialized2.default)(_this));
    _this.containerRef = /*#__PURE__*/_react.default.createRef();
    _this.rollupTabRef = /*#__PURE__*/_react.default.createRef();
    _this.rollupInnerRef = /*#__PURE__*/_react.default.createRef();
    _this.childRefs = [];
    _this.previousNotifications = null;
    _this.resetCalculations();
    _this.state = {
      popupIsOpen: false
    };
    return _this;
  }
  (0, _createClass2.default)(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (this.props.navigationItems && this.props.navigationItems.length) {
        this.resizeObserver = new _resizeObserverPolyfill.default(function (entries) {
          _this2.contentWidth = entries[0].contentRect.width;
          if (!_this2.isCalculating) {
            _this2.animationFrameID = window.requestAnimationFrame(function () {
              // Resetting the cache so that all elements will be rendered face-up for width calculations
              _this2.updateSize();
            });
          }
        });
        this.resizeObserver.observe(this.containerRef.current);
        this.handleResize(this.contentWidth);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props = this.props,
        navigationItems = _this$props.navigationItems,
        activeTabKey = _this$props.activeTabKey,
        notifications = _this$props.notifications;
      if (navigationItems.length !== nextProps.navigationItems.length || activeTabKey !== nextProps.activeTabKey) {
        this.resetCalculations();
      }
      this.previousNotifications = notifications;
      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var activeTabKey = this.props.activeTabKey;
      var popupIsOpen = this.state.popupIsOpen;
      if (this.isCalculating) {
        this.isCalculating = false;
        this.handleResize(this.contentWidth);
      }
      if (activeTabKey !== prevProps.activeTabKey && popupIsOpen) {
        // If the active tab has changed between updates due to updates outside of Tabs, the popup is closed.
        this.closePopup();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.updateSize.cancel();
      window.cancelAnimationFrame(this.animationFrameID);
      if (this.containerRef.current) {
        this.resizeObserver.disconnect(this.containerRef.current);
      }
      this.containerRef.current = null;
    }
  }, {
    key: "handleResize",
    value: function handleResize(width) {
      // Calculate hide index
      var childrenCount = this.props.navigationItems.length;
      var moreWidth = width - this.getRollupTabWidth();
      var newHideIndex = childrenCount;
      var isMenuHidden = true;
      var calcMinWidth = 0;
      for (var i = 0; i < childrenCount; i += 1) {
        calcMinWidth += this.childRefs[i].current.getBoundingClientRect().width;
        if (calcMinWidth > moreWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
          newHideIndex = i;
          isMenuHidden = false;
          break;
        }
      }
      if (this.hiddenStartIndex !== newHideIndex) {
        this.hiddenStartIndex = newHideIndex;
        this.menuHidden = isMenuHidden;
        this.forceUpdate();
      }
    }
  }, {
    key: "getRollupTabWidth",
    value: function getRollupTabWidth() {
      if (!this.rollupTabRef.current) {
        return 0;
      }
      return this.rollupTabRef.current.getBoundingClientRect().width;
    }
  }, {
    key: "closePopup",
    value: function closePopup(callback) {
      this.setState({
        popupIsOpen: false
      }, callback);
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      this.resetCalculations();
      this.forceUpdate();
    }
  }, {
    key: "resetCalculations",
    value: function resetCalculations() {
      this.animationFrameID = null;
      this.hiddenStartIndex = -1;
      this.menuHidden = false;
      this.isCalculating = true;
    }
  }, {
    key: "shouldPulse",
    value: function shouldPulse(navigationItems, notifications) {
      var shouldPulse = false;
      if (this.previousNotifications) {
        for (var i = 0; i < navigationItems.length; i += 1) {
          var item = navigationItems[i];
          var previousCount = this.previousNotifications[item.key];
          var newCount = notifications[item.key];
          if (newCount && (!previousCount || newCount > previousCount)) {
            shouldPulse = true;
            break;
          }
        }
      }
      return shouldPulse;
    }
  }, {
    key: "sliceTabs",
    value: function sliceTabs(navigationItems) {
      if (this.hiddenStartIndex >= 0) {
        return {
          visibleTabs: navigationItems.slice(0, this.hiddenStartIndex),
          hiddenTabs: navigationItems.slice(this.hiddenStartIndex)
        };
      }
      return {
        visibleTabs: navigationItems,
        hiddenTabs: []
      };
    }
  }, {
    key: "renderVisibleTabs",
    value: function renderVisibleTabs(visibleTabs, useNotificationStyle, notifications, id) {
      var _this3 = this;
      var _this$props2 = this.props,
        activeTabKey = _this$props2.activeTabKey,
        onTabSelect = _this$props2.onTabSelect;
      return visibleTabs.map(function (tab, index) {
        var tabProps = {
          id: id && (0, _helpers.navigationItemId)(id, tab.key),
          text: tab.text,
          key: tab.key,
          onTabSelect: onTabSelect ? onTabSelect.bind(null, tab.key, tab.metaData) : null,
          isActive: tab.key === activeTabKey,
          notificationCount: useNotificationStyle ? notifications[tab.key] : 0,
          hasCount: useNotificationStyle
        };
        if (_this3.isCalculating) {
          var tabRef = /*#__PURE__*/_react.default.createRef();
          _this3.childRefs[index] = tabRef;
          tabProps.tabRef = tabRef;
        }
        return /*#__PURE__*/_react.default.createElement(_Tab.default, (0, _extends2.default)({}, tabProps, {
          render: _this3.props.navigationRenderFunction
        }));
      });
    }
  }, {
    key: "renderRollup",
    value: function renderRollup(hiddenTabs, useNotificationStyle, notifications) {
      var _this4 = this;
      var _this$props3 = this.props,
        activeTabKey = _this$props3.activeTabKey,
        intl = _this$props3.intl;
      var tabRollupIsSelected = hiddenTabs.some(function (tab) {
        return tab.key === activeTabKey;
      });
      var hasChildNotifications = hiddenTabs.some(function (tab) {
        return notifications[tab.key] > 0;
      });
      return /*#__PURE__*/_react.default.createElement(_TabRollup.default, {
        hasCount: useNotificationStyle,
        isPulsed: hasChildNotifications && !this.isCalculating && this.shouldPulse(hiddenTabs, notifications),
        onTabSelect: function onTabSelect() {
          _this4.setState({
            popupIsOpen: true
          });
        },
        tabRef: this.rollupTabRef,
        innerRef: this.rollupInnerRef,
        text: intl.formatMessage({
          id: 'Terra.applicationNavigation.tabs.rollupButtonTitle'
        }),
        isSelected: tabRollupIsSelected,
        hasChildNotifications: hasChildNotifications,
        "data-application-tabs-more": true
      });
    }
  }, {
    key: "renderPopup",
    value: function renderPopup(hiddenTabs, notifications, id) {
      var _this5 = this;
      var _this$props4 = this.props,
        activeTabKey = _this$props4.activeTabKey,
        onTabSelect = _this$props4.onTabSelect,
        intl = _this$props4.intl;
      return /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
        contentHeight: "auto",
        contentWidth: "320",
        onRequestClose: function onRequestClose() {
          _this5.closePopup();
        },
        targetRef: function targetRef() {
          return _this5.rollupInnerRef.current;
        },
        isOpen: true,
        isArrowDisplayed: true,
        isContentFocusDisabled: true
      }, /*#__PURE__*/_react.default.createElement(_PopupMenu.default, {
        title: intl.formatMessage({
          id: 'Terra.applicationNavigation.tabs.rollupMenuHeaderTitle'
        }),
        role: "list",
        menuItems: hiddenTabs.map(function (tab) {
          return {
            id: id && (0, _helpers.navigationItemId)(id, tab.key),
            key: tab.key,
            text: tab.text,
            icon: tab.icon,
            notificationCount: notifications[tab.key],
            metaData: tab.metaData,
            isActive: tab.key === activeTabKey
          };
        }),
        onSelectMenuItem: function onSelectMenuItem(itemKey, itemMetaData) {
          _this5.closePopup(function () {
            if (onTabSelect) {
              onTabSelect(itemKey, itemMetaData);
            }
          });
        },
        showSelections: true
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        navigationItems = _this$props5.navigationItems,
        notifications = _this$props5.notifications,
        id = _this$props5.id;
      if (!navigationItems || !navigationItems.length) {
        return /*#__PURE__*/_react.default.createElement(_Tab.default, {
          isPlaceholder: true,
          text: "W",
          tabKey: "",
          "aria-hidden": "true"
        });
      }
      var popupIsOpen = this.state.popupIsOpen;
      var _this$sliceTabs = this.sliceTabs(navigationItems),
        visibleTabs = _this$sliceTabs.visibleTabs,
        hiddenTabs = _this$sliceTabs.hiddenTabs;
      var useNotificationStyle = !!Object.keys(notifications).length;
      return /*#__PURE__*/_react.default.createElement("nav", {
        className: cx('tabs-container', {
          'is-calculating': this.isCalculating
        }),
        ref: this.containerRef
      }, this.renderVisibleTabs(visibleTabs, useNotificationStyle, notifications, id), !this.menuHidden ? this.renderRollup(hiddenTabs, useNotificationStyle, notifications) : null, popupIsOpen ? this.renderPopup(hiddenTabs, notifications, id) : null);
    }
  }]);
  return Tabs;
}(_react.default.Component);
Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(Tabs);
exports.default = _default;