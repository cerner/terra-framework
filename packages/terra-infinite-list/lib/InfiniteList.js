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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _reactIntl = require("react-intl");
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
var _terraList = _interopRequireDefault(require("terra-list"));
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _InfiniteUtils = _interopRequireDefault(require("./_InfiniteUtils"));
var _InfiniteListModule = _interopRequireDefault(require("./InfiniteList.module.scss"));
var _excluded = ["ariaLabel", "children", "dividerStyle", "initialLoadingIndicator", "intl", "isFinishedLoading", "onRequestItems", "paddingStyle", "progressiveLoadingIndicator", "progressiveLoadingMessage", "role", "refCallback"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_InfiniteListModule.default);
var propTypes = {
  /**
   * String that labels the list for screen readers.
   */
  ariaLabel: _propTypes.default.string,
  /**
   * The child list items, of type InfiniteList Item, to be placed within the infinite list.
   * For further documentation of InfiniteList Item see terra-list's ListItem.
   */
  children: _propTypes.default.node,
  /**
   * Whether or not the list's child items should have a border color applied.
   * One of `'none'`, `'standard'`, `'bottom-only'`.
   */
  dividerStyle: _propTypes.default.oneOf(['none', 'standard', 'bottom-only']),
  /**
   * An indicator to be displayed when no children are yet present.
   */
  initialLoadingIndicator: _propTypes.default.element,
  /**
   * @private
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }),
  /**
   * Determines whether or not the loading indicator is visible and if callbacks are triggered.
   */
  isFinishedLoading: _propTypes.default.bool,
  /**
   * Callback trigger when new list items are requested.
   */
  onRequestItems: _propTypes.default.func,
  /**
   * The padding styling to apply to the child list item content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: _propTypes.default.oneOf(['none', 'standard', 'compact']),
  /**
   * An indicator to be displayed at the end of the current loaded children.
   */
  progressiveLoadingIndicator: _propTypes.default.element,
  /**
   * A message to be provided to screen readers as new items are progressively loaded in
   */
  progressiveLoadingMessage: _propTypes.default.string,
  /**
   * Accessibility role of the list, defaults to 'none'. If creating a list with selectable items, pass 'listbox'.
   */
  role: _propTypes.default.string,
  /**
   * Function callback for the ref of the List(ul).
   */
  refCallback: _propTypes.default.func
};
var defaultProps = {
  children: [],
  dividerStyle: 'none',
  isFinishedLoading: false,
  paddingStyle: 'none',
  progressiveLoadingMessage: undefined,
  role: 'none'
};

/**
 * Returns a ListItem sized according to the provided height to use as a spacer.
 * @param {number} height - Height to set on the ListItem.
 * @param {number} index - Index to use as part of the spacers key.
 */
