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
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _index = _interopRequireWildcard(require("terra-infinite-list/lib/index"));
var _InfiniteListTestCommonModule = _interopRequireDefault(require("./InfiniteListTestCommon.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_InfiniteListTestCommonModule.default);
var InfiniteListSameCount = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(InfiniteListSameCount, _React$Component);
  var _super = _createSuper(InfiniteListSameCount);
  function InfiniteListSameCount(props) {
    var _this;
    (0, _classCallCheck2.default)(this, InfiniteListSameCount);
    _this = _super.call(this, props);
    _this.handleUpdateItems = _this.handleUpdateItems.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      useItemOne: true
    };
    return _this;
  }
  (0, _createClass2.default)(InfiniteListSameCount, [{
    key: "handleUpdateItems",
    value: function handleUpdateItems() {
      this.setState(function (prevState) {
        return {
          useItemOne: !prevState.useItemOne
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var items1 = [/*#__PURE__*/_react.default.createElement(_index.Item, {
        key: "item-0"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('item-type1')
      }, "Item 0")), /*#__PURE__*/_react.default.createElement(_index.Item, {
        key: "item-1"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('item-type2')
      }, "Item 1")), /*#__PURE__*/_react.default.createElement(_index.Item, {
        key: "item-2"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('item-type1')
      }, "Item 2")), /*#__PURE__*/_react.default.createElement(_index.Item, {
        key: "item-3"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('item-type2')
      }, "Item 3"))];
      var items2 = [/*#__PURE__*/_react.default.createElement(_index.Item, {
        key: "item-0"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('item-type3')
      }, "Item 0")), /*#__PURE__*/_react.default.createElement(_index.Item, {
        key: "item-1"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('item-type4')
      }, "Item 1")), /*#__PURE__*/_react.default.createElement(_index.Item, {
        key: "item-2"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('item-type3')
      }, "Item 2")), /*#__PURE__*/_react.default.createElement(_index.Item, {
        key: "item-3"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('item-type4')
      }, "Item 3"))];
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "test-click",
        onClick: this.handleUpdateItems
      }, "update items"), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('infinite-list-wrapper')
      }, /*#__PURE__*/_react.default.createElement(_index.default, {
        id: "test-infinite-list",
        isFinishedLoading: true,
        ariaLabel: "Same Count"
      }, this.state.useItemOne ? items1 : items2)));
    }
  }]);
  return InfiniteListSameCount;
}(_react.default.Component);
var _default = InfiniteListSameCount;
exports.default = _default;