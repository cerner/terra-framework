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
var _reactFinalForm = require("react-final-form");
var _InputField = _interopRequireDefault(require("terra-form-input/lib/InputField"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraSpacer = _interopRequireDefault(require("terra-spacer"));
var _FormValidationUtil = _interopRequireDefault(require("../../../FormValidationUtil"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var validateNumber = function validateNumber(value) {
  if (!_FormValidationUtil.default.isOverMinValue(value, 10)) {
    return 'Value should not be less than 10.';
  }
  if (!_FormValidationUtil.default.isUnderMaxValue(value, 100)) {
    return 'Value should not be over 100.';
  }
  if (!_FormValidationUtil.default.isPrecise(value, 3)) {
    return 'Value has more than 3 decimal points';
  }
  return undefined;
};
var Example = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Example, _React$Component);
  var _super = _createSuper(Example);
  function Example(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Example);
    _this = _super.call(this, props);
    _this.state = {};
    _this.submitForm = _this.submitForm.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(Example, [{
    key: "submitForm",
    value: function submitForm(values) {
      this.setState({
        submittedValues: values
      });
    }
  }, {
    key: "renderForm",
    value: function renderForm(_ref) {
      var handleSubmit = _ref.handleSubmit;
      return /*#__PURE__*/_react.default.createElement("form", {
        noValidate: true,
        onSubmit: handleSubmit
      }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        name: "numExample",
        validate: validateNumber
      }, function (_ref2) {
        var input = _ref2.input,
          meta = _ref2.meta;
        return /*#__PURE__*/_react.default.createElement(_InputField.default, {
          inputId: "numExample",
          label: "Numeric Example",
          error: meta.error,
          isInvalid: meta.error !== undefined,
          inputAttrs: _objectSpread({
            type: 'number'
          }, input),
          onChange: function onChange(e) {
            input.onChange(e.target.value);
          },
          value: input.value,
          required: true
        });
      }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        text: "Submit",
        type: _terraButton.default.Opts.Types.SUBMIT
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_terraSpacer.default, {
        marginBottom: "small"
      }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {
        onSubmit: this.submitForm,
        render: this.renderForm,
        initialValues: {
          numExample: ''
        },
        validate: function validate(values) {
          var errors = {};
          if (!values.numExample) {
            errors.numExample = 'Required';
          }
          return errors;
        }
      }), this.state.submittedValues && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Form Submitted Successfully With"), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(this.state.submittedValues, 0, 2))));
    }
  }]);
  return Example;
}(_react.default.Component);
exports.default = Example;