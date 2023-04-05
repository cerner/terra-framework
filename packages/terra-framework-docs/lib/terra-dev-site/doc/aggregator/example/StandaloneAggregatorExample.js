"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _terraAggregator = _interopRequireDefault(require("terra-aggregator"));
var _AggregatorItem = _interopRequireDefault(require("../common/AggregatorItem"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var items = Object.freeze([{
  key: 'SECTION_0',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 0"
  })
}, {
  key: 'SECTION_1',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 1"
  })
}, {
  key: 'SECTION_2',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 2"
  })
}, {
  key: 'SECTION_3',
  component: /*#__PURE__*/_react.default.createElement(_AggregatorItem.default, {
    name: "Section 3"
  })
}]);
var StandaloneAggregatorExample = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(StandaloneAggregatorExample, _React$Component);
  var _super = _createSuper(StandaloneAggregatorExample);
  function StandaloneAggregatorExample(props) {
    var _this;
    (0, _classCallCheck2.default)(this, StandaloneAggregatorExample);
    _this = _super.call(this, props);
    _this.state = {
      flip: false
    };
    return _this;
  }
  (0, _createClass2.default)(StandaloneAggregatorExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var body = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          _this2.setState(function (prevState) {
            return {
              flip: !prevState.flip
            };
          });
        }
      }, "Flip Section Order"), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          _this2.forceUpdate();
        }
      }, "Force Aggregator Render"), /*#__PURE__*/_react.default.createElement(_terraAggregator.default, {
        items: this.state.flip ? (0, _extends2.default)([], items).reverse() : items
      }));
      return body;
    }
  }]);
  return StandaloneAggregatorExample;
}(_react.default.Component);
var _default = StandaloneAggregatorExample;
exports.default = _default;