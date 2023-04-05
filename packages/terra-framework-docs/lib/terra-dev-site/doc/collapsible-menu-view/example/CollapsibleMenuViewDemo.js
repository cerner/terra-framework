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
var _IconSend = _interopRequireDefault(require("terra-icon/lib/icon/IconSend"));
var _IconPrinter = _interopRequireDefault(require("terra-icon/lib/icon/IconPrinter"));
var _IconFolder = _interopRequireDefault(require("terra-icon/lib/icon/IconFolder"));
var _IconTrash = _interopRequireDefault(require("terra-icon/lib/icon/IconTrash"));
var _terraCollapsibleMenuView = _interopRequireDefault(require("terra-collapsible-menu-view"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CollapsibleMenuViewDemo = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CollapsibleMenuViewDemo, _React$Component);
  var _super = _createSuper(CollapsibleMenuViewDemo);
  function CollapsibleMenuViewDemo(props) {
    var _this;
    (0, _classCallCheck2.default)(this, CollapsibleMenuViewDemo);
    _this = _super.call(this, props);
    _this.handleDisplayTypeChange = _this.handleDisplayTypeChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleToggleOneOnChange = _this.handleToggleOneOnChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleToggleTwoOnChange = _this.handleToggleTwoOnChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      toggle1Selection: false,
      toggle2Selection: false,
      displayType: 'tableView'
    };
    return _this;
  }
  (0, _createClass2.default)(CollapsibleMenuViewDemo, [{
    key: "handleToggleOneOnChange",
    value: function handleToggleOneOnChange(event, isSelected) {
      this.setState({
        toggle1Selection: isSelected
      });
    }
  }, {
    key: "handleToggleTwoOnChange",
    value: function handleToggleTwoOnChange(event, isSelected) {
      this.setState({
        toggle2Selection: isSelected
      });
    }
  }, {
    key: "handleDisplayTypeChange",
    value: function handleDisplayTypeChange(event, selectedKey) {
      this.setState({
        displayType: selectedKey
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default, null, /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Toggle, {
        text: "Toggle Item 1",
        key: "toggle1",
        shouldCloseOnClick: false,
        onChange: this.handleToggleOneOnChange,
        isSelected: this.state.toggle1Selection,
        isSelectable: false
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Toggle, {
        text: "Toggle Item 2",
        key: "toggle2",
        shouldCloseOnClick: false,
        onChange: this.handleToggleTwoOnChange,
        isSelected: this.state.toggle2Selection,
        isDisabled: true
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Divider, {
        key: "Divider1"
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        text: "Menu Button 1",
        key: "MenuButton1",
        shouldCloseOnClick: false,
        subMenuItems: [/*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
          text: "Default Item 1",
          key: "defaultItem1"
        }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
          text: "Default Item 2",
          key: "defaultItem2"
        })]
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        text: "Menu Button 2",
        key: "MenuButton 2",
        isDisabled: true,
        shouldCloseOnClick: false,
        subMenuItems: [/*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
          text: "Default Item 1",
          key: "defaultItem1"
        }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
          text: "Default Item 2",
          key: "defaultItem2",
          isDisabled: true
        })]
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Divider, {
        key: "Divider2"
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
        isSelected: this.state.displayType === 'trendingView',
        isDisabled: true
      })), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Divider, {
        key: "Divider3"
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        icon: /*#__PURE__*/_react.default.createElement(_IconSend.default, null),
        text: "Send Message",
        key: "send",
        isIconOnly: true
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.ItemGroup, {
        key: "messageActionGroup"
      }, /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        icon: /*#__PURE__*/_react.default.createElement(_IconPrinter.default, null),
        text: "Print Message",
        key: "print",
        isIconOnly: true
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        icon: /*#__PURE__*/_react.default.createElement(_IconFolder.default, null),
        text: "Move Message to Folder...",
        key: "move",
        isIconOnly: true,
        isDisabled: true
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        icon: /*#__PURE__*/_react.default.createElement(_IconTrash.default, null),
        text: "Trash Message",
        key: "trash",
        isIconOnly: true
      })), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Divider, {
        key: "Divider4"
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        text: "Button 1",
        key: "button1"
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        text: "Button 2",
        key: "button2",
        isDisabled: true
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        text: "Button 3",
        key: "button3"
      }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
        text: "Button 4",
        key: "button4"
      }));
    }
  }]);
  return CollapsibleMenuViewDemo;
}(_react.default.Component);
var _default = CollapsibleMenuViewDemo;
exports.default = _default;