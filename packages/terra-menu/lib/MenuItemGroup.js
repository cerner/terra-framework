"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var _terraList = _interopRequireWildcard(require("terra-list"));
var _excluded = ["children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var propTypes = {
  /**
   * Menu.Items to be grouped together.
   */
  children: _propTypes.default.node.isRequired,
  /**
   * Callback function called when selected index changes.
   */
  onChange: _propTypes.default.func
};
var childContextTypes = {
  isGroupItem: _propTypes.default.bool,
  shouldReserveSpaceForIcon: _propTypes.default.bool
};
var initialSingleToggledIndex = function initialSingleToggledIndex(children) {
  var childArray = _react.default.Children.toArray(children);
  for (var i = 0; i < childArray.length; i += 1) {
    if (childArray[i].props.isSelected) {
      return i;
    }
  }
  return -1;
};
var MenuItemGroup = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuItemGroup, _React$Component);
  var _super = _createSuper(MenuItemGroup);
  function MenuItemGroup(props) {
    var _this;
    (0, _classCallCheck2.default)(this, MenuItemGroup);
    _this = _super.call(this, props);
    _this.cloneChildren = _this.cloneChildren.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleItemToggled = _this.handleItemToggled.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      toggledIndex: initialSingleToggledIndex(props.children)
    };
    return _this;
  }
  (0, _createClass2.default)(MenuItemGroup, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isGroupItem: true,
        shouldReserveSpaceForIcon: true
      };
    }
  }, {
    key: "handleItemToggled",
    value: function handleItemToggled(event, metaData) {
      if (this.state.toggledIndex !== metaData.index) {
        event.preventDefault();
        this.setState({
          toggledIndex: metaData.index
        });
        if (this.props.onChange) {
          this.props.onChange(event, metaData.index);
        }
      }
    }
  }, {
    key: "cloneChildren",
    value: function cloneChildren(children) {
      var _this2 = this;
      return _react.default.Children.map(children, function (child, index) {
        var isToggleable = true;
        if (child.props.isToggleable === false && child.props.isSelectable === false) {
          isToggleable = false;
        }
        return /*#__PURE__*/_react.default.cloneElement(child, {
          isToggleable: isToggleable,
          isToggled: _this2.state.toggledIndex === index,
          onClick: _terraList.Utils.wrappedOnClickForItem(child.props.onClick, _this2.handleItemToggled, {
            index: index
          }),
          onKeyDown: _terraList.Utils.wrappedOnKeyDownForItem(child.props.onKeyDown, _this2.handleItemToggled, {
            index: index
          })
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var managedChildren = this.cloneChildren(children);
      return /*#__PURE__*/_react.default.createElement(_terraList.default, (0, _extends2.default)({}, customProps, {
        role: "group"
      }), managedChildren);
    }
  }]);
  return MenuItemGroup;
}(_react.default.Component);
MenuItemGroup.propTypes = propTypes;
MenuItemGroup.childContextTypes = childContextTypes;
var _default = MenuItemGroup;
exports.default = _default;