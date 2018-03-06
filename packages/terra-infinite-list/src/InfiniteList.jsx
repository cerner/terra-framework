import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ResizeObserver from 'resize-observer-polyfill';
import List from 'terra-list';
import SelectableUtils from 'terra-list/lib/SelectableUtils';
import InfiniteUtils from './_InfiniteUtils';
import styles from './InfiniteList.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child list items to be placed within the infinite list.
   */
  children: PropTypes.node,
  /**
   * Whether or not unselected items should be disabled.
   * Helpful for enabling max row selection.
   */
  disableUnselectedItems: PropTypes.bool,
  /**
   * Whether or not the child list items has a disclosure indicator presented.
   * The behavior is intended to be used with a single selection style list, as multi selection style list should not perform disclosures.
   */
  hasChevrons: PropTypes.bool,
  /**
   * Properties related to the list styling.
   */
  infiniteProps: PropTypes.shape({
    /**
     * An indicator to be displayed when no children are yet present.
     */
    initialLoadingIndicator: PropTypes.element,
    /**
     * Determines whether or not the loading indicator is visible and if callbacks are triggered.
     */
    isFinishedLoading: PropTypes.bool,
    /**
     * Callback trigger when new list items are requested..
     */
    onRequestItems: PropTypes.func,
    /**
     * An indicator to be displayed at the end of the current loaded children.
     */
    progressiveLoadingIndicator: PropTypes.element,
  }),
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: PropTypes.bool,
  /**
   * Whether or not the list is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * An array of the currectly selected indexes.
   */
  selectedIndexes: PropTypes.array,
};

const defaultProps = {
  children: [],
  disableUnselectedItems: false,
  hasChevrons: false,
  infiniteProps: {},
  isDivided: false,
  isSelectable: false,
  selectedIndexes: [],
};

const createSpacer = (height, index) => <List.Item isSelectable={false} className={cx(['spacer'])} style={{ height }} key={`infinite-spacer-${index}`} />;

