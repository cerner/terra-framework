"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraHookshot = _interopRequireDefault(require("terra-hookshot"));
var _reactPortal = require("react-portal");
var _PopupContent = _interopRequireWildcard(require("./_PopupContent"));
var _PopupArrow = _interopRequireDefault(require("./_PopupArrow"));
var _PopupOverlay = _interopRequireDefault(require("./_PopupOverlay"));
var _PopupUtils = _interopRequireDefault(require("./_PopupUtils"));
var _PopupHeights = _interopRequireDefault(require("./PopupHeights"));
var _PopupWidths = _interopRequireDefault(require("./PopupWidths"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ATTACHMENT_POSITIONS = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];
var propTypes = {
  /**
   * If the primary attachment is not available, how should the content be positioned. Options
   * include 'auto', 'flip', or 'push'.
   */
  attachmentBehavior: _propTypes.default.oneOf(['auto', 'flip', 'push']),
  /**
   * The children to be displayed as content within the popup.
   */
  children: _propTypes.default.node.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: _propTypes.default.func.isRequired,
  /**
   * Target element for the popup to anchor to.
   */
  targetRef: _propTypes.default.func.isRequired,
  /**
   * Bounding container for the popup, will use window if no value provided.
   */
  boundingRef: _propTypes.default.func,
  /**
   * @private CSS classnames that are append to the arrow.
   */
  classNameArrow: _propTypes.default.string,
  /**
   * @private CSS classnames that are append to the popup content inner.
   */
  classNameContent: _propTypes.default.string,
  /**
   * @private CSS classnames that are append to the overlay.
   */
  classNameOverlay: _propTypes.default.string,
  /**
   * Attachment point for the popup, this will be mirrored to the target. Options include: 'top left',
   * 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left',
   * 'bottom center', or 'bottom right'.
   */
  contentAttachment: _propTypes.default.oneOf(ATTACHMENT_POSITIONS),
  /**
   * A string representation of the height in px, limited to:
   * 40, 80, 120, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880 or auto.
   */
  contentHeight: _propTypes.default.oneOf(['40', '80', '120', '160', '240', '320', '400', '480', '560', '640', '720', '800', '880', 'auto']),
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760 or auto.
   */
  contentWidth: _propTypes.default.oneOf(['160', '240', '320', '640', '960', '1280', '1760', 'auto']),
  /**
   * Should an arrow be placed at the attachment point.
   */
  isArrowDisplayed: _propTypes.default.bool,
  /**
   * Set this to `true` if your content has focusable elements and you want them to receive focus instead of focusing on the default popup frame when the popup is opened.
   */
  isContentFocusDisabled: _propTypes.default.bool,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: _propTypes.default.bool,
  /**
   * Should the popup be presented as open.
   */
  isOpen: _propTypes.default.bool,
  /**
   * Attachment point for the target. Options include: 'top left', 'top center', 'top right', 'middle left', 'middle center',
   * 'middle right', 'bottom left', 'bottom center', or 'bottom right'.
   */
  targetAttachment: _propTypes.default.oneOf(ATTACHMENT_POSITIONS),
  /**
   * @private
   * Prop to set role on popup content container
   */
  popupContentRole: _propTypes.default.string
};
var defaultProps = {
  attachmentBehavior: 'auto',
  boundingRef: null,
  classNameArrow: null,
  classNameContent: null,
  classNameOverlay: null,
  contentAttachment: 'top center',
  contentHeight: '80',
  contentWidth: '240',
  isArrowDisplayed: false,
  isContentFocusDisabled: false,
  isHeaderDisabled: false,
  isOpen: false,
  popupContentRole: 'dialog'
};
var Popup = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Popup, _React$Component);
  var _super = _createSuper(Popup);
  function Popup(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Popup);
    _this = _super.call(this, props);
    _this.handleOnPosition = _this.handleOnPosition.bind((0, _assertThisInitialized2.default)(_this));
    _this.setArrowNode = _this.setArrowNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.validateContentNode = _this.validateContentNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnResize = _this.handleOnResize.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnContentResize = _this.handleOnContentResize.bind((0, _assertThisInitialized2.default)(_this));
    _this.isContentSized = props.contentHeight !== 'auto' && props.contentWidth !== 'auto';
    _this.contentHeight = _PopupHeights.default[props.contentHeight];
    _this.contentWidth = _PopupWidths.default[props.contentWidth];
    return _this;
  }
  (0, _createClass2.default)(Popup, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      this.isContentSized = nextProps.contentHeight !== 'auto' && nextProps.contentWidth !== 'auto';
      this.contentHeight = _PopupHeights.default[nextProps.contentHeight];
      this.contentWidth = _PopupWidths.default[nextProps.contentWidth];
      return true;
    }
  }, {
    key: "handleOnPosition",
    value: function handleOnPosition(event, positions) {
      if (this.arrowNode) {
        this.setArrowPosition(positions.content, positions.target);
      }
    }
  }, {
    key: "handleOnContentResize",
    value: function handleOnContentResize() {
      this.isContentSized = this.props.contentHeight !== 'auto' && this.props.contentWidth !== 'auto';
      this.contentHeight = _PopupHeights.default[this.props.contentHeight];
      this.contentWidth = _PopupWidths.default[this.props.contentWidth];
      this.forceUpdate();
    }
  }, {
    key: "handleOnResize",
    value: function handleOnResize(event, width) {
      // Close the popup if the window width is resized.
      if (window.innerWidth !== width) {
        this.windowWidth = window.innerWidth;
        this.props.onRequestClose();
      } else {
        this.isContentSized = this.props.contentHeight !== 'auto' && this.props.contentWidth !== 'auto';
        this.contentHeight = _PopupHeights.default[this.props.contentHeight];
        this.contentWidth = _PopupWidths.default[this.props.contentWidth];
        this.forceUpdate();
      }
    }
  }, {
    key: "setArrowPosition",
    value: function setArrowPosition(contentPosition, targetPosition) {
      var arrowPosition = _PopupUtils.default.getArrowPosition(contentPosition, targetPosition, _PopupArrow.default.Opts.arrowSize, _PopupContent.cornerSize);
      if (!arrowPosition) {
        this.arrowNode.removeAttribute(_PopupArrow.default.Opts.positionAttr);
        return;
      }
      this.arrowNode.setAttribute(_PopupArrow.default.Opts.positionAttr, arrowPosition);
      if (arrowPosition === 'top' || arrowPosition === 'bottom') {
        this.arrowNode.style.left = _PopupUtils.default.leftOffset(contentPosition, targetPosition, _PopupArrow.default.Opts.arrowSize, _PopupContent.cornerSize);
        this.arrowNode.style.top = '';
      } else {
        this.arrowNode.style.left = '';
        this.arrowNode.style.top = _PopupUtils.default.topOffset(contentPosition, targetPosition, _PopupArrow.default.Opts.arrowSize, _PopupContent.cornerSize);
      }
    }
  }, {
    key: "setArrowNode",
    value: function setArrowNode(node) {
      this.arrowNode = node;
    }
  }, {
    key: "validateContentNode",
    value: function validateContentNode(node) {
      if (node) {
        var contentRect = _terraHookshot.default.Utils.getBounds(node);
        if (this.contentHeight !== contentRect.height || this.contentWidth !== contentRect.width) {
          this.contentHeight = contentRect.height;
          this.contentWidth = contentRect.width;
          this.forceUpdate();
        }
        this.isContentSized = true;
      }
    }
  }, {
    key: "createPopupContent",
    value: function createPopupContent(boundingFrame, showArrow) {
      var boundsProps = {
        contentHeight: _PopupHeights.default[this.props.contentHeight] || _PopupHeights.default['80'],
        contentWidth: _PopupWidths.default[this.props.contentWidth] || _PopupWidths.default['240']
      };
      if (boundsProps.contentHeight <= 0 && this.contentHeight) {
        boundsProps.contentHeight = this.contentHeight;
      }
      if (boundsProps.contentWidth <= 0 && this.contentWidth) {
        boundsProps.contentWidth = this.contentWidth;
      }
      if (boundingFrame) {
        boundsProps.contentHeightMax = boundingFrame.clientHeight;
        boundsProps.contentWidthMax = boundingFrame.clientWidth;
      } else {
        boundsProps.contentHeightMax = window.innerHeight;
        boundsProps.contentWidthMax = window.innerWidth;
      }
      var arrow;
      if (showArrow) {
        arrow = /*#__PURE__*/_react.default.createElement(_PopupArrow.default, {
          className: this.props.classNameArrow,
          refCallback: this.setArrowNode
        });
      }
      return /*#__PURE__*/_react.default.createElement(_PopupContent.default, (0, _extends2.default)({}, boundsProps, {
        arrow: arrow,
        classNameInner: this.props.classNameContent,
        isHeaderDisabled: this.props.isHeaderDisabled,
        onRequestClose: this.props.onRequestClose,
        onContentResize: this.handleOnContentResize,
        onResize: this.handleOnResize,
        popupContentRole: this.props.popupContentRole,
        refCallback: this.validateContentNode,
        isHeightAutomatic: this.props.contentHeight === 'auto',
        isWidthAutomatic: this.props.contentWidth === 'auto',
        isFocusedDisabled: this.props.isContentFocusDisabled
      }), this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _this$props = this.props,
        attachmentBehavior = _this$props.attachmentBehavior,
        boundingRef = _this$props.boundingRef,
        children = _this$props.children,
        classNameArrow = _this$props.classNameArrow,
        classNameContent = _this$props.classNameContent,
        classNameOverlay = _this$props.classNameOverlay,
        contentAttachment = _this$props.contentAttachment,
        contentHeight = _this$props.contentHeight,
        contentWidth = _this$props.contentWidth,
        isArrowDisplayed = _this$props.isArrowDisplayed,
        isContentFocusDisabled = _this$props.isContentFocusDisabled,
        isHeaderDisabled = _this$props.isHeaderDisabled,
        isOpen = _this$props.isOpen,
        onRequestClose = _this$props.onRequestClose,
        targetRef = _this$props.targetRef,
        targetAttachment = _this$props.targetAttachment;
      /* eslint-enable no-unused-vars */

      if (!isOpen) {
        return null;
      }
      var tAttachment;
      var cAttachment = _PopupUtils.default.parseAttachment(contentAttachment);
      if (targetAttachment) {
        tAttachment = _PopupUtils.default.parseAttachment(targetAttachment);
      } else {
        tAttachment = _PopupUtils.default.mirrorAttachment(cAttachment);
      }
      var cOffset;
      var showArrow = isArrowDisplayed && contentAttachment !== 'middle center';
      if (showArrow) {
        cOffset = _PopupUtils.default.getContentOffset(cAttachment, tAttachment, this.props.targetRef(), _PopupArrow.default.Opts.arrowSize, _PopupContent.cornerSize);
      }
      var hookshotContent = this.createPopupContent(boundingRef ? boundingRef() : undefined, showArrow);
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactPortal.Portal, {
        isOpened: isOpen
      }, /*#__PURE__*/_react.default.createElement(_PopupOverlay.default, {
        className: this.props.classNameOverlay,
        onRequestClose: this.props.onRequestClose
      })), /*#__PURE__*/_react.default.createElement(_terraHookshot.default, {
        attachmentBehavior: attachmentBehavior,
        attachmentMargin: showArrow ? _PopupArrow.default.Opts.arrowSize : 0,
        boundingRef: boundingRef,
        contentAttachment: cAttachment,
        contentOffset: cOffset,
        isEnabled: this.isContentSized,
        isOpen: isOpen,
        onPosition: this.handleOnPosition,
        targetRef: targetRef,
        targetAttachment: tAttachment
      }, hookshotContent));
    }
  }]);
  return Popup;
}(_react.default.Component);
Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;
Popup.Opts = {
  attachmentPositions: ATTACHMENT_POSITIONS,
  heights: _PopupHeights.default,
  widths: _PopupWidths.default
};
var _default = Popup;
exports.default = _default;