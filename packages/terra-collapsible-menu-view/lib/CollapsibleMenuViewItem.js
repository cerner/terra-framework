"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraButtonGroup = _interopRequireDefault(require("terra-button-group"));
var _CollapsibleMenu = _interopRequireDefault(require("./_CollapsibleMenu"));
var _CollapsibleMenuViewModule = _interopRequireDefault(require("./CollapsibleMenuView.module.scss"));
var _excluded = ["icon", "isIconOnly", "isReversed", "text", "isSelected", "isDisabled", "subMenuItems", "shouldCloseOnClick", "boundingRef", "menuWidth"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_CollapsibleMenuViewModule.default);
var propTypes = {
  /**
   * Sets the item's text
   */
  text: _propTypes.default.string.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: _propTypes.default.func,
  /**
  * An optional icon. Nested inline with the text when provided
  */
  icon: _propTypes.default.element,
  /**
   * Indicates if only the icon should display when item is face-up. (Text should still be given to be displayed when item is in the menu)
   */
  isIconOnly: _propTypes.default.bool,
  /**
  * Reverses the position of the icon and text
  */
  isReversed: _propTypes.default.bool,
  /**
   * Indicates if the item start as selected when placed in a button group
   */
  isSelected: _propTypes.default.bool,
  /**
   * Indicates if the item should be disabled.
   */
  isDisabled: _propTypes.default.bool,
  /**
   * Indicates that clicking on this item while displayed inside a menu should close the menu.
   */
  shouldCloseOnClick: _propTypes.default.bool,
  /**
   * List of Menu.Items to display in a submenu when this item is selected.
   */
  subMenuItems: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Callback function for when the item is clicked
   */
  onClick: _propTypes.default.func,
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760, or auto
   */
  menuWidth: _propTypes.default.oneOf(['160', '240', '320', '640', '960', '1280', '1760', 'auto'])
};
var contextTypes = {
  isCollapsibleGroupItem: _propTypes.default.bool,
  isCollapsibleMenuItem: _propTypes.default.bool
};
var defaultProps = {
  isSelected: false,
  isReversed: false,
  shouldCloseOnClick: true,
  isIconOnly: false
};
var CollapsibleMenuViewItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CollapsibleMenuViewItem, _React$Component);
  var _super = _createSuper(CollapsibleMenuViewItem);
  function CollapsibleMenuViewItem(props) {
    var _this;
    (0, _classCallCheck2.default)(this, CollapsibleMenuViewItem);
    _this = _super.call(this, props);
    _this.setButtonNode = _this.setButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.getButtonNode = _this.getButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(CollapsibleMenuViewItem, [{
    key: "setButtonNode",
    value: function setButtonNode(node) {
      this.buttonNode = node;
    }
  }, {
    key: "getButtonNode",
    value: function getButtonNode() {
      return this.buttonNode;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        icon = _this$props.icon,
        isIconOnly = _this$props.isIconOnly,
        isReversed = _this$props.isReversed,
        text = _this$props.text,
        isSelected = _this$props.isSelected,
        isDisabled = _this$props.isDisabled,
        subMenuItems = _this$props.subMenuItems,
        shouldCloseOnClick = _this$props.shouldCloseOnClick,
        boundingRef = _this$props.boundingRef,
        menuWidth = _this$props.menuWidth,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var _this$context = this.context,
        isCollapsibleGroupItem = _this$context.isCollapsibleGroupItem,
        isCollapsibleMenuItem = _this$context.isCollapsibleMenuItem;
      var attributes = _objectSpread({}, customProps);
      var item;
      if (isCollapsibleMenuItem) {
        item = /*#__PURE__*/_react.default.createElement(_CollapsibleMenu.default.Item, (0, _extends2.default)({}, attributes, {
          text: text,
          isSelected: isSelected && isCollapsibleGroupItem,
          isDisabled: isDisabled,
          subMenuItems: subMenuItems
        }));
      } else if (isCollapsibleGroupItem) {
        item = /*#__PURE__*/_react.default.createElement(_terraButtonGroup.default.Button, (0, _extends2.default)({}, attributes, {
          icon: icon,
          text: text,
          isDisabled: isDisabled
        }));
      } else if (subMenuItems && subMenuItems.length > 0) {
        item = /*#__PURE__*/_react.default.createElement(_CollapsibleMenu.default, {
          contentWidth: menuWidth,
          boundingRef: boundingRef,
          button: /*#__PURE__*/_react.default.createElement(_terraButton.default, (0, _extends2.default)({}, attributes, {
            icon: icon,
            text: text,
            isReversed: isReversed,
            isDisabled: isDisabled,
            isIconOnly: isIconOnly
          }))
        }, subMenuItems);
      } else {
        item = /*#__PURE__*/_react.default.createElement("div", {
          className: cx('face-up-item')
        }, /*#__PURE__*/_react.default.createElement(_terraButton.default, (0, _extends2.default)({}, attributes, {
          icon: icon,
          text: text,
          isReversed: isReversed,
          isDisabled: isDisabled,
          isIconOnly: isIconOnly
        })));
      }
      return item;
    }
  }]);
  return CollapsibleMenuViewItem;
}(_react.default.Component);
CollapsibleMenuViewItem.propTypes = propTypes;
CollapsibleMenuViewItem.defaultProps = defaultProps;
CollapsibleMenuViewItem.contextTypes = contextTypes;
CollapsibleMenuViewItem.Opts = {
  widths: _CollapsibleMenu.default.Opts.widths
};
var _default = CollapsibleMenuViewItem;
exports.default = _default;