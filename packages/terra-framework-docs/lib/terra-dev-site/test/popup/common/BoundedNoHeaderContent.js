"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var BoundedNoHeaderContent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(BoundedNoHeaderContent, _React$Component);
  var _super = _createSuper(BoundedNoHeaderContent);
  function BoundedNoHeaderContent() {
    (0, _classCallCheck2.default)(this, BoundedNoHeaderContent);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(BoundedNoHeaderContent, [{
    key: "render",
    value: function render() {
      var content = this.props.closeButtonRequired ? /*#__PURE__*/_react.default.createElement("p", null, "There is no Header and popup is Bounded") : /*#__PURE__*/_react.default.createElement("p", null, "This is the content of the popup");
      return content;
    }
  }]);
  return BoundedNoHeaderContent;
}(_react.default.Component);
BoundedNoHeaderContent.propTypes = {
  closeButtonRequired: _propTypes.default.bool
};
BoundedNoHeaderContent.defaultProps = {
  closeButtonRequired: false
};
var _default = BoundedNoHeaderContent;
exports.default = _default;