/* eslint-disable react/forbid-dom-props */
var createSpacer = function createSpacer(height, index) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx(['spacer']),
    style: {
      height: height
    },
    key: "infinite-spacer-".concat(index)
  });
};
/* eslint-enable react/forbid-dom-props */
var InfiniteList = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(InfiniteList, _React$Component);
  var _super = _createSuper(InfiniteList);
  function InfiniteList(props) {
    var _this;
    (0, _classCallCheck2.default)(this, InfiniteList);
    _this = _super.call(this, props);
    _this.update = _this.update.bind((0, _assertThisInitialized2.default)(_this));
    _this.resetCache = _this.resetCache.bind((0, _assertThisInitialized2.default)(_this));
    _this.setContentNode = _this.setContentNode.bind((0, _assertThisInitialized2.default)(_this));
    _this.updateItemCache = _this.updateItemCache.bind((0, _assertThisInitialized2.default)(_this));
    _this.initializeItemCache = _this.initializeItemCache.bind((0, _assertThisInitialized2.default)(_this));
    _this.updateScrollGroups = _this.updateScrollGroups.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRenderCompletion = _this.handleRenderCompletion.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleResize = _this.resizeDebounce(_this.handleResize.bind((0, _assertThisInitialized2.default)(_this)));
    _this.resetTimeout = _this.resetTimeout.bind((0, _assertThisInitialized2.default)(_this));
    _this.wrapChild = _this.wrapChild.bind((0, _assertThisInitialized2.default)(_this));
    _this.ariaLiveStatus = '';
    _this.updateAriaLiveLoadingStatus = _this.updateAriaLiveLoadingStatus.bind((0, _assertThisInitialized2.default)(_this));
    _this.resetCache();
    _this.initializeItemCache(props);
    return _this;
  }
  (0, _createClass2.default)(InfiniteList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (this.contentNode) {
        this.resizeObserver = new _resizeObserverPolyfill.default(function (entries) {
          _this2.content = entries[0].contentRect;
          if (!_this2.isCalculating) {
            _this2.animationFrameID = window.requestAnimationFrame(function () {
              // Resetting the cache so that all elements will be rendered face-up for width calculations
              _this2.resetCache();
              _this2.forceUpdate();
            });
          }
        });
        this.handleResize(this.content);
        this.resizeObserver.observe(this.contentNode);
      }
      this.contentNode.addEventListener('scroll', this.update);
      this.updateScrollGroups();
      this.handleRenderCompletion();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var newChildCount = _react.default.Children.count(nextProps.children);
      if (newChildCount > this.childCount) {
        this.lastChildIndex = this.childCount;
        this.loadingIndex += 1;
        this.updateItemCache(nextProps);
      } else if (newChildCount < this.childCount) {
        this.initializeItemCache(nextProps);
      } else {
        this.childrenArray = _react.default.Children.toArray(nextProps.children);
      }
      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.isCalculating) {
        this.isCalculating = false;
        this.handleResize(this.content);
      }
      this.handleRenderCompletion();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.contentNode) {
        clearTimeout(this.timer);
        window.cancelAnimationFrame(this.animationFrameID);
        this.resizeObserver.disconnect(this.contentNode);
        this.contentNode.removeEventListener('scroll', this.update);
        this.content = null;
      }
    }

    /**
     * Following a render reset newChildren values. If new items were render trigger an update calculation.
     */
  }, {
    key: "handleRenderCompletion",
    value: function handleRenderCompletion() {
      this.renderNewChildren = false;
      this.preventUpdate = false;
      this.lastChildIndex = this.childCount;
      if (this.isRenderingNew) {
        this.isRenderingNew = false;
        this.update(null, false, true); // Prevent from triggering an item request to avoid infinite loop of loading.
      } else if (this.contentNode && _InfiniteUtils.default.shouldTriggerItemRequest(_InfiniteUtils.default.getContentData(this.contentNode))) {
        this.triggerItemRequest();
      }
    }

    /**
     * Triggers a height adjustment if the height or scroll height changes.
     */
  }, {
    key: "handleResize",
    value: function handleResize() {
      if (this.scrollHeight !== this.contentNode.scrollHeight || this.clientHeight !== this.contentNode.clientHeight) {
        this.adjustHeight();
      }
      this.forceUpdate();
    }

    /**
     * Sets the html node of contentNode and if it was previously undefined trigger updateScrollGroups.
     * @param {node} node - Html node of the List.
     */
  }, {
    key: "setContentNode",
    value: function setContentNode(node) {
      var wasUndefined = !this.contentNode;
      this.contentNode = node;
      if (this.contentNode && wasUndefined) {
        this.updateScrollGroups();
      }
    }

    /**
     * If a request for items has not been made and/or updates are not pending trigger onRequestItems.
     */
  }, {
    key: "triggerItemRequest",
    value: function triggerItemRequest() {
      if (!this.props.isFinishedLoading && !this.hasRequestedItems && !this.isRenderingNew && this.props.onRequestItems) {
        this.hasRequestedItems = true;
        this.props.onRequestItems();
        this.updateAriaLiveLoadingStatus();
      }
    }
  }, {
    key: "updateAriaLiveLoadingStatus",
    value: function updateAriaLiveLoadingStatus() {
      var _this3 = this;
      this.ariaLiveStatus = this.props.progressiveLoadingMessage ? this.props.progressiveLoadingMessage : this.props.intl.formatMessage({
        id: 'Terra.InfiniteList.loading'
      });
      // Clears status so aria live announces correctly next time more items are loaded
      setTimeout(function () {
        _this3.ariaLiveStatus = '';
      }, 1000);
    }

    /**
     * Cache the value for the child count and convert the children props to an array.
     * @param {object} props - React element props.
     */
  }, {
    key: "updateItemCache",
    value: function updateItemCache(props) {
      this.childCount = _react.default.Children.count(props.children);
      this.childrenArray = _react.default.Children.toArray(props.children);
      this.hasRequestedItems = false;
      this.renderNewChildren = true;
    }

    /**
     * Set the initial state of the virtualization values for the list.
     * @param {object} props - React element props.
     */
  }, {
    key: "initializeItemCache",
    value: function initializeItemCache(props) {
      this.loadingIndex = 0;
      this.lastChildIndex = -1;
      this.itemsByIndex = [];
      this.scrollGroups = [];
      this.boundary = {
        topBoundryIndex: -1,
        hiddenTopHeight: -1,
        bottomBoundryIndex: -1,
        hiddenBottomHeight: -1
      };
      this.updateItemCache(props);
    }

    /**
     * Reset the timeout on this.timer.
     * @param {function} fn - The handleResize function.
     * @param {object} args - Arguments passed to the handleResize function.
     * @param {context} context - Javascript context.
     * @param {double} now - DOMHighResTimeStamp.
     */
  }, {
    key: "resetTimeout",
    value: function resetTimeout(fn, args, context, now) {
      var _this4 = this;
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this4.last = now;
        _this4.disableScroll = false;
        fn.apply(context, args);
      }, 250);
    }

    /**
     * Debounce the size event and prevent updates from scrolling.
     * @param {function} fn - The handleResize function.
     */
  }, {
    key: "resizeDebounce",
    value: function resizeDebounce(fn) {
      var _this5 = this;
      return function () {
        var context = _this5;
        var now = performance.now();
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (_this5.last && now < _this5.last + 250) {
          _this5.resetTimeout(fn, args, context, now);
        } else {
          _this5.last = now;
          _this5.disableScroll = true;
          _this5.resetTimeout(fn, args, context, now);
        }
      };
    }
  }, {
    key: "resetCache",
    value: function resetCache() {
      this.animationFrameID = null;
      this.isCalculating = true;
    }

    /**
     * Calculates the visible scroll items and if the hidden items have changed force an update.
     * @param {object} event - Browser DOM event.
     * @param {bool} ensureUpdate - Regardless of calculation ensure a forceUpdate occurs.
     * @param {bool} preventRequest - Should triggerItemRequest be prevented.
     */
  }, {
    key: "update",
    value: function update(event, ensureUpdate, preventRequest) {
      if (!this.contentNode || this.disableScroll || this.preventUpdate) {
        return;
      }
      var contentData = _InfiniteUtils.default.getContentData(this.contentNode);
      var hiddenItems = _InfiniteUtils.default.getHiddenItems(this.scrollGroups, contentData, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex);
      this.scrollHeight = contentData.scrollHeight;
      this.clientHeight = contentData.clientHeight;
      if (ensureUpdate || hiddenItems.topHiddenItem.index !== this.boundary.topBoundryIndex || hiddenItems.bottomHiddenItem.index !== this.boundary.bottomBoundryIndex) {
        this.preventUpdate = true;
        this.boundary = {
          topBoundryIndex: hiddenItems.topHiddenItem.index,
          hiddenTopHeight: hiddenItems.topHiddenItem.height,
          bottomBoundryIndex: hiddenItems.bottomHiddenItem.index,
          hiddenBottomHeight: hiddenItems.bottomHiddenItem.height
        };
        this.forceUpdate();
      }
      if (!preventRequest && _InfiniteUtils.default.shouldTriggerItemRequest(contentData)) {
        this.triggerItemRequest();
      }
    }

    /**
     * Groups scroll items by height to reduce the number of refreshs that occur on scroll.
     */
  }, {
    key: "updateScrollGroups",
    value: function updateScrollGroups() {
      if (!this.contentNode) {
        return;
      }
      var groupHeight = 0;
      var groupIndex = 0;
      var captureOffsetTop = true;
      var maxGroupHeight = 1 * this.contentNode.clientHeight;
      this.scrollGroups = [];
      for (var i = 0; i < this.itemsByIndex.length; i += 1) {
        var item = this.itemsByIndex[i];
        if (this.scrollGroups[groupIndex] && item.height >= maxGroupHeight) {
          groupHeight = 0;
          groupIndex += 1;
          captureOffsetTop = true;
        }
        groupHeight += item.height;
        this.scrollGroups[groupIndex] = this.scrollGroups[groupIndex] || {
          items: []
        };
        this.scrollGroups[groupIndex].items.push(i);
        this.scrollGroups[groupIndex].height = groupHeight;
        this.itemsByIndex[i].groupIndex = groupIndex;
        if (captureOffsetTop) {
          this.scrollGroups[groupIndex].offsetTop = this.itemsByIndex[i].offsetTop;
          captureOffsetTop = false;
        }
        if (groupHeight >= maxGroupHeight) {
          groupHeight = 0;
          groupIndex += 1;
          captureOffsetTop = true;
        }
      }
    }

    /**
     * Checks the boundingClientRect for the scroll item's height and offsetTop then caches it.
     * @param {node} node - The child node for the scroll item.
     * @param {number} index - Index of the child.
     */
  }, {
    key: "updateHeight",
    value: function updateHeight(node, index) {
      if (node) {
        this.itemsByIndex[index] = this.itemsByIndex[index] || {};
        var updatedHeight = false;
        var newHeight = node.getBoundingClientRect().height;
        if (!this.itemsByIndex[index].height || Math.abs(this.itemsByIndex[index].height - newHeight) > 1) {
          this.itemsByIndex[index].height = newHeight;
          updatedHeight = true;
        }
        if (!this.itemsByIndex[index].offsetTop || Math.abs(this.itemsByIndex[index].offsetTop - node.offsetTop) > 1) {
          this.itemsByIndex[index].offsetTop = node.offsetTop;
        }
        if (this.itemsByIndex.length === this.childCount) {
          if (!this.scrollGroups.length) {
            this.updateScrollGroups();
          } else if (updatedHeight) {
            this.adjustHeight();
          }
        }
      }
    }

    /**
     * Detects which scroll items are on the dom and reads the heights to see if resize has changed the boundClientRect.
     */
  }, {
    key: "adjustHeight",
    value: function adjustHeight() {
      var _this6 = this;
      if (this.contentNode) {
        this.itemsByIndex.forEach(function (item, itemIndex) {
          var scrollItemNode = _this6.contentNode.querySelector("[data-infinite-list-index=\"".concat(itemIndex, "\"]"));
          if (scrollItemNode) {
            var newHeight = scrollItemNode.getBoundingClientRect().height;
            if (!_this6.itemsByIndex[itemIndex].height || Math.abs(newHeight - _this6.itemsByIndex[itemIndex].height) > 1) {
              _this6.itemsByIndex[itemIndex].height = newHeight;
            }
            if (!_this6.itemsByIndex[itemIndex].offsetTop || Math.abs(_this6.itemsByIndex[itemIndex].offsetTop - scrollItemNode.offsetTop) > 1) {
              _this6.itemsByIndex[itemIndex].offsetTop = scrollItemNode.offsetTop;
            }
            _this6.adjustTrailingItems(itemIndex);
          }
        });

        // needs to update offset tops of every other save
        this.updateScrollGroups();
        this.boundary = {
          topBoundryIndex: -1,
          hiddenTopHeight: -1,
          bottomBoundryIndex: -1,
          hiddenBottomHeight: -1
        };
        this.update(null, true);
      }
    }

    /**
     * Updates the offsetTop of scroll items following the element that adjusted it's height.
     * @param {number} index - Index of the scroll item that had adjusted it's height.
     */
  }, {
    key: "adjustTrailingItems",
    value: function adjustTrailingItems(index) {
      var lastTop = this.itemsByIndex[index].offsetTop;
      var lastHeight = this.itemsByIndex[index].height;
      for (var i = index + 1; i < this.itemsByIndex.length; i += 1) {
        lastTop += lastHeight;
        lastHeight = this.itemsByIndex[i].height;
        this.itemsByIndex[i].offsetTop = lastTop;
      }
    }

    /**
     * Clones the child element with new props for selection, refCallback,  and data attributes.
     * @param {element} child - React child element.
     * @param {number} index - Index of the child element.
     */
  }, {
    key: "wrapChild",
    value: function wrapChild(child, index) {
      var _this7 = this;
      var wrappedCallback = function wrappedCallback(node) {
        _this7.updateHeight(node, index);
        if (child.props.refCallback) {
          child.props.refCallback(node);
        }
      };
      var newProps = {
        refCallback: wrappedCallback,
        'data-infinite-list-index': index
      };
      return /*#__PURE__*/_react.default.cloneElement(child, newProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        ariaLabel = _this$props.ariaLabel,
        children = _this$props.children,
        dividerStyle = _this$props.dividerStyle,
        initialLoadingIndicator = _this$props.initialLoadingIndicator,
        intl = _this$props.intl,
        isFinishedLoading = _this$props.isFinishedLoading,
        onRequestItems = _this$props.onRequestItems,
        paddingStyle = _this$props.paddingStyle,
        progressiveLoadingIndicator = _this$props.progressiveLoadingIndicator,
        progressiveLoadingMessage = _this$props.progressiveLoadingMessage,
        role = _this$props.role,
        refCallback = _this$props.refCallback,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var topSpacer = createSpacer("".concat(this.boundary.hiddenTopHeight > 0 ? this.boundary.hiddenTopHeight : 0, "px"), 0);
      var bottomSpacer = createSpacer("".concat(this.boundary.hiddenBottomHeight > 0 ? this.boundary.hiddenBottomHeight : 0, "px"), 1);
      var loadingSpinner;
      var initialSpinner;
      if (!isFinishedLoading) {
        if (this.childCount > 0) {
          loadingSpinner = /*#__PURE__*/_react.default.createElement("div", {
            className: cx('spacer'),
            key: "infinite-spinner-row-".concat(this.loadingIndex)
          }, progressiveLoadingIndicator);
        } else {
          /* eslint-disable react/forbid-dom-props */
          initialSpinner = /*#__PURE__*/_react.default.createElement("div", {
            className: cx('spacer'),
            key: "infinite-spinner-full",
            style: {
              height: '100%'
            }
          }, initialLoadingIndicator);
          /* eslint-enable react/forbid-dom-props */
        }
      }

      var attrSpread = {
        dividerStyle: dividerStyle,
        paddingStyle: paddingStyle
      };
      if (role && role.length > 0 && role !== 'none') {
        attrSpread.role = role;
      }
      var newChildren;
      var visibleChildren;
      if (!initialSpinner) {
        var upperChildIndex = this.lastChildIndex;
        if (!this.scrollGroups.length && this.lastChildIndex <= 0 || !this.renderNewChildren) {
          upperChildIndex = this.childCount;
        } else {
          newChildren = /*#__PURE__*/_react.default.createElement(_terraList.default, (0, _extends2.default)({}, attrSpread, {
            className: cx(['infinite-hidden'])
          }), _InfiniteUtils.default.getNewChildren(this.lastChildIndex, this.childrenArray, this.wrapChild));
          this.isRenderingNew = true;
        }
        visibleChildren = _InfiniteUtils.default.getVisibleChildren(this.scrollGroups, this.childrenArray, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex, this.wrapChild, upperChildIndex);
      }
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
        className: cx(['infinite-list', customProps.className]),
        ref: this.setContentNode
      }), initialSpinner, topSpacer, /*#__PURE__*/_react.default.createElement(_terraList.default, (0, _extends2.default)({}, attrSpread, {
        "aria-label": ariaLabel,
        refCallback: refCallback
      }), visibleChildren), bottomSpacer, loadingSpinner), newChildren, /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
        "aria-atomic": "true",
        "aria-live": "assertive",
        text: this.ariaLiveStatus
      }));
    }
  }]);
  return InfiniteList;
}(_react.default.Component);
InfiniteList.propTypes = propTypes;
InfiniteList.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(InfiniteList);
exports.default = _default;