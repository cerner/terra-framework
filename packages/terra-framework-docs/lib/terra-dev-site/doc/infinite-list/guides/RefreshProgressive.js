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
var _ProgressiveLoadingList = _interopRequireDefault(require("./ProgressiveLoadingList"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RefreshProgressive = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(RefreshProgressive, _React$Component);
  var _super = _createSuper(RefreshProgressive);
  function RefreshProgressive(props) {
    var _this;
    (0, _classCallCheck2.default)(this, RefreshProgressive);
    _this = _super.call(this, props);
    _this.updateKey = _this.updateKey.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      refreshKey: 0
    };
    return _this;
  }
  (0, _createClass2.default)(RefreshProgressive, [{
    key: "updateKey",
    value: function updateKey() {
      this.setState(function (prevState) {
        return {
          refreshKey: prevState.refreshKey + 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: this.updateKey
      }, "Refresh"), /*#__PURE__*/_react.default.createElement(_ProgressiveLoadingList.default, {
        key: "".concat(this.state.refreshKey)
      }));
    }
  }]);
  return RefreshProgressive;
}(_react.default.Component);
var _default = RefreshProgressive;
exports.default = _default;