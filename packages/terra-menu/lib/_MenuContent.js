"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraList = _interopRequireDefault(require("terra-list"));
var _IconLeft = _interopRequireDefault(require("terra-icon/lib/icon/IconLeft"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _IconClose = _interopRequireDefault(require("terra-icon/lib/icon/IconClose"));
var _terraArrange = _interopRequireDefault(require("terra-arrange"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _v = _interopRequireDefault(require("uuid/v4"));
var _MenuUtils = _interopRequireDefault(require("./_MenuUtils"));
var _MenuItem = _interopRequireDefault(require("./MenuItem"));
var _MenuModule = _interopRequireDefault(require("./Menu.module.scss"));
var _excluded = ["children", "isToggleable"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_MenuModule.default);
var menuHeaderId = "terra-menu-headertitle-".concat((0, _v.default)());
var propTypes = {
  /**
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired,
  /**
   * Title the should be displayed in header.
   */
  title: _propTypes.default.string,
  /**
   * Callback function for when back button is clicked.
   */
  onRequestBack: _propTypes.default.func,
  /**
   * Callback function for when close button is clicked.
   */
  onRequestClose: _propTypes.default.func,
  /**
   * Callback function that takes the content to be displayed next and is called when an item with nested content is clicked.
   */
  onRequestNext: _propTypes.default.func.isRequired,
  /**
   * Menu Items/Menu Groups/Menu Dividers to be displayed.
   */
  children: _propTypes.default.node.isRequired,
  /**
   * Index within the Menu Stack.
   */
  index: _propTypes.default.number.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: _propTypes.default.func,
  /**
   * Indicates if the menu content should set default focus on itself.
   */
  isFocused: _propTypes.default.bool,
  /**
   * Indicates if menu's height has been constrained by bounding container.
   */
  isHeightBounded: _propTypes.default.bool,
  /**
   * Indicates if menu's width has been constrained by bounding container.
   */
  isWidthBounded: _propTypes.default.bool,
  /**
   * Fixed height for content.
   */
  fixedHeight: _propTypes.default.number,
  /**
   * Fixed width for content.
   */
  fixedWidth: _propTypes.default.number,
  /**
   * Width for content.
   */
  contentWidth: _propTypes.default.number,
  /**
   * Indicates if the content should be hidden.
   */
  isHidden: _propTypes.default.bool,
  /**
   * Ref callback function to be applied to content container.
   */
  refCallback: _propTypes.default.func,
  /**
   * Header Title for main-menu(first-tier).
   * Header Title will only be visible if the main-menu contains at least one sub-menu.
   */
  headerTitle: _propTypes.default.string
};
var defaultProps = {
  isFocused: false,
  title: '',
  isWidthBounded: false,
  isHeightBounded: false,
  isHidden: false,
  headerTitle: ''
};
var childContextTypes = {
  isToggleableMenu: _propTypes.default.bool,
  shouldReserveSpaceForIcon: _propTypes.default.bool
};
var MenuContent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuContent, _React$Component);
  var _super = _createSuper(MenuContent);
  function MenuContent(props) {
    var _this;
    (0, _classCallCheck2.default)(this, MenuContent);
    _this = _super.call(this, props);
    _this.wrapOnClick = _this.wrapOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.wrapOnKeyDown = _this.wrapOnKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.buildHeader = _this.buildHeader.bind((0, _assertThisInitialized2.default)(_this));
    _this.isToggleable = _this.isToggleable.bind((0, _assertThisInitialized2.default)(_this));
    _this.shouldReserveSpaceForIcon = _this.shouldReserveSpaceForIcon.bind((0, _assertThisInitialized2.default)(_this));
    _this.onKeyDown = _this.onKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.onKeyDownBackButton = _this.onKeyDownBackButton.bind((0, _assertThisInitialized2.default)(_this));
    _this.validateFocus = _this.validateFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.needsFocus = props.isFocused;
    _this.handleContainerRef = _this.handleContainerRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      focusIndex: -1
    };
    return _this;
  }
  (0, _createClass2.default)(MenuContent, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isToggleableMenu: this.isToggleable(),
        shouldReserveSpaceForIcon: this.shouldReserveSpaceForIcon()
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isFocused) {
        this.needsFocus = this.needsFocus || this.props.isFocused !== prevProps.isFocused;
      } else {
        this.needsFocus = false;
      }
      this.validateFocus(this.contentNode);
    }
  }, {
    key: "handleContainerRef",
    value: function handleContainerRef(node) {
      if (this.props.refCallback) {
        this.props.refCallback(node);
      }
      this.contentNode = node;
      this.validateFocus(node);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var focusableMenuItems = this.contentNode.querySelectorAll('li[tabindex="0"]');
      if (event.nativeEvent.keyCode === KeyCode.KEY_UP) {
        // Shift focus to last focusable menu item
        focusableMenuItems[focusableMenuItems.length - 1].focus();
      }
      if (event.nativeEvent.keyCode === KeyCode.KEY_DOWN) {
        // Shift focus to first focusable menu item
        focusableMenuItems[0].focus();
      }
    }
  }, {
    key: "onKeyDownBackButton",
    value: function onKeyDownBackButton(event) {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_LEFT) {
        event.preventDefault();
        this.props.onRequestBack();
      }
    }
  }, {
    key: "validateFocus",
    value: function validateFocus(node) {
      if (this.needsFocus && node) {
        node.focus();
        this.needsFocus = document.activeElement !== node;

        // If nested menu is open
        if (this.props.index > 0) {
          // Shift focus to the back button
          node.querySelector('[role="button"][tabIndex="0"]').focus();
        }
      }
    }
  }, {
    key: "isToggleable",
    value: function isToggleable() {
      var isToggleableValue = false;
      _react.default.Children.forEach(this.props.children, function (child) {
        var _child$props = child.props,
          children = _child$props.children,
          isToggleable = _child$props.isToggleable,
          customProps = (0, _objectWithoutProperties2.default)(_child$props, _excluded);

        // child is a group menu item that needs space reserved for the checkmark
        _react.default.Children.forEach(children, function (subchild) {
          if (subchild.type === _MenuItem.default) {
            isToggleableValue = true;
          }
        });
        if (isToggleable || customProps.isSelectable) {
          isToggleableValue = true;
        }
      });
      return isToggleableValue;
    }
  }, {
    key: "shouldReserveSpaceForIcon",
    value: function shouldReserveSpaceForIcon() {
      var shouldReserveSpaceForIcon = false;
      _react.default.Children.forEach(this.props.children, function (child) {
        var _child$props2 = child.props,
          icon = _child$props2.icon,
          isInstructionsForUse = _child$props2.isInstructionsForUse;

        // reserve space for when there is a custom icon or instructions icon to be shown
        if (icon || isInstructionsForUse) {
          shouldReserveSpaceForIcon = true;
        }
      });
      return shouldReserveSpaceForIcon;
    }
  }, {
    key: "wrapOnClick",
    value: function wrapOnClick(item) {
      var _this2 = this;
      var onClick = item.props.onClick;
      return function (event) {
        event.preventDefault();
        if (_this2.state.focusIndex !== -1) {
          _this2.setState({
            focusIndex: -1
          });
        }
        if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
          // Avoid keydown "click" event from enter / space key triggering stack increase here
          // We handle increasing stack with keydown events in a separate handler below
          // Fixes: https://github.com/cerner/terra-core/issues/2015
          if (event.type !== 'keydown') {
            _this2.props.onRequestNext(item);
          }
        }
        if (onClick) {
          onClick(event);
        }
      };
    }
  }, {
    key: "wrapOnKeyDown",
    value: function wrapOnKeyDown(item, index) {
      var _this3 = this;
      var onKeyDown = item.props.onKeyDown;
      return function (event) {
        var shiftTabClicked = event.shiftKey && event.nativeEvent.keyCode === KeyCode.KEY_TAB;
        var tabClicked = event.nativeEvent.keyCode === KeyCode.KEY_TAB;
        if (!(shiftTabClicked || tabClicked)) {
          event.preventDefault();
        }
        if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
          if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
            _this3.props.onRequestNext(item);
          }
        } else if (event.nativeEvent.keyCode === KeyCode.KEY_RIGHT) {
          if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
            _this3.props.onRequestNext(item);
          }
        } else if (event.nativeEvent.keyCode === KeyCode.KEY_LEFT) {
          _this3.props.onRequestBack();
        } else if (event.nativeEvent.keyCode === KeyCode.KEY_UP) {
          _this3.setState({
            focusIndex: index - 1
          });
        } else if (event.nativeEvent.keyCode === KeyCode.KEY_DOWN) {
          _this3.setState({
            focusIndex: index + 1
          });
        }
        if (onKeyDown) {
          onKeyDown(event);
        }
      };
    }
  }, {
    key: "buildHeader",
    value: function buildHeader(isFullScreen) {
      var intl = this.props.intl;
      var backBtnText = intl.formatMessage({
        id: 'Terra.menu.back'
      });
      var closeBtnText = intl.formatMessage({
        id: 'Terra.menu.close'
      });
      var closeIcon = /*#__PURE__*/_react.default.createElement(_IconClose.default, null);
      var closeButton = /*#__PURE__*/_react.default.createElement("div", null);
      if (this.props.onRequestClose && isFullScreen) {
        closeButton = /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          className: cx('header-button'),
          onClick: this.props.onRequestClose,
          "aria-label": closeBtnText
        }, closeIcon);
      }
      var backIcon = /*#__PURE__*/_react.default.createElement(_IconLeft.default, null);
      var header = /*#__PURE__*/_react.default.createElement("div", null);
      if (this.props.index > 0) {
        header = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
          className: cx('header-container')
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: cx('header-button'),
          role: "button",
          onClick: this.props.onRequestBack,
          onKeyDown: this.onKeyDownBackButton,
          tabIndex: "0",
          "aria-label": backBtnText,
          "aria-describedby": menuHeaderId
        }, backIcon), /*#__PURE__*/_react.default.createElement("h1", {
          id: menuHeaderId,
          className: cx('header-title')
        }, this.props.title)));
      } else if (this.props.headerTitle.length > 0) {
        header = /*#__PURE__*/_react.default.createElement("h1", {
          className: cx(['header-title', 'main-header-title'])
        }, this.props.headerTitle);
      }
      return /*#__PURE__*/_react.default.createElement(_terraArrange.default, {
        className: cx('header'),
        fitEnd: closeButton,
        fill: header,
        align: "center"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var index = -1;
      var shouldDisplayMainMenuHeader;
      var items = this.props.children ? [] : undefined;
      _react.default.Children.map(this.props.children, function (item) {
        var onClick = _this4.wrapOnClick(item);
        var newItem = item;

        // Check if child is an enabled Menu.Item
        if (item.props.text && !item.props.isDisabled) {
          index += 1;
          var onKeyDown = _this4.wrapOnKeyDown(item, index);
          var isActive = _this4.state.focusIndex === index;
          newItem = /*#__PURE__*/_react.default.cloneElement(item, {
            onClick: onClick,
            onKeyDown: onKeyDown,
            isActive: isActive
          });
          // If the menu is first-tier and is provided with `headerTitle` prop, terra-menu should render a header.
          // Also the first-tier menu to have a header should possess at least one menu-item that drills-in to a sub-menu with sub-menu items.
          if (_this4.props.headerTitle.length > 0 && item.props.subMenuItems && item.props.subMenuItems.length > 0) {
            shouldDisplayMainMenuHeader = true;
          }
          // If the child has children then it is an item group, so iterate through it's children
        } else if (item.props.children) {
          var children = item.props.children ? [] : undefined;
          _react.default.Children.forEach(item.props.children, function (child) {
            if (!child.props.isDisabled) {
              index += 1;
              var clonedElement = /*#__PURE__*/_react.default.cloneElement(child, {
                onKeyDown: _this4.wrapOnKeyDown(child, index),
                isActive: index === _this4.state.focusIndex
              });
              children.push(clonedElement);
            } else {
              children.push(child);
            }
          });
          newItem = /*#__PURE__*/_react.default.cloneElement(item, {}, children);
        }
        items.push(newItem);
      });
      var boundingFrame = this.props.boundingRef ? this.props.boundingRef() : undefined;
      var isFullScreen = _MenuUtils.default.isFullScreen(this.props.isHeightBounded, this.props.isWidthBounded, boundingFrame, this.props.contentWidth);
      var theme = this.context;
      var isSubMenu = this.props.index > 0;
      var contentClass = cx('content', {
        submenu: isSubMenu
      }, {
        'hidden-page': this.props.isHidden
      }, {
        fullscreen: isFullScreen
      }, theme.className);
      var header;
      if (isFullScreen || isSubMenu || shouldDisplayMainMenuHeader) {
        header = this.buildHeader(isFullScreen);
      }
      var contentHeight = this.props.isHeightBounded ? '100%' : this.props.fixedHeight;
      var contentPosition = this.props.isHeightBounded ? 'relative' : 'static';
      var contentWidth = this.props.isWidthBounded ? undefined : this.props.fixedWidth;
      /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, react/forbid-dom-props */
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.handleContainerRef,
        className: contentClass,
        style: {
          height: contentHeight,
          width: contentWidth,
          position: contentPosition
        },
        tabIndex: "-1",
        "aria-modal": "true",
        role: "dialog",
        onKeyDown: this.onKeyDown
      }, /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        header: header,
        fill: this.props.isHeightBounded || this.props.index > 0
      }, /*#__PURE__*/_react.default.createElement(_terraList.default, {
        className: cx('list'),
        role: "menu"
      }, items)));
      /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, react/forbid-dom-props */
    }
  }]);
  return MenuContent;
}(_react.default.Component);
MenuContent.propTypes = propTypes;
MenuContent.defaultProps = defaultProps;
MenuContent.childContextTypes = childContextTypes;
MenuContent.contextType = _terraThemeContext.default;
var _default = (0, _reactIntl.injectIntl)(MenuContent);
exports.default = _default;