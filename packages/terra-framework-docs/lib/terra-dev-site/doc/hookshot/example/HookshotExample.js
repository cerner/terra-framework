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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _InputField = _interopRequireDefault(require("terra-form-input/lib/InputField"));
var _terraHookshot = _interopRequireDefault(require("terra-hookshot"));
var _HookshotDocCommonModule = _interopRequireDefault(require("./HookshotDocCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_HookshotDocCommonModule.default);
var ATTACHMENT_POSITIONS = ['top start', 'top center', 'top end', 'middle start', 'middle center', 'middle end', 'bottom start', 'bottom center', 'bottom end'];
var generateOptions = function generateOptions(values) {
  return values.map(function (currentValue, index) {
    var keyValue = index;
    return /*#__PURE__*/_react.default.createElement("option", {
      key: keyValue,
      value: currentValue
    }, currentValue);
  });
};
var attachmentValues = function attachmentValues(attachment) {
  if (attachment === 'middle start') {
    return {
      vertical: 'middle',
      horizontal: 'start'
    };
  }
  if (attachment === 'middle end') {
    return {
      vertical: 'middle',
      horizontal: 'end'
    };
  }
  if (attachment === 'middle center') {
    return {
      vertical: 'middle',
      horizontal: 'center'
    };
  }
  if (attachment === 'top start') {
    return {
      vertical: 'top',
      horizontal: 'start'
    };
  }
  if (attachment === 'top end') {
    return {
      vertical: 'top',
      horizontal: 'end'
    };
  }
  if (attachment === 'top center') {
    return {
      vertical: 'top',
      horizontal: 'center'
    };
  }
  if (attachment === 'bottom start') {
    return {
      vertical: 'bottom',
      horizontal: 'start'
    };
  }
  if (attachment === 'bottom end') {
    return {
      vertical: 'bottom',
      horizontal: 'end'
    };
  }
  return {
    vertical: 'bottom',
    horizontal: 'center'
  };
};
var getId = function getId(name) {
  return "".concat(name, "Example");
};
var HookshotStandard = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(HookshotStandard, _React$Component);
  var _super = _createSuper(HookshotStandard);
  function HookshotStandard(props) {
    var _this;
    (0, _classCallCheck2.default)(this, HookshotStandard);
    _this = _super.call(this, props);
    _this.handleButtonClick = _this.handleButtonClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRequestClose = _this.handleRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleAttachmentBehaviorChange = _this.handleAttachmentBehaviorChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleContentAttachmentChange = _this.handleContentAttachmentChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleTargetAttachmentChange = _this.handleTargetAttachmentChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleInputChange = _this.handleInputChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      isOpen: false,
      hookshotContentAttachment: ATTACHMENT_POSITIONS[1],
      hookshotTargetAttachment: ATTACHMENT_POSITIONS[7],
      hookshotAttachmentBehavior: _terraHookshot.default.attachmentBehaviors[0],
      hookshotAttachmentMargin: 0
    };
    return _this;
  }
  (0, _createClass2.default)(HookshotStandard, [{
    key: "handleButtonClick",
    value: function handleButtonClick() {
      this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    }
  }, {
    key: "handleRequestClose",
    value: function handleRequestClose() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "handleAttachmentBehaviorChange",
    value: function handleAttachmentBehaviorChange(event) {
      this.setState({
        hookshotAttachmentBehavior: event.target.value
      });
    }
  }, {
    key: "handleContentAttachmentChange",
    value: function handleContentAttachmentChange(event) {
      this.setState({
        hookshotContentAttachment: event.target.value
      });
    }
  }, {
    key: "handleTargetAttachmentChange",
    value: function handleTargetAttachmentChange(event) {
      this.setState({
        hookshotTargetAttachment: event.target.value
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      if (event.target.value !== '') {
        this.setState((0, _defineProperty2.default)({}, event.target.name, Number.parseFloat(event.target.value)));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var hookshotContent = /*#__PURE__*/_react.default.createElement(_terraHookshot.default.Content, {
        onEsc: this.handleRequestClose,
        onOutsideClick: this.handleRequestClose,
        onResize: this.handleRequestClose
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, "Hookshot"));
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('heading-wrapper')
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: getId('hookshotAttachmentBehavior'),
        className: cx('label')
      }, "Attachment Behavior")), /*#__PURE__*/_react.default.createElement("select", {
        id: getId('hookshotAttachmentBehavior'),
        name: "hookshotAttachmentBehavior",
        value: this.state.hookshotAttachmentBehavior,
        onChange: this.handleAttachmentBehaviorChange,
        className: cx('select-wrapper')
      }, generateOptions(_terraHookshot.default.attachmentBehaviors)), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_InputField.default, {
        label: "Attachment Margin in Px",
        inputId: getId('hookshotAttachmentMargin'),
        inputAttrs: {
          name: 'hookshotAttachmentMargin',
          type: 'number'
        },
        defaultValue: this.state.hookshotAttachmentMargin,
        className: cx('input-wrapper'),
        onChange: this.handleInputChange
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('heading-wrapper')
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: getId('hookshotContentAttachment'),
        className: cx('label')
      }, "Content Attachment")), /*#__PURE__*/_react.default.createElement("select", {
        id: getId('hookshotContentAttachment'),
        name: "hookshotContentAttachment",
        value: this.state.hookshotContentAttachment,
        onChange: this.handleContentAttachmentChange,
        className: cx('select-wrapper')
      }, generateOptions(ATTACHMENT_POSITIONS)), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('heading-wrapper')
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: getId('hookshotTargetAttachment'),
        className: cx('label')
      }, "Target Attachment")), /*#__PURE__*/_react.default.createElement("select", {
        id: getId('hookshotTargetAttachment'),
        name: "hookshotTargetAttachment",
        value: this.state.hookshotTargetAttachment,
        onChange: this.handleTargetAttachmentChange,
        className: cx('select-wrapper')
      }, generateOptions(ATTACHMENT_POSITIONS)), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_terraHookshot.default, {
        attachmentBehavior: this.state.hookshotAttachmentBehavior,
        attachmentMargin: this.state.hookshotAttachmentMargin,
        contentAttachment: attachmentValues(this.state.hookshotContentAttachment),
        isEnabled: true,
        isOpen: this.state.isOpen,
        targetAttachment: attachmentValues(this.state.hookshotTargetAttachment),
        targetRef: function targetRef() {
          return document.getElementById('hookshot-standard-button');
        }
      }, hookshotContent), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        id: "hookshot-standard-button",
        text: "Hookshot Example",
        onClick: this.handleButtonClick
      }));
    }
  }]);
  return HookshotStandard;
}(_react.default.Component);
var _default = HookshotStandard;
exports.default = _default;