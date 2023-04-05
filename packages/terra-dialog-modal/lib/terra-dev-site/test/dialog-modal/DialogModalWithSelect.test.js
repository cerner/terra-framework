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
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));
var _terraActionFooter = _interopRequireDefault(require("terra-action-footer"));
var _terraFormSelect = _interopRequireDefault(require("terra-form-select"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _DialogModal = _interopRequireDefault(require("../../../DialogModal"));
var _DialogModalWithSelectTestModule = _interopRequireDefault(require("./DialogModalWithSelect.test.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_DialogModalWithSelectTestModule.default);
var DefaultDialogModal = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DefaultDialogModal, _React$Component);
  var _super = _createSuper(DefaultDialogModal);
  function DefaultDialogModal() {
    var _this;
    (0, _classCallCheck2.default)(this, DefaultDialogModal);
    _this = _super.call(this);
    _this.state = {
      isOpen: false
    };
    _this.handleOpenModal = _this.handleOpenModal.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleCloseModal = _this.handleCloseModal.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(DefaultDialogModal, [{
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
      var text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.', 'Integer congue feugiat ultricies.', ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.', 'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.', ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.', 'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.', 'Nam vehicula, arcu vitae egestas porttitor,', 'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DialogModal.default, {
        ariaLabel: "Dialog Modal",
        isOpen: this.state.isOpen,
        onRequestClose: this.handleCloseModal,
        header: /*#__PURE__*/_react.default.createElement(_terraActionHeader.default, {
          title: "Action Header used here",
          onClose: this.handleCloseModal
        }),
        footer: /*#__PURE__*/_react.default.createElement(_terraActionFooter.default, {
          start: "Footer Goes here"
        })
      }, /*#__PURE__*/_react.default.createElement("p", null, text), /*#__PURE__*/_react.default.createElement(_terraFormSelect.default, {
        variant: "combobox",
        placeholder: "Select a color",
        className: cx('selection-list')
      }, /*#__PURE__*/_react.default.createElement(_terraFormSelect.default.Option, {
        value: "blue",
        display: "Blue"
      }), /*#__PURE__*/_react.default.createElement(_terraFormSelect.default.Option, {
        value: "green",
        display: "Green"
      }), /*#__PURE__*/_react.default.createElement(_terraFormSelect.default.Option, {
        value: "purple",
        display: "Purple"
      }), /*#__PURE__*/_react.default.createElement(_terraFormSelect.default.Option, {
        value: "red",
        display: "Red"
      }), /*#__PURE__*/_react.default.createElement(_terraFormSelect.default.Option, {
        value: "violet",
        display: "Violet"
      })), /*#__PURE__*/_react.default.createElement("p", null, text)), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
        id: "trigger-dialog-modal",
        text: "Trigger Dialog Modal",
        onClick: this.handleOpenModal
      }));
    }
  }]);
  return DefaultDialogModal;
}(_react.default.Component);
var _default = DefaultDialogModal;
exports.default = _default;