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
var _terraFormCheckbox = _interopRequireDefault(require("terra-form-checkbox"));
var _CheckboxField = _interopRequireDefault(require("terra-form-checkbox/lib/CheckboxField"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraSpacer = _interopRequireDefault(require("terra-spacer"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var required = function required(value) {
  return value && value.length > 0 ? undefined : 'Required';
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
        errors = _ref.errors,
        submitFailed = _ref.submitFailed;
      return /*#__PURE__*/_react.default.createElement("form", {
        noValidate: true,
        onSubmit: handleSubmit
      }, /*#__PURE__*/_react.default.createElement(_CheckboxField.default, {
        legend: "What are all the conference tracks you plan on attending?",
        error: errors.tracks,
        isInvalid: submitFailed && errors.tracks !== undefined,
        required: true
      }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        name: "tracks[]",
        type: "checkbox",
        value: "developer",
        validate: required,
        component: function component(_ref2) {
          var input = _ref2.input;
          return /*#__PURE__*/_react.default.createElement(_terraFormCheckbox.default, {
            inputAttrs: _objectSpread({}, input),
            labelText: "Developer",
            id: input.id,
            name: input.name,
            checked: !!input.checked,
            onChange: input.onChange,
            value: input.value
          });
        }
      }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        name: "tracks[]",
        type: "checkbox",
        value: "designer",
        validate: required,
        component: function component(_ref3) {
          var input = _ref3.input;
          return /*#__PURE__*/_react.default.createElement(_terraFormCheckbox.default, {
            inputAttrs: _objectSpread({}, input),
            labelText: "Designer",
            id: input.id,
            name: input.name,
            checked: !!input.checked,
            onChange: input.onChange,
            value: input.value
          });
        }
      }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        name: "tracks[]",
        type: "checkbox",
        value: "soft_skills",
        validate: required,
        component: function component(_ref4) {
          var input = _ref4.input;
          return /*#__PURE__*/_react.default.createElement(_terraFormCheckbox.default, {
            inputAttrs: _objectSpread({}, input),
            labelText: "Soft skills",
            id: input.id,
            name: input.name,
            checked: !!input.checked,
            onChange: input.onChange,
            value: input.value
          });
        }
      })), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
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
        render: this.renderForm
      }), this.state.submittedValues && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Form Submitted Successfully With"), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(this.state.submittedValues, 0, 2))));
    }
  }]);
  return MainEntry;
}(_react.default.Component);
exports.default = MainEntry;