class InfiniteList extends React.Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.enableListeners = this.enableListeners.bind(this);
    this.disableListeners = this.disableListeners.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.updateItemCache = this.updateItemCache.bind(this);
    this.initializeItemCache = this.initializeItemCache.bind(this);
    this.updateScrollGroups = this.updateScrollGroups.bind(this);
    this.handleResize = this.resizeDebounce(this.handleResize.bind(this));
    this.resetTimeout = this.resetTimeout.bind(this);
    this.wrapChild = this.wrapChild.bind(this);

    this.initializeItemCache(props);
    this.preventInitialAdjust = true;
  }

  componentDidMount() {
    if (!this.listenersAdded) {
      this.enableListeners();
    }
    this.triggerItemRequest();
  }

  componentWillReceiveProps(newProps) {
    const newChildCount = React.Children.count(newProps.children);
    if (newChildCount > this.childCount) {
      this.lastChildIndex = this.childCount;
      this.loadingIndex += 1;
      this.updateItemCache(newProps);
    } else if (newChildCount < this.childCount) {
      this.initializeItemCache(newProps);
    }
  }

  componentDidUpdate() {
    if (!this.listenersAdded) {
      this.enableListeners();
    }
    this.renderNewChildren = false;
    this.preventUpdate = false;
    this.lastChildIndex = this.childCount;
  }

  componentWillUnmount() {
    this.disableListeners();
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  triggerItemRequest() {
    if (!this.props.infiniteProps.isFinishedLoading && !this.hasRequestedItems && this.props.infiniteProps.onRequestItems) {
      this.hasRequestedItems = true;
      this.props.infiniteProps.onRequestItems();
    }
  }

  updateItemCache(props) {
    this.childCount = React.Children.count(props.children);
    this.childrenArray = React.Children.toArray(props.children);
    this.hasRequestedItems = false;
    this.renderNewChildren = true;
  }

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

  enableListeners() {
    if (!this.contentNode) {
      return;
    }
    this.resizeObserver = new ResizeObserver((entries) => {
      this.handleResize(entries[0].contentRect);
    });
    this.resizeObserver.observe(this.contentNode);
    this.contentNode.addEventListener('scroll', this.update);
    this.listenersAdded = true;
  }

  disableListeners() {
    if (!this.contentNode) {
      return;
    }
    this.resizeObserver.disconnect(this.contentNode);
    this.contentNode.removeEventListener('scroll', this.update);
    this.listenersAdded = false;
  }

  resetTimeout(fn, args, context, now) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.last = now;
      this.disableScroll = false;
      fn.apply(context, args);
    }, 250);
  }

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

  handleResize() {
    if (this.scrollHeight !== this.contentNode.scrollHeight) {
      this.adjustHeight();
    }
  }

  update() {
    if (!this.contentNode || this.disableScroll || this.preventUpdate) {
      return;
    }

    const contentData = InfiniteUtils.getContentData(this.contentNode);
    const hiddenItems = InfiniteUtils.getHiddenItems(this.scrollGroups, contentData, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex);
    this.scrollHeight = contentData.scrollHeight;

    if (hiddenItems.topHiddenItem.index !== this.boundary.topBoundryIndex || hiddenItems.bottomHiddenItem.index !== this.boundary.bottomBoundryIndex) {
      this.preventUpdate = true;
      this.boundary = {
        topBoundryIndex: hiddenItems.topHiddenItem.index,
        hiddenTopHeight: hiddenItems.topHiddenItem.height,
        bottomBoundryIndex: hiddenItems.bottomHiddenItem.index,
        hiddenBottomHeight: hiddenItems.bottomHiddenItem.height,
      };
      this.forceUpdate();
    }

    if (InfiniteUtils.shouldTriggerItemRequest(contentData)) {
      this.triggerItemRequest();
    }
  }

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

  updateHeight(node, index) {
    if (node) {
      this.itemsByIndex[index] = this.itemsByIndex[index] || {};
      let updatedHeight = false;
      if (!this.itemsByIndex[index].height || Math.abs(this.itemsByIndex[index].height - node.clientHeight) > 1) {
        this.itemsByIndex[index].height = node.clientHeight;
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

  adjustHeight() {
    if (this.preventInitialAdjust) {
      this.preventInitialAdjust = false;
      return;
    }
    if (this.contentNode) {
      this.itemsByIndex.forEach((item, itemIndex) => {
        const scrollItemNode = this.contentNode.querySelector(`[data-infinite-list-index="${itemIndex}"]`);
        if (scrollItemNode) {
          if (!this.itemsByIndex[itemIndex].height || Math.abs(scrollItemNode.clientHeight - this.itemsByIndex[itemIndex].height) > 1) {
            this.itemsByIndex[itemIndex].height = scrollItemNode.clientHeight;
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
      this.update();
    }
  }

  adjustTrailingItems(index) {
    let lastTop = this.itemsByIndex[index].offsetTop;
    let lastHeight = this.itemsByIndex[index].height;
    for (let i = index + 1; i < this.itemsByIndex.length; i += 1) {
      lastTop += lastHeight;
      lastHeight = this.itemsByIndex[i].height;
      this.itemsByIndex[i].offsetTop = lastTop;
    }
  }

  wrapChild(child, index) {
    const wrappedCallBack = (node) => {
      this.updateHeight(node, index);
      if (child.props.refCallback) {
        child.props.refCallback(node);
      }
    };

    let newProps = {};
    if (this.props.isSelectable) {
      const wrappedOnClick = SelectableUtils.wrappedOnClickForItem(child, index, this.props.onChange);
      const wrappedOnKeyDown = SelectableUtils.wrappedOnKeyDownForItem(child, index, this.props.onChange);
      newProps = SelectableUtils.newPropsForItem(child, index, wrappedOnClick, wrappedOnKeyDown, this.props.hasChevrons, this.props.selectedIndexes, this.props.disableUnselectedItems);
    }

    newProps.refCallback = wrappedCallBack;
    newProps['data-infinite-list-index'] = index;
    newProps.style = child.props.style ? Object.assign({}, child.props.style, { overflow: 'hidden' }) : { overflow: 'hidden' };
    return React.cloneElement(child, newProps);
  }

  render() {
    const {
      children,
      disableUnselectedItems,
      hasChevrons,
      infiniteProps,
      isDivided,
      isSelectable,
      selectedIndexes,
      ...customProps
    } = this.props;
    const topSpacer = createSpacer(`${this.boundary.hiddenTopHeight > 0 ? this.boundary.hiddenTopHeight : 0}px`, 0);
    const bottomSpacer = createSpacer(`${this.boundary.hiddenBottomHeight > 0 ? this.boundary.hiddenBottomHeight : 0}px`, 1);

    let loadingSpinner;
    let visibleChildren;
    if (!infiniteProps.isFinishedLoading) {
      if (this.childCount > 0) {
        loadingSpinner = <List.Item content={infiniteProps.progressiveLoadingIndicator} isSelectable={false} key={`infinite-spinner-row-${this.loadingIndex}`} />;
      } else {
        visibleChildren = <List.Item content={infiniteProps.initialLoadingIndicator} isSelectable={false} key="infinite-spinner-full" style={{ height: '100%', position: 'relative' }} />;
      }
    }

    let newChildren;
    if (!visibleChildren) {
      let upperChildIndex = this.lastChildIndex;
      if ((!this.scrollGroups.length && this.lastChildIndex <= 0) || !this.renderNewChildren) {
        upperChildIndex = this.childCount;
      } else {
        newChildren = InfiniteUtils.getNewScrollGroups(this.lastChildIndex, this.childrenArray, this.wrapChild);
      }
      visibleChildren = InfiniteUtils.getVisibleScrollGroups(this.scrollGroups, this.childrenArray, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex, this.wrapChild, upperChildIndex);
    }

    return (
      <List {...customProps} isDivided={isDivided} className={cx(['infinite-list', customProps.className])} refCallback={this.setContentNode}>
        {topSpacer}
        {visibleChildren}
        {bottomSpacer}
        {newChildren}
        {loadingSpinner}
      </List>
    );
  }
}

InfiniteList.propTypes = propTypes;
InfiniteList.defaultProps = defaultProps;
InfiniteList.Item = List.Item;

export default InfiniteList;
