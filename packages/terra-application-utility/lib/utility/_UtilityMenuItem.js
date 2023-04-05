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
var _terraArrange = _interopRequireDefault(require("terra-arrange"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _IconCheckmark = _interopRequireDefault(require("terra-icon/lib/icon/IconCheckmark"));
var _IconChevronRight = _interopRequireDefault(require("terra-icon/lib/icon/IconChevronRight"));
var _Utils = _interopRequireDefault(require("../Utils"));
var _UtilityMenuItemModule = _interopRequireDefault(require("./_UtilityMenuItem.module.scss"));
var _excluded = ["itemKey", "title", "content", "contentLocation", "isActive", "isReadOnly", "isSelected", "isSelectable", "hasChevron", "leftInset", "onChange", "onKeyDown", "rightInset", "variant"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_UtilityMenuItemModule.default);
var propTypes = {
  /**
   * The unique key associated with this menu item.
   */
  itemKey: _propTypes.default.string.isRequired,
  /**
   * The text to be displayed next to the menu item.
   */
  title: _propTypes.default.string,
  /**
   * The component associated with this menu item.
   */
  content: _propTypes.default.element,
  /**
   * The location of this menu item.
   */
  contentLocation: _propTypes.default.oneOf([_Utils.default.LOCATIONS.BODY, _Utils.default.LOCATIONS.FOOTER]),
  /**
   * Whether this item should be inset to the left. Based on if any other item has isSelected set to true.
   */
  leftInset: _propTypes.default.bool,
  /**
   * Indicates if the item has focus. This is used internally to control focus and does not set initial focus.
   */
  isActive: _propTypes.default.bool,
  /**
   * Whether the item is read-only.
   */
  isReadOnly: _propTypes.default.bool,
  /**
   * Whether this item is selected.
   */
  isSelected: _propTypes.default.bool,
  /**
   * Whether this item can be toggled.
   */
  isSelectable: _propTypes.default.bool,
  /**
   * Whether or not the menu item should display a disclosure indicator.
   */
  hasChevron: _propTypes.default.bool,
  /**
   * Function to trigger when a key is pressed.
   */
  onKeyDown: _propTypes.default.func,
  /**
   * Function to trigger when this item is selected.
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   * Whether this item should be inset to the right. Based on if any other item has a chevron.
   */
  rightInset: _propTypes.default.bool,
  /**
   * Sets the Utility variant.
   */
  variant: _propTypes.default.oneOf([_Utils.default.VARIANTS.HEADER, _Utils.default.VARIANTS.MENU]).isRequired
};
var defaultProps = {
  title: ''
};
var UtilityMenuItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(UtilityMenuItem, _React$Component);
  var _super = _createSuper(UtilityMenuItem);
  function UtilityMenuItem(props) {
    var _this;
    (0, _classCallCheck2.default)(this, UtilityMenuItem);
    _this = _super.call(this, props);
    _this.wrapOnKeyDown = _this.wrapOnKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSelection = _this.handleSelection.bind((0, _assertThisInitialized2.default)(_this));
    _this.setItemNode = _this.setItemNode.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(UtilityMenuItem, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isActive && this.itemNode) {
        this.itemNode.focus();
      }
    }
  }, {
    key: "handleSelection",
    value: function handleSelection(event, key) {
      event.preventDefault();
      this.props.onChange(event, key);
    }
  }, {
    key: "setItemNode",
    value: function setItemNode(node) {
      if (node) {
        this.itemNode = node;
      }
    }
  }, {
    key: "wrapOnKeyDown",
    value: function wrapOnKeyDown(key, onKeyDown) {
      var _this2 = this;
      return function (event) {
        if (event.nativeEvent.keyCode === _Utils.default.KEY_CODES.ENTER || event.nativeEvent.keyCode === _Utils.default.KEY_CODES.SPACE || event.nativeEvent.keyCode === _Utils.default.KEY_CODES.RIGHT_ARROW) {
          _this2.handleSelection(event, key);
        }
        if (onKeyDown) {
          onKeyDown(event);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        itemKey = _this$props.itemKey,
        title = _this$props.title,
        content = _this$props.content,
        contentLocation = _this$props.contentLocation,
        isActive = _this$props.isActive,
        isReadOnly = _this$props.isReadOnly,
        isSelected = _this$props.isSelected,
        isSelectable = _this$props.isSelectable,
        hasChevron = _this$props.hasChevron,
        leftInset = _this$props.leftInset,
        onChange = _this$props.onChange,
        onKeyDown = _this$props.onKeyDown,
        rightInset = _this$props.rightInset,
        variant = _this$props.variant,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var theme = this.context;
      var bodyItemClassNames = cx([{
        'header-utility-body-item': variant === _Utils.default.VARIANTS.HEADER
      }, {
        'menu-utility-body-item': variant === _Utils.default.VARIANTS.MENU
      }, {
        'read-only': isReadOnly
      }, theme.className]);
      var footerItemClassNames = cx([{
        'header-utility-footer-item': variant === _Utils.default.VARIANTS.HEADER
      }, {
        'menu-utility-footer-item': variant === _Utils.default.VARIANTS.MENU
      }, theme.className]);
      var checkmarkClassNames = cx(['checkmark', {
        selected: isSelected
      }]);
      var chevronClassNames = cx(['chevron', {
        'has-chevron': hasChevron
      }]);
      var arrangeClassNames = cx([{
        'default-left-inset': !leftInset
      }, {
        'default-right-inset': !rightInset
      }]);
      var renderBodyItem = function renderBodyItem(fill, wrapOnKeyDown, handleSelection) {
        return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
          tabIndex: !isReadOnly ? '0' : undefined,
          key: itemKey,
          onClick: !isReadOnly ? function (event) {
            return handleSelection(event, itemKey);
          } : undefined,
          onKeyDown: !isReadOnly ? wrapOnKeyDown(itemKey, onKeyDown) : undefined,
          role: !isReadOnly ? 'menuitem' : 'note',
          className: bodyItemClassNames,
          "aria-disabled": isReadOnly,
          "aria-label": title,
          ref: _this3.setItemNode
        }), /*#__PURE__*/_react.default.createElement(_terraArrange.default, {
          fitStart: leftInset ? /*#__PURE__*/_react.default.createElement(_IconCheckmark.default, {
            className: checkmarkClassNames
          }) : null,
          fill: fill,
          fillAttributes: {
            className: cx('menu-item-fill')
          },
          fitEnd: rightInset ? /*#__PURE__*/_react.default.createElement(_IconChevronRight.default, {
            className: chevronClassNames
          }) : null,
          align: "center",
          className: arrangeClassNames
        }));
      };
      /* eslint-enable jsx-a11y/no-static-element-interactions */

      var renderFooterButton = function renderFooterButton(wrapOnKeyDown, handleSelection) {
        return /*#__PURE__*/_react.default.createElement(_terraButton.default, (0, _extends2.default)({}, customProps, {
          onClick: function onClick(event) {
            return handleSelection(event, itemKey);
          },
          onKeyDown: wrapOnKeyDown(itemKey, onKeyDown),
          variant: _terraButton.default.Opts.Variants.NEUTRAL,
          className: footerItemClassNames,
          text: title
        }));
      };

      // Footer items are always buttons. Body items are list items.
      // If content exists and is a body item, render content. Else, render the title text.
      var item = null;
      var wrapOnKeyDown = this.wrapOnKeyDown,
        handleSelection = this.handleSelection;
      if (contentLocation === _Utils.default.LOCATIONS.FOOTER) {
        item = renderFooterButton(wrapOnKeyDown, handleSelection);
      } else if (content) {
        item = renderBodyItem(content, wrapOnKeyDown, handleSelection);
      } else {
        item = renderBodyItem( /*#__PURE__*/_react.default.createElement("div", null, title), wrapOnKeyDown, handleSelection);
      }
      return item;
    }
  }]);
  return UtilityMenuItem;
}(_react.default.Component);
UtilityMenuItem.propTypes = propTypes;
UtilityMenuItem.defaultProps = defaultProps;
UtilityMenuItem.contextType = _terraThemeContext.default;
var _default = UtilityMenuItem;
exports.default = _default;