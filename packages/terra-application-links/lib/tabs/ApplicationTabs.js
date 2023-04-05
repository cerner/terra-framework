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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
var _reactRouterDom = require("react-router-dom");
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _Tab = _interopRequireDefault(require("./_Tab"));
var _TabMenu = _interopRequireDefault(require("./_TabMenu"));
var _CollapsedTab = _interopRequireDefault(require("./_CollapsedTab"));
var _ApplicationTabsModule = _interopRequireDefault(require("./ApplicationTabs.module.scss"));
var _excluded = ["alignment", "links", "location", "match", "history", "staticContext", "hasIcons"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ApplicationTabsModule.default);
var propTypes = {
  /**
   * Alignment of the navigational tabs. ( e.g start, center, end )
   */
  alignment: _propTypes.default.oneOf(['start', 'center', 'end']),
  /**
   * Navigational links that will generate tabs that will update the path. These paths are matched with react-router to selection.
   */
  links: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
     * The id to append to the link.
     */
    id: _propTypes.default.string,
    /**
     * The path to push to the route.
     */
    path: _propTypes.default.string.isRequired,
    /**
     * The display text for the link.
     */
    text: _propTypes.default.string.isRequired,
    icon: _propTypes.default.icon
  })),
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: _propTypes.default.object.isRequired,
  /**
   * The match as provided by the `withRouter()` HOC.
   */
  match: _propTypes.default.object.isRequired,
  /**
   * The history as provided by the `withRouter()` HOC.
   */
  history: _propTypes.default.object.isRequired,
  /**
   * The staticContext as provided by the `withRouter()` HOC. This will only be provided when
   * within a StaticRouter.
   */
  staticContext: _propTypes.default.object,
  hasIcons: _propTypes.default.bool
};
var defaultProps = {
  alignment: 'center',
  links: []
};
var ApplicationTabs = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ApplicationTabs, _React$Component);
  var _super = _createSuper(ApplicationTabs);
  function ApplicationTabs(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ApplicationTabs);
    _this = _super.call(this, props);
    _this.setContainerNode = _this.setContainerNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2.default)(_this));
    _this.resetCalculations();
    return _this;
  }
  (0, _createClass2.default)(ApplicationTabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.resizeObserver = new _resizeObserverPolyfill.default(function (entries) {
        _this2.contentWidth = entries[0].contentRect.width;
        if (!_this2.isCalculating) {
          _this2.animationFrameID = window.requestAnimationFrame(function () {
            // Resetting the calculations so that all elements will be rendered face-up for width calculations
            _this2.resetCalculations();
            _this2.forceUpdate();
          });
        }
      });
      this.resizeObserver.observe(this.container);
      this.handleResize(this.contentWidth);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.links.length !== nextProps.links.length) {
        this.resetCalculations();
      }
      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.isCalculating) {
        this.isCalculating = false;
        this.handleResize(this.contentWidth);
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
      // Calculate hide index
      var childrenCount = this.props.links.length;
      var tabWidth = childrenCount > 1 ? this.container.children[0].getBoundingClientRect().width : 0;
      var availableWidth = width - tabWidth;
      var newHideIndex = childrenCount;
      var calcMinWidth = 0;
      var isMenuHidden = true;
      for (var i = 0; i < childrenCount; i += 1) {
        calcMinWidth += tabWidth;
        if (calcMinWidth > availableWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
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
    key: "setContainerNode",
    value: function setContainerNode(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.container = node;
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
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        alignment = _this$props.alignment,
        links = _this$props.links,
        location = _this$props.location,
        match = _this$props.match,
        history = _this$props.history,
        staticContext = _this$props.staticContext,
        hasIcons = _this$props.hasIcons,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var visibleTabs = [];
      var collapsedTabs = [];
      links.forEach(function (link, index) {
        var tabProps = {
          id: link.id,
          path: link.path,
          text: link.text,
          key: link.path,
          externalLink: link.externalLink,
          icon: link.icon,
          location: location,
          history: history
        };
        if (_this3.hiddenStartIndex < 0) {
          visibleTabs.push( /*#__PURE__*/_react.default.createElement(_Tab.default, tabProps));
          collapsedTabs.push( /*#__PURE__*/_react.default.createElement(_CollapsedTab.default, tabProps));
        } else if (index < _this3.hiddenStartIndex) {
          visibleTabs.push( /*#__PURE__*/_react.default.createElement(_Tab.default, tabProps));
        } else {
          collapsedTabs.push( /*#__PURE__*/_react.default.createElement(_CollapsedTab.default, tabProps));
        }
      });
      var tabClass = cx('tabs-container', {
        'is-calculating': this.isCalculating
      }, alignment);
      var theme = this.context;
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        className: cx('tabs-wrapper', theme.className)
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: tabClass,
        ref: this.setContainerNode
      }, visibleTabs, /*#__PURE__*/_react.default.createElement(_TabMenu.default, {
        location: location,
        isHidden: this.menuHidden,
        hasIcons: hasIcons
      }, collapsedTabs), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('divider-after-last-tab')
      })));
    }
  }]);
  return ApplicationTabs;
}(_react.default.Component);
ApplicationTabs.propTypes = propTypes;
ApplicationTabs.defaultProps = defaultProps;
ApplicationTabs.contextType = _terraThemeContext.default;
var _default = (0, _reactRouterDom.withRouter)(ApplicationTabs);
exports.default = _default;