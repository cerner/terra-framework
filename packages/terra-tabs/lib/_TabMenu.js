"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _terraMenu = _interopRequireDefault(require("terra-menu"));
var _IconCaretDown = _interopRequireDefault(require("terra-icon/lib/icon/IconCaretDown"));
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _reactIntl = require("react-intl");
var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));
var _excluded = ["label", "customDisplay", "icon", "isIconOnly", "showIcon"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_TabsModule.default);
var propTypes = {
  /**
   * Key of the current active tab.
   */
  activeKey: _propTypes.default.string,
  /**
   * Tabs that should be displayed collapsed as selectable menu items.
   */
  children: _propTypes.default.node,
  /**
   * Ref callback for menu toggle.
   */
  refCallback: _propTypes.default.func,
  /**
   * The current active tab
   */
  selectedTab: _propTypes.default.element
};
var TabMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TabMenu, _React$Component);
  var _super = _createSuper(TabMenu);
  function TabMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, TabMenu);
    _this = _super.call(this, props);
    _this.handleOnRequestClose = _this.handleOnRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnClick = _this.handleOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.getTargetRef = _this.getTargetRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.setTargetRef = _this.setTargetRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.wrapOnClick = _this.wrapOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }
  (0, _createClass2.default)(TabMenu, [{
    key: "handleOnRequestClose",
    value: function handleOnRequestClose() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick() {
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: "handleOnKeyDown",
    value: function handleOnKeyDown(event) {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
        this.setState({
          isOpen: true
        });
      }
    }
  }, {
    key: "getTargetRef",
    value: function getTargetRef() {
      return this.targetRef;
    }
  }, {
    key: "setTargetRef",
    value: function setTargetRef(node) {
      this.targetRef = node;
      if (this.props.refCallback) {
        this.props.refCallback(node);
      }
    }
  }, {
    key: "wrapOnClick",
    value: function wrapOnClick(child) {
      var _this2 = this;
      return function (event) {
        event.stopPropagation();
        if (child.props.onClick) {
          child.props.onClick(event);
        }
        _this2.setState({
          isOpen: false
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var menuItems = [];
      var menuActive = false;
      var toggleText;
      _react.default.Children.forEach(this.props.children, function (child) {
        var _child$props = child.props,
          label = _child$props.label,
          customDisplay = _child$props.customDisplay,
          icon = _child$props.icon,
          isIconOnly = _child$props.isIconOnly,
          showIcon = _child$props.showIcon,
          otherProps = (0, _objectWithoutProperties2.default)(_child$props, _excluded);
        var isSelected = false;
        if (_this3.props.activeKey === child.key) {
          toggleText = label;
          isSelected = true;
          menuActive = true;
        }
        menuItems.push( /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, (0, _extends2.default)({}, otherProps, {
          text: label,
          onClick: _this3.wrapOnClick(child),
          key: child.key,
          icon: showIcon ? icon : null,
          isHighlighted: isSelected
        })));
      });
      var theme = this.context;
      var icon = null;
      // allow icon to be displayed on the tab, but not for the 'More' dropdown tab
      if (toggleText && this.props.selectedTab) {
        if (this.props.selectedTab.props.icon && this.props.selectedTab.props.showIcon) {
          icon = /*#__PURE__*/_react.default.createElement("div", {
            className: cx('active-tab-icon')
          }, this.props.selectedTab.props.icon);
        }
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        role: "button",
        tabIndex: "0",
        ref: this.setTargetRef,
        onClick: this.handleOnClick,
        onKeyDown: this.handleOnKeyDown,
        className: cx('tab-menu', {
          'is-active': menuActive
        }, theme.className),
        "data-terra-tabs-menu": true
      }, icon, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Terra.tabs.more"
      }, function (menuToggleText) {
        return /*#__PURE__*/_react.default.createElement("span", null, toggleText || menuToggleText);
      }), /*#__PURE__*/_react.default.createElement(_IconCaretDown.default, null), /*#__PURE__*/_react.default.createElement(_terraMenu.default, {
        onRequestClose: this.handleOnRequestClose,
        targetRef: this.getTargetRef,
        isOpen: this.state.isOpen
      }, menuItems));
    }
  }]);
  return TabMenu;
}(_react.default.Component);
TabMenu.propTypes = propTypes;
TabMenu.contextType = _terraThemeContext.default;
var _default = TabMenu;
exports.default = _default;