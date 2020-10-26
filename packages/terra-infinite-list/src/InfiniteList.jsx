import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ResizeObserver from 'resize-observer-polyfill';
import List from 'terra-list';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import InfiniteUtils from './_InfiniteUtils';
import styles from './InfiniteList.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String that labels the list for screen readers.
   */
  ariaLabel: PropTypes.string,
  /**
   * The child list items, of type InfiniteList Item, to be placed within the infinite list.
   * For further documentation of InfiniteList Item see terra-list's ListItem.
   */
  children: PropTypes.node,
  /**
   * Whether or not the list's child items should have a border color applied.
   * One of `'none'`, `'standard'`, `'bottom-only'`.
   */
  dividerStyle: PropTypes.oneOf(['none', 'standard', 'bottom-only']),
  /**
   * An indicator to be displayed when no children are yet present.
   */
  initialLoadingIndicator: PropTypes.element,
  /**
   * @private
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
  /**
   * Determines whether or not the loading indicator is visible and if callbacks are triggered.
   */
  isFinishedLoading: PropTypes.bool,
  /**
   * Callback trigger when new list items are requested.
   */
  onRequestItems: PropTypes.func,
  /**
   * The padding styling to apply to the child list item content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * An indicator to be displayed at the end of the current loaded children.
   */
  progressiveLoadingIndicator: PropTypes.element,
  /**
   * A message to be provided to screen readers as new items are progressively loaded in
   */
  progressiveLoadingMessage: PropTypes.string,
  /**
   * Accessibility role of the list, defaults to 'none'. If creating a list with selectable items, pass 'listbox'.
   */
  role: PropTypes.string,
  /**
   * Function callback for the ref of the List(ul).
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  children: [],
  dividerStyle: 'none',
  isFinishedLoading: false,
  paddingStyle: 'none',
  progressiveLoadingMessage: undefined,
  role: 'none',
};

/**
 * Returns a ListItem sized according to the provided height to use as a spacer.
 * @param {number} height - Height to set on the ListItem.
 * @param {number} index - Index to use as part of the spacers key.
 */
/* eslint-disable react/forbid-dom-props */
const createSpacer = (height, index) => (
  <div
    className={cx(['spacer'])}
    style={{ height }}
    key={`infinite-spacer-${index}`}
  />
);
/* eslint-enable react/forbid-dom-props */

