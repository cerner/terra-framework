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
var _PlaceholderList = _interopRequireDefault(require("../../../doc/aggregator/common/placeholder-list/PlaceholderList"));
var _PlaceholderListItem = _interopRequireDefault(require("../../../doc/aggregator/common/placeholder-list/PlaceholderListItem"));
var _DisclosureComponent = _interopRequireDefault(require("./DisclosureComponent"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* eslint-disable react/prop-types */
var AggregatorItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AggregatorItem, _React$Component);
  var _super = _createSuper(AggregatorItem);
  function AggregatorItem(props) {
    var _this;
    (0, _classCallCheck2.default)(this, AggregatorItem);
    _this = _super.call(this, props);
    _this.handleSelection = _this.handleSelection.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(AggregatorItem, [{
    key: "handleSelection",
    value: function handleSelection(event, key) {
      var _this$props = this.props,
        aggregatorDelegate = _this$props.aggregatorDelegate,
        name = _this$props.name;
      if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState.selectedKey === key) {
        aggregatorDelegate.releaseFocus();
        return;
      }
      aggregatorDelegate.requestFocus({
        selectedKey: key
      }).then(function (_ref) {
        var disclose = _ref.disclose;
        if (disclose) {
          disclose({
            preferredType: 'panel',
            size: 'small',
            content: {
              key: "Disclosure for ".concat(name),
              component: /*#__PURE__*/_react.default.createElement(_DisclosureComponent.default, {
                identifier: "Disclosure for ".concat(name)
              })
            }
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        name = _this$props2.name,
        aggregatorDelegate = _this$props2.aggregatorDelegate,
        targetId = _this$props2.targetId;
      var key;
      if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState && aggregatorDelegate.itemState.selectedKey !== undefined) {
        key = aggregatorDelegate.itemState.selectedKey;
      }
      return /*#__PURE__*/_react.default.createElement(_PlaceholderList.default, null, /*#__PURE__*/_react.default.createElement(_PlaceholderListItem.default, {
        isSelected: key === 'test-key',
        onSelect: function onSelect(event) {
          return _this2.handleSelection(event, 'test-key');
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: targetId
      }, name)));
    }
  }]);
  return AggregatorItem;
}(_react.default.Component);
AggregatorItem.propTypes = {
  name: _propTypes.default.string,
  aggregatorDelegate: _propTypes.default.shape({}),
  targetId: _propTypes.default.string
};
/* eslint-enable react/prop-types */
var _default = AggregatorItem;
exports.default = _default;