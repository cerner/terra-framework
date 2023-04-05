"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RoutingStackDelegate = _interopRequireDefault(require("terra-navigation-layout/lib/RoutingStackDelegate"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ApplicationMenuModule = _interopRequireDefault(require("./ApplicationMenu.module.scss"));
var _RoutingMenu = _interopRequireDefault(require("../../../menu/RoutingMenu"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ApplicationMenuModule.default);
var ApplicationMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ApplicationMenu, _React$Component);
  var _super = _createSuper(ApplicationMenu);
  function ApplicationMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ApplicationMenu);
    _this = _super.call(this, props);
    var items = [];
    for (var i = 0; i < 20; i += 1) {
      items.push({
        text: "Item ".concat(i),
        path: "".concat(props.baseUrl, "/item_").concat(i)
      });
    }
    if (props.includeNestedMenu) {
      items.push({
        text: 'Nested Menu',
        path: "".concat(props.baseUrl, "/nested"),
        hasSubMenu: true
      });
    }
    var menuItems = items.map(function (item) {
      return {
        key: item.path,
        text: item.text,
        path: item.path,
        hasSubMenu: item.hasSubMenu
      };
    });
    _this.state = {
      menuItems: menuItems
    };
    return _this;
  }
  (0, _createClass2.default)(ApplicationMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        menuName = _this$props.menuName,
        layoutConfig = _this$props.layoutConfig,
        routingStackDelegate = _this$props.routingStackDelegate;
      var menuItems = this.state.menuItems;
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        footer: /*#__PURE__*/_react.default.createElement("div", {
          className: cx('footer')
        }, /*#__PURE__*/_react.default.createElement(_terraButton.default, {
          text: "Custom Event 1",
          isBlock: true,
          onClick: function onClick() {
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent('applicationMenu.itemSelected', false, false, 'Custom Event 1');
            document.dispatchEvent(evt);
            if (layoutConfig && layoutConfig.toggleMenu) {
              layoutConfig.toggleMenu();
            }
          },
          className: cx('custom-event-button')
        }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
          text: "Custom Event 2",
          isBlock: true,
          onClick: function onClick() {
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent('applicationMenu.itemSelected', false, false, 'Custom Event 2');
            document.dispatchEvent(evt);
            if (layoutConfig && layoutConfig.toggleMenu) {
              layoutConfig.toggleMenu();
            }
          }
        })),
        fill: true
      }, /*#__PURE__*/_react.default.createElement(_RoutingMenu.default, {
        title: menuName,
        menuItems: menuItems,
        routingStackDelegate: routingStackDelegate,
        layoutConfig: layoutConfig
      }));
    }
  }]);
  return ApplicationMenu;
}(_react.default.Component);
ApplicationMenu.propTypes = {
  layoutConfig: _propTypes.default.shape({
    toggleMenu: _propTypes.default.func,
    togglePin: _propTypes.default.func,
    menuIsPinned: _propTypes.default.bool
  }),
  routingStackDelegate: _RoutingStackDelegate.default.propType,
  includeNestedMenu: _propTypes.default.bool,
  menuName: _propTypes.default.string,
  baseUrl: _propTypes.default.string
};
var _default = ApplicationMenu;
exports.default = _default;