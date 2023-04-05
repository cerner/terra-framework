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
var _terraDisclosureManager = require("terra-disclosure-manager");
var _terraButton = _interopRequireDefault(require("terra-button"));
var _IconSettings = _interopRequireDefault(require("terra-icon/lib/icon/IconSettings"));
var _IconCalendar = _interopRequireDefault(require("terra-icon/lib/icon/IconCalendar"));
var _IconFeaturedOutline = _interopRequireDefault(require("terra-icon/lib/icon/IconFeaturedOutline"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ApplicationExtensionsModule = _interopRequireDefault(require("./ApplicationExtensions.module.scss"));
var _ExtensionsDisclosure = _interopRequireDefault(require("./ExtensionsDisclosure"));
var _ApplicationLayout = require("../../../ApplicationLayout");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ApplicationExtensionsModule.default);
var propTypes = {
  disclosureManager: _terraDisclosureManager.disclosureManagerShape,
  layoutConfig: _ApplicationLayout.Utils.propTypes.layoutConfigPropType // eslint-disable-line react/forbid-foreign-prop-types
};
var ApplicationExtensions = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ApplicationExtensions, _React$Component);
  var _super = _createSuper(ApplicationExtensions);
  function ApplicationExtensions(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ApplicationExtensions);
    _this = _super.call(this, props);
    _this.discloseExtensionContent = _this.discloseExtensionContent.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(ApplicationExtensions, [{
    key: "discloseExtensionContent",
    value: function discloseExtensionContent(extensionName) {
      var disclosureManager = this.props.disclosureManager;
      disclosureManager.disclose({
        preferredType: 'modal',
        size: 'tiny',
        content: {
          key: "".concat(extensionName, "-disclosure"),
          component: /*#__PURE__*/_react.default.createElement(_ExtensionsDisclosure.default, {
            name: extensionName
          })
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var layoutConfig = this.props.layoutConfig;
      var isCompactSize = _ApplicationLayout.Utils.helpers.isSizeCompact(layoutConfig.size);
      var containerProps;
      var variant;
      if (isCompactSize) {
        containerProps = {
          style: {
            padding: '10px',
            width: '100%',
            backgroundColor: 'lightgrey'
          }
        };
        variant = _terraButton.default.Opts.Variants.ACTION;
      }
      return /*#__PURE__*/_react.default.createElement("div", containerProps, /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        icon: /*#__PURE__*/_react.default.createElement(_IconSettings.default, null),
        text: "Settings",
        variant: variant,
        isIconOnly: true,
        className: cx('extension-button'),
        onClick: function onClick() {
          return _this2.discloseExtensionContent('Settings');
        }
      }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        icon: /*#__PURE__*/_react.default.createElement(_IconCalendar.default, null),
        text: "Calendar",
        variant: variant,
        isIconOnly: true,
        className: cx('extension-button'),
        onClick: function onClick() {
          return _this2.discloseExtensionContent('Calendar');
        }
      }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        icon: /*#__PURE__*/_react.default.createElement(_IconFeaturedOutline.default, null),
        text: "Favorites",
        variant: variant,
        isIconOnly: true,
        className: cx('extension-button'),
        onClick: function onClick() {
          return _this2.discloseExtensionContent('Favorites');
        }
      }));
    }
  }]);
  return ApplicationExtensions;
}(_react.default.Component);
ApplicationExtensions.propTypes = propTypes;
var _default = (0, _terraDisclosureManager.withDisclosureManager)(ApplicationExtensions);
exports.default = _default;