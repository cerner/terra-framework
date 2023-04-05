"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var _bind = _interopRequireDefault(require("classnames/bind"));
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
var _HookshotContentModule = _interopRequireDefault(require("./HookshotContent.module.scss"));
require("classlist-polyfill");
var _excluded = ["children", "onContentResize", "onEsc", "onOutsideClick", "onResize", "refCallback"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
// Full polyfill for browsers with no classList support

var cx = _bind.default.bind(_HookshotContentModule.default);
var propTypes = {
  /**
   * The children to be displayed as content within the content.
   */
  children: _propTypes.default.node.isRequired,
  /**
   * The function callback when a child content resize event occurs.
   */
  onContentResize: _propTypes.default.func,
  /**
   * The function callback when am escape keydown event occurs.
   */
  onEsc: _propTypes.default.func,
  /**
   * The function callback when a click outside event occurs.
   */
  onOutsideClick: _propTypes.default.func,
  /**
   * The function callback when a resize event occurs.
   */
  onResize: _propTypes.default.func,
  /**
   * The function returning the frame html reference.
   */
  refCallback: _propTypes.default.func
};
var HookshotContent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(HookshotContent, _React$Component);
  var _super = _createSuper(HookshotContent);
  function HookshotContent(props) {
    var _this;
    (0, _classCallCheck2.default)(this, HookshotContent);
    _this = _super.call(this, props);
    _this.handleClickOutside = _this.handleClickOutside.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeydown = _this.handleKeydown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleResize = _this.debounce(_this.handleResize.bind((0, _assertThisInitialized2.default)(_this)), 100);
    _this.enableEscListener = _this.enableEscListener.bind((0, _assertThisInitialized2.default)(_this));
    _this.disableEscListener = _this.disableEscListener.bind((0, _assertThisInitialized2.default)(_this));
    _this.enableResizeListener = _this.enableResizeListener.bind((0, _assertThisInitialized2.default)(_this));
    _this.disableResizeListener = _this.disableResizeListener.bind((0, _assertThisInitialized2.default)(_this));
    _this.enableContentResizeListener = _this.enableContentResizeListener.bind((0, _assertThisInitialized2.default)(_this));
    _this.disableContentResizeListener = _this.disableContentResizeListener.bind((0, _assertThisInitialized2.default)(_this));
    _this.updateListeners = _this.updateListeners.bind((0, _assertThisInitialized2.default)(_this));
    _this.animationFrameID = null;
    return _this;
  }
  (0, _createClass2.default)(HookshotContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateListeners();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.disableEscListener();
      this.disableResizeListener();
      this.disableContentResizeListener();
    }
  }, {
    key: "handleResize",
    value: function handleResize(event) {
      if (this.props.onResize) {
        this.props.onResize(event);
      }
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.props.onOutsideClick) {
        this.props.onOutsideClick(event);
      }
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(event) {
      if (event.keyCode === KeyCode.KEY_ESCAPE) {
        event.preventDefault();
        this.props.onEsc(event);
      }
    }
  }, {
    key: "updateListeners",
    value: function updateListeners() {
      if (this.props.onEsc) {
        this.enableEscListener();
      } else {
        this.disableEscListener();
      }
      if (this.props.onResize) {
        this.enableResizeListener();
      } else {
        this.disableResizeListener();
      }
      if (this.props.onContentResize) {
        this.enableContentResizeListener();
      } else {
        this.disableContentResizeListener();
      }
    }
  }, {
    key: "enableEscListener",
    value: function enableEscListener() {
      if (!this.escListenerAdded) {
        document.addEventListener('keydown', this.handleKeydown);
        this.escListenerAdded = true;
      }
    }
  }, {
    key: "disableEscListener",
    value: function disableEscListener() {
      if (this.escListenerAdded) {
        document.removeEventListener('keydown', this.handleKeydown);
        this.escListenerAdded = false;
      }
    }
  }, {
    key: "enableResizeListener",
    value: function enableResizeListener() {
      if (!this.resizeListenerAdded) {
        window.addEventListener('resize', this.handleResize);
        this.resizeListenerAdded = true;
      }
    }
  }, {
    key: "disableResizeListener",
    value: function disableResizeListener() {
      if (this.resizeListenerAdded) {
        window.removeEventListener('resize', this.handleResize);
        this.resizeListenerAdded = false;
      }
    }
  }, {
    key: "enableContentResizeListener",
    value: function enableContentResizeListener() {
      var _this2 = this;
      if (!this.contentResizeListenerAdded) {
        this.resizeObserver = new _resizeObserverPolyfill.default(function (entries) {
          _this2.animationFrameID = window.requestAnimationFrame(function () {
            _this2.props.onContentResize(entries[0].contentRect);
          });
        });
        this.resizeObserver.observe(this.contentNode);
        this.contentResizeListenerAdded = true;
      }
    }
  }, {
    key: "disableContentResizeListener",
    value: function disableContentResizeListener() {
      if (this.contentResizeListenerAdded) {
        window.cancelAnimationFrame(this.animationFrameID);
        this.resizeObserver.disconnect(this.contentNode);
        this.contentNode = null;
        this.contentResizeListenerAdded = false;
      }
    }
  }, {
    key: "debounce",
    value: function debounce(fn, delay) {
      var _this3 = this;
      var timer = null;
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var context = _this3;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props = this.props,
        children = _this$props.children,
        onContentResize = _this$props.onContentResize,
        onEsc = _this$props.onEsc,
        onOutsideClick = _this$props.onOutsideClick,
        onResize = _this$props.onResize,
        refCallback = _this$props.refCallback,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);

      // Delete the unnecessary props that come from react-onclickoutside.
      delete customProps.disableOnClickOutside;
      delete customProps.enableOnClickOutside;
      delete customProps.eventTypes;
      delete customProps.excludeScrollbar;
      delete customProps.outsideClickIgnoreClass;
      delete customProps.preventDefault;
      delete customProps.stopPropagation;
      // Delete the closePortal prop that comes from react-portal.
      delete customProps.closePortal;
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        className: cx(['content', customProps.className]),
        ref: function ref(element) {
          _this4.contentNode = element;
          if (refCallback) {
            refCallback(element);
          }
        }
      }), children);
    }
  }]);
  return HookshotContent;
}(_react.default.Component);
HookshotContent.propTypes = propTypes;
var onClickOutsideContent = (0, _reactOnclickoutside.default)(HookshotContent);
var _default = onClickOutsideContent;
exports.default = _default;