class InfiniteList extends React.Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.updateItemCache = this.updateItemCache.bind(this);
    this.initializeItemCache = this.initializeItemCache.bind(this);
    this.updateScrollGroups = this.updateScrollGroups.bind(this);
    this.handleRenderCompletion = this.handleRenderCompletion.bind(this);
    this.handleResize = this.resizeDebounce(this.handleResize.bind(this));
    this.resetTimeout = this.resetTimeout.bind(this);
    this.wrapChild = this.wrapChild.bind(this);
    this.ariaLiveStatus = '';
    this.updateAriaLiveLoadingStatus = this.updateAriaLiveLoadingStatus.bind(this);

    this.resetCache();
    this.initializeItemCache(props);
  }

  componentDidMount() {
    if (this.contentNode) {
      this.resizeObserver = new ResizeObserver((entries) => {
        this.content = entries[0].contentRect;
        if (!this.isCalculating) {
          this.animationFrameID = window.requestAnimationFrame(() => {
            // Resetting the cache so that all elements will be rendered face-up for width calculations
            this.resetCache();
            this.forceUpdate();
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

  shouldComponentUpdate(nextProps) {
    const newChildCount = React.Children.count(nextProps.children);
    if (newChildCount > this.childCount) {
      this.lastChildIndex = this.childCount;
      this.loadingIndex += 1;
      this.updateItemCache(nextProps);
    } else if (newChildCount < this.childCount) {
      this.initializeItemCache(nextProps);
    } else {
      this.childrenArray = React.Children.toArray(nextProps.children);
    }

    return true;
  }

  componentDidUpdate() {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.content);
    }
    this.handleRenderCompletion();
  }

  componentWillUnmount() {
    if (this.contentNode) {
      clearTimeout(this.timer);
      window.cancelAnimationFrame(this.animationFrameID);
      this.resizeObserver.disconnect(this.contentNode);
      this.contentNode.removeEventListener('scroll', this.update);
      this.content = null;
    }
  }

  /**
   * Sets the html node of contentNode and if it was previously undefined trigger updateScrollGroups.
   * @param {node} node - Html node of the List.
   */
  setContentNode(node) {
    const wasUndefined = !this.contentNode;
    this.contentNode = node;

    if (this.contentNode && wasUndefined) {
      this.updateScrollGroups();
    }
  }

  /**
   * If a request for items has not been made and/or updates are not pending trigger onRequestItems.
   */
  triggerItemRequest() {
    if (!this.props.isFinishedLoading && !this.hasRequestedItems && !this.isRenderingNew && this.props.onRequestItems) {
      this.hasRequestedItems = true;
      this.props.onRequestItems();
      this.updateAriaLiveLoadingStatus();
    }
  }

  updateAriaLiveLoadingStatus() {
    this.ariaLiveStatus = this.props.progressiveLoadingMessage ? this.props.progressiveLoadingMessage : this.props.intl.formatMessage({ id: 'Terra.InfiniteList.loading' });
    // Clears status so aria live announces correctly next time more items are loaded
    setTimeout(() => {
      this.ariaLiveStatus = '';
    }, 1000);
  }

  /**
   * Following a render reset newChildren values. If new items were render trigger an update calculation.
   */
  handleRenderCompletion() {
    this.renderNewChildren = false;
    this.preventUpdate = false;
    this.lastChildIndex = this.childCount;
    if (this.isRenderingNew) {
      this.isRenderingNew = false;
      this.update(null, false, true); // Prevent from triggering an item request to avoid infinite loop of loading.
    } else if (this.contentNode && InfiniteUtils.shouldTriggerItemRequest(InfiniteUtils.getContentData(this.contentNode))) {
      this.triggerItemRequest();
    }
  }

  /**
   * Cache the value for the child count and convert the children props to an array.
   * @param {object} props - React element props.
   */
  updateItemCache(props) {
    this.childCount = React.Children.count(props.children);
    this.childrenArray = React.Children.toArray(props.children);
    this.hasRequestedItems = false;
    this.renderNewChildren = true;
  }

  /**
   * Set the initial state of the virtualization values for the list.
   * @param {object} props - React element props.
   */
  initializeItemCache(props) {
    this.loadingIndex = 0;
    this.lastChildIndex = -1;
    this.itemsByIndex = [];
    this.scrollGroups = [];
    this.boundary = {
      topBoundryIndex: -1,
      hiddenTopHeight: -1,
      bottomBoundryIndex: -1,
      hiddenBottomHeight: -1,
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
  resetTimeout(fn, args, context, now) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.last = now;
      this.disableScroll = false;
      fn.apply(context, args);
    }, 250);
  }

  /**
   * Debounce the size event and prevent updates from scrolling.
   * @param {function} fn - The handleResize function.
   */
  resizeDebounce(fn) {
    return (...args) => {
      const context = this;
      const now = performance.now();
      if (this.last && now < this.last + 250) {
        this.resetTimeout(fn, args, context, now);
      } else {
        this.last = now;
        this.disableScroll = true;
        this.resetTimeout(fn, args, context, now);
      }
    };
  }

  resetCache() {
    this.animationFrameID = null;
    this.isCalculating = true;
  }

  /**
   * Triggers a height adjustment if the height or scroll height changes.
   */
  handleResize() {
    if (this.scrollHeight !== this.contentNode.scrollHeight || this.clientHeight !== this.contentNode.clientHeight) {
      this.adjustHeight();
    }
    this.forceUpdate();
  }

  /**
   * Calculates the visible scroll items and if the hidden items have changed force an update.
   * @param {object} event - Browser DOM event.
   * @param {bool} ensureUpdate - Regardless of calculation ensure a forceUpdate occurs.
   * @param {bool} preventRequest - Should triggerItemRequest be prevented.
   */
  update(event, ensureUpdate, preventRequest) {
    if (!this.contentNode || this.disableScroll || this.preventUpdate) {
      return;
    }

    const contentData = InfiniteUtils.getContentData(this.contentNode);
    const hiddenItems = InfiniteUtils.getHiddenItems(this.scrollGroups, contentData, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex);
    this.scrollHeight = contentData.scrollHeight;
    this.clientHeight = contentData.clientHeight;

    if (ensureUpdate || hiddenItems.topHiddenItem.index !== this.boundary.topBoundryIndex || hiddenItems.bottomHiddenItem.index !== this.boundary.bottomBoundryIndex) {
      this.preventUpdate = true;
      this.boundary = {
        topBoundryIndex: hiddenItems.topHiddenItem.index,
        hiddenTopHeight: hiddenItems.topHiddenItem.height,
        bottomBoundryIndex: hiddenItems.bottomHiddenItem.index,
        hiddenBottomHeight: hiddenItems.bottomHiddenItem.height,
      };
      this.forceUpdate();
    }

    if (!preventRequest && InfiniteUtils.shouldTriggerItemRequest(contentData)) {
      this.triggerItemRequest();
    }
  }

  /**
   * Groups scroll items by height to reduce the number of refreshs that occur on scroll.
   */
  updateScrollGroups() {
    if (!this.contentNode) {
      return;
    }

    let groupHeight = 0;
    let groupIndex = 0;
    let captureOffsetTop = true;
    const maxGroupHeight = 1 * this.contentNode.clientHeight;
    this.scrollGroups = [];
    for (let i = 0; i < this.itemsByIndex.length; i += 1) {
      const item = this.itemsByIndex[i];
      if (this.scrollGroups[groupIndex] && item.height >= maxGroupHeight) {
        groupHeight = 0;
        groupIndex += 1;
        captureOffsetTop = true;
      }

      groupHeight += item.height;
      this.scrollGroups[groupIndex] = this.scrollGroups[groupIndex] || { items: [] };
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
  updateHeight(node, index) {
    if (node) {
      this.itemsByIndex[index] = this.itemsByIndex[index] || {};
      let updatedHeight = false;
      const newHeight = node.getBoundingClientRect().height;
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
  adjustHeight() {
    if (this.contentNode) {
      this.itemsByIndex.forEach((item, itemIndex) => {
        const scrollItemNode = this.contentNode.querySelector(`[data-infinite-list-index="${itemIndex}"]`);
        if (scrollItemNode) {
          const newHeight = scrollItemNode.getBoundingClientRect().height;
          if (!this.itemsByIndex[itemIndex].height || Math.abs(newHeight - this.itemsByIndex[itemIndex].height) > 1) {
            this.itemsByIndex[itemIndex].height = newHeight;
          }
          if (!this.itemsByIndex[itemIndex].offsetTop || Math.abs(this.itemsByIndex[itemIndex].offsetTop - scrollItemNode.offsetTop) > 1) {
            this.itemsByIndex[itemIndex].offsetTop = scrollItemNode.offsetTop;
          }
          this.adjustTrailingItems(itemIndex);
        }
      });

      // needs to update offset tops of every other save
      this.updateScrollGroups();
      this.boundary = {
        topBoundryIndex: -1,
        hiddenTopHeight: -1,
        bottomBoundryIndex: -1,
        hiddenBottomHeight: -1,
      };
      this.update(null, true);
    }
  }

  /**
   * Updates the offsetTop of scroll items following the element that adjusted it's height.
   * @param {number} index - Index of the scroll item that had adjusted it's height.
   */
  adjustTrailingItems(index) {
    let lastTop = this.itemsByIndex[index].offsetTop;
    let lastHeight = this.itemsByIndex[index].height;
    for (let i = index + 1; i < this.itemsByIndex.length; i += 1) {
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
  wrapChild(child, index) {
    const wrappedCallback = (node) => {
      this.updateHeight(node, index);
      if (child.props.refCallback) {
        child.props.refCallback(node);
      }
    };
    const newProps = {
      refCallback: wrappedCallback,
      'data-infinite-list-index': index,
    };
    return React.cloneElement(child, newProps);
  }

  render() {
    const {
      ariaLabel,
      children,
      dividerStyle,
      initialLoadingIndicator,
      intl,
      isFinishedLoading,
      onRequestItems,
      paddingStyle,
      progressiveLoadingIndicator,
      progressiveLoadingMessage,
      role,
      refCallback,
      ...customProps
    } = this.props;

    const topSpacer = createSpacer(`${this.boundary.hiddenTopHeight > 0 ? this.boundary.hiddenTopHeight : 0}px`, 0);
    const bottomSpacer = createSpacer(`${this.boundary.hiddenBottomHeight > 0 ? this.boundary.hiddenBottomHeight : 0}px`, 1);

    let loadingSpinner;
    let initialSpinner;
    if (!isFinishedLoading) {
      if (this.childCount > 0) {
        loadingSpinner = (
          <div
            className={cx('spacer')}
            key={`infinite-spinner-row-${this.loadingIndex}`}
          >
            {progressiveLoadingIndicator}
          </div>
        );
      } else {
        /* eslint-disable react/forbid-dom-props */
        initialSpinner = (
          <div
            className={cx('spacer')}
            key="infinite-spinner-full"
            style={{ height: '100%' }}
          >
            {initialLoadingIndicator}
          </div>
        );
        /* eslint-enable react/forbid-dom-props */
      }
    }

    const attrSpread = { dividerStyle, paddingStyle };
    if (role && role.length > 0 && role !== 'none') {
      attrSpread.role = role;
    }

    let newChildren;
    let visibleChildren;
    if (!initialSpinner) {
      let upperChildIndex = this.lastChildIndex;
      if ((!this.scrollGroups.length && this.lastChildIndex <= 0) || !this.renderNewChildren) {
        upperChildIndex = this.childCount;
      } else {
        newChildren = (
          <List {...attrSpread} className={cx(['infinite-hidden'])}>
            {InfiniteUtils.getNewChildren(this.lastChildIndex, this.childrenArray, this.wrapChild)}
          </List>
        );
        this.isRenderingNew = true;
      }
      visibleChildren = InfiniteUtils.getVisibleChildren(this.scrollGroups, this.childrenArray, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex, this.wrapChild, upperChildIndex);
    }

    return (
      <React.Fragment>
        <div {...customProps} className={cx(['infinite-list', customProps.className])} ref={this.setContentNode}>
          {initialSpinner}
          {topSpacer}
          <List {...attrSpread} aria-label={ariaLabel} refCallback={refCallback}>
            {visibleChildren}
          </List>
          {bottomSpacer}
          {loadingSpinner}
        </div>
        {newChildren}
        <VisuallyHiddenText aria-atomic="true" aria-live="assertive" text={this.ariaLiveStatus} />
      </React.Fragment>
    );
  }
}

InfiniteList.propTypes = propTypes;
InfiniteList.defaultProps = defaultProps;

export default injectIntl(InfiniteList);
