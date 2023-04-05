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
var _DateInputField = _interopRequireDefault(require("terra-date-input/lib/DateInputField"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraSpacer = _interopRequireDefault(require("terra-spacer"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Ensures the passed in value is an accepted date value
 * @param {string} value The date to validate
 */
var isAcceptedDate = function isAcceptedDate(value) {
  if (value && value.length === 10) {
    var splitValue = value.split('-');
    var formattedDay = Number(splitValue[2]);
    var formattedMonth = Number(splitValue[1]) - 1; // Account for 0-indexed month
    var formattedYear = Number(splitValue[0]);
    var date = new Date(formattedYear, formattedMonth, formattedDay);
    var yearMatches = date.getUTCFullYear() === formattedYear;
    var monthMatches = date.getUTCMonth() === formattedMonth;
    var dayMatches = date.getUTCDate() === formattedDay;
    return yearMatches && monthMatches && dayMatches;
  }
  return false;
};
var validateDate = function validateDate(value) {
  if (!value) {
    return 'Required';
  }
  if (!isAcceptedDate(value)) {
    return 'Date is Invalid';
  }
  var splitValue = value.split('-');
  if (splitValue[0] < 2021) {
    return 'Year must be after the year 2020';
  }
  return undefined;
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
      var handleSubmit = _ref.handleSubmit;
      return /*#__PURE__*/_react.default.createElement("form", {
        noValidate: true,
        onSubmit: handleSubmit
      }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        name: "user_date",
        validate: validateDate
      }, function (_ref2) {
        var input = _ref2.input,
          meta = _ref2.meta;
        return /*#__PURE__*/_react.default.createElement(_DateInputField.default, {
          name: "user_date",
          legend: "Enter your birthday",
          value: input.value,
          onChange: function onChange(event, date) {
            input.onChange(date);
          },
          error: meta.error,
          isInvalid: meta.submitFailed && meta.error !== undefined,
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
        render: this.renderForm
      }), this.state.submittedValues && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Form Submitted Successfully With"), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(this.state.submittedValues, 0, 2))));
    }
  }]);
  return MainEntry;
}(_react.default.Component);
exports.default = MainEntry;