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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraFormInput = _interopRequireDefault(require("terra-form-input"));
var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _exampleStylesModule = _interopRequireDefault(require("./example-styles.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_exampleStylesModule.default);
var propTypes = {
  name: _propTypes.default.string,
  disclosureType: _propTypes.default.string,
  disclosureManager: _terraDisclosureManager.disclosureManagerShape
};
var defaultProps = {
  name: 'Disclosure Component'
};
var DisclosureComponent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DisclosureComponent, _React$Component);
  var _super = _createSuper(DisclosureComponent);
  function DisclosureComponent(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DisclosureComponent);
    _this = _super.call(this, props);
    _this.checkLockState = _this.checkLockState.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      text: undefined
    };
    return _this;
  }
  (0, _createClass2.default)(DisclosureComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var disclosureManager = this.props.disclosureManager;
      if (disclosureManager && disclosureManager.registerDismissCheck) {
        disclosureManager.registerDismissCheck(this.checkLockState);
      }
    }
  }, {
    key: "checkLockState",
    value: function checkLockState() {
      var _this2 = this;
      if (this.state.text && this.state.text.length) {
        return new Promise(function (resolve, reject) {
          // eslint-disable-next-line no-restricted-globals
          if (!confirm("".concat(_this2.props.name, " has unsaved changes that will be lost. Do you wish to continue?"))) {
            // eslint-disable-line no-alert
            reject();
            return;
          }
          resolve();
        });
      }
      return Promise.resolve();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        disclosureManager = _this$props.disclosureManager,
        name = _this$props.name,
        disclosureType = _this$props.disclosureType;
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        fill: true,
        header: /*#__PURE__*/_react.default.createElement(_terraActionHeader.default, {
          title: "Disclosure - ".concat(name),
          onClose: disclosureManager.closeDisclosure,
          onBack: disclosureManager.goBack,
          onMaximize: disclosureManager.maximize,
          onMinimize: disclosureManager.minimize
        })
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement("h3", null, name), /*#__PURE__*/_react.default.createElement("p", null, "The disclosed component can disclose content within the same panel."), /*#__PURE__*/_react.default.createElement("p", null, "It can also render a header (like above) that implements the various DisclosureManager control functions."), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        text: "Dismiss",
        onClick: function onClick() {
          disclosureManager.dismiss().catch(function () {
            console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console
          });
        }
      }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        text: "Disclose Again",
        onClick: function onClick() {
          disclosureManager.disclose({
            preferredType: disclosureType,
            size: 'small',
            content: {
              key: "Nested ".concat(name),
              component: /*#__PURE__*/_react.default.createElement(WrappedDisclosureComponent, {
                name: "Nested ".concat(name),
                disclosureType: disclosureType
              })
            }
          });
        }
      }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below."), /*#__PURE__*/_react.default.createElement(_terraFormInput.default, {
        value: this.state.text || '',
        onChange: function onChange(event) {
          _this3.setState({
            text: event.target.value
          });
        }
      }), this.state.text && this.state.text.length ? /*#__PURE__*/_react.default.createElement("p", null, "Component has unsaved changes!") : null));
    }
  }]);
  return DisclosureComponent;
}(_react.default.Component);
DisclosureComponent.propTypes = propTypes;
DisclosureComponent.defaultProps = defaultProps;
var WrappedDisclosureComponent = (0, _terraDisclosureManager.withDisclosureManager)(DisclosureComponent);
var _default = WrappedDisclosureComponent;
exports.default = _default;