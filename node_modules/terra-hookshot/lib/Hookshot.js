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
var _reactPortal = require("react-portal");
var _HookshotContent = _interopRequireDefault(require("./HookshotContent"));
var _HookshotUtils = _interopRequireDefault(require("./_HookshotUtils"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var VERTICAL_ATTACHMENTS = ['top', 'middle', 'bottom'];
var HORIZONTAL_ATTACHMENTS = ['start', 'center', 'end'];
var ATTACHMENT_BEHAVIORS = ['auto', 'flip', 'push', 'none'];
var propTypes = {
  /**
   * How the content should be positioned when the primary attachment is not available.
   * Valid values:
   *  'auto': returns 180 degrees, returns rotate 90 degree, returns rotate -90 degrees, returns primary attachment
   *  'flip': returns 180 degrees, returns primary attachment
   *  'push': pushes content to remain within the bounding rect, returns primary attachment
   *  'none': returns primary attachment
   */
  attachmentBehavior: _propTypes.default.oneOf(ATTACHMENT_BEHAVIORS),
  /**
   * Value in px of the margin to place between the target and the content.
   */
  attachmentMargin: _propTypes.default.number,
  /**
   * Reference to the bounding container. Defaults to window unless attachment behavior is set to none.
   */
  boundingRef: _propTypes.default.func,
  /**
   * The HookshotContent to be attached.
   */
  children: _propTypes.default.element.isRequired,
  /**
   * Object containing the vertical and horizontal attachment values for the content.
   * Valid values: { horizontal: ['start', 'center', 'end'], vertical: ['top', 'middle', 'bottom'] }.
   */
  contentAttachment: _propTypes.default.shape({
    horizontal: _propTypes.default.oneOf(HORIZONTAL_ATTACHMENTS),
    vertical: _propTypes.default.oneOf(VERTICAL_ATTACHMENTS)
  }).isRequired,
  /**
   * Object containing the vertical and horizontal offset values in px for the content.
   */
  contentOffset: _propTypes.default.shape({
    horizontal: _propTypes.default.number,
    vertical: _propTypes.default.number
  }),
  /**
   * Determines whether the content should be actively positioned via hookshot.
   */
  isEnabled: _propTypes.default.bool,
  /**
   * Should the content be presented.
   */
  isOpen: _propTypes.default.bool,
  /**
   * Callback function when the content has been positioned.
   */
  onPosition: _propTypes.default.func,
  /**
   * Client coordinates to serve as the anchor point for the hookshot'd content.
   */
  targetCoordinates: _propTypes.default.shape({
    x: _propTypes.default.number.isRequired,
    y: _propTypes.default.number.isRequired
  }),
  /**
   * Element to serve as the anchor point for the hookshot'd content. (If targetCoordinates are provided, this is ignored.)
   */
  targetRef: _propTypes.default.func,
  /**
   * Object containing the vertical and horizontal attachment values for the target.
   * Valid values: { horizontal: ['start', 'center', 'end'], vertical: ['top', 'middle', 'bottom'] }.
   * If targetCoordinates are provided { horizontal: 'center', vertical: 'middle' } will be applied.
   */
  targetAttachment: _propTypes.default.shape({
    horizontal: _propTypes.default.oneOf(HORIZONTAL_ATTACHMENTS),
    vertical: _propTypes.default.oneOf(VERTICAL_ATTACHMENTS)
  }),
  /**
   * Object containing the vertical and horizontal offset values in px for the target.
   */
  targetOffset: _propTypes.default.shape({
    horizontal: _propTypes.default.number,
    vertical: _propTypes.default.number
  })
};
var defaultProps = {
  attachmentMargin: 0,
  attachmentBehavior: 'auto',
  contentOffset: {
    horizontal: 0,
    vertical: 0
  },
  isEnabled: false,
  isOpen: false,
  targetOffset: {
    horizontal: 0,
    vertical: 0
  }
};
var Hookshot = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Hookshot, _React$Component);
  var _super = _createSuper(Hookshot);
  function Hookshot(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Hookshot);
    _this = _super.call(this, props);
    _this.setContentNode = _this.setContentNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.getNodeRects = _this.getNodeRects.bind((0, _assertThisInitialized2.default)(_this));
    _this.update = _this.update.bind((0, _assertThisInitialized2.default)(_this));
    _this.tick = _this.tick.bind((0, _assertThisInitialized2.default)(_this));
    _this.getBoundingRef = _this.getBoundingRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.getTargetRef = _this.getTargetRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.getValidBoundingRect = _this.getValidBoundingRect.bind((0, _assertThisInitialized2.default)(_this));
    _this.getValidTargetRect = _this.getValidTargetRect.bind((0, _assertThisInitialized2.default)(_this));
    _this.listenersAdded = false;
    _this.lastCall = null;
    _this.lastDuration = null;
    _this.pendingTimeout = null;
    return _this;
  }
  (0, _createClass2.default)(Hookshot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isEnabled && this.props.isOpen) {
        if (!this.listenersAdded) {
          this.enableListeners();
        }
        this.update();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isEnabled && this.props.isOpen) {
        if (!this.listenersAdded) {
          this.enableListeners();
        }
        this.update();
      } else {
        this.disableListeners();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.disableListeners();
    }
  }, {
    key: "setContentNode",
    value: function setContentNode(node) {
      this.contentNode = node;
    }
  }, {
    key: "getBoundingRef",
    value: function getBoundingRef() {
      return this.props.boundingRef ? this.props.boundingRef() : undefined;
    }
  }, {
    key: "getTargetRef",
    value: function getTargetRef() {
      return this.props.targetRef ? this.props.targetRef() : undefined;
    }
  }, {
    key: "getValidBoundingRect",
    value: function getValidBoundingRect() {
      if (this.props.attachmentBehavior === 'none') {
        return undefined;
      }
      return _HookshotUtils.default.getBoundingRect(this.getBoundingRef() || 'window');
    }
  }, {
    key: "getValidTargetRect",
    value: function getValidTargetRect() {
      if (this.props.targetCoordinates) {
        return _HookshotUtils.default.getRectFromCoords(this.props.targetCoordinates);
      }
      return _HookshotUtils.default.getBounds(this.getTargetRef());
    }
  }, {
    key: "getNodeRects",
    value: function getNodeRects(resetContentCache) {
      return {
        contentRect: resetContentCache ? _HookshotUtils.default.getBounds(this.contentNode) : this.cachedRects.contentRect,
        targetRect: this.getValidTargetRect(),
        boundingRect: this.getValidBoundingRect()
      };
    }
  }, {
    key: "tick",
    value: function tick(event) {
      if (this.lastDuration && this.lastDuration > 16) {
        // Throttle to 60fps, in order to handle safari and mobile performance
        this.lastDuration = Math.min(this.lastDuration - 16, 100);

        // Just in case this is the last event, remember to position just once more
        this.pendingTimeout = setTimeout(this.tick, 100);
        return;
      }
      if (this.lastCall && performance.now() - this.lastCall < 10) {
        // Some browsers call events a little too frequently, refuse to run more than is reasonable
        return;
      }
      if (this.pendingTimeout != null) {
        clearTimeout(this.pendingTimeout);
        this.pendingTimeout = null;
      }
      this.lastCall = performance.now();
      this.update(event);
      this.lastDuration = performance.now() - this.lastCall;
    }
  }, {
    key: "enableListeners",
    value: function enableListeners() {
      var _this2 = this;
      var childElement = this.getTargetRef() || this.getBoundingRef();
      if (!childElement) {
        return;
      }
      ['resize', 'scroll', 'touchmove'].forEach(function (event) {
        return window.addEventListener(event, _this2.tick);
      });
      this.parentListeners = [];
      var scrollParents = _HookshotUtils.default.getScrollParents(childElement);
      scrollParents.forEach(function (parent) {
        if (parent !== childElement.ownerDocument) {
          parent.addEventListener('scroll', _this2.tick);
          _this2.parentListeners.push(parent);
        }
      });
      this.listenersAdded = true;
    }
  }, {
    key: "disableListeners",
    value: function disableListeners() {
      var _this3 = this;
      ['resize', 'scroll', 'touchmove'].forEach(function (event) {
        return window.removeEventListener(event, _this3.tick);
      });
      if (this.parentListeners) {
        this.parentListeners.forEach(function (parent) {
          parent.removeEventListener('scroll', _this3.tick);
        });
        this.parentListeners = null;
      }
      this.listenersAdded = false;
    }
  }, {
    key: "position",
    value: function position(event, resetContentCache) {
      this.cachedRects = this.getNodeRects(resetContentCache);
      this.content.rect = this.cachedRects.contentRect;
      this.target.rect = this.cachedRects.targetRect;
      var result = _HookshotUtils.default.positionStyleFromBounds(this.cachedRects.boundingRect, this.content, this.target, this.props.attachmentMargin, this.props.attachmentBehavior);
      var styleUpdated = false;
      var newTransform = "translate3d(".concat(result.style.left, ", ").concat(result.style.top, ", 0px)");
      if (this.contentNode.style.transform !== newTransform) {
        this.contentNode.style.transform = newTransform;
        styleUpdated = true;
      }
      if (this.contentNode.style.opacity !== '1') {
        this.contentNode.style.opacity = '1';
        styleUpdated = true;
      }
      if (styleUpdated) {
        this.cachedRects.contentRect = _HookshotUtils.default.getBounds(this.contentNode);
        result.positions.content.rect = this.cachedRects.contentRect;
      }
      if (this.props.onPosition) {
        this.props.onPosition(event, result.positions);
      }
    }
  }, {
    key: "update",
    value: function update(event) {
      if (!this.getTargetRef() && !this.props.targetCoordinates || !this.contentNode) {
        return;
      }
      this.updateHookshot(event);
    }
  }, {
    key: "updateHookshot",
    value: function updateHookshot(event) {
      var resetCache = !event || event.type !== 'scroll' && event.type !== 'touchmove';
      this.position(event, resetCache);
    }
  }, {
    key: "cloneContent",
    value: function cloneContent(content) {
      return /*#__PURE__*/_react.default.cloneElement(content, {
        refCallback: this.wrappedRefCallback(content),
        disableOnClickOutside: !content.props.onOutsideClick
      });
    }
  }, {
    key: "wrappedRefCallback",
    value: function wrappedRefCallback(content) {
      var _this4 = this;
      var initialRefCallback = content.props.refCallback;
      return function (node) {
        _this4.setContentNode(node);
        if (initialRefCallback) {
          initialRefCallback(node);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _this$props = this.props,
        attachmentBehavior = _this$props.attachmentBehavior,
        attachmentMargin = _this$props.attachmentMargin,
        boundingRef = _this$props.boundingRef,
        children = _this$props.children,
        contentAttachment = _this$props.contentAttachment,
        contentOffset = _this$props.contentOffset,
        isEnabled = _this$props.isEnabled,
        isOpen = _this$props.isOpen,
        targetCoordinates = _this$props.targetCoordinates,
        targetRef = _this$props.targetRef,
        targetAttachment = _this$props.targetAttachment,
        targetOffset = _this$props.targetOffset,
        onPosition = _this$props.onPosition;
      /* eslint-enable no-unused-vars */
      if (!isOpen) {
        return null;
      }
      var isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
      this.content = {
        offset: _HookshotUtils.default.getDirectionalOffset(contentOffset, isRTL),
        attachment: _HookshotUtils.default.getDirectionalAttachment(contentAttachment, isRTL)
      };
      this.target = {
        offset: _HookshotUtils.default.getDirectionalOffset(targetOffset, isRTL)
      };
      if (targetCoordinates) {
        this.target.attachment = _HookshotUtils.default.coordinateAttachment;
      } else if (targetAttachment) {
        this.target.attachment = _HookshotUtils.default.getDirectionalAttachment(targetAttachment, isRTL);
      } else {
        this.target.attachment = _HookshotUtils.default.mirrorAttachment(this.content.attachment);
      }
      return /*#__PURE__*/_react.default.createElement(_reactPortal.Portal, {
        isOpened: isOpen
      }, this.cloneContent(children));
    }
  }]);
  return Hookshot;
}(_react.default.Component);
Hookshot.propTypes = propTypes;
Hookshot.defaultProps = defaultProps;
Hookshot.horizontalAttachments = HORIZONTAL_ATTACHMENTS;
Hookshot.verticalAttachments = VERTICAL_ATTACHMENTS;
Hookshot.attachmentBehaviors = ATTACHMENT_BEHAVIORS;
Hookshot.Utils = _HookshotUtils.default;
Hookshot.Content = _HookshotContent.default;
var _default = Hookshot;
exports.default = _default;