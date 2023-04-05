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
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _terraAbstractModal = _interopRequireDefault(require("terra-abstract-modal"));
var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));
var _terraSlideGroup = _interopRequireDefault(require("terra-slide-group"));
var _terraDisclosureManager = _interopRequireWildcard(require("terra-disclosure-manager"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _ModalManagerModule = _interopRequireDefault(require("./ModalManager.module.scss"));
var _excluded = ["children", "disclosureAccessory", "withDisclosureContainer"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var disclosureType = 'modal';
exports.disclosureType = disclosureType;
var cx = _bind.default.bind(_ModalManagerModule.default);
var propTypes = {
  /**
   * The components to be rendered in the body of the ModalManager. These components will receive the
   * disclosure capabilities through the DisclosureManger's context API.
   */
  children: _propTypes.default.node,
  /**
   * The component to render within the Modal above the disclosed content.
   */
  disclosureAccessory: _propTypes.default.element,
  /**
   * @private
   * The container to wrap the disclosed content. This should be provided from the application level.
   */
  withDisclosureContainer: _propTypes.default.func
};
var heightFromSize = {
  tiny: 240,
  small: 420,
  medium: 600,
  large: 870,
  huge: 960
};
var widthFromSize = {
  tiny: 320,
  small: 640,
  medium: 960,
  large: 1280,
  huge: 1600
};
var ModalManager = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ModalManager, _React$Component);
  var _super = _createSuper(ModalManager);
  function ModalManager(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ModalManager);
    _this = _super.call(this, props);
    _this.renderModal = _this.renderModal.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(ModalManager, [{
    key: "renderModal",
    value: function renderModal(manager) {
      var _this$props = this.props,
        children = _this$props.children,
        disclosureAccessory = _this$props.disclosureAccessory,
        withDisclosureContainer = _this$props.withDisclosureContainer,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var theme = this.context;
      var containerClassNames = (0, _classnames.default)(cx('container', theme.className), customProps.className);
      var classArray = ['modal-manager'];
      var isFullscreen = manager.disclosure.isMaximized || manager.disclosure.size === _terraDisclosureManager.availableDisclosureSizes.FULLSCREEN;
      if (!isFullscreen) {
        if (manager.disclosure.dimensions) {
          classArray.push("height-".concat(manager.disclosure.dimensions.height), "width-".concat(manager.disclosure.dimensions.width));
        } else if (manager.disclosure.size) {
          classArray.push("height-".concat(heightFromSize[manager.disclosure.size]), "width-".concat(widthFromSize[manager.disclosure.size]));
        }
      }
      var presentedDisclosureComponentKey = manager.disclosureComponentKeys[manager.disclosureComponentKeys.length - 1];
      var presentedDisclosureComponentData = manager.disclosureComponentData[presentedDisclosureComponentKey] || {};
      var headerDataForPresentedComponent = presentedDisclosureComponentData.headerAdapterData;
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        className: containerClassNames
      }), manager.children.components, /*#__PURE__*/_react.default.createElement(_terraAbstractModal.default, {
        isOpen: manager.disclosure.isOpen,
        isFullscreen: isFullscreen,
        classNameModal: cx(classArray),
        onRequestClose: function onRequestClose() {
          manager.closeDisclosure();
        },
        closeOnEsc: true,
        closeOnOutsideClick: false,
        ariaLabel: "Modal"
      }, /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        fill: true,
        header: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, headerDataForPresentedComponent ? /*#__PURE__*/_react.default.createElement(_terraActionHeader.default, {
          title: headerDataForPresentedComponent.title,
          onClose: manager.closeDisclosure,
          onBack: manager.disclosureComponentKeys.length > 1 ? manager.dismissPresentedComponent : undefined
        }, headerDataForPresentedComponent.collapsibleMenuView) : undefined, disclosureAccessory)
      }, /*#__PURE__*/_react.default.createElement(_terraSlideGroup.default, {
        items: manager.disclosure.components,
        isAnimated: !isFullscreen
      }))));
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
        render: this.renderModal,
        trapNestedDisclosureRequests: true
      }, children);
    }
  }]);
  return ModalManager;
}(_react.default.Component);
ModalManager.propTypes = propTypes;
ModalManager.contextType = _terraThemeContext.default;
var _default = ModalManager;
exports.default = _default;