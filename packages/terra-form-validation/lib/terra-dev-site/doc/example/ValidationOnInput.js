"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _reactFinalForm = require("react-final-form");
var _InputField = _interopRequireDefault(require("terra-form-input/lib/InputField"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraSpacer = _interopRequireDefault(require("terra-spacer"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var validateUniqueUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(name) {
    var response;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          response = new Promise(function (resolve) {
            if (name.length < 3) {
              return resolve('Not long enough');
            }
            if (name === 'TerraUser') {
              return resolve('Name is Unavailable');
            }
            return resolve('');
          });
          _context.next = 3;
          return response;
        case 3:
          return _context.abrupt("return", response);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function validateUniqueUser(_x) {
    return _ref.apply(this, arguments);
  };
}();
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
    value: function renderForm(_ref2) {
      var handleSubmit = _ref2.handleSubmit;
      return /*#__PURE__*/_react.default.createElement("form", {
        noValidate: true,
        onSubmit: handleSubmit
      }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        name: "description"
      }, function (_ref3) {
        var input = _ref3.input,
          meta = _ref3.meta;
        return /*#__PURE__*/_react.default.createElement(_InputField.default, {
          inputId: "profile-description",
          label: "Description",
          error: meta.error,
          isInvalid: !meta.valid,
          inputAttrs: _objectSpread({}, input),
          onChange: function onChange(e) {
            input.onChange(e.target.value);
          },
          value: input.value,
          required: true
        });
      }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        name: "user_name",
        validate: validateUniqueUser
      }, function (_ref4) {
        var input = _ref4.input,
          meta = _ref4.meta;
        return /*#__PURE__*/_react.default.createElement(_InputField.default, {
          inputId: "user-name",
          label: "User Name, requires at least 3 characters",
          error: meta.error,
          isInvalid: meta.error === 'Name is Unavailable',
          isIncomplete: meta.error === 'Not long enough' || meta.error === 'Required',
          inputAttrs: input,
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
          description: ''
        },
        validate: function validate(values) {
          var errors = {};
          if (!values.description) {
            errors.description = 'Required';
          }
          if (!values.user_name) {
            errors.user_name = 'Required';
          }
          return errors;
        }
      }), this.state.submittedValues && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Form Submitted Successfully With"), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(this.state.submittedValues, 0, 2))));
    }
  }]);
  return MainEntry;
}(_react.default.Component);
exports.default = MainEntry;