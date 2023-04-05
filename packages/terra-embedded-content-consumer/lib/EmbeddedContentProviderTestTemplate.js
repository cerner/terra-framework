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
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./ProviderIframe.module.scss");
require("./ProviderTestTemplate.module.scss");
var _excluded = ["children"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var propTypes = {
  /**
   * The content which will be embedded in an iframe by the XFC consumer.
   */
  children: _propTypes.default.node.isRequired
};
var EmbeddedContentProviderTestTemplate = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(EmbeddedContentProviderTestTemplate, _React$Component);
  var _super = _createSuper(EmbeddedContentProviderTestTemplate);
  function EmbeddedContentProviderTestTemplate() {
    (0, _classCallCheck2.default)(this, EmbeddedContentProviderTestTemplate);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(EmbeddedContentProviderTestTemplate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.toggle('embedded-content-provider-test-template-body');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.classList.toggle('embedded-content-provider-test-template-body');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        "data-embedded-content-consumer-provider-test-template": true
      }, customProps), children);
    }
  }]);
  return EmbeddedContentProviderTestTemplate;
}(_react.default.Component);
EmbeddedContentProviderTestTemplate.propTypes = propTypes;
var _default = EmbeddedContentProviderTestTemplate;
exports.default = _default;