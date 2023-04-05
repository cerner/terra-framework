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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraArrange = _interopRequireDefault(require("terra-arrange"));
var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _PlaceholderList = _interopRequireDefault(require("./placeholder-list/PlaceholderList"));
var _PlaceholderListItem = _interopRequireDefault(require("./placeholder-list/PlaceholderListItem"));
var _AggregatorItemModule = _interopRequireDefault(require("./AggregatorItem.module.scss"));
var _DisclosureComponent = _interopRequireDefault(require("./DisclosureComponent"));
var _excluded = ["name", "disclosureType", "aggregatorDelegate", "discloseOnSelect", "customDisclose"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_AggregatorItemModule.default);
var ReadonlyModal = (0, _terraDisclosureManager.withDisclosureManager)(function (_ref) {
  var disclosureManager = _ref.disclosureManager;
  return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
    header: /*#__PURE__*/_react.default.createElement(_terraActionHeader.default, {
      title: "Info Modal",
      onClose: disclosureManager.closeDisclosure,
      onBack: disclosureManager.goBack
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('readonly-modal-content')
  }, /*#__PURE__*/_react.default.createElement("p", null, "This modal was not presented through the Aggregator. The Aggregator state was maintained.")));
});
ReadonlyModal.propTypes = {
  disclosureManager: _terraDisclosureManager.disclosureManagerShape
};
var propTypes = {
  aggregatorDelegate: _propTypes.default.object,
  name: _propTypes.default.string,
  disclosureType: _propTypes.default.string,
  discloseOnSelect: _propTypes.default.bool,
  customDisclose: _propTypes.default.func
};
var AggregatorItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AggregatorItem, _React$Component);
  var _super = _createSuper(AggregatorItem);
  function AggregatorItem(props) {
    var _this;
    (0, _classCallCheck2.default)(this, AggregatorItem);
    _this = _super.call(this, props);
    _this.handleSelection = _this.handleSelection.bind((0, _assertThisInitialized2.default)(_this));
    _this.launchModal = _this.launchModal.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(AggregatorItem, [{
    key: "handleSelection",
    value: function handleSelection(event, index) {
      var _this2 = this;
      var _this$props = this.props,
        aggregatorDelegate = _this$props.aggregatorDelegate,
        name = _this$props.name,
        discloseOnSelect = _this$props.discloseOnSelect;
      var disclosureSizeForIndex = {
        0: 'tiny',
        1: 'small',
        2: 'medium',
        3: 'large',
        4: 'huge',
        5: 'fullscreen'
      };
      if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState.selectedIndex === index) {
        aggregatorDelegate.releaseFocus().catch(function () {
          console.log('Section - Focus release failed. Something must be locked.'); // eslint-disable-line no-console
        });

        return;
      }
      aggregatorDelegate.requestFocus({
        selectedIndex: index
      }).then(function (_ref2) {
        var disclose = _ref2.disclose;
        if (discloseOnSelect) {
          disclose({
            preferredType: _this2.props.disclosureType,
            size: disclosureSizeForIndex[index],
            content: {
              key: "Nested ".concat(name),
              component: /*#__PURE__*/_react.default.createElement(_DisclosureComponent.default, {
                name: "Nested ".concat(name),
                disclosureType: _this2.props.disclosureType
              })
            }
          });
        }
      }).catch(function (error) {
        console.log("Section - Selection denied - ".concat(error)); // eslint-disable-line no-console
      });
    }
  }, {
    key: "launchModal",
    value: function launchModal() {
      var customDisclose = this.props.customDisclose;
      var key = "ModalContent-".concat(Date.now());
      customDisclose({
        preferredType: 'modal',
        size: 'small',
        content: {
          key: key,
          component: /*#__PURE__*/_react.default.createElement(ReadonlyModal, null)
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props2 = this.props,
        name = _this$props2.name,
        disclosureType = _this$props2.disclosureType,
        aggregatorDelegate = _this$props2.aggregatorDelegate,
        discloseOnSelect = _this$props2.discloseOnSelect,
        customDisclose = _this$props2.customDisclose,
        customProps = (0, _objectWithoutProperties2.default)(_this$props2, _excluded);
      var index;
      if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState && aggregatorDelegate.itemState.selectedIndex !== undefined) {
        index = aggregatorDelegate.itemState.selectedIndex;
      }
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, (0, _extends2.default)({}, customProps, {
        header: /*#__PURE__*/_react.default.createElement(_terraArrange.default, {
          className: cx('header-arrange'),
          fitStart: /*#__PURE__*/_react.default.createElement("div", {
            className: cx('header-arrange-content')
          }, customDisclose ? /*#__PURE__*/_react.default.createElement(_terraButton.default, {
            text: "Modal (Without Requesting Focus)",
            onClick: this.launchModal
          }) : null),
          fill: /*#__PURE__*/_react.default.createElement("div", null, name)
        })
      }), /*#__PURE__*/_react.default.createElement(_PlaceholderList.default, {
        isPadded: true
      }, /*#__PURE__*/_react.default.createElement(_PlaceholderListItem.default, {
        isSelected: index === 0,
        onSelect: function onSelect(event) {
          return _this3.handleSelection(event, 0);
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, "Row 0")), /*#__PURE__*/_react.default.createElement(_PlaceholderListItem.default, {
        isSelected: index === 1,
        onSelect: function onSelect(event) {
          return _this3.handleSelection(event, 1);
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, "Row 1")), /*#__PURE__*/_react.default.createElement(_PlaceholderListItem.default, {
        isSelected: index === 2,
        onSelect: function onSelect(event) {
          return _this3.handleSelection(event, 2);
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, "Row 2")), /*#__PURE__*/_react.default.createElement(_PlaceholderListItem.default, {
        isSelected: index === 3,
        onSelect: function onSelect(event) {
          return _this3.handleSelection(event, 3);
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, "Row 3")), /*#__PURE__*/_react.default.createElement(_PlaceholderListItem.default, {
        isSelected: index === 4,
        onSelect: function onSelect(event) {
          return _this3.handleSelection(event, 4);
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, "Row 4")), /*#__PURE__*/_react.default.createElement(_PlaceholderListItem.default, {
        isSelected: index === 5,
        onSelect: function onSelect(event) {
          return _this3.handleSelection(event, 5);
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, "Row 5"))));
    }
  }]);
  return AggregatorItem;
}(_react.default.Component);
AggregatorItem.propTypes = propTypes;
var _default = AggregatorItem;
exports.default = _default;