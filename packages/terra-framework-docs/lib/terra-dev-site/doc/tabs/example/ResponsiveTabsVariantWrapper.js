"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ResponsiveTabsVariantWrapperModule = _interopRequireDefault(require("./ResponsiveTabsVariantWrapper.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ResponsiveTabsVariantWrapperModule.default);
function ResponsiveTabsVariantsWrapper(WrappedComponent) {
  return /*#__PURE__*/function (_React$Component) {
    (0, _inherits2.default)(ResponsiveTabsVariant, _React$Component);
    var _super = _createSuper(ResponsiveTabsVariant);
    function ResponsiveTabsVariant(props) {
      var _this;
      (0, _classCallCheck2.default)(this, ResponsiveTabsVariant);
      _this = _super.call(this, props);
      _this.handleOnSelect = _this.handleOnSelect.bind((0, _assertThisInitialized2.default)(_this));
      _this.state = {
        responsiveTabsVariant: 'parent',
        containerClassName: 'parent-container-650',
        renderIconTabs: false
      };
      return _this;
    }
    (0, _createClass2.default)(ResponsiveTabsVariant, [{
      key: "handleOnSelect",
      value: function handleOnSelect(event) {
        this.setState({
          renderIconTabs: event.target.value.split('-')[0] !== 'default',
          responsiveTabsVariant: event.target.value.split('-')[1],
          containerClassName: event.target.value
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: cx(this.state.containerClassName)
        }, /*#__PURE__*/_react.default.createElement(WrappedComponent, (0, _extends2.default)({
          renderIconTabs: this.state.renderIconTabs,
          responsiveTo: this.state.responsiveTabsVariant
        }, this.props)), /*#__PURE__*/_react.default.createElement("div", {
          className: cx('options-container')
        }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("label", {
          htmlFor: "responsiveTabsVariant"
        }, "Select a responsiveTo variant:")), /*#__PURE__*/_react.default.createElement("select", {
          className: cx('options'),
          id: "responsiveTabsVariant",
          name: "responsiveTabsVariant",
          value: this.state.containerClassName,
          onChange: this.handleOnSelect
        }, /*#__PURE__*/_react.default.createElement("option", {
          value: "default-window"
        }, "Default Tabs - Window"), /*#__PURE__*/_react.default.createElement("option", {
          value: "default-parent-container-220"
        }, "Default Tabs - Parent (Container Width: 220px)"), /*#__PURE__*/_react.default.createElement("option", {
          value: "default-parent-container-650"
        }, "Default Tabs - Parent (Container Width: 650px)"), /*#__PURE__*/_react.default.createElement("option", {
          value: "icon-window"
        }, "Icon Only Tabs - Window"), /*#__PURE__*/_react.default.createElement("option", {
          value: "icon-none-container-220"
        }, "Icon Only Tabs - None (Container Width: 220px)"), /*#__PURE__*/_react.default.createElement("option", {
          value: "icon-none-container-650"
        }, "Icon Only Tabs - None (Container Width: 650px)"), /*#__PURE__*/_react.default.createElement("option", {
          value: "icon-parent-container-220"
        }, "Icon Only Tabs - Parent (Container Width: 220px)"))));
      }
    }]);
    return ResponsiveTabsVariant;
  }(_react.default.Component);
}
var _default = ResponsiveTabsVariantsWrapper;
exports.default = _default;