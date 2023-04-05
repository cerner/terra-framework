"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var _react = _interopRequireWildcard(require("react"));
var _terraAbstractModal = _interopRequireDefault(require("terra-abstract-modal"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ExampleAbstractSizeModule = _interopRequireDefault(require("./ExampleAbstractSize.module.scss"));
var _AbstractModalDocCommonModule = _interopRequireDefault(require("./AbstractModalDocCommon.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_AbstractModalDocCommonModule.default);

/* eslint-disable-next-line react/prop-types */
var AlertDialogContent = function AlertDialogContent(_ref) {
  var handleCloseModal = _ref.handleCloseModal;
  var confirmBtn = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    confirmBtn.current.focus();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "alert-dialog-content",
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Alert Dialog Modal"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "The abstract modal can be used to create an alert dialog modal. You can use the role,", ' ', /*#__PURE__*/_react.default.createElement("code", null, "alertdialog"), ' ', ", to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation."), /*#__PURE__*/_react.default.createElement("button", {
    ref: confirmBtn,
    type: "button",
    onClick: handleCloseModal
  }, "Confirm action"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: handleCloseModal
  }, "Close Modal"));
};

/* VoiceOver will not read the content of the modal dialog if the role attribute
 is set to `alertdialog` and ariaLabel is defined */
var ariaLabel = '';
var AbstractModalAlertDialog = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AbstractModalAlertDialog, _React$Component);
  var _super = _createSuper(AbstractModalAlertDialog);
  function AbstractModalAlertDialog() {
    var _this;
    (0, _classCallCheck2.default)(this, AbstractModalAlertDialog);
    _this = _super.call(this);
    _this.state = {
      isOpen: false
    };
    _this.handleOpenModal = _this.handleOpenModal.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleCloseModal = _this.handleCloseModal.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(AbstractModalAlertDialog, [{
    key: "handleOpenModal",
    value: function handleOpenModal() {
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: "handleCloseModal",
    value: function handleCloseModal() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_terraAbstractModal.default, {
        ariaLabel: ariaLabel,
        "aria-labelledby": "alert-dialog-content",
        isOpen: this.state.isOpen,
        onRequestClose: this.handleCloseModal,
        closeOnOutsideClick: false,
        classNameModal: _ExampleAbstractSizeModule.default['fixed-size'],
        role: "alertdialog"
      }, /*#__PURE__*/_react.default.createElement(AlertDialogContent, {
        handleCloseModal: this.handleCloseModal
      })), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: this.handleOpenModal
      }, "Open Modal"));
    }
  }]);
  return AbstractModalAlertDialog;
}(_react.default.Component);
var _default = AbstractModalAlertDialog;
exports.default = _default;