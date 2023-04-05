"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
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
var AdditionalTabsTest = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AdditionalTabsTest, _React$Component);
  var _super = _createSuper(AdditionalTabsTest);
  function AdditionalTabsTest(props) {
    var _this;
    (0, _classCallCheck2.default)(this, AdditionalTabsTest);
    _this = _super.call(this, props);
    _this.state = {
      tabKeys: (0, _toConsumableArray2.default)(Array(5).keys())
    };
    _this.addMoreTabPanes = _this.addMoreTabPanes.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(AdditionalTabsTest, [{
    key: "createTabPanes",
    value: function createTabPanes() {
      var tabPanes = this.state.tabKeys.map(function (tabKey) {
        return /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
          label: "Tab ".concat(tabKey),
          key: tabKey,
          id: tabKey
        }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
          label: "Tab ".concat(tabKey),
          id: "Tab ".concat(tabKey)
        }));
      });
      return tabPanes;
    }
  }, {
    key: "addMoreTabPanes",
    value: function addMoreTabPanes() {
      this.setState({
        tabKeys: (0, _toConsumableArray2.default)(Array(20).keys())
      });
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-nested-ternary
      var tabsWrapperId = this.state.tabKeys.length === 5 ? 'tabsWrapper-5' : this.state.tabKeys.length === 20 ? 'tabsWrapper-20' : 'tabsWrapper';
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: this.addMoreTabPanes
      }, "Add Tabs"), /*#__PURE__*/_react.default.createElement(_terraTabs.default, {
        id: tabsWrapperId
      }, this.createTabPanes()));
    }
  }]);
  return AdditionalTabsTest;
}(_react.default.Component);
var _default = AdditionalTabsTest;
exports.default = _default;