import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import CollapsibleMenuViewItem from './CollapsibleMenuViewItem';
import CollapsibleMenuViewItemGroup from './CollapsibleMenuViewItemGroup';
import CollapsibleMenuViewToggle from './CollapsibleMenuViewToggle';
import CollapsibleMenuViewDivider from './CollapsibleMenuViewDivider';
import styles from './CollapsibleMenuView.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Item/ItemGroup/Divider elements to display in the view. Items that will fit in the space available will
   * display face-up the remainder will be rolled into a menu
   */
  children: PropTypes.node.isRequired,

  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: PropTypes.func,

  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760, or auto
   */
  menuWidth: PropTypes.oneOf(Object.keys(CollapsibleMenuViewItem.Opts.widths)),
};

class CollapsibleMenuView extends React.Component {
  constructor(props) {
    super(props);
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

  handleResize(width) {
    const menuButtonWidth = this.menuButton.getBoundingClientRect().width;
    const availableWidth = width - menuButtonWidth;
    let hiddenStartIndex = -1;
    let calcWidth = 0;
    let menuHidden = true;

    for (let i = 0; i < React.Children.count(this.props.children); i += 1) {
      const child = this.container.children[i];
      const childWidth = child.getBoundingClientRect().width;
      calcWidth += childWidth;

      if (calcWidth > availableWidth) {
        // If last child fits in the available space, leave it face up
        if (i === this.props.children.length - 1 && calcWidth <= width) {
          break;
        }

        // If divider is the last element to be hidden on collapse menu, leave it face up
        if (React.Children.count(this.props.children) > 1 && this.props.children[i].type === CollapsibleMenuViewDivider) {
          hiddenStartIndex = i - 1;
        } else {
          hiddenStartIndex = i;
        }
        menuHidden = false;
        break;
      }
    }

    if (this.menuHidden !== menuHidden || this.hiddenStartIndex !== hiddenStartIndex) {
      this.menuHidden = menuHidden;
      this.hiddenStartIndex = hiddenStartIndex;
      this.forceUpdate();
    }
  }

  render() {
    const {
      children, boundingRef, menuWidth, ...customProps
    } = this.props;
    const visibleChildren = React.Children.toArray(children);

    let hiddenChildren = null;
    if (this.hiddenStartIndex >= 0) {
      hiddenChildren = visibleChildren.splice(this.hiddenStartIndex);
    }

    const collapsibleMenuViewClassName = cx([
      'collapsible-menu-view',
      { 'is-calculating': this.isCalculating },
      customProps.className,
    ]);
    const menuButtonClassName = cx([
      'menu-button',
      { hidden: this.menuHidden },
    ]);

    return (
      <div {...customProps} className={collapsibleMenuViewClassName} ref={this.setContainer}>
        {visibleChildren}
        <div className={menuButtonClassName} ref={this.setMenuButton}>
          <FormattedMessage id="Terra.collapsibleMenuView.more">
            {ellipsesText => (
              <CollapsibleMenuViewItem
                data-collapsible-menu-toggle
                icon={<span className={cx('menu-button-icon')} />}
                subMenuItems={hiddenChildren}
                boundingRef={boundingRef}
                menuWidth={menuWidth}
                isIconOnly
                text={ellipsesText}
                variant="utility"
              />
            )}
          </FormattedMessage>
        </div>
      </div>
    );
  }
}

CollapsibleMenuView.Item = CollapsibleMenuViewItem;
CollapsibleMenuView.ItemGroup = CollapsibleMenuViewItemGroup;
CollapsibleMenuView.Toggle = CollapsibleMenuViewToggle;
CollapsibleMenuView.Divider = CollapsibleMenuViewDivider;

CollapsibleMenuView.propTypes = propTypes;

export default CollapsibleMenuView;
