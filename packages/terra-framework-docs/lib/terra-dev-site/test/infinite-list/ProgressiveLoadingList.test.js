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
var _terraDocs = require("@cerner/terra-docs");
var _index = _interopRequireWildcard(require("terra-infinite-list/lib/index"));
var _InfiniteListTestCommonModule = _interopRequireDefault(require("./InfiniteListTestCommon.module.scss"));
var _MyInitialLoadingIndicator = _interopRequireDefault(require("../../doc/infinite-list/common/MyInitialLoadingIndicator"));
var _MyProgressiveLoadingIndicator = _interopRequireDefault(require("../../doc/infinite-list/common/MyProgressiveLoadingIndicator"));
var _MyExampleContainer = _interopRequireDefault(require("../../doc/infinite-list/common/MyExampleContainer"));
var _mockProgressive = _interopRequireDefault(require("../../doc/infinite-list/guides/mock-data/mock-progressive"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_InfiniteListTestCommonModule.default);
var ProgressiveLoadingList = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ProgressiveLoadingList, _React$Component);
  var _super = _createSuper(ProgressiveLoadingList);
  function ProgressiveLoadingList(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ProgressiveLoadingList);
    _this = _super.call(this, props);
    _this.requestData = _this.requestData.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      isFinishedLoading: false,
      currentPageKey: null,
      items: []
    };
    return _this;
  }
  (0, _createClass2.default)(ProgressiveLoadingList, [{
    key: "requestData",
    value: function requestData() {
      var _this2 = this;
      (0, _mockProgressive.default)(this.state.currentPageKey).then(function (response) {
        return _this2.setState(function (prevState) {
          return {
            isFinishedLoading: response.isFinalPage,
            currentPageKey: response.nextPageKey,
            items: prevState.items.concat(response.items)
          };
        });
      });
    }
  }, {
    key: "createItems",
    value: function createItems() {
      return this.state.items.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_index.Item, {
          key: item.key
        }, /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
          title: item.title,
          className: cx('item-placeholder')
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_MyExampleContainer.default, null, /*#__PURE__*/_react.default.createElement(_index.default, {
        dividerStyle: "standard",
        isFinishedLoading: this.state.isFinishedLoading,
        onRequestItems: this.requestData,
        initialLoadingIndicator: /*#__PURE__*/_react.default.createElement(_MyInitialLoadingIndicator.default, null),
        progressiveLoadingIndicator: /*#__PURE__*/_react.default.createElement(_MyProgressiveLoadingIndicator.default, null),
        progressiveLoadingMessage: "Loading allergies...",
        ariaLabel: "Progressive Loading List"
      }, this.createItems()));
    }
  }]);
  return ProgressiveLoadingList;
}(_react.default.Component);
var _default = ProgressiveLoadingList;
exports.default = _default;