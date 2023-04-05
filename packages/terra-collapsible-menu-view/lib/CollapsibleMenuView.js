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
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _reactIntl = require("react-intl");
var _CollapsibleMenuViewItem = _interopRequireDefault(require("./CollapsibleMenuViewItem"));
var _CollapsibleMenuViewItemGroup = _interopRequireDefault(require("./CollapsibleMenuViewItemGroup"));
var _CollapsibleMenuViewToggle = _interopRequireDefault(require("./CollapsibleMenuViewToggle"));
var _CollapsibleMenuViewDivider = _interopRequireDefault(require("./CollapsibleMenuViewDivider"));
var _CollapsibleMenuViewModule = _interopRequireDefault(require("./CollapsibleMenuView.module.scss"));
var _excluded = ["children", "boundingRef", "menuWidth", "intl", "alwaysCollapsedMenuItems"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_CollapsibleMenuViewModule.default);
var propTypes = {
  /**
   * Item/ItemGroup/Divider elements to display in the view. Items that will fit in the space available will
   * display face-up the remainder will be rolled into a menu
   */
  children: _propTypes.default.node.isRequired,
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760, or auto
   */
  menuWidth: _propTypes.default.oneOf(['160', '240', '320', '640', '960', '1280', '1760', 'auto']),
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: _propTypes.default.func,
  /**
   * @private
   * Object containing intl APIs
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }),
  /**
   *  Puts items under the collapsed (more) menu. More button will be always shown if at least one item is populated here.
   */
  alwaysCollapsedMenuItems: _propTypes.default.arrayOf(_propTypes.default.element)
};
var defaultProps = {
  alwaysCollapsedMenuItems: []
};
var prepopulatedBaseDivider = /*#__PURE__*/_react.default.createElement(_CollapsibleMenuViewDivider.default, {
  key: "prepopulatedBaseDivider"
});
var CollapsibleMenuView = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CollapsibleMenuView, _React$Component);
  var _super = _createSuper(CollapsibleMenuView);
  function CollapsibleMenuView(props) {
    var _this;
    (0, _classCallCheck2.default)(this, CollapsibleMenuView);
    _this = _super.call(this, props);
    _this.collapsedMenuAlwaysShown = props.alwaysCollapsedMenuItems.length > 0;
    _this.setContainer = _this.setContainer.bind((0, _assertThisInitialized2.default)(_this));
    _this.setMenuButton = _this.setMenuButton.bind((0, _assertThisInitialized2.default)(_this));
    _this.resetCache = _this.resetCache.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2.default)(_this));
    _this.resetCache();
    return _this;
  }
  (0, _createClass2.default)(CollapsibleMenuView, [{
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
      this.handleResize(this.contentWidth);
      this.resizeObserver.observe(this.container);
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
      var menuButtonWidth = this.menuButton.getBoundingClientRect().width;
      var availableWidth = width - menuButtonWidth;
      var hiddenStartIndex = -1;
      var calcWidth = 0;
      var menuHidden = true;
      for (var i = 0; i < _react.default.Children.count(this.props.children); i += 1) {
        var child = this.container.children[i];
        var childWidth = child.getBoundingClientRect().width;
        calcWidth += childWidth;
        if (calcWidth > availableWidth) {
          // If last child fits in the available space, leave it face up
          if (!this.collapsedMenuAlwaysShown && i === this.props.children.length - 1 && calcWidth <= width) {
            break;
          }

          // If divider is the last element to be hidden on collapse menu, leave it face up
          if (_react.default.Children.count(this.props.children) > 1 && this.props.children[i].type === _CollapsibleMenuViewDivider.default) {
            hiddenStartIndex = i - 1;
          } else {
            hiddenStartIndex = i;
          }
          menuHidden = false;
          break;
        }
      }
      if (this.menuHidden !== menuHidden || this.hiddenStartIndex !== hiddenStartIndex) {
        this.menuHidden = menuHidden;
        this.hiddenStartIndex = hiddenStartIndex;
        this.forceUpdate();
      }
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
    key: "setMenuButton",
    value: function setMenuButton(node) {
      if (node === null) {
        return;
      }
      this.menuButton = node;
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
      var _this$props = this.props,
        children = _this$props.children,
        boundingRef = _this$props.boundingRef,
        menuWidth = _this$props.menuWidth,
        intl = _this$props.intl,
        alwaysCollapsedMenuItems = _this$props.alwaysCollapsedMenuItems,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var theme = this.context;
      var collapsibleMenuViewClassName = (0, _classnames.default)(cx('collapsible-menu-view', {
        'is-calculating': this.isCalculating
      }, theme.className), customProps.className);
      var menuButtonClassName = cx('menu-button', {
        hidden: !this.collapsedMenuAlwaysShown && this.menuHidden
      });
      var visibleChildren = children;
      var hiddenChildren = alwaysCollapsedMenuItems;
      if (this.hiddenStartIndex >= 0) {
        visibleChildren = _react.default.Children.toArray(children);
        hiddenChildren = this.collapsedMenuAlwaysShown ? visibleChildren.splice(this.hiddenStartIndex).concat(prepopulatedBaseDivider).concat(hiddenChildren) : visibleChildren.splice(this.hiddenStartIndex).concat(hiddenChildren);
      }
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        className: collapsibleMenuViewClassName,
        ref: this.setContainer
      }), visibleChildren, /*#__PURE__*/_react.default.createElement("div", {
        className: menuButtonClassName,
        ref: this.setMenuButton
      }, /*#__PURE__*/_react.default.createElement(_CollapsibleMenuViewItem.default, {
        "data-collapsible-menu-toggle": true,
        icon: /*#__PURE__*/_react.default.createElement("span", {
          className: cx('menu-button-icon')
        }),
        subMenuItems: hiddenChildren,
        boundingRef: boundingRef,
        menuWidth: menuWidth,
        isIconOnly: true,
        text: intl.formatMessage({
          id: 'Terra.collapsibleMenuView.more'
        }),
        variant: "utility"
      })));
    }
  }]);
  return CollapsibleMenuView;
}(_react.default.Component);
CollapsibleMenuView.Item = _CollapsibleMenuViewItem.default;
CollapsibleMenuView.ItemGroup = _CollapsibleMenuViewItemGroup.default;
CollapsibleMenuView.Toggle = _CollapsibleMenuViewToggle.default;
CollapsibleMenuView.Divider = _CollapsibleMenuViewDivider.default;
CollapsibleMenuView.propTypes = propTypes;
CollapsibleMenuView.contextType = _terraThemeContext.default;
CollapsibleMenuView.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(CollapsibleMenuView);
exports.default = _default;