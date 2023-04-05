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
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactIntl = require("react-intl");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _MenuItem = _interopRequireDefault(require("./_MenuItem"));
var _NavigationSideMenuModule = _interopRequireDefault(require("./NavigationSideMenu.module.scss"));
var _excluded = ["menuItems", "onChange", "routingStackBack", "selectedChildKey", "selectedMenuKey", "toolbar"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_NavigationSideMenuModule.default);
var propTypes = {
  /**
   * @private
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired,
  /**
   * An array of configuration for each menu item.
   */
  menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
     * Keys of menu items
     */
    childKeys: _propTypes.default.arrayOf(_propTypes.default.string),
    /**
     * Used to match visual style of a menuItem with children on an item without children.
     */
    hasSubMenu: _propTypes.default.bool,
    /**
     * Whether or not the menu is the primary navigation links in small form factor.
     */
    isRootMenu: _propTypes.default.bool,
    /**
     * ID to be applied to the menu item div.
     */
    id: _propTypes.default.string,
    /**
     * Optional meta data to be returned along with the item key within the onChange.
     */
    metaData: _propTypes.default.object,
    /**
     * Unique identifier that will be returned in the onChange callback when an endpoint is reached.
     */
    key: _propTypes.default.string.isRequired,
    /**
     * Text for the menu row and header title when selected.
     */
    text: _propTypes.default.string.isRequired
  })),
  /**
   * Callback function when a menu endpoint is reached.
   * returns (event, { selectedMenuKey: String, selectedChildKey: String, metaData: Object})
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   * Delegate prop showParent function that is provided by the terra-navigation-layout.
   */
  routingStackBack: _propTypes.default.func,
  /**
   * Key of the currently selected child item on the selected menu page.
   * This is used when traveling back up the menu stack or when the child is an end point.
   */
  selectedChildKey: _propTypes.default.string,
  /**
   * Key of the currently selected menu page.
   */
  selectedMenuKey: _propTypes.default.string.isRequired,
  /**
   * An optional toolbar to display below the side menu action header
   */
  toolbar: _propTypes.default.element
};
var defaultProps = {
  menuItems: []
};
var processMenuItems = function processMenuItems(menuItems) {
  var items = {};
  var parents = {};
  menuItems.forEach(function (item) {
    items[item.key] = {
      id: item.id,
      text: item.text,
      childKeys: item.childKeys,
      metaData: item.metaData,
      hasSubMenu: item.hasSubMenu,
      isRootMenu: item.isRootMenu
    };
    if (item.childKeys) {
      item.childKeys.forEach(function (key) {
        parents[key] = item.key;
      });
    }
  });
  return {
    items: items,
    parents: parents
  };
};
var NavigationSideMenu = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(NavigationSideMenu, _Component);
  var _super = _createSuper(NavigationSideMenu);
  function NavigationSideMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, NavigationSideMenu);
    _this = _super.call(this, props);
    _this.handleBackClick = _this.handleBackClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleItemClick = _this.handleItemClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.updateAriaLiveContent = _this.updateAriaLiveContent.bind((0, _assertThisInitialized2.default)(_this));
    _this.setVisuallyHiddenComponent = _this.setVisuallyHiddenComponent.bind((0, _assertThisInitialized2.default)(_this));
    var _processMenuItems = processMenuItems(props.menuItems),
      items = _processMenuItems.items,
      parents = _processMenuItems.parents;
    _this.state = {
      items: items,
      parents: parents,
      prevPropsMenuItem: props.menuItems
    };
    return _this;
  }
  (0, _createClass2.default)(NavigationSideMenu, [{
    key: "handleBackClick",
    value: function handleBackClick(event) {
      var parentKey = this.state.parents[this.props.selectedMenuKey];
      if (parentKey) {
        this.props.onChange(event, {
          selectedMenuKey: parentKey,
          selectedChildKey: this.props.selectedMenuKey,
          metaData: this.state.items[parentKey].metaData
        });
      }
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(event, key) {
      var selectedItem = this.state.items[key];
      if (this.state.items[key] && this.state.items[key].text) {
        this.updateAriaLiveContent(this.state.items[key].text);
      }
      if (selectedItem.childKeys && selectedItem.childKeys.length) {
        this.props.onChange(event, {
          selectedMenuKey: key,
          selectedChildKey: undefined,
          metaData: selectedItem.metaData
        });
      } else {
        this.props.onChange(event, {
          selectedMenuKey: this.props.selectedMenuKey,
          selectedChildKey: key,
          metaData: selectedItem.metaData
        });
      }
    }
  }, {
    key: "setVisuallyHiddenComponent",
    value: function setVisuallyHiddenComponent(node) {
      this.visuallyHiddenComponent = node;
    }
  }, {
    key: "buildListItem",
    value: function buildListItem(key) {
      var _this2 = this;
      var item = this.state.items[key];
      var onKeyDown = function onKeyDown(event) {
        if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
          event.preventDefault();
          _this2.handleItemClick(event, key);
        }
      };
      return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        id: item.id,
        hasChevron: item.hasSubMenu || item.childKeys && item.childKeys.length > 0,
        isSelected: key === this.props.selectedChildKey,
        text: item.text,
        key: key,
        onClick: function onClick(event) {
          _this2.handleItemClick(event, key);
        },
        onKeyDown: onKeyDown,
        "data-menu-item": key
      });
    }
  }, {
    key: "buildListContent",
    value: function buildListContent(currentItem) {
      var _this3 = this;
      if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
        return /*#__PURE__*/_react.default.createElement("nav", {
          role: "navigation"
        }, /*#__PURE__*/_react.default.createElement("ul", {
          role: "menu",
          className: cx(['side-menu-list'])
        }, currentItem.childKeys.map(function (key) {
          return _this3.buildListItem(key);
        })));
      }
      return null;
    }
  }, {
    key: "updateAriaLiveContent",
    value: function updateAriaLiveContent(item) {
      var intl = this.props.intl;
      var selected = intl.formatMessage({
        id: 'Terra.navigation.side.menu.selected'
      });

      // Guard against race condition with the ref being established and updating the ref's innerText
      if (!this.visuallyHiddenComponent) {
        return;
      }
      this.visuallyHiddenComponent.innerText = item ? "".concat(item, " ").concat(selected) : '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        menuItems = _this$props.menuItems,
        onChange = _this$props.onChange,
        routingStackBack = _this$props.routingStackBack,
        selectedChildKey = _this$props.selectedChildKey,
        selectedMenuKey = _this$props.selectedMenuKey,
        toolbar = _this$props.toolbar,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var currentItem = this.state.items[selectedMenuKey];
      var theme = this.context;
      var sideMenuContentContainerClassNames = cx(['side-menu-content-container', theme.className]);
      var onBack;
      var parentKey = this.state.parents[selectedMenuKey];
      if (parentKey) {
        onBack = this.handleBackClick;
      } else {
        onBack = routingStackBack;
      }
      var header;
      if (onBack || !currentItem.isRootMenu) {
        header = /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_terraActionHeader.default, {
          className: cx('side-menu-action-header'),
          onBack: onBack,
          title: currentItem ? currentItem.text : null,
          "data-navigation-side-menu-action-header": true
        }), toolbar);
      } else {
        sideMenuContentContainerClassNames = cx(['side-menu-content-container', 'is-root']);
      }
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
        "aria-atomic": "true",
        "aria-live": "assertive",
        "aria-relevant": "additions text",
        refCallback: this.setVisuallyHiddenComponent
      }), /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, (0, _extends2.default)({}, customProps, {
        header: header,
        fill: true,
        className: sideMenuContentContainerClassNames
      }), this.buildListContent(currentItem)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.menuItems !== prevState.prevPropsMenuItem) {
        return processMenuItems(nextProps.menuItems);
      }
      return null;
    }
  }]);
  return NavigationSideMenu;
}(_react.Component);
NavigationSideMenu.propTypes = propTypes;
NavigationSideMenu.defaultProps = defaultProps;
NavigationSideMenu.contextType = _terraThemeContext.default;
var _default = (0, _reactIntl.injectIntl)(NavigationSideMenu);
exports.default = _default;