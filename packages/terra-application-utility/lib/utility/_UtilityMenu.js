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
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _reactIntl = require("react-intl");
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _IconClose = _interopRequireDefault(require("terra-icon/lib/icon/IconClose"));
var _IconLeft = _interopRequireDefault(require("terra-icon/lib/icon/IconLeft"));
var _UtilityMenuDivider = _interopRequireDefault(require("./_UtilityMenuDivider"));
var _Utils = _interopRequireDefault(require("../Utils"));
var _UtilityMenuItem = _interopRequireDefault(require("./_UtilityMenuItem"));
var _UtilityMenuModule = _interopRequireDefault(require("./_UtilityMenu.module.scss"));
var _excluded = ["menuItems", "initialSelectedKey", "intl", "isHeightBounded", "onChange", "onRequestClose", "variant", "menuRole"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var cx = _bind.default.bind(_UtilityMenuModule.default);
var propTypes = {
  /**
   * The initial selected key. Used as the top level menu page.
   */
  initialSelectedKey: _propTypes.default.string.isRequired,
  /**
   * @private
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired,
  /**
   * Indicates if the height is bound to it's parent container.
   */
  isHeightBounded: _propTypes.default.bool,
  /**
   * The array of the menu items configs to be rendered.
   */
  menuItems: _propTypes.default.arrayOf(_Utils.default.itemShape).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   * Returns (event, { key: String, metaData: Object})
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   * The function that closes the menu.
   * This will be provided by the terra-application-header or terra-application-menu.
   */
  onRequestClose: _propTypes.default.func,
  /**
   *
   * The role attribute of Utility Menu.
   */
  menuRole: _propTypes.default.string,
  /**
   * Sets the Utility variant. One of Utils.VARIANTS.HEADER, Utils.VARIANTS.MENU.
   */
  variant: _propTypes.default.oneOf([_Utils.default.VARIANTS.HEADER, _Utils.default.VARIANTS.MENU])
};
var processMenuItems = function processMenuItems(items) {
  var map = new Map();
  items.forEach(function (item) {
    map.set(item.key, _objectSpread({
      itemKey: item.key
    }, item));
  });
  return map;
};
var defaultProps = {
  menuRole: 'navigation'
};
var hasChevron = function hasChevron(item) {
  return item.childKeys && item.childKeys.length > 0;
};
var UtilityMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(UtilityMenu, _React$Component);
  var _super = _createSuper(UtilityMenu);
  function UtilityMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, UtilityMenu);
    _this = _super.call(this, props);
    _this.getItem = _this.getItem.bind((0, _assertThisInitialized2.default)(_this));
    _this.buildItem = _this.buildItem.bind((0, _assertThisInitialized2.default)(_this));
    _this.buildListContent = _this.buildListContent.bind((0, _assertThisInitialized2.default)(_this));
    _this.buildFooterContent = _this.buildFooterContent.bind((0, _assertThisInitialized2.default)(_this));
    _this.childrenHasCheckmark = _this.childrenHasCheckmark.bind((0, _assertThisInitialized2.default)(_this));
    _this.childrenHasChevron = _this.childrenHasChevron.bind((0, _assertThisInitialized2.default)(_this));
    _this.setMenuNode = _this.setMenuNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnChange = _this.handleOnChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.pop = _this.pop.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      map: processMenuItems(props.menuItems),
      currentKey: props.initialSelectedKey,
      focusIndex: -1,
      previousKeyStack: [],
      prevPropsInitialSelectedKey: props.initialSelectedKey,
      prevPropsMenuItems: props.menuItems
    };
    return _this;
  }
  (0, _createClass2.default)(UtilityMenu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.menuNode && this.state.focusIndex === -1) {
        this.menuNode.focus();
      }
    }

    /**
     * Function to trigger when an item is selected.
     * * Has children: navigate to the next page
     * * Endpoint: close menu and trigger onChange.
     * @param {*} event
     * @param {*} key
     */
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event, key) {
      var _this$getItem = this.getItem(key),
        childKeys = _this$getItem.childKeys;
      var item = this.getItem(key);
      if (childKeys && childKeys.length > 0) {
        this.setState(function (prevState) {
          var newStack = prevState.previousKeyStack.slice();
          newStack.push(prevState.currentKey);
          return {
            previousKeyStack: newStack,
            currentKey: key
          };
        });
      } else {
        this.props.onRequestClose();
        this.props.onChange(event, {
          key: key,
          metaData: item.metaData
        });
      }
      if (this.state.focusIndex !== -1) {
        this.setState({
          focusIndex: -1
        });
      }
    }
  }, {
    key: "handleOnKeyDown",
    value: function handleOnKeyDown(index) {
      var _this2 = this;
      return function (event) {
        if (event.nativeEvent.keyCode === _Utils.default.KEY_CODES.LEFT_ARROW && _this2.state.currentKey !== _this2.props.initialSelectedKey) {
          _this2.pop();
        } else if (event.nativeEvent.keyCode === _Utils.default.KEY_CODES.UP_ARROW && _this2.state.focusIndex !== 0) {
          _this2.setState({
            focusIndex: index - 1
          });
        } else if (event.nativeEvent.keyCode === _Utils.default.KEY_CODES.DOWN_ARROW || event.nativeEvent.keyCode === _Utils.default.KEY_CODES.tab) {
          _this2.setState({
            focusIndex: index + 1
          });
        }
      };
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return this.state.map.get(key);
    }
  }, {
    key: "setMenuNode",
    value: function setMenuNode(node) {
      if (node) {
        this.menuNode = node;
      }
    }
  }, {
    key: "buildItem",
    value: function buildItem(key, leftInset, rightInset, isActive, handleOnKeyDown) {
      var item = this.getItem(key);
      var chevron = hasChevron(item);
      return /*#__PURE__*/_react.default.createElement(_UtilityMenuItem.default, {
        key: key,
        itemKey: key,
        id: item.id,
        title: item.title,
        content: item.content,
        contentLocation: item.contentLocation,
        isActive: isActive,
        isReadOnly: item.isReadOnly,
        isSelected: item.isSelected,
        isSelectable: item.isSelectable,
        hasChevron: chevron,
        leftInset: leftInset,
        rightInset: rightInset,
        onChange: item.isReadOnly ? function () {} : this.handleOnChange,
        onKeyDown: handleOnKeyDown,
        variant: this.props.variant
      });
    }
  }, {
    key: "buildListContent",
    value: function buildListContent(currentItem) {
      var _this3 = this;
      if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
        var leftInset = this.childrenHasCheckmark(currentItem);
        var rightInset = this.childrenHasChevron(currentItem);
        var index = -1;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: cx('utility-menu-body'),
          role: "menu"
        }, currentItem.childKeys.map(function (key) {
          if (_this3.getItem(key).contentLocation !== _Utils.default.LOCATIONS.FOOTER) {
            index += 1;
            var onKeyDown = _this3.handleOnKeyDown(index);
            var isActive = index === _this3.state.focusIndex;
            return _this3.buildItem(key, leftInset, rightInset, isActive, onKeyDown);
          }
          return null;
        }));
      }
      return null;
    }
  }, {
    key: "buildFooterContent",
    value: function buildFooterContent(currentItem) {
      var _this4 = this;
      if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
        return currentItem.childKeys.map(function (key) {
          if (_this4.getItem(key).contentLocation === _Utils.default.LOCATIONS.FOOTER) {
            return _this4.buildItem(key);
          }
          return null;
        });
      }
      return null;
    }
  }, {
    key: "childrenHasCheckmark",
    value: function childrenHasCheckmark(item) {
      var _this5 = this;
      var childrenHasCheckmark = item.childKeys.some(function (key) {
        var currentItem = _this5.getItem(key);
        return currentItem.isSelectable === true && currentItem.contentLocation !== _Utils.default.LOCATIONS.FOOTER;
      });
      return childrenHasCheckmark;
    }
  }, {
    key: "childrenHasChevron",
    value: function childrenHasChevron(item) {
      var _this6 = this;
      var childrenHasChevron = item.childKeys.some(function (key) {
        var _this6$getItem = _this6.getItem(key),
          childKeys = _this6$getItem.childKeys;
        return childKeys && childKeys.length > 0 && _this6.getItem(key).contentLocation !== _Utils.default.LOCATIONS.FOOTER;
      });
      return childrenHasChevron;
    }
  }, {
    key: "pop",
    value: function pop() {
      this.setState(function (prevState) {
        var newStack = prevState.previousKeyStack.slice();
        return {
          previousKeyStack: newStack,
          currentKey: newStack.pop()
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        menuItems = _this$props.menuItems,
        initialSelectedKey = _this$props.initialSelectedKey,
        intl = _this$props.intl,
        isHeightBounded = _this$props.isHeightBounded,
        onChange = _this$props.onChange,
        onRequestClose = _this$props.onRequestClose,
        variant = _this$props.variant,
        menuRole = _this$props.menuRole,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var currentKey = this.state.currentKey;
      var currentItem = this.getItem(currentKey);
      var firstPage = currentKey === initialSelectedKey;
      var theme = this.context;
      var menuClassNames = (0, _classnames.default)(cx('utility-menu', {
        'header-utility-menu': variant === _Utils.default.VARIANTS.HEADER
      }, {
        'menu-utility-menu': variant === _Utils.default.VARIANTS.MENU
      }, theme.className), customProps.className);
      var headerClassNames = cx(['utility-menu-header', {
        'header-utility-menu-header': variant === _Utils.default.VARIANTS.HEADER
      }, {
        'menu-utility-menu-header': variant === _Utils.default.VARIANTS.MENU
      }]);
      var contentContainerClassNames = cx(['utility-menu-content-container', {
        'header-utility-menu-content-container': variant === _Utils.default.VARIANTS.HEADER
      }, {
        'menu-utility-menu-content-container': variant === _Utils.default.VARIANTS.MENU
      }]);
      var leftContentContainer = cx(['utility-menu-left-content-container', {
        'header-utility-menu-left-content-container': variant === _Utils.default.VARIANTS.HEADER
      }, {
        'menu-utility-menu-left-content-container': variant === _Utils.default.VARIANTS.MENU
      }]);
      var headerTextClassName = cx([{
        'header-utility-menu-initial-page-header-text': firstPage && variant === _Utils.default.VARIANTS.HEADER
      }, {
        'menu-utility-menu-initial-page-header-text': firstPage && variant === _Utils.default.VARIANTS.MENU
      }, {
        'header-utility-menu-noninitial-page-header-text': !firstPage && variant === _Utils.default.VARIANTS.HEADER
      }, {
        'menu-utility-menu-noninitial-page-header-text': !firstPage && variant === _Utils.default.VARIANTS.MENU
      }]);
      var closeButtonClassNames = cx([{
        'header-utility-menu-button-close': variant === _Utils.default.VARIANTS.HEADER
      }]);
      var iconLeftClassNames = cx(['utility-menu-icon-left', {
        'header-utility-menu-icon-left': variant === _Utils.default.VARIANTS.HEADER
      }, {
        'menu-utility-menu-icon-left': variant === _Utils.default.VARIANTS.MENU
      }]);
      var iconCloseClassNames = cx(['utility-menu-icon-close', {
        'header-utility-menu-icon-close': variant === _Utils.default.VARIANTS.HEADER
      }, {
        'menu-utility-menu-icon-close': variant === _Utils.default.VARIANTS.MENU
      }]);
      var backText = intl.formatMessage({
        id: 'Terra.application.utility.back'
      });
      var backButton = /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        onClick: this.pop,
        icon: /*#__PURE__*/_react.default.createElement(_IconLeft.default, {
          className: iconLeftClassNames
        }),
        isCompact: true,
        isIconOnly: true,
        text: backText,
        variant: _terraButton.default.Opts.Variants.UTILITY
      });
      var closeText = intl.formatMessage({
        id: 'Terra.application.utility.close'
      });
      var closeButton = /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        onClick: this.props.onRequestClose,
        icon: /*#__PURE__*/_react.default.createElement(_IconClose.default, {
          className: iconCloseClassNames
        }),
        isCompact: true,
        isIconOnly: true,
        text: closeText,
        variant: _terraButton.default.Opts.Variants.UTILITY,
        className: closeButtonClassNames
      });
      var headerText;
      if (currentItem !== undefined) {
        headerText = currentItem.title;
      }
      var header = /*#__PURE__*/_react.default.createElement("div", {
        className: headerClassNames
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: contentContainerClassNames
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: leftContentContainer
      }, !firstPage && backButton, /*#__PURE__*/_react.default.createElement("span", {
        id: "utility-menu-header",
        role: "heading",
        "aria-level": "2",
        className: headerTextClassName
      }, headerText)), /*#__PURE__*/_react.default.createElement("span", {
        className: cx('utility-menu-right-content-container')
      }, closeButton)), /*#__PURE__*/_react.default.createElement(_UtilityMenuDivider.default, {
        isTop: true
      }));
      var footer;
      var footerItems = this.buildFooterContent(currentItem);
      var hasFooterItems = footerItems ? footerItems.some(function (item) {
        return item !== null;
      }) : null;
      if (hasFooterItems) {
        footer = /*#__PURE__*/_react.default.createElement("div", {
          className: cx('utility-menu-footer')
        }, /*#__PURE__*/_react.default.createElement(_UtilityMenuDivider.default, {
          className: cx('footer-divider')
        }), footerItems);
      }
      var menuText = intl.formatMessage({
        id: 'Terra.application.utility.menu'
      });
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/forbid-dom-props
        _react.default.createElement("div", {
          ref: this.setMenuNode,
          style: {
            height: isHeightBounded ? '100%' : 'auto',
            outline: 'none'
          },
          tabIndex: "-1"
        }, /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, (0, _extends2.default)({}, customProps, {
          header: header,
          footer: footer,
          fill: isHeightBounded,
          className: menuClassNames,
          role: menuRole,
          "aria-label": menuText
        }), this.buildListContent(currentItem)))
      );
      /* eslint-enable jsx-a11y/no-noninteractive-tabindex, react/forbid-dom-props */
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.initialSelectedKey !== prevState.prevPropsInitialSelectedKey) {
        return {
          currentKey: nextProps.initialSelectedKey
        };
      }
      if (nextProps.menuItems !== prevState.prevPropsMenuItems) {
        return {
          map: processMenuItems(nextProps.menuItems)
        };
      }
      return null;
    }
  }]);
  return UtilityMenu;
}(_react.default.Component);
UtilityMenu.propTypes = propTypes;
UtilityMenu.defaultProps = defaultProps;
UtilityMenu.processMenuItems = processMenuItems;
UtilityMenu.hasChevron = hasChevron;
UtilityMenu.contextType = _terraThemeContext.default;
var _default = (0, _reactIntl.injectIntl)(UtilityMenu);
exports.default = _default;