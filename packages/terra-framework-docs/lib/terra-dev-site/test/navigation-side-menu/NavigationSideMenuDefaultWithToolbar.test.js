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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraNavigationSideMenu = _interopRequireDefault(require("terra-navigation-side-menu"));
var _NavigationSideMenuDocCommonModule = _interopRequireDefault(require("./NavigationSideMenuDocCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_NavigationSideMenuDocCommonModule.default);
var NavigationSideMenuDefault = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(NavigationSideMenuDefault, _React$Component);
  var _super = _createSuper(NavigationSideMenuDefault);
  function NavigationSideMenuDefault(props) {
    var _this;
    (0, _classCallCheck2.default)(this, NavigationSideMenuDefault);
    _this = _super.call(this, props);
    _this.handleOnChange = _this.handleOnChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.resetMenuState = _this.resetMenuState.bind((0, _assertThisInitialized2.default)(_this));
    _this.fakeRoutingBack = _this.fakeRoutingBack.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      selectedMenuKey: 'menu',
      selectedChildKey: undefined
    };
    return _this;
  }
  (0, _createClass2.default)(NavigationSideMenuDefault, [{
    key: "handleOnChange",
    value: function handleOnChange(event, changeData) {
      this.setState({
        selectedMenuKey: changeData.selectedMenuKey,
        selectedChildKey: changeData.selectedChildKey
      });
    }
  }, {
    key: "resetMenuState",
    value: function resetMenuState() {
      this.setState({
        selectedMenuKey: 'menu',
        selectedChildKey: undefined
      });
    }
  }, {
    key: "fakeRoutingBack",
    value: function fakeRoutingBack() {
      this.setState({
        selectedMenuKey: 'fake-parent',
        selectedChildKey: undefined
      });
    }
  }, {
    key: "render",
    value: function render() {
      var content;
      if (this.state.selectedMenuKey === 'fake-parent') {
        content = /*#__PURE__*/_react.default.createElement("div", {
          className: cx('content')
        }, /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          onClick: this.resetMenuState
        }, "Child Route"), /*#__PURE__*/_react.default.createElement("p", null, "Parent Route"));
      } else {
        content = /*#__PURE__*/_react.default.createElement(_terraNavigationSideMenu.default, {
          id: "test-menu",
          menuItems: [{
            key: 'menu',
            text: 'Menu',
            childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4']
          }, {
            key: 'submenu1',
            text: 'Sub Menu 1',
            childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'],
            id: 'test-item-1'
          }, {
            key: 'submenu2',
            text: 'Sub Menu 2'
          }, {
            key: 'submenu3',
            text: 'Sub Menu 3'
          }, {
            key: 'submenu4',
            text: 'Sub Menu 4'
          }, {
            key: 'subsubmenu1',
            text: 'Sub-Sub Menu 1',
            id: 'test-item-2'
          }, {
            key: 'subsubmenu2',
            text: 'Sub-Sub Menu 2'
          }, {
            key: 'subsubmenu3',
            text: 'Sub-Sub Menu 3'
          }],
          onChange: this.handleOnChange,
          routingStackBack: this.fakeRoutingBack,
          selectedMenuKey: this.state.selectedMenuKey,
          selectedChildKey: this.state.selectedChildKey,
          toolbar: /*#__PURE__*/_react.default.createElement("div", {
            className: cx('toolbar')
          }, "Toolbar here")
        });
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, content);
    }
  }]);
  return NavigationSideMenuDefault;
}(_react.default.Component);
var _default = NavigationSideMenuDefault;
exports.default = _default;