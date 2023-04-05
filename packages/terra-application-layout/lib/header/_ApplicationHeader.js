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
var _reactIntl = require("react-intl");
var _terraDisclosureManager = require("terra-disclosure-manager");
var _terraApplicationHeaderLayout = _interopRequireDefault(require("terra-application-header-layout"));
var _terraApplicationUtility = require("terra-application-utility");
var _terraApplicationName = require("terra-application-name");
var _terraApplicationLinks = require("terra-application-links");
var _IconMenu = _interopRequireDefault(require("terra-icon/lib/icon/IconMenu"));
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _configurationPropTypes = require("terra-navigation-layout/lib/configurationPropTypes");
var _propTypes2 = _interopRequireDefault(require("../utils/propTypes"));
var _helpers = _interopRequireDefault(require("../utils/helpers"));
var _ApplicationHeaderModule = _interopRequireDefault(require("./ApplicationHeader.module.scss"));
var _excluded = ["disclosureManager", "applicationLinks", "extensions", "layoutConfig", "nameConfig", "utilityConfig", "navigationLayoutRoutes", "navigationLayoutSize", "intl", "hasIcons"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ApplicationHeaderModule.default);
var propTypes = {
  /**
   * Navigation tab alignment. Navigational links that will generate list items that will update the path.
   * These paths are matched with react-router for selection.
   */
  applicationLinks: _terraApplicationLinks.ApplicationLinksPropType,
  /**
   * The element to be placed within the fit start area for extensions within the layout.
   */
  extensions: _propTypes.default.element,
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: _propTypes2.default.layoutConfigPropType,
  /**
   * The set of routes currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutRoutes: _propTypes.default.arrayOf(_configurationPropTypes.processedRoutesPropType),
  /**
   * The window size currently identified by the NavigationLayout. This prop is provided by the NavigationLayout.
   */
  navigationLayoutSize: _propTypes.default.string,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: _propTypes2.default.nameConfigPropType,
  /**
   * Configuration to be provided to the ApplicationUtility component.
   */
  utilityConfig: _propTypes2.default.utilityConfigPropType,
  /**
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }),
  /**
   * DisclosureManagerDelegate instance automatically provided by a DisclosureManagerProvider.
   */
  disclosureManager: _terraDisclosureManager.disclosureManagerShape,
  /**
   * Whether or not the header contains icons
   */
  hasIcons: _propTypes.default.bool
};
var defaultProps = {
  applicationLinks: {},
  hasIcons: false
};
var ApplicationHeader = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ApplicationHeader, _React$Component);
  var _super = _createSuper(ApplicationHeader);
  function ApplicationHeader(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ApplicationHeader);
    _this = _super.call(this, props);
    _this.handleUtilityDiscloseRequest = _this.handleUtilityDiscloseRequest.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleUtilityPopupCloseRequest = _this.handleUtilityPopupCloseRequest.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleUtilityOnChange = _this.handleUtilityOnChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.getTargetRef = _this.getTargetRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.setContentNode = _this.setContentNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderToggle = _this.renderToggle.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderAppName = _this.renderAppName.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderExtensions = _this.renderExtensions.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderNavigation = _this.renderNavigation.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderUtilities = _this.renderUtilities.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderUtilitiesPopup = _this.renderUtilitiesPopup.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      utilityComponent: undefined
    };
    return _this;
  }
  (0, _createClass2.default)(ApplicationHeader, [{
    key: "handleUtilityDiscloseRequest",
    value: function handleUtilityDiscloseRequest(utility) {
      this.setState({
        utilityComponent: /*#__PURE__*/_react.default.cloneElement(utility, {
          onRequestClose: this.handleUtilityPopupCloseRequest
        })
      });
    }
  }, {
    key: "handleUtilityPopupCloseRequest",
    value: function handleUtilityPopupCloseRequest() {
      if (this.state.utilityComponent) {
        this.setState({
          utilityComponent: undefined
        });
      }
    }
  }, {
    key: "handleUtilityOnChange",
    value: function handleUtilityOnChange(event, itemData) {
      var _this$props = this.props,
        utilityConfig = _this$props.utilityConfig,
        disclosureManager = _this$props.disclosureManager;
      utilityConfig.onChange(event, itemData, disclosureManager && disclosureManager.disclose);
    }
  }, {
    key: "setContentNode",
    value: function setContentNode(node) {
      this.contentNode = node;
    }
  }, {
    key: "getTargetRef",
    value: function getTargetRef() {
      if (this.contentNode) {
        return this.contentNode.querySelector('[data-application-header-utility]');
      }
      return undefined;
    }
  }, {
    key: "renderToggle",
    value: function renderToggle() {
      var _this$props2 = this.props,
        layoutConfig = _this$props2.layoutConfig,
        intl = _this$props2.intl;
      if (layoutConfig.toggleMenu) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: cx('navbar-toggle')
        }, /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          className: cx('toggle-button'),
          "aria-label": intl.formatMessage({
            id: 'Terra.applicationLayout.applicationHeader.menuToggleLabel'
          }),
          onClick: layoutConfig.toggleMenu,
          "data-application-header-toggle": true
        }, /*#__PURE__*/_react.default.createElement(_IconMenu.default, null)));
      }
      return null;
    }
  }, {
    key: "renderAppName",
    value: function renderAppName() {
      var nameConfig = this.props.nameConfig;
      if (nameConfig && (nameConfig.accessory || nameConfig.title)) {
        return /*#__PURE__*/_react.default.createElement(_terraApplicationName.ApplicationHeaderName, {
          accessory: nameConfig.accessory,
          title: nameConfig.title
        });
      }
      return null;
    }
  }, {
    key: "renderNavigation",
    value: function renderNavigation(isCompact) {
      var applicationLinks = this.props.applicationLinks;
      if (!isCompact) {
        if (applicationLinks.links && applicationLinks.links.length) {
          return /*#__PURE__*/_react.default.createElement(_terraApplicationLinks.ApplicationTabs, applicationLinks);
        }
        return null;
      }

      /**
       * When compact, the navigation region of the header renders the application name component instead. At compact
       * sizes, the logo region within the ApplicationHeaderLayout is too small to use, so we instead render within
       * the navigation region which renders with a larger width.
       */
      return this.renderAppName();
    }
  }, {
    key: "renderExtensions",
    value: function renderExtensions(isCompact) {
      var _this$props3 = this.props,
        layoutConfig = _this$props3.layoutConfig,
        extensions = _this$props3.extensions;
      if (!isCompact && extensions) {
        return /*#__PURE__*/_react.default.cloneElement(extensions, {
          layoutConfig: layoutConfig
        });
      }
      return null;
    }
  }, {
    key: "renderUtilities",
    value: function renderUtilities(isCompact) {
      var utilityConfig = this.props.utilityConfig;
      if (!isCompact && utilityConfig) {
        return /*#__PURE__*/_react.default.createElement(_terraApplicationUtility.ApplicationHeaderUtility, {
          onChange: this.handleUtilityOnChange,
          onDisclose: this.handleUtilityDiscloseRequest,
          title: utilityConfig.title,
          accessory: utilityConfig.accessory,
          menuItems: utilityConfig.menuItems,
          initialSelectedKey: utilityConfig.initialSelectedKey,
          "data-application-header-utility": true
        });
      }
      return null;
    }
  }, {
    key: "renderUtilitiesPopup",
    value: function renderUtilitiesPopup() {
      var utilityComponent = this.state.utilityComponent;
      if (utilityComponent) {
        return /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
          attachmentBehavior: "push",
          contentAttachment: "top center",
          contentHeight: "auto",
          contentWidth: "240",
          isArrowDisplayed: true,
          isHeaderDisabled: true,
          isOpen: true,
          onRequestClose: this.handleUtilityPopupCloseRequest,
          targetRef: this.getTargetRef
        }, utilityComponent);
      }
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        disclosureManager = _this$props4.disclosureManager,
        applicationLinks = _this$props4.applicationLinks,
        extensions = _this$props4.extensions,
        layoutConfig = _this$props4.layoutConfig,
        nameConfig = _this$props4.nameConfig,
        utilityConfig = _this$props4.utilityConfig,
        navigationLayoutRoutes = _this$props4.navigationLayoutRoutes,
        navigationLayoutSize = _this$props4.navigationLayoutSize,
        intl = _this$props4.intl,
        hasIcons = _this$props4.hasIcons,
        customProps = (0, _objectWithoutProperties2.default)(_this$props4, _excluded);
      var theme = this.context;
      var headerClassNames = (0, _classnames.default)(cx('application-navbar', {
        'application-navbar-with-icons': hasIcons
      }, theme.className), customProps.className);
      var isCompact = _helpers.default.isSizeCompact(layoutConfig.size);
      return /*#__PURE__*/_react.default.createElement("header", (0, _extends2.default)({
        role: "banner"
      }, customProps, {
        className: headerClassNames,
        ref: this.setContentNode
      }), /*#__PURE__*/_react.default.createElement(_terraApplicationHeaderLayout.default, {
        toggle: this.renderToggle(),
        logo: !isCompact ? this.renderAppName() : null,
        navigation: this.renderNavigation(isCompact),
        extensions: this.renderExtensions(isCompact),
        utilities: this.renderUtilities(isCompact)
      }), this.renderUtilitiesPopup());
    }
  }]);
  return ApplicationHeader;
}(_react.default.Component);
ApplicationHeader.propTypes = propTypes;
ApplicationHeader.defaultProps = defaultProps;
ApplicationHeader.contextType = _terraThemeContext.default;
var _default = (0, _reactIntl.injectIntl)((0, _terraDisclosureManager.withDisclosureManager)(ApplicationHeader));
exports.default = _default;