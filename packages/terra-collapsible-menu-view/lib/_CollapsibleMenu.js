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
var _terraMenu = _interopRequireDefault(require("terra-menu"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _CollapsibleMenuViewModule = _interopRequireDefault(require("./CollapsibleMenuView.module.scss"));
var _excluded = ["children", "button", "contentWidth"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_CollapsibleMenuViewModule.default);
var propTypes = {
  /**
   * List of CollapsibleMenuView.Item(s)/CollapsibleMenuView.ItemGroup(s)/CollapsibleMenuView.Divider(s) to be displayed as content within the Menu.
   */
  children: _propTypes.default.node.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: _propTypes.default.func,
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760, or auto
   */
  contentWidth: _propTypes.default.oneOf(['160', '240', '320', '640', '960', '1280', '1760', 'auto']),
  /**
   * Button to display the menu from
   */
  button: _propTypes.default.element.isRequired
};
var childContextTypes = {
  isCollapsibleMenuItem: _propTypes.default.bool
};
var CollapsibleMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CollapsibleMenu, _React$Component);
  var _super = _createSuper(CollapsibleMenu);
  function CollapsibleMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, CollapsibleMenu);
    _this = _super.call(this, props);
    _this.handleRequestClose = _this.handleRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.wrappedOnClick = _this.wrappedOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.wrapButtonClick = _this.wrapButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.wrapChildrenOnClick = _this.wrapChildrenOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.setButtonNode = _this.setButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.getButtonNode = _this.getButtonNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }
  (0, _createClass2.default)(CollapsibleMenu, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isCollapsibleMenuItem: true
      };
    }
  }, {
    key: "handleRequestClose",
    value: function handleRequestClose() {
      this.setState({
        isOpen: false
      });
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
    key: "wrappedOnClick",
    value: function wrappedOnClick(item) {
      var _this2 = this;
      return function (event) {
        _this2.handleRequestClose();
        if (item.props.onClick) {
          item.props.onClick(event);
        }
      };
    }
  }, {
    key: "wrapButtonClick",
    value: function wrapButtonClick(button) {
      var _this3 = this;
      return function (event) {
        _this3.setState({
          isOpen: true
        });
        if (button.props.onClick) {
          button.props.onClick(event);
        }
      };
    }
  }, {
    key: "wrapChildrenOnClick",
    value: function wrapChildrenOnClick(children) {
      var _this4 = this;
      var cloneChildren = children ? [] : undefined;
      _react.default.Children.forEach(children, function (item) {
        var clonedElement = item;
        if (item.props.shouldCloseOnClick) {
          clonedElement = /*#__PURE__*/_react.default.cloneElement(item, {
            onClick: _this4.wrappedOnClick(item)
          });
        } else if (item.props.children) {
          var clonedChildren = _this4.wrapChildrenOnClick(item.props.children);
          clonedElement = /*#__PURE__*/_react.default.cloneElement(item, {
            children: clonedChildren
          });
        } else if (item.props.subMenuItems) {
          var subMenuItems = _this4.wrapChildrenOnClick(item.props.subMenuItems);
          clonedElement = /*#__PURE__*/_react.default.cloneElement(item, {
            subMenuItems: subMenuItems
          });
        }
        cloneChildren.push(clonedElement);
      });
      return cloneChildren;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        button = _this$props.button,
        contentWidth = _this$props.contentWidth,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var clonedButton = /*#__PURE__*/_react.default.cloneElement(button, {
        onClick: this.wrapButtonClick(button)
      });
      var theme = this.context;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('face-up-item', theme.className),
        ref: this.setButtonNode
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default, (0, _extends2.default)({}, customProps, {
        onRequestClose: this.handleRequestClose,
        isArrowDisplayed: true,
        isOpen: this.state.isOpen,
        targetRef: this.getButtonNode,
        contentWidth: contentWidth
      }), this.wrapChildrenOnClick(children)), clonedButton);
    }
  }]);
  return CollapsibleMenu;
}(_react.default.Component);
CollapsibleMenu.propTypes = propTypes;
CollapsibleMenu.childContextTypes = childContextTypes;
CollapsibleMenu.Item = _terraMenu.default.Item;
CollapsibleMenu.ItemGroup = _terraMenu.default.ItemGroup;
CollapsibleMenu.Opts = {
  widths: _terraMenu.default.Opts.widths
};
CollapsibleMenu.contextType = _terraThemeContext.default;
var _default = CollapsibleMenu;
exports.default = _default;