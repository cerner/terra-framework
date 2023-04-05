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
var _terraButtonGroup = _interopRequireDefault(require("terra-button-group"));
var _CollapsibleMenu = _interopRequireDefault(require("./_CollapsibleMenu"));
var _CollapsibleMenuViewModule = _interopRequireDefault(require("./CollapsibleMenuView.module.scss"));
var _excluded = ["children", "onChange", "selectedKeys"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_CollapsibleMenuViewModule.default);
var propTypes = {
  /**
   * Callback function that is called when the group's selection state changes
   */
  onChange: _propTypes.default.func,
  /**
   * CollapsibleMenuView.Items to be grouped together
   */
  children: _propTypes.default.node.isRequired,
  /**
   * A list of keys of the CollapsibleMenuView.Items that should be selected.
   */
  selectedKeys: _propTypes.default.arrayOf(_propTypes.default.string)
};
var defaultProps = {
  selectedKeys: []
};
var childContextTypes = {
  isCollapsibleGroupItem: _propTypes.default.bool
};
var contextTypes = {
  isCollapsibleMenuItem: _propTypes.default.bool
};
var CollapsibleMenuViewItemGroup = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CollapsibleMenuViewItemGroup, _React$Component);
  var _super = _createSuper(CollapsibleMenuViewItemGroup);
  function CollapsibleMenuViewItemGroup(props) {
    var _this;
    (0, _classCallCheck2.default)(this, CollapsibleMenuViewItemGroup);
    _this = _super.call(this, props);
    _this.handleOnChange = _this.handleOnChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(CollapsibleMenuViewItemGroup, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isCollapsibleGroupItem: true
      };
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event, selectedIndex) {
      if (this.props.onChange) {
        var selectedKey = selectedIndex;
        _react.default.Children.forEach(this.props.children, function (child, index) {
          if (selectedIndex === index) {
            selectedKey = child.key;
          }
        });
        this.props.onChange(event, selectedKey);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        onChange = _this$props.onChange,
        selectedKeys = _this$props.selectedKeys,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var isCollapsibleMenuItem = this.context.isCollapsibleMenuItem;
      if (isCollapsibleMenuItem && selectedKeys.length) {
        return /*#__PURE__*/_react.default.createElement("li", {
          role: "none"
        }, /*#__PURE__*/_react.default.createElement(_CollapsibleMenu.default.ItemGroup, (0, _extends2.default)({}, customProps, {
          onChange: this.handleOnChange
        }), children));
      }
      if (isCollapsibleMenuItem) {
        return /*#__PURE__*/_react.default.createElement("div", customProps, children);
      }
      var buttonGroupClassNames = cx(['face-up-item', customProps.className]);
      return /*#__PURE__*/_react.default.createElement(_terraButtonGroup.default, (0, _extends2.default)({}, customProps, {
        onChange: onChange,
        className: buttonGroupClassNames,
        selectedKeys: selectedKeys
      }), children);
    }
  }]);
  return CollapsibleMenuViewItemGroup;
}(_react.default.Component);
CollapsibleMenuViewItemGroup.propTypes = propTypes;
CollapsibleMenuViewItemGroup.defaultProps = defaultProps;
CollapsibleMenuViewItemGroup.childContextTypes = childContextTypes;
CollapsibleMenuViewItemGroup.contextTypes = contextTypes;
var _default = CollapsibleMenuViewItemGroup;
exports.default = _default;