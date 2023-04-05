"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DisclosureManagerContext", {
  enumerable: true,
  get: function get() {
    return _DisclosureManagerContext.default;
  }
});
Object.defineProperty(exports, "DisclosureManagerDelegate", {
  enumerable: true,
  get: function get() {
    return _DisclosureManagerDelegate.default;
  }
});
Object.defineProperty(exports, "DisclosureManagerHeaderAdapter", {
  enumerable: true,
  get: function get() {
    return _DisclosureManagerHeaderAdapter.default;
  }
});
Object.defineProperty(exports, "DisclosureManagerHeaderAdapterContext", {
  enumerable: true,
  get: function get() {
    return _DisclosureManagerHeaderAdapterContext.default;
  }
});
exports.disclosureManagerShape = exports.default = exports.availableDisclosureWidths = exports.availableDisclosureSizes = exports.availableDisclosureHeights = void 0;
Object.defineProperty(exports, "withDisclosureManager", {
  enumerable: true,
  get: function get() {
    return _withDisclosureManager.default;
  }
});
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DisclosureManagerDelegate = _interopRequireDefault(require("./DisclosureManagerDelegate"));
var _DisclosureManagerContext = _interopRequireDefault(require("./DisclosureManagerContext"));
var _DisclosureManagerHeaderAdapterContext = _interopRequireDefault(require("./DisclosureManagerHeaderAdapterContext"));
var _DisclosureManagerHeaderAdapter = _interopRequireDefault(require("./DisclosureManagerHeaderAdapter"));
var _withDisclosureManager = _interopRequireDefault(require("./withDisclosureManager"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var availableDisclosureSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
  FULLSCREEN: 'fullscreen'
};
exports.availableDisclosureSizes = availableDisclosureSizes;
var arrayReducer = function arrayReducer(mappingObject, value) {
  return _objectSpread((0, _defineProperty2.default)({}, "".concat(value), value), mappingObject);
};
var availableDisclosureHeights = [240, 420, 600, 690, 780, 870, 960, 1140].reduce(arrayReducer, {});
exports.availableDisclosureHeights = availableDisclosureHeights;
var availableDisclosureWidths = [320, 480, 560, 640, 800, 960, 1120, 1280, 1440, 1600, 1760, 1920].reduce(arrayReducer, {});
exports.availableDisclosureWidths = availableDisclosureWidths;
var defaultDimensions = {
  height: availableDisclosureHeights['690'],
  width: availableDisclosureWidths['1120']
};
var defaultSize = availableDisclosureSizes.SMALL;
var isValidDimensions = function isValidDimensions(dimensions) {
  return availableDisclosureHeights[dimensions.height] && availableDisclosureWidths[dimensions.width];
};
var isValidSize = function isValidSize(size) {
  return !!availableDisclosureSizes[size.toUpperCase()];
};
var propTypes = {
  /**
   * The child components that will be provided the disclosure functionality.
   */
  children: _propTypes.default.node,
  /**
   * A function used to provide rendering capabilities to the DisclosureManager.
   */
  render: _propTypes.default.func.isRequired,
  /**
   * An array of disclosure types that the DisclosureManager should support. If an unsupported disclosure request occurs, the DisclosureManager will
   * utilize its 'disclosureManager' prop and forward the request instead of handling the request itself.
   */
  supportedDisclosureTypes: _propTypes.default.array,
  /**
   * A boolean indicating whether or not the DisclosureManager should handle all nested disclosure requests. When enabled, the DisclosureManager will handle all
   * disclose requests coming from disclosed components, regardless of the preferred disclosure type.
   */
  trapNestedDisclosureRequests: _propTypes.default.bool,
  /**
   * @private
   * A DisclosureManagerDelegate instance provided by a parent DisclosureManager. This prop is automatically provided by `withDisclosureManager` and should not
   * be explicitly given to the component.
   */
  disclosureManager: _DisclosureManagerDelegate.default.propType,
  /**
   * @private
   * The container to wrap the disclosed content. This should be provided from the application level.
   */
  withDisclosureContainer: _propTypes.default.func
};
var defaultProps = {
  supportedDisclosureTypes: []
};
var DisclosureManager = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DisclosureManager, _React$Component);
  var _super = _createSuper(DisclosureManager);
  function DisclosureManager(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DisclosureManager);
    _this = _super.call(this, props);
    _this.generateChildComponentDelegate = _this.generateChildComponentDelegate.bind((0, _assertThisInitialized2.default)(_this));
    _this.generateDisclosureComponentDelegate = _this.generateDisclosureComponentDelegate.bind((0, _assertThisInitialized2.default)(_this));
    _this.generateHeaderContextValue = _this.generateHeaderContextValue.bind((0, _assertThisInitialized2.default)(_this));
    _this.generateDisclosureComponentMappingForRender = _this.generateDisclosureComponentMappingForRender.bind((0, _assertThisInitialized2.default)(_this));
    _this.resolveDismissPromise = _this.resolveDismissPromise.bind((0, _assertThisInitialized2.default)(_this));
    _this.resolveDismissChecksInSequence = _this.resolveDismissChecksInSequence.bind((0, _assertThisInitialized2.default)(_this));
    _this.disclosureTypeIsSupported = _this.disclosureTypeIsSupported.bind((0, _assertThisInitialized2.default)(_this));
    _this.safelyCloseDisclosure = _this.safelyCloseDisclosure.bind((0, _assertThisInitialized2.default)(_this));
    _this.generatePopFunction = _this.generatePopFunction.bind((0, _assertThisInitialized2.default)(_this));
    _this.openDisclosure = _this.openDisclosure.bind((0, _assertThisInitialized2.default)(_this));
    _this.pushDisclosure = _this.pushDisclosure.bind((0, _assertThisInitialized2.default)(_this));
    _this.popDisclosure = _this.popDisclosure.bind((0, _assertThisInitialized2.default)(_this));
    _this.closeDisclosure = _this.closeDisclosure.bind((0, _assertThisInitialized2.default)(_this));
    _this.requestDisclosureFocus = _this.requestDisclosureFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.releaseDisclosureFocus = _this.releaseDisclosureFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.maximizeDisclosure = _this.maximizeDisclosure.bind((0, _assertThisInitialized2.default)(_this));
    _this.minimizeDisclosure = _this.minimizeDisclosure.bind((0, _assertThisInitialized2.default)(_this));

    // These cached functions are stored outside of state to prevent unnecessary rerenders.
    _this.dismissChecks = {};
    _this.onDismissResolvers = {};
    _this.state = {
      childComponentDelegate: _this.generateChildComponentDelegate(),
      disclosureIsOpen: false,
      disclosureIsFocused: false,
      disclosureIsMaximized: false,
      disclosureSize: undefined,
      disclosureDimensions: undefined,
      disclosureComponentKeys: [],
      disclosureComponentData: {},
      disclosureComponentDelegates: [],
      disclosureTypeConfig: {}
    };
    return _this;
  }
  (0, _createClass2.default)(DisclosureManager, [{
    key: "generateHeaderContextValue",
    value: function generateHeaderContextValue(key, initialTitle) {
      var _this2 = this;
      return {
        register: function register(_ref) {
          var title = _ref.title,
            collapsibleMenuView = _ref.collapsibleMenuView;
          _this2.setState(function (state) {
            return {
              disclosureComponentData: _objectSpread(_objectSpread({}, state.disclosureComponentData), (0, _defineProperty2.default)({}, key, _objectSpread(_objectSpread({}, state.disclosureComponentData[key]), {}, {
                headerAdapterData: {
                  title: initialTitle || title,
                  collapsibleMenuView: collapsibleMenuView
                }
              })))
            };
          });
        }
      };
    }
  }, {
    key: "generateChildComponentDelegate",
    value: function generateChildComponentDelegate() {
      var _this3 = this;
      return _DisclosureManagerDelegate.default.create({
        disclose: function disclose(data) {
          if (_this3.disclosureTypeIsSupported(data.preferredType)) {
            return _this3.safelyCloseDisclosure().then(function () {
              _this3.openDisclosure(data);
              /**
               * The disclose Promise chain is resolved with a set of APIs that the disclosing content can use to
               * manipulate the disclosure, if necessary.
               */
              return {
                /**
                 * The afterDismiss value is a deferred Promise that will be resolved when the disclosed component is dismissed.
                 */
                afterDismiss: new Promise(function (resolve) {
                  _this3.onDismissResolvers[data.content.key] = resolve;
                }),
                /**
                 * The dismissDisclosure value is a function that the disclosing component can use to manually close the disclosure.
                 * Any and all dismiss checks are still performed.
                 */
                dismissDisclosure: _this3.safelyCloseDisclosure
              };
            });
          }
          return _this3.props.disclosureManager.disclose(data);
        }
      });
    }
  }, {
    key: "generateDisclosureComponentDelegate",
    value: function generateDisclosureComponentDelegate(componentKey, disclosureState) {
      var _this4 = this;
      var disclosureComponentKeys = disclosureState.disclosureComponentKeys,
        disclosureComponentData = disclosureState.disclosureComponentData,
        disclosureIsMaximized = disclosureState.disclosureIsMaximized,
        disclosureIsFocused = disclosureState.disclosureIsFocused,
        disclosureSize = disclosureState.disclosureSize;
      var componentData = disclosureComponentData[componentKey];
      var isFullscreen = disclosureSize === availableDisclosureSizes.FULLSCREEN;
      var popContent = this.generatePopFunction(componentData.key);
      var componentIndex = disclosureComponentKeys.indexOf(componentKey);
      var delegate = {};

      /**
       * The disclose function provided will push content onto the disclosure stack.
       */
      delegate.disclose = function (data) {
        if (_this4.props.trapNestedDisclosureRequests || _this4.disclosureTypeIsSupported(data.preferredType)) {
          return Promise.resolve().then(function () {
            _this4.pushDisclosure(data);
            return {
              afterDismiss: new Promise(function (resolve) {
                _this4.onDismissResolvers[data.content.key] = resolve;
              }),
              dismissDisclosure: _this4.generatePopFunction(data.content.key)
            };
          });
        }
        return _this4.props.disclosureManager.disclose(data);
      };

      /**
       * Allows a component to remove itself from the disclosure stack. If the component is the only element in the disclosure stack,
       * the disclosure is closed.
       */
      delegate.dismiss = popContent;

      /**
       * Allows a component to close the entire disclosure stack.
       */
      delegate.closeDisclosure = this.safelyCloseDisclosure;

      /**
       * Allows a component to remove itself from the disclosure stack. Functionally similar to `dismiss`, however `onBack` is
       * only provided to components in the stack that have a previous sibling.
       */
      delegate.goBack = componentIndex > 0 ? popContent : undefined;

      /**
       * Allows a component to request focus from the disclosure in the event that the disclosure mechanism in use utilizes a focus trap.
       */
      delegate.requestFocus = disclosureIsFocused ? function () {
        return Promise.resolve().then(_this4.releaseDisclosureFocus);
      } : undefined;

      /**
       * Allows a component to release focus from itself and return it to the disclosure.
       */
      delegate.releaseFocus = !disclosureIsFocused ? function () {
        return Promise.resolve().then(_this4.requestDisclosureFocus);
      } : undefined;

      /**
       * Allows a component to maximize its presentation size. This is only provided if the component is not already maximized.
       */
      delegate.maximize = !isFullscreen && !disclosureIsMaximized ? function () {
        return Promise.resolve().then(_this4.maximizeDisclosure);
      } : undefined;

      /**
       * Allows a component to minimize its presentation size. This is only provided if the component is currently maximized.
       */
      delegate.minimize = !isFullscreen && disclosureIsMaximized ? function () {
        return Promise.resolve().then(_this4.minimizeDisclosure);
      } : undefined;

      /**
       * Allows a component to register a function with the DisclosureManager that will be called before the component is dismissed for any reason.
       */
      delegate.registerDismissCheck = function (checkFunc) {
        _this4.dismissChecks[componentData.key] = checkFunc;
        return Promise.resolve();
      };
      return _DisclosureManagerDelegate.default.create(delegate);
    }

    /**
     * Determines if the provided disclosure type is supported by the DisclosureManager.
     * @return `true` if the type is supported or if there is no fallback `disclosureManager` present. `false` is returned otherwise.
     */
  }, {
    key: "disclosureTypeIsSupported",
    value: function disclosureTypeIsSupported(type) {
      var _this$props = this.props,
        disclosureManager = _this$props.disclosureManager,
        supportedDisclosureTypes = _this$props.supportedDisclosureTypes;
      return supportedDisclosureTypes.indexOf(type) >= 0 || !disclosureManager;
    }
  }, {
    key: "openDisclosure",
    value: function openDisclosure(data) {
      var dimensions = data.dimensions;
      if (dimensions && !isValidDimensions(dimensions)) {
        // dimensions were provided, but are invalid, set the default
        dimensions = defaultDimensions;
      }

      // eslint-disable-next-line prefer-destructuring
      var size = data.size;
      if (!size || size && !isValidSize(size)) {
        // no valid size passed
        if (!dimensions) {
          // no valid size and no valid dimensions, set the default
          dimensions = defaultDimensions;
        }
        // ensure size set for passivity
        size = defaultSize;
      }
      var newState = {
        disclosureIsOpen: true,
        disclosureIsFocused: true,
        disclosureSize: size,
        disclosureDimensions: dimensions,
        disclosureComponentKeys: [data.content.key],
        disclosureTypeConfig: data.typeConfig,
        disclosureComponentData: (0, _defineProperty2.default)({}, data.content.key, _objectSpread(_objectSpread({
          key: data.content.key,
          name: data.content.name,
          props: data.content.props,
          component: data.content.component
        }, data.content.title !== undefined && {
          headerAdapterData: {
            title: data.content.title
          }
        }), {}, {
          headerAdapterContextValue: this.generateHeaderContextValue(data.content.key, data.content.title)
        }))
      };
      newState.disclosureComponentDelegates = [this.generateDisclosureComponentDelegate(data.content.key, newState)];
      this.setState(newState);
    }
  }, {
    key: "pushDisclosure",
    value: function pushDisclosure(data) {
      var newState = DisclosureManager.cloneDisclosureState(this.state);
      newState.disclosureComponentKeys.push(data.content.key);
      newState.disclosureComponentData[data.content.key] = _objectSpread(_objectSpread({
        key: data.content.key,
        name: data.content.name,
        props: data.content.props,
        component: data.content.component
      }, data.content.title !== undefined && {
        headerAdapterData: {
          title: data.content.title
        }
      }), {}, {
        headerAdapterContextValue: this.generateHeaderContextValue(data.content.key, data.content.title)
      });
      newState.disclosureComponentDelegates = newState.disclosureComponentDelegates.concat(this.generateDisclosureComponentDelegate(data.content.key, newState));
      this.setState(newState);
    }
  }, {
    key: "popDisclosure",
    value: function popDisclosure(callbackfunction) {
      /**
       * If there is only one disclosed component, the disclosure is closed and all state is reset.
       */
      if (this.state.disclosureComponentKeys.length === 1) {
        this.closeDisclosure(callbackfunction);
      } else {
        var newState = DisclosureManager.cloneDisclosureState(this.state);
        newState.disclosureComponentData[newState.disclosureComponentKeys.pop()] = undefined;
        newState.disclosureComponentDelegates.pop();
        this.setState(newState, callbackfunction);
      }
    }
  }, {
    key: "closeDisclosure",
    value: function closeDisclosure(callbackfunction) {
      this.setState({
        disclosureIsOpen: false,
        disclosureIsFocused: false,
        disclosureIsMaximized: false,
        disclosureSize: undefined,
        disclosureDimensions: undefined,
        disclosureComponentKeys: [],
        disclosureComponentData: {},
        disclosureComponentDelegates: [],
        disclosureTypeConfig: {}
      }, callbackfunction);
    }
  }, {
    key: "requestDisclosureFocus",
    value: function requestDisclosureFocus() {
      var _this5 = this;
      var newState = DisclosureManager.cloneDisclosureState(this.state);
      newState.disclosureIsFocused = true;
      newState.disclosureComponentDelegates = newState.disclosureComponentKeys.map(function (key) {
        return _this5.generateDisclosureComponentDelegate(key, newState);
      });
      this.setState(newState);
    }
  }, {
    key: "releaseDisclosureFocus",
    value: function releaseDisclosureFocus() {
      var _this6 = this;
      var newState = DisclosureManager.cloneDisclosureState(this.state);
      newState.disclosureIsFocused = false;
      newState.disclosureComponentDelegates = newState.disclosureComponentKeys.map(function (key) {
        return _this6.generateDisclosureComponentDelegate(key, newState);
      });
      this.setState(newState);
    }
  }, {
    key: "maximizeDisclosure",
    value: function maximizeDisclosure() {
      var _this7 = this;
      var newState = DisclosureManager.cloneDisclosureState(this.state);
      newState.disclosureIsMaximized = true;
      newState.disclosureComponentDelegates = newState.disclosureComponentKeys.map(function (key) {
        return _this7.generateDisclosureComponentDelegate(key, newState);
      });
      this.setState(newState);
    }
  }, {
    key: "minimizeDisclosure",
    value: function minimizeDisclosure() {
      var _this8 = this;
      var newState = DisclosureManager.cloneDisclosureState(this.state);
      newState.disclosureIsMaximized = false;
      newState.disclosureComponentDelegates = newState.disclosureComponentKeys.map(function (key) {
        return _this8.generateDisclosureComponentDelegate(key, newState);
      });
      this.setState(newState);
    }

    /**
     * Looks up the deferred afterDismiss promise for the provided disclosure key and
     * resolves it.
     */
  }, {
    key: "resolveDismissPromise",
    value: function resolveDismissPromise(key) {
      var resolve = this.onDismissResolvers[key];
      if (resolve) {
        resolve();
      }
      this.onDismissResolvers[key] = undefined;
    }

    /**
     * Resolves the dismiss checks for the current disclosure components in sequence. The Promise will either resolve if all checks resolve or
     * reject on the first detected rejection. This ensures that checks do not occur for components after the first rejection.
     */
  }, {
    key: "resolveDismissChecksInSequence",
    value: function resolveDismissChecksInSequence(keys) {
      var _this9 = this;
      return new Promise(function (resolve, reject) {
        if (!keys.length) {
          resolve();
          return;
        }
        var key = keys.pop();
        _this9.generatePopFunction(key)().then(function () {
          _this9.resolveDismissChecksInSequence(keys).then(resolve).catch(reject);
        }).catch(function () {
          reject();
        });
      });
    }

    /**
     * Closes the disclosure after calling all checks and resolving all deferred promises.
     * @return A Promise, resolved if the close was performed or rejected if it was not.
     */
  }, {
    key: "safelyCloseDisclosure",
    value: function safelyCloseDisclosure() {
      var _this10 = this;
      var disclosureKeys = (0, _extends2.default)([], this.state.disclosureComponentKeys);

      /**
       * Before closing the disclosure, the dismiss checks for components in the stack are
       * executed in stack order. Components will be dismissed in order up until a rejection occurs, at which point
       * the blocking component will be presented.
       */
      return this.resolveDismissChecksInSequence(disclosureKeys).then(function () {
        _this10.dismissChecks = {};
        _this10.closeDisclosure();
      });
    }

    /**
     * Creates an instance of a pop function for the component represented by the given key.
     */
  }, {
    key: "generatePopFunction",
    value: function generatePopFunction(key) {
      var _this11 = this;
      return function () {
        var disclosureComponentKeys = _this11.state.disclosureComponentKeys;
        if (disclosureComponentKeys[disclosureComponentKeys.length - 1] !== key) {
          /**
           * If the top component key in the disclosure stack does not match
           * the key used to generate this function, or the key is undefined, then the pop action is rejected.
           */
          return Promise.reject();
        }
        var promiseRoot = Promise.resolve();
        var dismissCheck = _this11.dismissChecks[key];
        if (dismissCheck) {
          promiseRoot = dismissCheck();
        }
        var callbackfunction = function callbackfunction() {
          _this11.dismissChecks[key] = undefined;
          _this11.resolveDismissPromise(key);
        };
        return promiseRoot.then(function () {
          _this11.popDisclosure(callbackfunction);
        });
      };
    }
  }, {
    key: "generateDisclosureComponentMappingForRender",
    value: function generateDisclosureComponentMappingForRender(withDisclosureContainer) {
      var _this$state = this.state,
        disclosureComponentKeys = _this$state.disclosureComponentKeys,
        disclosureComponentData = _this$state.disclosureComponentData,
        disclosureComponentDelegates = _this$state.disclosureComponentDelegates;
      return disclosureComponentKeys.reduce(function (accumulator, key, index) {
        var componentData = disclosureComponentData[key];
        var component = withDisclosureContainer ? withDisclosureContainer(componentData.component) : componentData.component;
        accumulator[key] = {
          component: /*#__PURE__*/_react.default.createElement(_DisclosureManagerHeaderAdapterContext.default.Provider, {
            value: componentData.headerAdapterContextValue,
            key: key
          }, /*#__PURE__*/_react.default.createElement(_DisclosureManagerContext.default.Provider, {
            value: disclosureComponentDelegates[index]
          }, component)),
          headerAdapterData: componentData.headerAdapterData
        };
        return accumulator;
      }, {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this12 = this;
      var _this$props2 = this.props,
        withDisclosureContainer = _this$props2.withDisclosureContainer,
        render = _this$props2.render,
        children = _this$props2.children;
      var _this$state2 = this.state,
        childComponentDelegate = _this$state2.childComponentDelegate,
        disclosureIsOpen = _this$state2.disclosureIsOpen,
        disclosureIsFocused = _this$state2.disclosureIsFocused,
        disclosureIsMaximized = _this$state2.disclosureIsMaximized,
        disclosureSize = _this$state2.disclosureSize,
        disclosureDimensions = _this$state2.disclosureDimensions,
        disclosureComponentKeys = _this$state2.disclosureComponentKeys,
        disclosureTypeConfig = _this$state2.disclosureTypeConfig;
      if (!render) {
        return null;
      }
      var disclosureComponentMappingForRender = this.generateDisclosureComponentMappingForRender(withDisclosureContainer);
      return render({
        dismissPresentedComponent: this.generatePopFunction(disclosureComponentKeys ? disclosureComponentKeys[disclosureComponentKeys.length - 1] : undefined),
        closeDisclosure: this.safelyCloseDisclosure,
        maximizeDisclosure: disclosureSize !== availableDisclosureSizes.FULLSCREEN && !disclosureIsMaximized ? function () {
          return Promise.resolve().then(_this12.maximizeDisclosure);
        } : undefined,
        minimizeDisclosure: disclosureSize !== availableDisclosureSizes.FULLSCREEN && disclosureIsMaximized ? function () {
          return Promise.resolve().then(_this12.minimizeDisclosure);
        } : undefined,
        children: {
          components: /*#__PURE__*/_react.default.createElement(_DisclosureManagerContext.default.Provider, {
            value: childComponentDelegate
          }, children)
        },
        disclosure: {
          isOpen: disclosureIsOpen,
          isFocused: disclosureIsFocused,
          isMaximized: disclosureIsMaximized,
          size: disclosureSize,
          dimensions: disclosureDimensions,
          components: disclosureComponentKeys.map(function (key) {
            return disclosureComponentMappingForRender[key].component;
          }),
          typeConfig: disclosureTypeConfig
        },
        /**
         * The below values were added to give DisclosureManager implementations more control over the rendering of the disclosed components.
         * Some of the data provided by these keys is duplicated by the data provided in the above `disclose` value.
         * In a future major release, this render object will be restructured and simplified. Until then, either can be used as needed.
         */
        disclosureComponentKeys: disclosureComponentKeys,
        disclosureComponentData: disclosureComponentMappingForRender
      });
    }
  }], [{
    key: "cloneDisclosureState",
    value:
    /**
     * Clones the current disclosure component state objects and returns the structure for further mutation.
     */
    function cloneDisclosureState(state) {
      var newState = _objectSpread({}, state);
      newState.disclosureComponentKeys = (0, _extends2.default)([], newState.disclosureComponentKeys);
      newState.disclosureComponentData = _objectSpread({}, newState.disclosureComponentData);
      newState.disclosureComponentDelegates = (0, _extends2.default)([], newState.disclosureComponentDelegates);
      return newState;
    }
  }]);
  return DisclosureManager;
}(_react.default.Component);
DisclosureManager.propTypes = propTypes;
DisclosureManager.defaultProps = defaultProps;
var disclosureManagerShape = _DisclosureManagerDelegate.default.propType;
exports.disclosureManagerShape = disclosureManagerShape;
var _default = (0, _withDisclosureManager.default)(DisclosureManager);
exports.default = _default;