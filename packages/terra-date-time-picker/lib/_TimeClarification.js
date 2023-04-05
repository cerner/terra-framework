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
var _terraAbstractModal = _interopRequireDefault(require("terra-abstract-modal"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _reactIntl = require("react-intl");
var _DateTimeUtils = _interopRequireDefault(require("./DateTimeUtils"));
var _TimeClarificationModule = _interopRequireDefault(require("./_TimeClarification.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_TimeClarificationModule.default);
var propTypes = {
  /**
   * An ISO 8601 date time with the ambiguous hour.
   */
  ambiguousDateTime: _propTypes.default.string,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired,
  /**
   * If set to true, the modal will rendered as opened
   */
  isOpen: _propTypes.default.bool.isRequired,
  /**
   * If set to true, the button to open the modal will be hidden.
   */
  isOffsetButtonHidden: _propTypes.default.bool.isRequired,
  /**
   * A callback function triggered when the timezone offset button loses focus.
   */
  onBlur: _propTypes.default.func,
  /**
   * Callback function indicating the before time change option was selected.
   */
  onDaylightSavingButtonClick: _propTypes.default.func.isRequired,
  /**
   * A callback function triggered when the timezone offset button gains focus.
   */
  onFocus: _propTypes.default.func,
  /**
   * Callback function indicating the after time change option was selected.
   */
  onStandardTimeButtonClick: _propTypes.default.func.isRequired,
  /**
   * Callback function indicating the DST offset button was selected.
   */
  onOffsetButtonClick: _propTypes.default.func.isRequired,
  /**
   * Callback function indicating the modal is requesting to close.
   */
  onRequestClose: _propTypes.default.func.isRequired,
  /**
   * Whether the clarification is disabled.
   */
  disabled: _propTypes.default.bool,
  /**
   * Timezone value to indicate in which timezone the date-time component is rendered.
   * The value provided should be a valid [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) string, else will default to browser/local timezone.
   */
  initialTimeZone: _propTypes.default.string
};
var defaultProps = {
  disabled: false
};
var TimeClarification = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TimeClarification, _React$Component);
  var _super = _createSuper(TimeClarification);
  function TimeClarification(props) {
    var _this;
    (0, _classCallCheck2.default)(this, TimeClarification);
    _this = _super.call(this, props);
    _this.state = {
      offsetDisplay: '',
      offsetLongDisplay: ''
    };
    _this.handleDaylightSavingButtonClick = _this.handleDaylightSavingButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleStandardTimeButtonClick = _this.handleStandardTimeButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(TimeClarification, [{
    key: "handleDaylightSavingButtonClick",
    value: function handleDaylightSavingButtonClick(event) {
      this.setState({
        offsetDisplay: _DateTimeUtils.default.getDaylightSavingTZDisplay(this.props.ambiguousDateTime, this.props.initialTimeZone),
        offsetLongDisplay: _DateTimeUtils.default.getDaylightSavingExpandedTZDisplay(this.props.ambiguousDateTime, this.props.initialTimeZone)
      });
      if (this.props.onDaylightSavingButtonClick) {
        this.props.onDaylightSavingButtonClick(event);
      }
    }
  }, {
    key: "handleStandardTimeButtonClick",
    value: function handleStandardTimeButtonClick(event) {
      this.setState({
        offsetDisplay: _DateTimeUtils.default.getStandardTZDisplay(this.props.ambiguousDateTime, this.props.initialTimeZone),
        offsetLongDisplay: _DateTimeUtils.default.getStandardExpandedTZDisplay(this.props.ambiguousDateTime, this.props.initialTimeZone)
      });
      if (this.props.onStandardTimeButtonClick) {
        this.props.onStandardTimeButtonClick(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.isOffsetButtonHidden) {
        this.state.offsetDisplay = '';
      }
      var offsetButtonClassNames = cx(['button-offset', {
        'button-offset-hidden': this.props.isOffsetButtonHidden || !this.state.offsetDisplay
      }]);
      var intl = this.props.intl;
      var title = intl.formatMessage({
        id: 'Terra.dateTimePicker.timeClarification.title'
      });
      var message = intl.formatMessage({
        id: 'Terra.dateTimePicker.timeClarification.message'
      });
      var daylightSavingButtonLabel = intl.formatMessage({
        id: 'Terra.dateTimePicker.timeClarification.button.daylightSaving'
      });
      var standardTimeButtonLabel = intl.formatMessage({
        id: 'Terra.dateTimePicker.timeClarification.button.standardTime'
      });
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_terraAbstractModal.default, {
        classNameModal: cx('time-clarification'),
        ariaLabel: "Time Clarification",
        isOpen: this.props.isOpen,
        onRequestClose: this.props.onRequestClose,
        closeOnEsc: false,
        closeOnOutsideClick: false,
        zIndex: "9000"
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("header", {
        className: cx('header')
      }, /*#__PURE__*/_react.default.createElement("h1", {
        className: cx('title')
      }, title)), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('body')
      }, /*#__PURE__*/_react.default.createElement("p", null, message)), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('buttons')
      }, /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        text: daylightSavingButtonLabel,
        onClick: this.handleDaylightSavingButtonClick,
        variant: _terraButton.default.Opts.Variants.EMPHASIS,
        className: cx('button-daylight')
      }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        text: standardTimeButtonLabel,
        onClick: this.handleStandardTimeButtonClick,
        variant: _terraButton.default.Opts.Variants.EMPHASIS,
        className: cx('button-standard')
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('offset-button-container')
      }, /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        title: this.state.offsetLongDisplay,
        "aria-label": this.state.offsetLongDisplay,
        className: offsetButtonClassNames,
        onBlur: this.props.onBlur,
        onFocus: this.props.onFocus,
        onClick: this.props.onOffsetButtonClick,
        text: this.state.offsetDisplay,
        isCompact: true,
        isDisabled: this.props.disabled
      })));
    }
  }]);
  return TimeClarification;
}(_react.default.Component);
TimeClarification.propTypes = propTypes;
TimeClarification.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(TimeClarification);
exports.default = _default;