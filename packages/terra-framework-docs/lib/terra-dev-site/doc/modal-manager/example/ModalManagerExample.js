"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));
var _terraCollapsibleMenuView = _interopRequireDefault(require("terra-collapsible-menu-view"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _terraModalManager = _interopRequireDefault(require("terra-modal-manager"));
var _exampleStylesModule = _interopRequireDefault(require("./example-styles.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_exampleStylesModule.default);
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
      var disclosureManager = this.context;
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
        name = _this$props.name,
        disclosureType = _this$props.disclosureType;
      var disclosureManager = this.context;
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        fill: true
      }, /*#__PURE__*/_react.default.createElement(_terraDisclosureManager.DisclosureManagerHeaderAdapter, {
        title: name,
        collapsibleMenuView: /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default, null, /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
          text: "Button 1",
          key: "button_1",
          onClick: function onClick() {
            _this3.setState({
              selectedHeaderAction: 'Button 1'
            });
          }
        }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
          text: "Button 2",
          key: "button_2",
          onClick: function onClick() {
            _this3.setState({
              selectedHeaderAction: 'Button 2'
            });
          }
        }))
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement("h3", null, name), /*#__PURE__*/_react.default.createElement("p", null, "The disclosed component can disclose content within the same modal."), /*#__PURE__*/_react.default.createElement("p", null, "It can also render a header (like above) that implements the various DisclosureManager control functions."), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          disclosureManager.dismiss().catch(function () {
            console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console
          });
        }
      }, "Dismiss"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          disclosureManager.disclose({
            preferredType: disclosureType,
            size: 'small',
            content: {
              key: "Nested ".concat(name),
              component: /*#__PURE__*/_react.default.createElement(DisclosureComponent, {
                name: "Nested ".concat(name),
                disclosureType: disclosureType
              })
            }
          });
        }
      }, "Disclose Again"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below."), /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        onChange: function onChange(event) {
          _this3.setState({
            text: event.target.value
          });
        },
        value: this.state.text || ''
      }), this.state.text && this.state.text.length ? /*#__PURE__*/_react.default.createElement("p", null, "Component has unsaved changes!") : null, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "Selected Header Action:", ' ', /*#__PURE__*/_react.default.createElement("b", null, this.state.selectedHeaderAction))));
    }
  }]);
  return DisclosureComponent;
}(_react.default.Component);
DisclosureComponent.contextType = _terraDisclosureManager.DisclosureManagerContext;
DisclosureComponent.propTypes = {
  name: _propTypes.default.string,
  disclosureType: _propTypes.default.string
};
DisclosureComponent.defaultProps = {
  name: 'Disclosure Component'
};
var HEIGHT_KEYS = Object.keys(_terraDisclosureManager.availableDisclosureHeights);
var WIDTH_KEYS = Object.keys(_terraDisclosureManager.availableDisclosureWidths);
var generateDimensionOptions = function generateDimensionOptions(values) {
  return values.map(function (currentValue, index) {
    var keyValue = index;
    return /*#__PURE__*/_react.default.createElement("option", {
      key: keyValue,
      value: currentValue
    }, currentValue);
  });
};
var ContentComponent = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2.default)(ContentComponent, _React$Component2);
  var _super2 = _createSuper(ContentComponent);
  function ContentComponent(props) {
    var _this4;
    (0, _classCallCheck2.default)(this, ContentComponent);
    _this4 = _super2.call(this, props);
    _this4.renderButton = _this4.renderButton.bind((0, _assertThisInitialized2.default)(_this4));
    _this4.handleSelectChange = _this4.handleSelectChange.bind((0, _assertThisInitialized2.default)(_this4));
    _this4.getId = _this4.getId.bind((0, _assertThisInitialized2.default)(_this4));
    _this4.state = {
      id: 'dimensions',
      disclosureHeight: HEIGHT_KEYS[0],
      disclosureWidth: WIDTH_KEYS[0]
    };
    return _this4;
  }
  (0, _createClass2.default)(ContentComponent, [{
    key: "handleSelectChange",
    value: function handleSelectChange(event) {
      this.setState((0, _defineProperty2.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: "getId",
    value: function getId(name) {
      return name + this.state.id;
    }
  }, {
    key: "renderButton",
    value: function renderButton(size) {
      var disclosureType = this.props.disclosureType;
      var disclosureManager = this.context;
      return /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          disclosureManager.disclose({
            preferredType: disclosureType,
            size: size,
            content: {
              key: "Content-Disclosure-".concat(size),
              component: /*#__PURE__*/_react.default.createElement(DisclosureComponent, {
                name: "Disclosure Component",
                disclosureType: disclosureType
              })
            }
          });
        }
      }, "Disclose (".concat(size, ")"));
    }
  }, {
    key: "renderFormButton",
    value: function renderFormButton() {
      var _this5 = this;
      var disclosureType = this.props.disclosureType;
      var disclosureManager = this.context;
      var name = "Disclose (".concat(this.state.disclosureHeight, ") x (").concat(this.state.disclosureWidth, ")");
      return /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          disclosureManager.disclose({
            preferredType: disclosureType,
            dimensions: {
              height: _this5.state.disclosureHeight,
              width: _this5.state.disclosureWidth
            },
            content: {
              key: 'Content-Disclosure-Dimensions',
              component: /*#__PURE__*/_react.default.createElement(DisclosureComponent, {
                name: "Disclosure Component",
                disclosureType: disclosureType
              })
            }
          });
        }
      }, name);
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: this.getId('disclosureHeight')
      }, "Pop Content Height"), /*#__PURE__*/_react.default.createElement("select", {
        id: this.getId('disclosureHeight'),
        name: "disclosureHeight",
        value: this.state.disclosureHeight,
        onChange: this.handleSelectChange
      }, generateDimensionOptions(HEIGHT_KEYS)), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: this.getId('disclosureWidth')
      }, "Pop Content Width"), /*#__PURE__*/_react.default.createElement("select", {
        id: this.getId('disclosureWidth'),
        name: "disclosureWidth",
        value: this.state.disclosureWidth,
        onChange: this.handleSelectChange
      }, generateDimensionOptions(WIDTH_KEYS)), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        header: /*#__PURE__*/_react.default.createElement(_terraActionHeader.default, {
          title: "ModalManager Child Component"
        })
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, this.renderButton('default'), this.renderButton('tiny'), this.renderButton('small'), this.renderButton('medium'), this.renderButton('large'), this.renderButton('huge'), this.renderButton('fullscreen'), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "The child components can disclose content in the modal at various sizes.")), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, this.renderForm(), this.renderFormButton()));
    }
  }]);
  return ContentComponent;
}(_react.default.Component);
ContentComponent.contextType = _terraDisclosureManager.DisclosureManagerContext;
ContentComponent.propTypes = {
  disclosureType: _propTypes.default.string
};
var ModalManagerExample = function ModalManagerExample(_ref) {
  var showDisclosureAccessory = _ref.showDisclosureAccessory;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('example-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraModalManager.default, {
    disclosureAccessory: showDisclosureAccessory ? /*#__PURE__*/_react.default.createElement("div", {
      className: cx('disclosure-accessory')
    }, "Disclosure Accessory") : undefined
  }, /*#__PURE__*/_react.default.createElement(ContentComponent, {
    disclosureType: "modal"
  })));
};
ModalManagerExample.propTypes = {
  showDisclosureAccessory: _propTypes.default.bool
};
var _default = ModalManagerExample;
/* eslint-enable max-classes-per-file */
exports.default = _default;