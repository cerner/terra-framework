import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import { IconEllipses } from 'terra-icon';
import CollapsibleMenuViewItem from './CollapsibleMenuViewItem';
import CollapsibleMenuViewDivider from './CollapsibleMenuViewDivider';
import styles from './CollapsibleMenuView.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Item/ItemGroup/Divider elements to display in the view. Items that will fit in the space available will
   * display face-up the remainder will be rolled into a menu
   */
  children: PropTypes.node.isRequired,

  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760, or auto
   */
  menuWidth: PropTypes.oneOf(['160', '240', '320', '640', '960', '1280', '1760', 'auto']),

  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: PropTypes.func,

  /**
   *  Puts items under the collapsed (more) menu. More button will be always shown if at least one item is populated here.
   */
  alwaysCollapsedMenuItems: PropTypes.arrayOf(PropTypes.element),

  /**
   * Aligns the menu to the start of the container
   */
  isStartAligned: PropTypes.bool,

  /**
   * @private
   * Switches to using horizontal ellipses instead of vertical ones when menu items are truncated.
   */
  useHorizontalIcon: PropTypes.bool,

  /**
   * @private
   * Reverses the order of the rendered items.
   * This does not affect the collapsed menu view, only the items that are displayed outside of it.
   */
  isReversedChildrenOrder: PropTypes.bool,

  /**
   * @private
   * The text for the menu icon. This is read by screenreaders.
   */
  menuIconText: PropTypes.string,

  /**
   * @private
   * Object containing intl APIs
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const defaultProps = {
  alwaysCollapsedMenuItems: [],
  isStartAligned: false,
};

const prepopulatedBaseDivider = <CollapsibleMenuViewDivider key="prepopulatedBaseDivider" />;

class CollapsibleMenuView extends React.Component {
  constructor(props) {
    super(props);

    this.collapsedMenuAlwaysShown = props.alwaysCollapsedMenuItems.length > 0;
    this.setContainer = this.setContainer.bind(this);
    this.setMenuButton = this.setMenuButton.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.resetCache();
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      this.contentWidth = entries[0].contentRect.width;
      if (!this.isCalculating) {
        this.animationFrameID = window.requestAnimationFrame(() => {
          // Resetting the cache so that all elements will be rendered face-up for width calculations
          this.resetCache();
          this.forceUpdate();
        });
      }
    });
    this.handleResize(this.contentWidth);
    this.resizeObserver.observe(this.container);
  }

  componentDidUpdate() {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    this.resizeObserver.disconnect(this.container);
    this.container = null;
  }

  handleResize(width) {
    const childrenArray = React.Children.toArray(this.props.children);
    const menuButtonWidth = childrenArray.length > 1 ? this.menuButton.getBoundingClientRect().width : 0;
    const parentwidth = this.menuButton.parentElement.getBoundingClientRect().width;
    let availableWidth = (width < parentwidth) ? parentwidth - menuButtonWidth : width - menuButtonWidth;
    availableWidth = (window.innerWidth - menuButtonWidth) < availableWidth ? window.innerWidth - menuButtonWidth : availableWidth;
    let hiddenStartIndex = -1;
    let calcWidth = 0;
    let menuHidden = true;

    if (this.props.isReversedChildrenOrder) {
      for (let i = childrenArray.length - 1; i >= 0; i -= 1) {
        const child = this.container.children[i];
        const childWidth = child.getBoundingClientRect().width;
        calcWidth += childWidth;

        if (calcWidth > availableWidth) {
          // If last child fits in the available space, leave it face up
          if (!this.collapsedMenuAlwaysShown && i === childrenArray.length - 1 && calcWidth <= availableWidth) {
            break;
          }

          // If divider is the last element to be hidden on collapse menu, leave it face up
          if (childrenArray.length > 1 && childrenArray[i].type !== CollapsibleMenuViewDivider) {
            hiddenStartIndex = i + 1;
          } else {
            hiddenStartIndex = i;
          }

          menuHidden = false;
          break;
        }
      }
    } else {
      for (let i = 0; i < childrenArray.length; i += 1) {
        const child = this.container.children[i];
        const childWidth = child.getBoundingClientRect().width;
        calcWidth += childWidth;

        if (calcWidth > availableWidth) {
          // If last child fits in the available space, leave it face up
          if (!this.collapsedMenuAlwaysShown && i === childrenArray.length - 1 && calcWidth <= width) {
            break;
          }

          // If divider is the last element to be hidden on collapse menu, leave it face up
          if (childrenArray.length > 1 && childrenArray[i].type === CollapsibleMenuViewDivider) {
            hiddenStartIndex = i - 1;
          } else {
            hiddenStartIndex = i;
          }
          menuHidden = false;
          break;
        }
      }
    }

    if (this.menuHidden !== menuHidden || this.hiddenStartIndex !== hiddenStartIndex) {
      this.menuHidden = menuHidden;
      this.hiddenStartIndex = hiddenStartIndex;
      this.forceUpdate();
    }
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  setMenuButton(node) {
    if (node === null) { return; }
    this.menuButton = node;
  }

  resetCache() {
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.isCalculating = true;
    this.menuHidden = false;
  }

  render() {
    const {
      children,
      boundingRef,
      menuWidth,
      intl,
      alwaysCollapsedMenuItems,
      isStartAligned,
      useHorizontalIcon,
      isReversedChildrenOrder,
      menuIconText,
      ...customProps
    } = this.props;
    const theme = this.context;

    const collapsibleMenuViewClassName = classNames(cx(
      'collapsible-menu-view',
      { 'is-calculating': this.isCalculating },
      { 'collapsible-menu-view-flex-end': !isStartAligned },
      { 'collapsible-menu-view-flex-start': isStartAligned },
      theme.className,
    ),

    customProps.className);
    const menuButtonClassName = cx(
      'menu-button',
      { hidden: !this.collapsedMenuAlwaysShown && this.menuHidden },
    );
    let visibleChildren = children;
    let hiddenChildren = alwaysCollapsedMenuItems;

    if (this.hiddenStartIndex >= 0) {
      visibleChildren = React.Children.toArray(children);

      if (this.props.isReversedChildrenOrder) {
        hiddenChildren = visibleChildren.splice(0, this.hiddenStartIndex + 2).concat(hiddenChildren);
      } else {
        hiddenChildren = this.collapsedMenuAlwaysShown
          ? visibleChildren.splice(this.hiddenStartIndex).concat(prepopulatedBaseDivider).concat(hiddenChildren)
          : visibleChildren.splice(this.hiddenStartIndex).concat(hiddenChildren);
      }
    }

    const iconClassName = classNames(cx(
      { 'collapsible-menu-view-icon-vertical': !useHorizontalIcon },
      theme.className,
    ));

    const menuIcon = (
      <div className={menuButtonClassName} ref={this.setMenuButton}>
        <CollapsibleMenuViewItem
          data-collapsible-menu-toggle
          icon={<IconEllipses className={iconClassName} />}
          subMenuItems={hiddenChildren}
          boundingRef={boundingRef}
          menuWidth={menuWidth}
          isIconOnly
          text={menuIconText || intl.formatMessage({ id: 'Terra.collapsibleMenuView.more' })}
          variant="utility"
        />
      </div>
    );

    if (isReversedChildrenOrder) {
      return (
        <div {...customProps} className={collapsibleMenuViewClassName} ref={this.setContainer}>
          {menuIcon}
          {visibleChildren}
        </div>
      );
    }

    return (
      <div {...customProps} className={collapsibleMenuViewClassName} ref={this.setContainer}>
        {visibleChildren}
        {menuIcon}
      </div>
    );
  }
}

CollapsibleMenuView.propTypes = propTypes;
CollapsibleMenuView.contextType = ThemeContext;
CollapsibleMenuView.defaultProps = defaultProps;

export default injectIntl(CollapsibleMenuView);
