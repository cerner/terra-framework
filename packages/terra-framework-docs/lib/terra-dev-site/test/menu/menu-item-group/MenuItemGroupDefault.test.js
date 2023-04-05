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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraMenu = _interopRequireDefault(require("terra-menu"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var childContextTypes = {
  isSelectableMenu: _propTypes.default.bool
};
var DefaultMenuItemGroup = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DefaultMenuItemGroup, _React$Component);
  var _super = _createSuper(DefaultMenuItemGroup);
  function DefaultMenuItemGroup(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DefaultMenuItemGroup);
    _this = _super.call(this, props);
    _this.state = {
      selectedIndex: null
    };
    _this.handleSelection = _this.handleSelection.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(DefaultMenuItemGroup, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isSelectableMenu: true
      };
    }
  }, {
    key: "handleSelection",
    value: function handleSelection(event, selectedIndex) {
      this.setState({
        selectedIndex: selectedIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        id: "selected-index"
      }, /*#__PURE__*/_react.default.createElement("h3", null, "Selected Button:", this.state.selectedIndex)), /*#__PURE__*/_react.default.createElement(_terraMenu.default.ItemGroup, {
        className: "TestGroup",
        onChange: this.handleSelection
      }, /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Group Item 1",
        key: "1",
        className: "TestGroupItem1"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Group Item 2",
        key: "2",
        className: "TestGroupItem2"
      }), /*#__PURE__*/_react.default.createElement(_terraMenu.default.Item, {
        text: "Group Item 3",
        key: "3",
        className: "TestGroupItem3"
      })));
    }
  }]);
  return DefaultMenuItemGroup;
}(_react.default.Component);
DefaultMenuItemGroup.childContextTypes = childContextTypes;
var _default = DefaultMenuItemGroup;
exports.default = _default;