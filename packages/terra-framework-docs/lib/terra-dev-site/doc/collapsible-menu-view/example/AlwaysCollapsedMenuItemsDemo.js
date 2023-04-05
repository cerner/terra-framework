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
var _IconTable = _interopRequireDefault(require("terra-icon/lib/icon/IconTable"));
var _IconFlowsheet = _interopRequireDefault(require("terra-icon/lib/icon/IconFlowsheet"));
var _IconVisualization = _interopRequireDefault(require("terra-icon/lib/icon/IconVisualization"));
var _terraCollapsibleMenuView = _interopRequireDefault(require("terra-collapsible-menu-view"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var AlwaysCollapsedMenuItemsDemo = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AlwaysCollapsedMenuItemsDemo, _React$Component);
  var _super = _createSuper(AlwaysCollapsedMenuItemsDemo);
  function AlwaysCollapsedMenuItemsDemo(props) {
    var _this;
    (0, _classCallCheck2.default)(this, AlwaysCollapsedMenuItemsDemo);
    _this = _super.call(this, props);
    _this.handleDisplayTypeChange = _this.handleDisplayTypeChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      displayType: 'tableView'
    };
    return _this;
  }
  (0, _createClass2.default)(AlwaysCollapsedMenuItemsDemo, [{
    key: "handleDisplayTypeChange",
    value: function handleDisplayTypeChange(event, selectedKey) {
      this.setState({
        displayType: selectedKey
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default, {
        alwaysCollapsedMenuItems: [/*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
          text: "Always Collapsed Button 1",
          key: "collapsedButton1"
        }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
          text: "Always Collapsed Button 2",
          key: "collapsedButton2"
        }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
          text: "Always Collapsed Button 3",
          key: "collapsedButton3"
        })]
      }, /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        text: "Collapsible Button 1",
        key: "button1"
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        text: "Collapsible Button 2",
        key: "button2"
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Divider, {
        key: "divider1"
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.ItemGroup, {
        key: "ViewTypeSelection",
        selectedKeys: [this.state.displayType],
        onChange: this.handleDisplayTypeChange
      }, /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        icon: /*#__PURE__*/_react.default.createElement(_IconTable.default, null),
        text: "Table View",
        key: "tableView",
        isIconOnly: true,
        shouldCloseOnClick: false,
        isSelected: this.state.displayType === 'tableView'
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        icon: /*#__PURE__*/_react.default.createElement(_IconFlowsheet.default, null),
        text: "Expanded View",
        key: "expandedView",
        isIconOnly: true,
        shouldCloseOnClick: false,
        isSelected: this.state.displayType === 'expandedView'
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        icon: /*#__PURE__*/_react.default.createElement(_IconVisualization.default, null),
        text: "Trending View",
        key: "trendingView",
        isIconOnly: true,
        shouldCloseOnClick: false,
        isSelected: this.state.displayType === 'trendingView'
      })));
    }
  }]);
  return AlwaysCollapsedMenuItemsDemo;
}(_react.default.Component);
var _default = AlwaysCollapsedMenuItemsDemo;
exports.default = _default;