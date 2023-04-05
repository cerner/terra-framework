"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["afterDismiss", "dismissDisclosure"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var propTypes = {
  /**
   * The components that will be managed by the Aggregator. Each component provided will be provided with an 'aggregatorDelegate' prop
   * containing the Aggregator API. Keys must also be provided to allow the Aggregator to uniquely identify the component.
   * Immutable objects are preferred.
   */
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string.isRequired,
    component: _propTypes.default.element.isRequired
  })),
  /**
   * A function that will override the Aggregators default render. The function will receive an Object parameter data necessary for the
   * render process.
   */
  render: _propTypes.default.func,
  /**
   * A function that will be provided to Aggregator items that have received focus. The function must adhere to the standardized
   * DisclosureManager disclosure API.
   */
  disclose: _propTypes.default.func
};
var defaultProps = {
  items: []
};
var Aggregator = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Aggregator, _React$Component);
  var _super = _createSuper(Aggregator);
  function Aggregator(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Aggregator);
    _this = _super.call(this, props);
    _this.requestFocus = _this.requestFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.releaseFocus = _this.releaseFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.setFocusState = _this.setFocusState.bind((0, _assertThisInitialized2.default)(_this));
    _this.resetFocusState = _this.resetFocusState.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderItems = _this.renderItems.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      focusedItemId: undefined,
      focusedItemState: undefined
    };
    return _this;
  }
  (0, _createClass2.default)(Aggregator, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var items = this.props.items;
      var focusedItemId = this.state.focusedItemId;
      if (this.props.items !== prevProps.items) {
        // If the currently focused item is not present in the new items set,
        // the focus is forcefully released to clean up any presented disclosures.
        var focusItemIsPresent;
        items.forEach(function (item) {
          if (item.key === focusedItemId) {
            focusItemIsPresent = true;
          }
        });
        if (!focusItemIsPresent) {
          this.releaseFocus(undefined, true);
        }
      }
    }
  }, {
    key: "setFocusState",
    value: function setFocusState(itemKey, itemState) {
      this.setState({
        focusedItemId: itemKey,
        focusedItemState: itemState
      });
    }
  }, {
    key: "resetFocusState",
    value: function resetFocusState() {
      this.setFocusState();
    }
  }, {
    key: "requestFocus",
    value: function requestFocus(itemId, itemState) {
      var _this2 = this;
      var disclose = this.props.disclose;
      var focusedItemId = this.state.focusedItemId;
      return new Promise(function (resolve, reject) {
        _this2.releaseFocus(focusedItemId).then(function () {
          _this2.setFocusState(itemId, Object.freeze(itemState || {}));
          var focusRequestPayload = {};

          /**
           * If the Aggregator is rendered within the context of a DisclosureManager, the focus request is resolved with a custom
           * disclose implementation.
           */
          if (disclose) {
            focusRequestPayload.disclose = function (data) {
              /**
               * If the itemId no longer matches the focusedItemId, then the disclose is being called after
               * the item has lost focus. This can happen if an Aggregator item caches the disclosue function they're given
               * and calls it later.
               */
              if (_this2.state.focusedItemId !== itemId) {
                return Promise.reject();
              }
              return disclose(data).then(function (_ref) {
                var afterDismiss = _ref.afterDismiss,
                  dismissDisclosure = _ref.dismissDisclosure,
                  other = (0, _objectWithoutProperties2.default)(_ref, _excluded);
                /**
                 * The disclosure's dismissDisclosure instance is cached so it can be called later. If an Aggregator item is
                 * currently presenting a disclosure and releases focus, we will call this function to force
                 * the disclosure to close.
                 */
                _this2.forceDismissInstance = dismissDisclosure;

                /**
                 * A handler is added to the deferred afterDismiss promise chain to remove the cached dismissDisclosure instance (the disclosure is
                 * closing, so it is no longer relevant). The handler also resets the focus state if focus is currently held by a component.
                 */
                afterDismiss.then(function () {
                  _this2.forceDismissInstance = undefined;
                  if (_this2.state.focusedItemId) {
                    _this2.resetFocusState();
                  }
                });

                // We return the same API so as not to disrupt the chain.
                return _objectSpread({
                  afterDismiss: afterDismiss,
                  dismissDisclosure: dismissDisclosure
                }, other);
              });
            };
          }
          resolve(focusRequestPayload);
        }).catch(function () {
          reject();
        });
      });
    }
  }, {
    key: "releaseFocus",
    value: function releaseFocus(itemId, force) {
      var _this3 = this;
      // If nothing is currently in focus, we can resolve immediately.
      if (!this.state.focusedItemId) {
        return Promise.resolve();
      }

      /**
       * If the provided item ID is not the currently focused ID, and the release is not forced,
       * the release is rejected to protect against delayed calls.
       */
      if (itemId !== this.state.focusedItemId && !force) {
        return Promise.reject();
      }
      return new Promise(function (resolve, reject) {
        /**
         * If forceDismissInstance is present, a disclosure must have been opened by the currently focused
         * Aggregator item. Therefore, we will call the forceDismissInstance in order to keep things in sync. The promise
         * returned by forceDismissInstance will be inserted into the Promise chain. If the promise is rejected,
         * the Aggregator's focus state will not be reset.
         *
         * The focus is only reset if the disclosure was dismissed successfully.
         */
        if (_this3.forceDismissInstance) {
          _this3.forceDismissInstance().then(function () {
            _this3.resetFocusState();
            resolve();
          }).catch(function () {
            reject();
          });
        } else {
          // If a previous disclosure is not detected, we can immediately resolve and reset the focus.
          _this3.resetFocusState();
          resolve();
        }
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this4 = this;
      var items = this.props.items;
      var _this$state = this.state,
        focusedItemId = _this$state.focusedItemId,
        focusedItemState = _this$state.focusedItemState;
      return items.map(function (item) {
        var childIsActive = focusedItemId === item.key;

        /**
         * Each child given to the Aggregator is provided with an 'aggregatorDelegate' prop with the following values:
         * hasFocus - A Boolean flag indicating whether or not the child is currently focused
         * requestFocus - A function that will attempt to provide focus to the calling child. It takes an Object parameter that
         *                should hold state data relevant to the focus event. The function returns a Promise that is resolved if
         *                the focus request was successful. The Promise is resolved with a 'disclose' function that can be used to
         *                disclose further content in a manner managed by the Aggregator. If the focus request was unsuccessful, the
         *                Promise will be rejected.
         * releaseFocus - A function that will attempt to release the focus held by the calling child. Returns a promse that is
         *                resolved if the release request was successful. If the release request was unsuccessful, the
         *                Promise will be rejected. This function is only provided to components that are focused.
         * itemState     - An Object containing the state given to the Aggregator during the focus request.
         */
        return /*#__PURE__*/_react.default.cloneElement(item.component, {
          key: item.key,
          aggregatorDelegate: {
            hasFocus: childIsActive,
            requestFocus: function requestFocus(state) {
              return _this4.requestFocus(item.key, state);
            },
            releaseFocus: childIsActive ? function () {
              return _this4.releaseFocus(item.key);
            } : undefined,
            itemState: childIsActive ? focusedItemState : undefined
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderedItems = this.renderItems();
      if (this.props.render) {
        return this.props.render({
          items: renderedItems
        });
      }
      return /*#__PURE__*/_react.default.createElement("div", null, renderedItems);
    }
  }]);
  return Aggregator;
}(_react.default.Component);
Aggregator.propTypes = propTypes;
Aggregator.defaultProps = defaultProps;
var _default = Aggregator;
exports.default = _default;