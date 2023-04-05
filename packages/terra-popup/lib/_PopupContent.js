"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cornerSize = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));
var _terraHookshot = _interopRequireDefault(require("terra-hookshot"));
var _PopupContentModule = _interopRequireDefault(require("./PopupContent.module.scss"));
var _excluded = ["arrow", "children", "classNameInner", "contentHeight", "contentHeightMax", "contentWidth", "contentWidthMax", "isFocusedDisabled", "isHeaderDisabled", "isHeightAutomatic", "isWidthAutomatic", "onRequestClose", "onResize", "onContentResize", "popupContentRole", "refCallback"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_PopupContentModule.default);
/**
 * Rounded corner size to be used when calculating the arrow offset.
 */
var CORNER_SIZE = 3;
exports.cornerSize = CORNER_SIZE;
var propTypes = {
  /**
   * The children to be presented as the popup's content.
   */
  children: _propTypes.default.node.isRequired,
  /**
   * The height value in px, to be applied to the content container.
   */
  contentHeight: _propTypes.default.number.isRequired,
  /**
   * The width value in px, to be applied to the content container.
   */
  contentWidth: _propTypes.default.number.isRequired,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: _propTypes.default.func.isRequired,
  /**
   * The function that should be triggered when a resize is indicated.
   */
  onResize: _propTypes.default.func.isRequired,
  /**
   * The arrow to be placed within the popup frame.
   */
  arrow: _propTypes.default.element,
  /**
   * CSS classnames that are appended to the popup content body.
   */
  classNameInner: _propTypes.default.string,
  /**
   * The maximum height value in px, to be applied to the content container. Used with responsive behavior for actual height.
   */
  contentHeightMax: _propTypes.default.number,
  /**
   * The maximum width value in px, to be applied to the content container. Used with responsive behavior for actual width.
   */
  contentWidthMax: _propTypes.default.number,
  /**
   * Set this to `true` if your content has focusable elements and you want them to receive focus instead of focusing on the default popup frame when the popup is opened.
   */
  isFocusedDisabled: _propTypes.default.bool,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: _propTypes.default.bool,
  /**
   * Whether or not the height provided is using a predefined value.
   */
  isHeightAutomatic: _propTypes.default.bool,
  /**
   * Whether or not the width provided is using a predefined value.
   */
  isWidthAutomatic: _propTypes.default.bool,
  /**
   * The function that should be triggered when a content resize is indicated.
   */
  onContentResize: _propTypes.default.func,
  /**
   * @private
   * Prop to set role on popup content container
   */
  popupContentRole: _propTypes.default.string,
  /**
   * The function returning the frame html reference.
   */
  refCallback: _propTypes.default.func
};
var defaultProps = {
  classNameInner: null,
  contentHeightMax: -1,
  contentWidthMax: -1,
  isFocusedDisabled: false,
  isHeaderDisabled: false,
  isHeightAutomatic: false,
  isWidthAutomatic: false,
  popupContentRole: 'dialog'
};
var PopupContent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(PopupContent, _React$Component);
  var _super = _createSuper(PopupContent);
  function PopupContent(props) {
    var _this;
    (0, _classCallCheck2.default)(this, PopupContent);
    _this = _super.call(this, props);
    _this.handleOnResize = _this.handleOnResize.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(PopupContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Value used to verify horizontal resize.
      this.windowWidth = window.innerWidth;
    }
  }, {
    key: "handleOnResize",
    value: function handleOnResize(event) {
      if (this.props.onResize) {
        this.props.onResize(event, this.windowWidth);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        arrow = _this$props.arrow,
        children = _this$props.children,
        classNameInner = _this$props.classNameInner,
        contentHeight = _this$props.contentHeight,
        contentHeightMax = _this$props.contentHeightMax,
        contentWidth = _this$props.contentWidth,
        contentWidthMax = _this$props.contentWidthMax,
        isFocusedDisabled = _this$props.isFocusedDisabled,
        isHeaderDisabled = _this$props.isHeaderDisabled,
        isHeightAutomatic = _this$props.isHeightAutomatic,
        isWidthAutomatic = _this$props.isWidthAutomatic,
        onRequestClose = _this$props.onRequestClose,
        onResize = _this$props.onResize,
        onContentResize = _this$props.onContentResize,
        popupContentRole = _this$props.popupContentRole,
        refCallback = _this$props.refCallback,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var contentStyle = PopupContent.getContentStyle(contentHeight, contentHeightMax, contentWidth, contentWidthMax, isHeightAutomatic, isWidthAutomatic);
      var isHeightBounded = PopupContent.isBounded(contentHeight, contentHeightMax);
      var isWidthBounded = PopupContent.isBounded(contentWidth, contentWidthMax);
      var isFullScreen = isHeightBounded && isWidthBounded;
      var content = PopupContent.cloneChildren(children, isHeightAutomatic, isWidthAutomatic, isHeightBounded, isWidthBounded, isHeaderDisabled);
      if (isFullScreen && !isHeaderDisabled) {
        content = PopupContent.addPopupHeader(content, onRequestClose);
      }
      var theme = this.context;
      var contentClassNames = (0, _classnames.default)(cx('content', theme.className), customProps.className);
      var roundedCorners = arrow && !isFullScreen;
      var arrowContent = roundedCorners ? arrow : undefined;
      var innerClassNames = cx(['inner', {
        'is-full-screen': isFullScreen
      }, {
        'rounded-corners': roundedCorners
      }, classNameInner]);
      var heightData = isHeightAutomatic ? {
        'data-terra-popup-automatic-height': true
      } : {};
      var widthData = isWidthAutomatic ? {
        'data-terra-popup-automatic-width': true
      } : {};
      return /*#__PURE__*/_react.default.createElement(_focusTrapReact.default, {
        focusTrapOptions: {
          returnFocusOnDeactivate: true,
          clickOutsideDeactivates: true
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_terraHookshot.default.Content, (0, _extends2.default)({}, customProps, {
        className: contentClassNames,
        tabIndex: isFocusedDisabled ? null : '0',
        "data-terra-popup-content": true,
        onContentResize: isHeightAutomatic || isWidthAutomatic ? onContentResize : undefined,
        onEsc: onRequestClose,
        onResize: this.handleOnResize,
        refCallback: refCallback,
        role: popupContentRole || null
      }), arrowContent, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, heightData, widthData, {
        className: innerClassNames,
        style: contentStyle
      }), content))));
    }
  }], [{
    key: "addPopupHeader",
    value: function addPopupHeader(children, onRequestClose) {
      var icon = /*#__PURE__*/_react.default.createElement("span", {
        className: cx('close-icon')
      });
      var header = /*#__PURE__*/_react.default.createElement("div", {
        className: cx('header')
      }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Terra.popup.header.close"
      }, function (text) {
        var useText = text;
        if (Array.isArray(text)) {
          useText = text.join('');
        }
        return /*#__PURE__*/_react.default.createElement(_terraButton.default, {
          variant: "utility",
          isIconOnly: true,
          icon: icon,
          onClick: onRequestClose,
          text: useText
        });
      }));
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        header: header,
        fill: true
      }, children);
    }
  }, {
    key: "isBounded",
    value: function isBounded(value, maxValue) {
      return value > 0 && maxValue > 0 && value >= maxValue;
    }
  }, {
    key: "cloneChildren",
    value: function cloneChildren(children, isHeightAutomatic, isWidthAutomatic, isHeightBounded, isWidthBounded, isHeaderDisabled) {
      var newProps = {};
      if (isHeightAutomatic) {
        newProps.isHeightBounded = isHeightBounded;
      }
      if (isWidthAutomatic) {
        newProps.isWidthBounded = isWidthBounded;
      }
      if (isHeightBounded && isWidthBounded && isHeaderDisabled) {
        newProps.closeButtonRequired = 'true';
      }
      return _react.default.Children.map(children, function (child) {
        return /*#__PURE__*/_react.default.cloneElement(child, newProps);
      });
    }
  }, {
    key: "getContentStyle",
    value: function getContentStyle(height, maxHeight, width, maxWidth, isHeightAutomatic, isWidthAutomatic) {
      var heightStyle = PopupContent.getDimensionStyle(height, maxHeight, isHeightAutomatic);
      var widthStyle = PopupContent.getDimensionStyle(width, maxWidth, isWidthAutomatic);
      var contentStyle = {};
      if (heightStyle) {
        contentStyle.height = heightStyle;
      }
      if (widthStyle) {
        contentStyle.width = widthStyle;
      }
      return contentStyle;
    }
  }, {
    key: "getDimensionStyle",
    value: function getDimensionStyle(value, maxValue, isAutomatic) {
      if (value > 0) {
        if (maxValue > 0 && value >= maxValue) {
          return "".concat(maxValue.toString(), "px");
        }
        if (!isAutomatic) {
          return "".concat(value.toString(), "px");
        }
      }
      return null;
    }
  }]);
  return PopupContent;
}(_react.default.Component);
PopupContent.propTypes = propTypes;
PopupContent.defaultProps = defaultProps;
PopupContent.contextType = _terraThemeContext.default;
var _default = PopupContent;
exports.default = _default;