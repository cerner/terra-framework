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
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _reactIntl = require("react-intl");
var _IconChevronDown = _interopRequireDefault(require("terra-icon/lib/icon/IconChevronDown"));
var _IconChevronRight = _interopRequireDefault(require("terra-icon/lib/icon/IconChevronRight"));
var _UtilityMenu = _interopRequireDefault(require("./_UtilityMenu"));
var _Utils = _interopRequireDefault(require("../Utils"));
var _UtilityButtonModule = _interopRequireDefault(require("./_UtilityButton.module.scss"));
var _excluded = ["menuItems", "onChange", "onDisclose", "initialSelectedKey", "intl", "title", "accessory", "variant"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_UtilityButtonModule.default);
var propTypes = {
  /**
   * The array containing the menu items to be rendered within the menu.
   */
  menuItems: _propTypes.default.arrayOf(_Utils.default.itemShape).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   * Returns (event, { key: String, metaData: Object})
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   * The function that discloses the menu.
   */
  onDisclose: _propTypes.default.func.isRequired,
  /**
   * @private
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired,
  /**
   * The key of the top level menu page.
   */
  initialSelectedKey: _propTypes.default.string.isRequired,
  /**
   * The text associated with utilities.
   */
  title: _propTypes.default.string,
  /**
   * The image associated with utilities.
   */
  accessory: _propTypes.default.element,
  /**
   * The role attribute to set on the menu.
   */
  menuRole: _propTypes.default.string,
  /**
   * Sets the Utility variant.
   */
  variant: _propTypes.default.oneOf([_Utils.default.VARIANTS.HEADER, _Utils.default.VARIANTS.MENU]).isRequired
};
var defaultProps = {
  title: ''
};
var UtilityButton = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(UtilityButton, _React$Component);
  var _super = _createSuper(UtilityButton);
  function UtilityButton(props) {
    var _this;
    (0, _classCallCheck2.default)(this, UtilityButton);
    _this = _super.call(this, props);
    _this.handleOnClick = _this.handleOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.createContent = _this.createContent.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(UtilityButton, [{
    key: "handleOnClick",
    value: function handleOnClick(event) {
      if (this.props.onDisclose) {
        var content = this.createContent();
        this.props.onDisclose(content);
      }
      if (this.onClick) {
        this.onClick(event);
      }
    }
  }, {
    key: "createContent",
    value: function createContent() {
      return /*#__PURE__*/_react.default.createElement(_UtilityMenu.default, {
        initialSelectedKey: this.props.initialSelectedKey,
        menuRole: this.props.menuRole,
        menuItems: this.props.menuItems,
        onChange: this.props.onChange,
        variant: this.props.variant
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        menuItems = _this$props.menuItems,
        onChange = _this$props.onChange,
        onDisclose = _this$props.onDisclose,
        initialSelectedKey = _this$props.initialSelectedKey,
        intl = _this$props.intl,
        title = _this$props.title,
        accessory = _this$props.accessory,
        variant = _this$props.variant,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      this.onClick = customProps.onClick;
      delete customProps.onClick;
      delete customProps.menuRole;
      var theme = this.context;
      var utilityClassNames = (0, _classnames.default)(cx({
        'header-utility-button': variant === _Utils.default.VARIANTS.HEADER
      }, {
        'menu-utility-button': variant === _Utils.default.VARIANTS.MENU
      }, theme.className), customProps.className);
      var iconClassNames = cx('icon');
      var cloneAccessory = null;
      if (accessory) {
        cloneAccessory = /*#__PURE__*/_react.default.cloneElement(accessory, {
          className: cx('accessory')
        });
      }
      var cloneTitle = null;
      if (title) {
        cloneTitle = /*#__PURE__*/_react.default.createElement("span", {
          className: cx('title')
        }, title);
      }
      var contentContainer = /*#__PURE__*/_react.default.createElement("span", {
        className: cx('content-container')
      }, cloneAccessory, cloneTitle);
      var buttonText = intl.formatMessage({
        id: 'Terra.application.utility.button'
      });
      return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
        type: "button",
        "aria-haspopup": "menu"
      }, customProps, {
        className: utilityClassNames,
        onClick: function onClick(event) {
          _this2.handleOnClick(event);
        },
        "aria-label": buttonText
      }), variant === _Utils.default.VARIANTS.MENU ? contentContainer : [cloneAccessory, cloneTitle], variant === _Utils.default.VARIANTS.MENU ? /*#__PURE__*/_react.default.createElement(_IconChevronRight.default, {
        className: iconClassNames
      }) : /*#__PURE__*/_react.default.createElement(_IconChevronDown.default, {
        className: iconClassNames
      }));
    }
  }]);
  return UtilityButton;
}(_react.default.Component);
UtilityButton.propTypes = propTypes;
UtilityButton.defaultProps = defaultProps;
UtilityButton.contextType = _terraThemeContext.default;
var _default = (0, _reactIntl.injectIntl)(UtilityButton);
exports.default = _default;