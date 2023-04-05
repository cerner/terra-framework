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
var _reactFinalForm = require("react-final-form");
var _InputField = _interopRequireDefault(require("terra-form-input/lib/InputField"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraSpacer = _interopRequireDefault(require("terra-spacer"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var numericOnly = function numericOnly(value) {
  if (!value) return value;
  var onlyNums = value.replace(/[^\d]/g, '');
  return onlyNums;
};
var enforcePhoneNumber = function enforcePhoneNumber(value) {
  if (!value) return value;
  var onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) return onlyNums;
  if (onlyNums.length <= 7) return "(".concat(onlyNums.slice(0, 3), ") ").concat(onlyNums.slice(3));
  return "(".concat(onlyNums.slice(0, 3), ") ").concat(onlyNums.slice(3, 6), "-").concat(onlyNums.slice(6, 10));
};
var required = function required(value) {
  return value ? undefined : 'Required';
};
var MainEntry = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MainEntry, _React$Component);
  var _super = _createSuper(MainEntry);
  function MainEntry(props) {
    var _this;
    (0, _classCallCheck2.default)(this, MainEntry);
    _this = _super.call(this, props);
    _this.state = {};
    _this.submitForm = _this.submitForm.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(MainEntry, [{
    key: "submitForm",
    value: function submitForm(values) {
      this.setState({
        submittedValues: values
      });
    }
  }, {
    key: "renderForm",
    value: function renderForm(_ref) {
      var handleSubmit = _ref.handleSubmit,
        pristine = _ref.pristine,
        invalid = _ref.invalid;
      return /*#__PURE__*/_react.default.createElement("form", {
        noValidate: true,
        onSubmit: handleSubmit
      }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        name: "vacation_days",
        validate: required,
        parse: numericOnly
      }, function (_ref2) {
        var input = _ref2.input,
          meta = _ref2.meta;
        return /*#__PURE__*/_react.default.createElement(_InputField.default, {
          inputId: "vacation-days",
          label: "Vacation Days Remaining",
          error: meta.error,
          isInvalid: meta.submitFailed && !meta.valid,
          inputAttrs: input,
          onChange: function onChange(e) {
            input.onChange(e.target.value);
          },
          value: input.value,
          required: true
        });
      }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        name: "phone_number",
        validate: required,
        parse: enforcePhoneNumber
      }, function (_ref3) {
        var input = _ref3.input,
          meta = _ref3.meta;
        return /*#__PURE__*/_react.default.createElement(_InputField.default, {
          inputId: "phone-number",
          label: "Phone Number",
          error: meta.error,
          isInvalid: meta.submitFailed && !meta.valid,
          inputAttrs: input,
          onChange: function onChange(e) {
            input.onChange(e.target.value);
          },
          value: input.value,
          required: true
        });
      }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        text: "Submit",
        isDisabled: invalid || pristine,
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
        render: this.renderForm
      }), this.state.submittedValues && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Form Submitted Successfully With"), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(this.state.submittedValues, 0, 2))));
    }
  }]);
  return MainEntry;
}(_react.default.Component);
exports.default = MainEntry;