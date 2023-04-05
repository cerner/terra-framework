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
var _terraFormCheckbox = _interopRequireDefault(require("terra-form-checkbox"));
var _CollapsibleMenu = _interopRequireDefault(require("./_CollapsibleMenu"));
var _CollapsibleMenuViewModule = _interopRequireDefault(require("./CollapsibleMenuView.module.scss"));
var _excluded = ["text", "isSelected", "isSelectable", "isDisabled", "onChange", "shouldCloseOnClick"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_CollapsibleMenuViewModule.default);
var propTypes = {
  /**
   * Sets the item's text
   */
  text: _propTypes.default.string.isRequired,
  /**
   * Indicates if the item is selected.
   */
  isSelected: _propTypes.default.bool,
  /**
   * Callback function for when selection state changes. Is called with event and isSelected parameters
   */
  onChange: _propTypes.default.func,
  /**
   *  Indicates that the toggle should be selectable
   */
  isSelectable: _propTypes.default.bool,
  /**
   * Indicates if the toggle should be disabled.
   */
  isDisabled: _propTypes.default.bool,
  /**
   * Indicates that clicking on this item while displayed inside a menu should close the menu
   */
  shouldCloseOnClick: _propTypes.default.bool
};
var contextTypes = {
  isCollapsibleMenuItem: _propTypes.default.bool
};
var defaultProps = {
  isSelected: false,
  isSelectable: true,
  shouldCloseOnClick: true
};
var CollapsibleMenuViewToggle = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CollapsibleMenuViewToggle, _React$Component);
  var _super = _createSuper(CollapsibleMenuViewToggle);
  function CollapsibleMenuViewToggle(props) {
    var _this;
    (0, _classCallCheck2.default)(this, CollapsibleMenuViewToggle);
    _this = _super.call(this, props);
    _this.wrappedOnChange = _this.wrappedOnChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  // Wrapping onChange event so that the same parameters will be given when the display is a checkbox and a menu.item
  (0, _createClass2.default)(CollapsibleMenuViewToggle, [{
    key: "wrappedOnChange",
    value: function wrappedOnChange(event) {
      if (this.props.onChange) {
        this.props.onChange(event, event.target.checked);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        text = _this$props.text,
        isSelected = _this$props.isSelected,
        isSelectable = _this$props.isSelectable,
        isDisabled = _this$props.isDisabled,
        onChange = _this$props.onChange,
        shouldCloseOnClick = _this$props.shouldCloseOnClick,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var isCollapsibleMenuItem = this.context.isCollapsibleMenuItem;
      var controllClassName = cx(['control', {
        'is-disabled': isDisabled || !isSelectable
      }, customProps.className]);
      if (isCollapsibleMenuItem) {
        return /*#__PURE__*/_react.default.createElement(_CollapsibleMenu.default.Item, (0, _extends2.default)({}, customProps, {
          text: text,
          isSelected: isSelected,
          isSelectable: isSelectable,
          isDisabled: isDisabled,
          onChange: onChange
        }));
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx(['face-up-item'])
      }, /*#__PURE__*/_react.default.createElement(_terraFormCheckbox.default, (0, _extends2.default)({}, customProps, {
        className: controllClassName,
        labelText: text,
        defaultChecked: isSelected,
        onChange: this.wrappedOnChange,
        disabled: isDisabled || !isSelectable
      })));
    }
  }]);
  return CollapsibleMenuViewToggle;
}(_react.default.Component);
CollapsibleMenuViewToggle.propTypes = propTypes;
CollapsibleMenuViewToggle.defaultProps = defaultProps;
CollapsibleMenuViewToggle.contextTypes = contextTypes;
var _default = CollapsibleMenuViewToggle;
exports.default = _default;