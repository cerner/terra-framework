"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _terraTabs = _interopRequireDefault(require("terra-tabs"));
var _TabContentTemplate = _interopRequireDefault(require("./TabContentTemplate"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ControlledTabs = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ControlledTabs, _React$Component);
  var _super = _createSuper(ControlledTabs);
  function ControlledTabs(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ControlledTabs);
    _this = _super.call(this, props);
    _this.state = {
      activeKey: 'Tab2'
    };
    _this.handleSelection = _this.handleSelection.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(ControlledTabs, [{
    key: "handleSelection",
    value: function handleSelection(event, selectedKey) {
      if (selectedKey !== this.state.activeKey) {
        this.setState({
          activeKey: selectedKey
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var tab1 = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
        label: "Tab 1",
        key: "Tab1",
        id: "tab1"
      }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
        label: "Tab 1",
        id: "tab1Content"
      }));
      var tab2 = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
        label: "Tab 2",
        key: "Tab2",
        id: "tab2"
      }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
        label: "Tab 2",
        id: "tab2Content"
      }));
      var tab3 = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
        label: "Tab 3",
        key: "Tab 3",
        id: "tab3"
      }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
        label: "Tab 3",
        id: "tab3Content"
      }));
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        id: "current-selection"
      }, /*#__PURE__*/_react.default.createElement("p", null, "Last Triggered Tab:", this.state.activeKey)), /*#__PURE__*/_react.default.createElement(_terraTabs.default, {
        id: "controlledTabs",
        onChange: this.handleSelection,
        activeKey: this.state.activeKey
      }, tab1, tab2, tab3));
    }
  }]);
  return ControlledTabs;
}(_react.default.Component);
var _default = ControlledTabs;
exports.default = _default;