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
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _terraApplicationMenuLayout = _interopRequireDefault(require("terra-application-menu-layout"));
var _terraApplicationName = require("terra-application-name");
var _RoutingStackDelegate = _interopRequireDefault(require("terra-navigation-layout/lib/RoutingStackDelegate"));
var _terraApplicationUtility = require("terra-application-utility");
var _terraModalManager = require("terra-modal-manager");
var _terraDisclosureManager = require("terra-disclosure-manager");
var _propTypes2 = _interopRequireDefault(require("../utils/propTypes"));
var _helpers = _interopRequireDefault(require("../utils/helpers"));
var _UtilityMenuWrapper = _interopRequireDefault(require("./_UtilityMenuWrapper"));
var _ApplicationMenuModule = _interopRequireDefault(require("./ApplicationMenu.module.scss"));
var _excluded = ["disclosureManager", "content", "extensions", "layoutConfig", "nameConfig", "routingStackDelegate", "utilityConfig"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ApplicationMenuModule.default);
var propTypes = {
  /**
   * The element to be placed within the fill flex styled content area.
   * This content is intended to be the user configured content for the menu.
   */
  content: _propTypes.default.element,
  /**
   * The element to be placed within the fit top area for extensions within the layout.
   */
  extensions: _propTypes.default.element,
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: _propTypes2.default.layoutConfigPropType.isRequired,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: _propTypes2.default.nameConfigPropType,
  /**
   * Delegate prop that is provided by the NavigationLayout.
   */
  routingStackDelegate: _RoutingStackDelegate.default.propType.isRequired,
  /**
   * Configuration to be provided to the ApplicationUtility component.
   */
  utilityConfig: _propTypes2.default.utilityConfigPropType,
  /**
   * DisclosureManagerDelegate instance automatically provided by a DisclosureManagerProvider.
   */
  disclosureManager: _terraDisclosureManager.disclosureManagerShape
};
var ApplicationMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ApplicationMenu, _React$Component);
  var _super = _createSuper(ApplicationMenu);
  function ApplicationMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ApplicationMenu);
    _this = _super.call(this, props);
    _this.renderHeader = _this.renderHeader.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderExtensions = _this.renderExtensions.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderFooter = _this.renderFooter.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleUtilityDiscloseRequest = _this.handleUtilityDiscloseRequest.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleUtilityOnChange = _this.handleUtilityOnChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(ApplicationMenu, [{
    key: "handleUtilityDiscloseRequest",
    value: function handleUtilityDiscloseRequest(utilityMenu) {
      var _this$props = this.props,
        disclosureManager = _this$props.disclosureManager,
        layoutConfig = _this$props.layoutConfig;
      if (layoutConfig && layoutConfig.toggleMenu) {
        layoutConfig.toggleMenu();
      }
      if (disclosureManager && utilityMenu) {
        disclosureManager.disclose({
          preferredType: _terraModalManager.disclosureType,
          dimensions: {
            height: '420',
            width: '320'
          },
          content: {
            component: /*#__PURE__*/_react.default.createElement(_UtilityMenuWrapper.default, null, utilityMenu),
            key: 'application-menu-utility-menu'
          }
        });
      }
    }
  }, {
    key: "handleUtilityOnChange",
    value: function handleUtilityOnChange(event, itemData) {
      var _this$props2 = this.props,
        utilityConfig = _this$props2.utilityConfig,
        disclosureManager = _this$props2.disclosureManager;
      utilityConfig.onChange(event, itemData, disclosureManager && disclosureManager.disclose);
    }
  }, {
    key: "renderHeader",
    value: function renderHeader(isCompact) {
      var nameConfig = this.props.nameConfig;
      if (isCompact && nameConfig && (nameConfig.accessory || nameConfig.title)) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: cx('menu-header')
        }, /*#__PURE__*/_react.default.createElement(_terraApplicationName.ApplicationMenuName, {
          accessory: nameConfig.accessory,
          title: nameConfig.title
        }));
      }
      return null;
    }
  }, {
    key: "renderExtensions",
    value: function renderExtensions(isCompact) {
      var _this$props3 = this.props,
        layoutConfig = _this$props3.layoutConfig,
        extensions = _this$props3.extensions;
      if (isCompact && extensions) {
        return /*#__PURE__*/_react.default.cloneElement(extensions, {
          layoutConfig: layoutConfig
        });
      }
      return null;
    }
  }, {
    key: "renderFooter",
    value: function renderFooter(isCompact) {
      var utilityConfig = this.props.utilityConfig;
      if (isCompact && utilityConfig) {
        return /*#__PURE__*/_react.default.createElement(_terraApplicationUtility.ApplicationMenuUtility, {
          onChange: this.handleUtilityOnChange,
          onDisclose: this.handleUtilityDiscloseRequest,
          title: utilityConfig.title,
          accessory: utilityConfig.accessory,
          menuItems: utilityConfig.menuItems,
          initialSelectedKey: utilityConfig.initialSelectedKey,
          "data-application-menu-utility": true
        });
      }
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        disclosureManager = _this$props4.disclosureManager,
        content = _this$props4.content,
        extensions = _this$props4.extensions,
        layoutConfig = _this$props4.layoutConfig,
        nameConfig = _this$props4.nameConfig,
        routingStackDelegate = _this$props4.routingStackDelegate,
        utilityConfig = _this$props4.utilityConfig,
        customProps = (0, _objectWithoutProperties2.default)(_this$props4, _excluded);
      var theme = this.context;
      var menuClassNames = (0, _classnames.default)(cx('application-menu', theme.className), customProps.className);
      var isCompact = _helpers.default.isSizeCompact(layoutConfig.size);
      var clonedContent;
      if (content) {
        clonedContent = /*#__PURE__*/_react.default.cloneElement(content, {
          layoutConfig: layoutConfig,
          routingStackDelegate: routingStackDelegate
        });
      }
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        className: menuClassNames
      }), /*#__PURE__*/_react.default.createElement(_terraApplicationMenuLayout.default, {
        header: this.renderHeader(isCompact),
        extensions: this.renderExtensions(isCompact),
        content: clonedContent,
        footer: this.renderFooter(isCompact)
      }));
    }
  }]);
  return ApplicationMenu;
}(_react.default.Component);
ApplicationMenu.propTypes = propTypes;
ApplicationMenu.contextType = _terraThemeContext.default;
var _default = (0, _terraDisclosureManager.withDisclosureManager)(ApplicationMenu);
exports.default = _default;