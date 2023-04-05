"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraArrange = _interopRequireDefault(require("terra-arrange"));
var _IconCheckmark = _interopRequireDefault(require("terra-icon/lib/icon/IconCheckmark"));
var _IconChevronRight = _interopRequireDefault(require("terra-icon/lib/icon/IconChevronRight"));
var _IconConsultInstructionsForUse = _interopRequireDefault(require("terra-icon/lib/icon/IconConsultInstructionsForUse"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _MenuItemModule = _interopRequireDefault(require("./MenuItem.module.scss"));
var _excluded = ["text", "isDisabled", "isSelected", "isToggled", "isInstructionsForUse", "isSelectable", "isToggleable", "subMenuItems", "isActive", "icon", "isHighlighted"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_MenuItemModule.default);
var contextTypes = {
  isGroupItem: _propTypes.default.bool,
  /**
   * isSelectableMenu has been deprecated and will be removed on next major version release.
   * Rename the `isSelectableMenu` prop to `isToggleableMenu`.
   */
  isSelectableMenu: _propTypes.default.bool,
  /**
  * Indicates if the menu should be toggleable.
  */
  isToggleableMenu: _propTypes.default.bool,
  /**
   * Indicates if the menu needs to reserve space on the left for each menu item if one
   * or more of the items needs to display a custom icon, instructions for use icon, or
   * a checkmark if the item is part of a group item.
   */
  shouldReserveSpaceForIcon: _propTypes.default.bool
};
var propTypes = {
  /**
   * Sets the item's text.
   */
  text: _propTypes.default.string,
  /**
   * Indicates if item should be disabled
   */
  isDisabled: _propTypes.default.bool,
  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * isSelected has been deprecated and will be removed on next major version release.
   * Rename the `isSelected` prop to `isToggled`.
   */
  isSelected: _propTypes.default.bool,
  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * isSelectable has been deprecated and will be removed on next major version release.
   * Rename the `isSelectable` prop to `isToggleable`.
   */
  isSelectable: _propTypes.default.bool,
  /**
  * Indicates if the item is toggled. A toggled item is indicated with a checkmark.
  */
  isToggled: _propTypes.default.bool,
  /**
  * Indicates if the item should be toggleable.
  */
  isToggleable: _propTypes.default.bool,
  /**
   * Displays the  eIFU (electronic instructions for use) icon for menu item if set to true. (This icon is used to indicate Help content that is the equivalent of an instruction manual)
   */
  isInstructionsForUse: _propTypes.default.bool,
  /**
   * List of Menu.Items to display in a submenu when this item is clicked.
   */
  subMenuItems: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Callback function for when item is clicked
   */
  onClick: _propTypes.default.func,
  /**
   * Callback function for when toggleable state changes on a toggleabe item.
   */
  onChange: _propTypes.default.func,
  /**
   * Indicates if the item has focus. This is used internally to control focus and does not set initial focus.
   */
  isActive: _propTypes.default.bool,
  /**
   * Custom icon to display in the item
   */
  icon: _propTypes.default.element,
  /**
   * @private
   * Indicates if the item should display with a highlighted background. Reserved for Terra higher-order component approved usage only.
   */
  isHighlighted: _propTypes.default.bool
};
var defaultProps = {
  text: '',
  isToggled: false,
  isInstructionsForUse: false,
  isActive: false,
  isToggleable: undefined,
  isDisabled: false,
  subMenuItems: [],
  isHighlighted: false
};

// TODO: remove isSelect and isSeletable props on the next major release
var MenuItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuItem, _React$Component);
  var _super = _createSuper(MenuItem);
  function MenuItem(props, context) {
    var _this;
    (0, _classCallCheck2.default)(this, MenuItem);
    _this = _super.call(this, props, context);
    var _this$props = _this.props,
      isSelected = _this$props.isSelected,
      isSelectable = _this$props.isSelectable,
      isToggled = _this$props.isToggled,
      isToggleable = _this$props.isToggleable;
    _this.wrapOnClick = _this.wrapOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.wrapOnKeyDown = _this.wrapOnKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.wrapOnKeyUp = _this.wrapOnKeyUp.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleToggled = _this.handleToggled.bind((0, _assertThisInitialized2.default)(_this));
    _this.setItemNode = _this.setItemNode.bind((0, _assertThisInitialized2.default)(_this));
    var toggled = isToggled || isSelected;
    var toggleable = isToggleable || isSelectable;
    _this.state = {
      isToggled: toggled && toggleable && !context.isGroupItem,
      isActive: false
    };
    return _this;
  }
  (0, _createClass2.default)(MenuItem, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isActive && this.itemNode) {
        this.itemNode.focus();
      }
    }
  }, {
    key: "handleToggled",
    value: function handleToggled(event) {
      event.preventDefault();
      var _this$props2 = this.props,
        isSelectable = _this$props2.isSelectable,
        isToggleable = _this$props2.isToggleable;
      if ((isToggleable || isSelectable) && !this.context.isGroupItem && !this.props.isDisabled) {
        this.setState(function (prevState) {
          return {
            isToggled: !prevState.isToggled
          };
        });
        if (this.props.onChange) {
          this.props.onChange(event, !this.state.isToggled);
        }
      }
    }
  }, {
    key: "setItemNode",
    value: function setItemNode(node) {
      if (node) {
        this.itemNode = node;
      }
    }
  }, {
    key: "wrapOnClick",
    value: function wrapOnClick(event) {
      this.handleToggled(event);
      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: "wrapOnKeyDown",
    value: function wrapOnKeyDown(onKeyDown) {
      var _this2 = this;
      return function (event) {
        if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
          _this2.handleToggled(event);

          // Only add active style if the menu doesn't have a sub menu to avoid active style being stuck enabled
          if (!(_this2.props.subMenuItems && _this2.props.subMenuItems.length > 0)) {
            _this2.setState({
              isActive: true
            });
          }
          if (_this2.props.onClick) {
            _this2.props.onClick(event);
          }
          // Remove active state when tab key is released while while holding the space key to avoid active style being stuck enabled
        } else if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
          _this2.setState({
            isActive: false
          });
        }
        if (onKeyDown) {
          onKeyDown(event);
        }
      };
    }
  }, {
    key: "wrapOnKeyUp",
    value: function wrapOnKeyUp(onKeyUp) {
      var _this3 = this;
      return function (event) {
        if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
          _this3.setState({
            isActive: false
          });
        }
        if (onKeyUp) {
          onKeyUp(event);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props3 = this.props,
        text = _this$props3.text,
        isDisabled = _this$props3.isDisabled,
        isSelected = _this$props3.isSelected,
        isToggled = _this$props3.isToggled,
        isInstructionsForUse = _this$props3.isInstructionsForUse,
        isSelectable = _this$props3.isSelectable,
        isToggleable = _this$props3.isToggleable,
        subMenuItems = _this$props3.subMenuItems,
        isActive = _this$props3.isActive,
        icon = _this$props3.icon,
        isHighlighted = _this$props3.isHighlighted,
        customProps = (0, _objectWithoutProperties2.default)(_this$props3, _excluded);
      var _this$context = this.context,
        isGroupItem = _this$context.isGroupItem,
        isToggleableMenu = _this$context.isToggleableMenu,
        isSelectableMenu = _this$context.isSelectableMenu,
        shouldReserveSpaceForIcon = _this$context.shouldReserveSpaceForIcon;
      var attributes = _objectSpread({}, customProps);
      attributes.tabIndex = isDisabled ? '-1' : '0';
      attributes['aria-disabled'] = isDisabled;
      var toggled = isToggled || isSelected;
      var toggleable = isToggleable || isSelectable;
      var toggleableMenu = isToggleableMenu || isSelectableMenu;

      // This is passed down by the single select list in group item and not needed
      delete attributes.hasChevron;
      if (isDisabled) {
        delete attributes.onClick;
        delete attributes.onKeyDown;
      } else {
        attributes.onClick = this.wrapOnClick;
        attributes.onKeyDown = this.wrapOnKeyDown(attributes.onKeyDown);
        attributes.onKeyUp = this.wrapOnKeyUp(attributes.Up);
      }
      var markAsToggled = this.state.isToggled || isGroupItem && toggled;
      var textContainer = /*#__PURE__*/_react.default.createElement("div", {
        className: cx('text')
      }, text);
      var hasChevron = subMenuItems.length > 0;
      var itemClassNames = cx(['item', {
        'is-highlighted': isHighlighted
      }, {
        'is-toggled': markAsToggled
      }, {
        'is-toggleable': toggleable
      }, {
        'is-disabled': isDisabled
      }, {
        'is-top-level': hasChevron
      },
      // eslint-disable-next-line quote-props
      {
        'active': this.state.isActive
      }, attributes.className]);
      var content = textContainer;
      if (hasChevron || toggleableMenu || isInstructionsForUse || icon || shouldReserveSpaceForIcon) {
        var fitStartIcon = null;
        if (isInstructionsForUse) {
          fitStartIcon = /*#__PURE__*/_react.default.createElement(_IconConsultInstructionsForUse.default, {
            className: cx('start-icon')
          });
        } else if (toggleableMenu) {
          if (!toggleable && icon) {
            fitStartIcon = /*#__PURE__*/_react.default.cloneElement(icon, {
              className: cx([icon.props.className, 'start-icon'])
            });
          } else {
            fitStartIcon = /*#__PURE__*/_react.default.createElement(_IconCheckmark.default, {
              className: cx(['checkmark', 'start-icon'])
            });
          }
        } else if (icon) {
          fitStartIcon = /*#__PURE__*/_react.default.cloneElement(icon, {
            className: cx([icon.props.className, 'start-icon'])
          });
        } else if (shouldReserveSpaceForIcon) {
          fitStartIcon = /*#__PURE__*/_react.default.createElement(_IconCheckmark.default, {
            className: cx(['checkmark', 'start-icon'])
          });
        }
        content = /*#__PURE__*/_react.default.createElement(_terraArrange.default, {
          fitStart: fitStartIcon,
          fill: textContainer,
          fitEnd: hasChevron ? /*#__PURE__*/_react.default.createElement(_IconChevronRight.default, {
            className: cx('chevron')
          }) : null,
          align: "center"
        });
      }
      var role = 'menuitem';
      if (isGroupItem) {
        role = 'menuitemradio';
      } else if (toggleable) {
        role = 'menuitemcheckbox';
      }
      return /*#__PURE__*/_react.default.createElement(_terraThemeContext.default.Consumer, null, function (theme) {
        return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, attributes, {
          className: (0, _classnames.default)(itemClassNames, cx(theme.className)),
          ref: _this4.setItemNode,
          role: role,
          "aria-checked": markAsToggled
        }), content);
      });
    }
  }]);
  return MenuItem;
}(_react.default.Component);
MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
MenuItem.contextTypes = contextTypes;
var _default = MenuItem;
exports.default = _default;