"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
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
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _lodash = _interopRequireDefault(require("lodash.debounce"));
var _LayoutSlidePanelModule = _interopRequireDefault(require("./LayoutSlidePanel.module.scss"));
var _LayoutSlidePanel = _interopRequireDefault(require("./_LayoutSlidePanel"));
var _LayoutUtils = require("./LayoutUtils");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_LayoutSlidePanelModule.default);
var propTypes = {
  /**
   * Element to be placed within the header section of the layout.
   */
  header: _propTypes.default.element,
  /**
   * Element to be placed within the menu section of the layout. If not set, Layout-provided menu controls will be hidden.
   */
  menu: _propTypes.default.element,
  /**
   * String used to decorate menu hover control.
   */
  menuText: _propTypes.default.string,
  /**
   * Element to be placed within the main content section of the layout.
   */
  children: _propTypes.default.element
};
var Layout = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Layout, _React$Component);
  var _super = _createSuper(Layout);
  function Layout(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Layout);
    _this = _super.call(this, props);
    _this.toggleMenu = _this.toggleMenu.bind((0, _assertThisInitialized2.default)(_this));
    _this.togglePin = _this.togglePin.bind((0, _assertThisInitialized2.default)(_this));
    _this.updateSize = (0, _lodash.default)(_this.updateSize.bind((0, _assertThisInitialized2.default)(_this)), 100);
    _this.renderHeader = _this.renderHeader.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderMenu = _this.renderMenu.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderContent = _this.renderContent.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = Layout.stateForProps(props, {
      size: (0, _LayoutUtils.getBreakpointSize)(),
      prevProps: _this.props
    });
    return _this;
  }
  (0, _createClass2.default)(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateSize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateSize);
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      var newSize = (0, _LayoutUtils.getBreakpointSize)();
      if (this.state.size !== newSize) {
        this.setState(Layout.stateForProps(this.props, {
          size: newSize
        }));
      }
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var _this2 = this;
      return new Promise(function (resolve) {
        _this2.setState(function (prevState) {
          return {
            menuIsOpen: !prevState.menuIsOpen
          };
        }, resolve);
      });
    }
  }, {
    key: "togglePin",
    value: function togglePin() {
      var _this3 = this;
      return new Promise(function (resolve) {
        _this3.setState(function (prevState) {
          return {
            menuIsPinned: !prevState.menuIsPinned
          };
        }, resolve);
      });
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var header = this.props.header;
      var _this$state = this.state,
        size = _this$state.size,
        menuIsOpen = _this$state.menuIsOpen,
        isToggleMenu = _this$state.isToggleMenu,
        menuIsPresent = _this$state.menuIsPresent;
      if (!header) {
        return null;
      }
      var shouldAllowMenuToggle = isToggleMenu && menuIsPresent;
      return /*#__PURE__*/_react.default.cloneElement(header, {
        layoutConfig: {
          size: size,
          toggleMenu: shouldAllowMenuToggle ? this.toggleMenu : undefined,
          menuIsOpen: menuIsOpen
        }
      });
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var menu = this.props.menu;
      var _this$state2 = this.state,
        size = _this$state2.size,
        menuIsOpen = _this$state2.menuIsOpen,
        menuIsPinned = _this$state2.menuIsPinned,
        isToggleMenu = _this$state2.isToggleMenu,
        menuIsPresent = _this$state2.menuIsPresent;
      var shouldAllowMenuToggle = isToggleMenu && menuIsPresent;
      if (!menuIsPresent) {
        return null;
      }
      return /*#__PURE__*/_react.default.cloneElement(menu, {
        layoutConfig: {
          size: size,
          toggleMenu: shouldAllowMenuToggle ? this.toggleMenu : undefined,
          menuIsOpen: menuIsOpen,
          menuIsPinned: menuIsPinned
        }
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var children = this.props.children;
      var _this$state3 = this.state,
        size = _this$state3.size,
        menuIsOpen = _this$state3.menuIsOpen,
        isToggleMenu = _this$state3.isToggleMenu,
        menuIsPresent = _this$state3.menuIsPresent;
      var shouldAllowMenuToggle = isToggleMenu && menuIsPresent;
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        fill: true,
        header: isToggleMenu && this.renderHeader(),
        className: cx('content-container')
      }, children ? /*#__PURE__*/_react.default.cloneElement(children, {
        layoutConfig: {
          size: size,
          toggleMenu: shouldAllowMenuToggle ? this.toggleMenu : undefined,
          menuIsOpen: menuIsOpen
        }
      }) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var menuText = this.props.menuText;
      var _this$state4 = this.state,
        menuIsOpen = _this$state4.menuIsOpen,
        menuIsPinned = _this$state4.menuIsPinned,
        size = _this$state4.size,
        isFixedMenu = _this$state4.isFixedMenu,
        isToggleMenu = _this$state4.isToggleMenu;
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, (0, _extends2.default)({
        fill: true,
        header: !isToggleMenu && this.renderHeader()
      }, (0, _LayoutUtils.getCustomProps)(this.props, propTypes)), /*#__PURE__*/_react.default.createElement(_LayoutSlidePanel.default, {
        panelContent: this.renderMenu(),
        panelBehavior: menuIsPinned || isFixedMenu ? 'squish' : 'overlay',
        size: size,
        onToggle: this.toggleMenu,
        toggleText: menuText,
        isOpen: menuIsOpen,
        isAnimated: true
      }, this.renderContent()));
    }
  }], [{
    key: "stateForProps",
    value: function stateForProps(props, currentState) {
      var isToggleMenu = currentState.size === 'tiny' || currentState.size === 'small';
      var isFixedMenu = !isToggleMenu;
      var menuIsPresent = !!props.menu;
      return _objectSpread(_objectSpread({}, currentState || {}), {}, {
        isFixedMenu: isFixedMenu,
        isToggleMenu: isToggleMenu,
        menuIsPresent: menuIsPresent,
        menuIsOpen: menuIsPresent && (currentState.menuIsOpen || isFixedMenu),
        menuIsPinned: menuIsPresent && currentState.menuIsPinned
      });
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps !== prevState.prevProps) {
        return Layout.stateForProps(nextProps, prevState);
      }
      return null;
    }
  }]);
  return Layout;
}(_react.default.Component);
Layout.propTypes = propTypes;
var _default = Layout;
exports.default = _default;