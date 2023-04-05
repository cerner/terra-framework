"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disclosureType = exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraDisclosureManager = _interopRequireWildcard(require("terra-disclosure-manager"));
var _terraSlideGroup = _interopRequireDefault(require("terra-slide-group"));
var _terraSlidePanel = _interopRequireDefault(require("terra-slide-panel"));
var _excluded = ["children", "disclosureAccessory", "withDisclosureContainer"];
var _disclosureSizeToPane;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var disclosureType = 'panel';
exports.disclosureType = disclosureType;
var propTypes = {
  /**
   * The components to be rendered in the body of the SlidePanelManager. These components will receive the
   * disclosure capabilities through the DisclosureManger's context API.
   */
  children: _propTypes.default.node,
  /**
   * The desired panel behavior. Either 'squish' or 'overlay'.
   */
  panelBehavior: _propTypes.default.oneOf(['overlay', 'squish']),
  /**
   * The component to render within the panel above the disclosed content.
   */
  disclosureAccessory: _propTypes.default.element,
  /**
   * @private
   * The container to wrap the disclosed content. This should be provided from the application level.
   */
  withDisclosureContainer: _propTypes.default.func
};
var defaultProps = {
  panelBehavior: 'overlay'
};

/**
 * The SlidePanel component does not support the full range of DisclosureManager sizes in its API. The potential sizes are mapped to the
 * SlidePanel's supported sizes.
 */
var disclosureSizeToPanelSize = (_disclosureSizeToPane = {}, (0, _defineProperty2.default)(_disclosureSizeToPane, _terraDisclosureManager.availableDisclosureSizes.TINY, 'small'), (0, _defineProperty2.default)(_disclosureSizeToPane, _terraDisclosureManager.availableDisclosureSizes.SMALL, 'small'), (0, _defineProperty2.default)(_disclosureSizeToPane, _terraDisclosureManager.availableDisclosureSizes.MEDIUM, 'large'), (0, _defineProperty2.default)(_disclosureSizeToPane, _terraDisclosureManager.availableDisclosureSizes.LARGE, 'large'), (0, _defineProperty2.default)(_disclosureSizeToPane, _terraDisclosureManager.availableDisclosureSizes.HUGE, 'large'), _disclosureSizeToPane);
var disclosureDimensionsToPanelSize = function disclosureDimensionsToPanelSize(dimensions) {
  if (dimensions.width > 480 || dimensions.height > 600) {
    return 'large';
  }
  return 'small';
};
var SlidePanelManager = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SlidePanelManager, _React$Component);
  var _super = _createSuper(SlidePanelManager);
  function SlidePanelManager(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SlidePanelManager);
    _this = _super.call(this, props);
    _this.renderSlidePanel = _this.renderSlidePanel.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(SlidePanelManager, [{
    key: "renderSlidePanel",
    value: function renderSlidePanel(manager) {
      var _manager$disclosure, _manager$disclosure$t;
      var _this$props = this.props,
        children = _this$props.children,
        disclosureAccessory = _this$props.disclosureAccessory,
        withDisclosureContainer = _this$props.withDisclosureContainer,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var isFullscreen;
      if (manager.disclosure.size === _terraDisclosureManager.availableDisclosureSizes.FULLSCREEN || manager.disclosure.isMaximized) {
        isFullscreen = true;
      }
      var panelSize;
      if (manager.disclosure.dimensions) {
        panelSize = disclosureDimensionsToPanelSize(manager.disclosure.dimensions);
      } else {
        panelSize = disclosureSizeToPanelSize[manager.disclosure.size];
      }
      var panelBehavior = manager !== null && manager !== void 0 && (_manager$disclosure = manager.disclosure) !== null && _manager$disclosure !== void 0 && (_manager$disclosure$t = _manager$disclosure.typeConfig) !== null && _manager$disclosure$t !== void 0 && _manager$disclosure$t.panelBehavior ? manager.disclosure.typeConfig.panelBehavior : customProps.panelBehavior;
      var presentedDisclosureComponentKey = manager.disclosureComponentKeys[manager.disclosureComponentKeys.length - 1];
      var presentedDisclosureComponentData = manager.disclosureComponentData[presentedDisclosureComponentKey] || {};
      var headerDataForPresentedComponent = presentedDisclosureComponentData.headerAdapterData;
      return /*#__PURE__*/_react.default.createElement(_terraSlidePanel.default, (0, _extends2.default)({}, customProps, {
        fill: true,
        panelBehavior: panelBehavior,
        isFullscreen: isFullscreen,
        panelSize: panelSize,
        isOpen: manager.disclosure.isOpen,
        panelContent: /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
          fill: true,
          header: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, headerDataForPresentedComponent ? /*#__PURE__*/_react.default.createElement(_terraActionHeader.default, {
            title: headerDataForPresentedComponent.title,
            onClose: manager.closeDisclosure,
            onBack: manager.disclosureComponentKeys.length > 1 ? manager.dismissPresentedComponent : undefined
          }, headerDataForPresentedComponent.collapsibleMenuView) : undefined, disclosureAccessory)
        }, /*#__PURE__*/_react.default.createElement(_terraSlideGroup.default, {
          items: manager.disclosure.components,
          isAnimated: true
        })),
        mainContent: manager.children.components
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        withDisclosureContainer = _this$props2.withDisclosureContainer,
        children = _this$props2.children;
      return /*#__PURE__*/_react.default.createElement(_terraDisclosureManager.default, {
        withDisclosureContainer: withDisclosureContainer,
        supportedDisclosureTypes: [disclosureType],
        render: this.renderSlidePanel
      }, children);
    }
  }]);
  return SlidePanelManager;
}(_react.default.Component);
SlidePanelManager.propTypes = propTypes;
SlidePanelManager.defaultProps = defaultProps;
var _default = SlidePanelManager;
exports.default = _default;