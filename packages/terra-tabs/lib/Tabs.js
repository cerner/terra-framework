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
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraResponsiveElement = _interopRequireDefault(require("terra-responsive-element"));
var _TabPane = _interopRequireDefault(require("./TabPane"));
var _CollapsibleTabs = _interopRequireDefault(require("./_CollapsibleTabs"));
var _CollapsedTabs = _interopRequireDefault(require("./_CollapsedTabs"));
var _TabUtils = _interopRequireDefault(require("./TabUtils"));
var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));
var _excluded = ["tabFill", "fill", "onChange", "children", "activeKey", "defaultActiveKey", "responsiveTo"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_TabsModule.default);

/**
NOTE: This is being commented out until discussions have been resolved around if modular tabs should be removed.
const variants = {
  MODULAR_CENTERED: 'modular-centered',
  MODULAR_LEFT_ALIGNED: 'modular-left-aligned',
  STRUCTURAL: 'structural',
};
*/

var propTypes = {
  /**
   * Tabs style. One of: Tabs.Opts.Variants.MODULAR_CENTERED, Tabs.Opts.Variants.MODULAR_LEFT_ALIGNED, or Tabs.Opts.Variants.STRUCTURAL.
   * NOTE: This is being commented out until discussions have been resolved around if we want modular tabs.
  variant: PropTypes.oneOf([variants.MODULAR_CENTERED, variants.MODULAR_LEFT_ALIGNED, variants.STRUCTURAL]),
  */

  /**
   * Indicates if tabs should fill the width available in the tab bar.
   */
  tabFill: _propTypes.default.bool,
  /**
   * Indicates if the pane content should fill to the height of the parent container.
   */
  fill: _propTypes.default.bool,
  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane's key
   */
  onChange: _propTypes.default.func,
  /**
   * Tabs.Pane components to be displayed.
   */
  children: _propTypes.default.node.isRequired,
  /**
   * Key of the pane that should be active. Use this prop along with onChange to create controlled tabs.
   */
  activeKey: _propTypes.default.string,
  /**
   * Key of the pane that should be open initially.
   */
  defaultActiveKey: _propTypes.default.string,
  /**
   * The viewport the element will be responsive to. One of `window`, `parent` or `none`.
   * Note: If the responsive viewport is set to `none`, then tabs never _completely_
   * collapse into a menu.
   */
  responsiveTo: _propTypes.default.oneOf(['window', 'parent', 'none'])
};
var defaultProps = {
  tabFill: false,
  fill: false,
  responsiveTo: 'parent'
};
var Tabs = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Tabs, _React$Component);
  var _super = _createSuper(Tabs);
  function Tabs(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Tabs);
    _this = _super.call(this, props);
    _this.getInitialState = _this.getInitialState.bind((0, _assertThisInitialized2.default)(_this));
    _this.getActiveTabIndex = _this.getActiveTabIndex.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnChange = _this.handleOnChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleTruncationChange = _this.handleTruncationChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.wrapPaneOnClick = _this.wrapPaneOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.setTabs = _this.setTabs.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      activeKey: _this.getInitialState(),
      isLabelTruncated: false,
      showCollapsedTabs: false
    };
    return _this;
  }
  (0, _createClass2.default)(Tabs, [{
    key: "getInitialState",
    value: function getInitialState() {
      if (this.props.activeKey) {
        return null;
      }
      return _TabUtils.default.initialSelectedTabKey(this.props.children, this.props.defaultActiveKey);
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event, selectedPane) {
      if (!selectedPane.props.isDisabled) {
        if (this.props.onChange) {
          this.props.onChange(event, selectedPane.key);
        }
        if (!this.props.activeKey && _TabUtils.default.shouldHandleSelection(this.state.activeKey, selectedPane.key)) {
          this.setState({
            activeKey: selectedPane.key
          });
        }
      }
    }
  }, {
    key: "handleTruncationChange",
    value: function handleTruncationChange(isLabelTruncated) {
      if (this.state.isLabelTruncated !== isLabelTruncated) {
        this.setState({
          isLabelTruncated: isLabelTruncated
        });
      }
    }
  }, {
    key: "setTabs",
    value: function setTabs(event) {
      var showCollapsedTabs = event === 'tiny';
      if (this.state.showCollapsedTabs !== showCollapsedTabs) {
        this.setState({
          showCollapsedTabs: showCollapsedTabs
        });
      }
    }
  }, {
    key: "getActiveTabIndex",
    value: function getActiveTabIndex() {
      var _this2 = this;
      var activeIndex = -1;
      _react.default.Children.forEach(this.props.children, function (child, index) {
        if (child.key === _this2.state.activeKey || child.key === _this2.props.activeKey) {
          activeIndex = index;
        }
      });
      return activeIndex;
    }
  }, {
    key: "wrapPaneOnClick",
    value: function wrapPaneOnClick(pane) {
      var _this3 = this;
      return function (event) {
        _this3.handleOnChange(event, pane);
        if (pane.props.onClick) {
          pane.props.onClick(event);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props = this.props,
        tabFill = _this$props.tabFill,
        fill = _this$props.fill,
        onChange = _this$props.onChange,
        children = _this$props.children,
        activeKey = _this$props.activeKey,
        defaultActiveKey = _this$props.defaultActiveKey,
        responsiveTo = _this$props.responsiveTo,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var theme = this.context;

      // NOTE: Hardcoding variant to structural until discussions have resolved around if we want modular tabs.
      var variant = 'structural';
      var tabsClassNames = (0, _classnames.default)(cx('tabs-container', {
        'tab-fill': tabFill
      }, variant, theme.className), customProps.className);
      var content = null;
      var isIconOnly = false;
      var clonedPanes = [];
      _react.default.Children.forEach(children, function (child) {
        var isActive = false;
        if (child.key === _this4.state.activeKey || child.key === activeKey) {
          isActive = true;
          content = child.props.children;
        }
        if (child.props.isIconOnly) {
          isIconOnly = true;
        }
        clonedPanes.push( /*#__PURE__*/_react.default.cloneElement(child, {
          className: cx({
            'is-active': isActive
          }, child.props.className),
          onClick: _this4.wrapPaneOnClick(child),
          isActive: isActive
        }));
      });
      content = _react.default.Children.map(content, function (contentItem) {
        return /*#__PURE__*/_react.default.cloneElement(contentItem, {
          isLabelHidden: isIconOnly || _this4.state.isLabelTruncated
        });
      });
      var tabContent = function () {
        var collapsibleTabs = /*#__PURE__*/_react.default.createElement(_CollapsibleTabs.default, {
          activeKey: activeKey || _this4.state.activeKey,
          activeIndex: _this4.getActiveTabIndex(),
          onChange: _this4.handleOnChange,
          onTruncationChange: _this4.handleTruncationChange,
          variant: variant
        }, clonedPanes);
        if (responsiveTo === 'parent' || responsiveTo === 'window') {
          var collapsedTabs = /*#__PURE__*/_react.default.createElement(_CollapsedTabs.default, {
            activeKey: activeKey || _this4.state.activeKey,
            activeIndex: _this4.getActiveTabIndex(),
            onTruncationChange: _this4.handleTruncationChange
          }, clonedPanes);
          return /*#__PURE__*/_react.default.createElement(_terraResponsiveElement.default, {
            onChange: _this4.setTabs,
            responsiveTo: responsiveTo
          }, _this4.state.showCollapsedTabs ? collapsedTabs : collapsibleTabs);
        }
        return collapsibleTabs;
      }();
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, (0, _extends2.default)({}, customProps, {
        className: tabsClassNames,
        fill: fill,
        header: tabContent
      }), /*#__PURE__*/_react.default.createElement("div", {
        role: "tabpanel",
        className: cx('pane-content', {
          'fill-parent': fill
        })
      }, content));
    }
  }]);
  return Tabs;
}(_react.default.Component);
Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
Tabs.Pane = _TabPane.default;
Tabs.Utils = _TabUtils.default;
Tabs.contextType = _terraThemeContext.default;
/**
Note: This is being commented out until discussions have been resolved around if we want modular tabs.
Tabs.Opts = {
  Variants: variants,
};
*/
var _default = Tabs;
exports.default = _default;