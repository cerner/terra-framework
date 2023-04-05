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
var _terraCollapsibleMenuView = _interopRequireDefault(require("terra-collapsible-menu-view"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _DisclosureComponentCommonTestModule = _interopRequireDefault(require("./DisclosureComponentCommon.test.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_DisclosureComponentCommonTestModule.default);
var HEIGHT_KEYS = Object.keys(_terraDisclosureManager.availableDisclosureHeights);
var WIDTH_KEYS = Object.keys(_terraDisclosureManager.availableDisclosureWidths);
var DisclosureComponent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DisclosureComponent, _React$Component);
  var _super = _createSuper(DisclosureComponent);
  function DisclosureComponent(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DisclosureComponent);
    _this = _super.call(this, props);
    _this.disclose = _this.disclose.bind((0, _assertThisInitialized2.default)(_this));
    _this.dismiss = _this.dismiss.bind((0, _assertThisInitialized2.default)(_this));
    _this.closeDisclosure = _this.closeDisclosure.bind((0, _assertThisInitialized2.default)(_this));
    _this.goBack = _this.goBack.bind((0, _assertThisInitialized2.default)(_this));
    _this.maximize = _this.maximize.bind((0, _assertThisInitialized2.default)(_this));
    _this.minimize = _this.minimize.bind((0, _assertThisInitialized2.default)(_this));
    _this.generateOptions = _this.generateOptions.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSelectChange = _this.handleSelectChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderFormButton = _this.renderFormButton.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderForm = _this.renderForm.bind((0, _assertThisInitialized2.default)(_this));
    _this.getId = _this.getId.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      id: 'disclosureDimensions',
      disclosureHeight: HEIGHT_KEYS[0],
      disclosureWidth: WIDTH_KEYS[0]
    };
    return _this;
  }
  (0, _createClass2.default)(DisclosureComponent, [{
    key: "handleSelectChange",
    value: function handleSelectChange(event) {
      this.setState((0, _defineProperty2.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: "getId",
    value: function getId(name) {
      return "".concat(this.state.id, "-").concat(name, "-").concat(this.props.nestedIndex);
    }
  }, {
    key: "generateOptions",
    value: function generateOptions(values, name) {
      var _this2 = this;
      return values.map(function (currentValue, index) {
        var keyValue = index;
        return /*#__PURE__*/_react.default.createElement("option", {
          id: "".concat(name, "-").concat(currentValue, "-").concat(_this2.props.nestedIndex),
          key: keyValue,
          value: currentValue
        }, currentValue);
      });
    }
  }, {
    key: "disclose",
    value: function disclose(size, dimensions) {
      var _this3 = this;
      var _this$props = this.props,
        disclosureType = _this$props.disclosureType,
        nestedIndex = _this$props.nestedIndex,
        renderHeaderAdapter = _this$props.renderHeaderAdapter;
      var newIndex = nestedIndex + 1;
      return function () {
        _this3.props.disclosureManager.disclose({
          preferredType: disclosureType,
          size: size,
          dimensions: dimensions,
          content: {
            key: "DemoContainer-".concat(newIndex),
            component: /*#__PURE__*/_react.default.createElement(WrappedDisclosureComponent, {
              identifier: "DemoContainer-".concat(newIndex),
              nestedIndex: newIndex,
              renderHeaderAdapter: renderHeaderAdapter
            })
          }
        });
      };
    }
  }, {
    key: "dismiss",
    value: function dismiss() {
      this.props.disclosureManager.dismiss();
    }
  }, {
    key: "closeDisclosure",
    value: function closeDisclosure() {
      this.props.disclosureManager.closeDisclosure();
    }
  }, {
    key: "goBack",
    value: function goBack() {
      this.props.disclosureManager.goBack();
    }
  }, {
    key: "maximize",
    value: function maximize() {
      this.props.disclosureManager.maximize();
    }
  }, {
    key: "minimize",
    value: function minimize() {
      this.props.disclosureManager.minimize();
    }
  }, {
    key: "renderFormButton",
    value: function renderFormButton() {
      var name = "Disclose (".concat(this.state.disclosureHeight, ") x (").concat(this.state.disclosureWidth, ")");
      return /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "disclose-dimension-".concat(this.props.nestedIndex),
        onClick: this.disclose(undefined, {
          height: this.state.disclosureHeight,
          width: this.state.disclosureWidth
        })
      }, name);
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: this.getId('height')
      }, "Pop Content Height"), /*#__PURE__*/_react.default.createElement("select", {
        id: this.getId('height'),
        name: "disclosureHeight",
        value: this.state.disclosureHeight,
        onChange: this.handleSelectChange
      }, this.generateOptions(HEIGHT_KEYS, 'height')), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: this.getId('width')
      }, "Pop Content Width"), /*#__PURE__*/_react.default.createElement("select", {
        id: this.getId('width'),
        name: "disclosureWidth",
        value: this.state.disclosureWidth,
        onChange: this.handleSelectChange
      }, this.generateOptions(WIDTH_KEYS, 'width')), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        disclosureManager = _this$props2.disclosureManager,
        identifier = _this$props2.identifier,
        renderHeaderAdapter = _this$props2.renderHeaderAdapter;
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        id: identifier,
        className: "nested-component",
        fill: true,
        header: /*#__PURE__*/_react.default.createElement("h2", {
          className: cx('header')
        }, "Content Component")
      }, renderHeaderAdapter ? /*#__PURE__*/_react.default.createElement(_terraDisclosureManager.DisclosureManagerHeaderAdapter, {
        title: "Disclosure - ".concat(identifier),
        collapsibleMenuView: /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default, null, /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
          text: "Header Button 1",
          key: "button_1"
        }), /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
          text: "Header Button 2",
          key: "button_2"
        }))
      }) : undefined, /*#__PURE__*/_react.default.createElement("p", null, "id:", ' ', identifier), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "disclose",
        onClick: this.disclose()
      }, "Disclose"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "disclose-tiny",
        onClick: this.disclose('tiny')
      }, "Disclose Tiny"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "disclose-small",
        onClick: this.disclose('small')
      }, "Disclose Small"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "disclose-medium",
        onClick: this.disclose('medium')
      }, "Disclose Medium"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "disclose-large",
        onClick: this.disclose('large')
      }, "Disclose Large"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "disclose-huge",
        onClick: this.disclose('huge')
      }, "Disclose Huge"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "disclose-fullscreen",
        onClick: this.disclose('fullscreen')
      }, "Disclose Fullscreen"), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-form')
      }, this.renderForm(), this.renderFormButton()), disclosureManager && disclosureManager.dismiss ? /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "dismiss",
        onClick: this.dismiss
      }, "Dismiss") : null, disclosureManager && disclosureManager.closeDisclosure ? /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "close-disclosure",
        onClick: this.closeDisclosure
      }, "Close Disclosure") : null, disclosureManager && disclosureManager.goBack ? /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "go-back",
        onClick: this.goBack
      }, "Go Back") : null, disclosureManager && disclosureManager.maximize ? /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "maximize",
        onClick: this.maximize
      }, "Maximize") : null, disclosureManager && disclosureManager.minimize ? /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "minimize",
        onClick: this.minimize
      }, "Minimize") : null);
    }
  }]);
  return DisclosureComponent;
}(_react.default.Component);
DisclosureComponent.propTypes = {
  disclosureManager: _terraDisclosureManager.disclosureManagerShape,
  identifier: _propTypes.default.string,
  disclosureType: _propTypes.default.string,
  nestedIndex: _propTypes.default.number,
  renderHeaderAdapter: _propTypes.default.bool
};
DisclosureComponent.defaultProps = {
  nestedIndex: 0
};
var WrappedDisclosureComponent = (0, _terraDisclosureManager.withDisclosureManager)(DisclosureComponent);
var _default = WrappedDisclosureComponent;
exports.default = _default;