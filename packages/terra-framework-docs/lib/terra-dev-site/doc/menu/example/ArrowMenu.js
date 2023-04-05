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
var _terraButton = _interopRequireDefault(require("terra-button"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraMenu = _interopRequireDefault(require("terra-menu"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _BasicMenuModule = _interopRequireDefault(require("./BasicMenu.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_BasicMenuModule.default);
var propTypes = {
  isArrowDisplayed: _propTypes.default.bool,
  contentWidth: _propTypes.default.string,
  boundingRef: _propTypes.default.func
};
var BasicMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(BasicMenu, _React$Component);
  var _super = _createSuper(BasicMenu);
  function BasicMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, BasicMenu);
    _this = _super.call(this, props);
    _this.handleButtonClick = _this.handleButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRequestClose = _this.handleRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.setButtonNode = _this.setButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.getButtonNode = _this.getButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleToggle1OnClick = _this.handleToggle1OnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleToggle2OnClick = _this.handleToggle2OnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnChange = _this.handleOnChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleAction = _this.handleAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleCloseOnClick = _this.handleCloseOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      open: false,
      toggle1Selected: false,
      toggle2Selected: false,
      groupSelectedIndex: undefined,
      actionClickCount: 0
    };
    return _this;
  }
  (0, _createClass2.default)(BasicMenu, [{
    key: "handleButtonClick",
    value: function handleButtonClick() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "handleRequestClose",
    value: function handleRequestClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "handleCloseOnClick",
    value: function handleCloseOnClick(event) {
      event.preventDefault();
      this.handleRequestClose();
    }
  }, {
    key: "handleToggle1OnClick",
    value: function handleToggle1OnClick() {
      this.setState(function (prevState) {
        return {
          toggle1Selected: !prevState.toggle1Selected
        };
      });
      this.handleRequestClose();
    }
  }, {
    key: "handleToggle2OnClick",
    value: function handleToggle2OnClick() {
      this.setState(function (prevState) {
        return {
          toggle2Selected: !prevState.toggle2Selected
        };
      });
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event, index) {
      this.setState({
        groupSelectedIndex: index
      });
    }
  }, {
    key: "handleAction",
    value: function handleAction(event) {
      event.preventDefault();
      var newState = this.state;
      newState.actionClickCount += 1;
      this.setState(newState);
    }
  }, {
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
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('menu-wrapper'),
        ref: this.setButtonNode
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default, {
        isOpen: this.state.open,
        targetRef: this.getButtonNode,
        onRequestClose: this.handleRequestClose,
        contentWidth: this.props.contentWidth,
        isArrowDisplayed: this.props.isArrowDisplayed,
        boundingRef: this.props.boundingRef
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Toggle Item 1 - Closes Menu",
        key: "Toggle1",
        isSelected: this.state.toggle1Selected,
        onClick: this.handleToggle1OnClick,
        isSelectable: true
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Toggle Item 2",
        key: "Toggle2",
        isSelected: this.state.toggle2Selected,
        onClick: this.handleToggle2OnClick,
        isSelectable: true
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Disabled Item 1",
        key: "Disabled1",
        isSelected: this.state.toggle1Selected,
        onClick: this.handleToggle1OnClick,
        isDisabled: true
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Divider, {
        key: "Divider1"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Nested Menu 1",
        key: "Nested1",
        subMenuItems: [/*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Action 1.1",
          key: "1.1",
          onClick: this.handleAction
        }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Action 1.2",
          key: "1.2",
          onClick: this.handleAction
        }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Action 1.3",
          key: "1.3",
          onClick: this.handleAction
        }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Divider, {
          key: "Divider1.1"
        }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Close Action 1.1",
          key: "1.4",
          onClick: this.handleCloseOnClick
        }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Close Action 1.2",
          key: "1.5",
          onClick: this.handleCloseOnClick
        }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Close Action 1.3",
          key: "1.6",
          onClick: this.handleCloseOnClick
        })]
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Nested Menu 2 has a long title that will wrap and a truncated title when clicked",
        key: "Nested2",
        isDisabled: true,
        subMenuItems: [/*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Default 2.1",
          key: "2.1"
        }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Default 2.2",
          key: "2.2"
        }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
          text: "Default 2.3",
          key: "2.3"
        })]
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Divider, {
        key: "Divider2"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Close Action",
        key: "Action2",
        onClick: this.handleCloseOnClick
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Action",
        key: "Action1",
        onClick: this.handleAction
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Divider, {
        key: "Divider3"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.ItemGroup, {
        key: "Group",
        onChange: this.handleOnChange
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Group Item 1",
        key: "GroupItem1",
        isSelected: this.state.groupSelectedIndex === 0
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Group Item 2",
        key: "GroupItem2",
        isSelected: this.state.groupSelectedIndex === 1
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Group Item 3",
        key: "GroupItem3",
        isSelected: this.state.groupSelectedIndex === 2,
        isDisabled: true
      }))), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        onClick: this.handleButtonClick,
        text: "Click Me"
      })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "Action button has been clicked", ' ', this.state.actionClickCount, ' ', "times."));
    }
  }]);
  return BasicMenu;
}(_react.default.Component);
var ArrowMenu = function ArrowMenu() {
  return /*#__PURE__*/_react.default.createElement(BasicMenu, {
    isArrowDisplayed: true
  });
};
BasicMenu.propTypes = propTypes;
var _default = ArrowMenu;
exports.default = _default;