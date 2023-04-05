"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraHookshot = _interopRequireDefault(require("terra-hookshot"));
var _HookshotContentTestTemplate = _interopRequireDefault(require("./HookshotContentTestTemplate"));
var _HookshotTestDocCommonModule = _interopRequireDefault(require("./HookshotTestDocCommon.module.scss"));
var _excluded = ["hookshotContentProps", "id", "isOpen", "contentAttachment", "targetAttachment", "attachmentMargin", "includeSvgs", "type"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_HookshotTestDocCommonModule.default);
var propTypes = {
  /**
   * The hookshot contents props. Defaults to closesOnEsc=true, closeOnOutsideClick=true & closeOnResize=true.
   * onRequestClose is provided by the template.
   */
  hookshotContentProps: _propTypes.default.any,
  id: _propTypes.default.string,
  isOpen: _propTypes.default.bool,
  includeSvgs: _propTypes.default.bool,
  contentAttachment: _propTypes.default.string,
  targetAttachment: _propTypes.default.string,
  type: _propTypes.default.string,
  attachmentMargin: _propTypes.default.number
};
var defaultProps = {
  hookshotContentProps: {},
  id: 'hookshot',
  isOpen: false,
  includeSvgs: false,
  contentAttachment: 'middle end',
  targetAttachment: 'middle start'
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
var HookshotTemplate = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(HookshotTemplate, _React$Component);
  var _super = _createSuper(HookshotTemplate);
  function HookshotTemplate(props) {
    var _this;
    (0, _classCallCheck2.default)(this, HookshotTemplate);
    _this = _super.call(this, props);
    _this.triggerHookshot = _this.triggerHookshot.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRequestClose = _this.handleRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      open: props.isOpen
    };
    return _this;
  }
  (0, _createClass2.default)(HookshotTemplate, [{
    key: "handleRequestClose",
    value: function handleRequestClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "triggerHookshot",
    value: function triggerHookshot() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        hookshotContentProps = _this$props.hookshotContentProps,
        id = _this$props.id,
        isOpen = _this$props.isOpen,
        contentAttachment = _this$props.contentAttachment,
        targetAttachment = _this$props.targetAttachment,
        attachmentMargin = _this$props.attachmentMargin,
        includeSvgs = _this$props.includeSvgs,
        type = _this$props.type,
        hookshotProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var svgs = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("svg", {
        id: "svg1",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        height: "2em",
        width: "2em"
      }, /*#__PURE__*/_react.default.createElement("path", {
        fill: "#78C346",
        d: "M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        fill: "#FFF",
        d: "M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"
      })), /*#__PURE__*/_react.default.createElement("svg", {
        id: "svg2",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        height: "2em",
        width: "2em"
      }, /*#__PURE__*/_react.default.createElement("path", {
        fill: "#B1B5B6",
        d: "M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"
      })));
      return /*#__PURE__*/_react.default.createElement("div", {
        id: "".concat(id, "-bounds"),
        className: cx(['wrapper', "hookshot-wrapper-".concat(type)])
      }, /*#__PURE__*/_react.default.createElement(_terraHookshot.default, (0, _extends2.default)({
        id: id,
        contentAttachment: attachmentValues(contentAttachment),
        targetAttachment: attachmentValues(targetAttachment),
        attachmentMargin: attachmentMargin,
        isEnabled: true,
        isOpen: this.state.open,
        targetRef: function targetRef() {
          return document.getElementById("trigger-".concat(id));
        },
        boundingRef: function boundingRef() {
          return document.getElementById("".concat(id, "-bounds"));
        }
      }, hookshotProps), /*#__PURE__*/_react.default.createElement(_HookshotContentTestTemplate.default, {
        id: "".concat(id, "-content"),
        onEsc: hookshotContentProps.closeOnEsc ? this.handleRequestClose : undefined,
        onOutsideClick: hookshotContentProps.closeOnOutsideClick ? this.handleRequestClose : undefined,
        onResize: hookshotContentProps.closeOnResize ? this.handleRequestClose : undefined
      })), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "trigger-".concat(id),
        className: cx(['content', "hookshot-".concat(type)]),
        onClick: this.triggerHookshot
      }, "Trigger Hookshot"), includeSvgs && svgs);
    }
  }]);
  return HookshotTemplate;
}(_react.default.Component);
HookshotTemplate.propTypes = propTypes;
HookshotTemplate.defaultProps = defaultProps;
var _default = HookshotTemplate;
exports.default = _default;