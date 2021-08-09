import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import Button from 'terra-button';
import CollapsibleMenuViewItem from './CollapsibleMenuViewItem';
import CollapsibleMenuViewItemGroup from './CollapsibleMenuViewItemGroup';
import CollapsibleMenuViewToggle from './CollapsibleMenuViewToggle';
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
   * @private
   * Object containing intl APIs
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),

  /**
   *  Puts items under the collapsed (more) menu. More button will be always shown if at least one item is populated here.
   */
  alwaysCollapsedMenuItems: PropTypes.arrayOf(PropTypes.element),

  /**
   * Sets the button variant. One of neutral, emphasis, ghost, de-emphasis, action or utility.
   */
  menuItemButtonVariant: PropTypes.oneOf([Button.Opts.Variants.NEUTRAL, Button.Opts.Variants.EMPHASIS, Button.Opts.Variants.GHOST, Button.Opts.Variants['DE-EMPHASIS'], Button.Opts.Variants.ACTION, Button.Opts.Variants.UTILITY]),

  /**
   * Whether or not the dropdown button should only display as an icon.
   */
  menuItemDropdownButtonIsIconOnly: PropTypes.bool,

  /**
  * An optional icon. Nested inline with the text when provided to be displayed for the dropdown button
  */
  menuItemDropdownButtonIcon: PropTypes.element,

  /**
   * Sets the button variant for the dropdown button. One of neutral, emphasis, ghost, de-emphasis, action or utility.
   */
  menuItemDropdownButtonVariant: PropTypes.oneOf([Button.Opts.Variants.NEUTRAL, Button.Opts.Variants.EMPHASIS, Button.Opts.Variants.GHOST, Button.Opts.Variants['DE-EMPHASIS'], Button.Opts.Variants.ACTION, Button.Opts.Variants.UTILITY]),

  /**
   * Whether or not the alignment of the component will be justified to the right or left
   */
  horizontalAlign: PropTypes.oneOf(['right', 'left']),
};

const defaultProps = {
  alwaysCollapsedMenuItems: [],
  menuItemButtonVariant: Button.Opts.Variants.NEUTRAL,
  menuItemDropdownButtonIsIconOnly: false,
  menuItemDropdownButtonIcon: <span className={cx('menu-button-icon')} />,
  horizontalAlign: 'right',
  menuItemDropdownButtonVariant: Button.Opts.Variants.UTILITY,
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
        if (!this.collapsedMenuAlwaysShown && i === this.props.children.length - 1 && calcWidth <= width) {
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
      menuItemButtonVariant,
      menuItemDropdownButtonIsIconOnly,
      menuItemDropdownButtonIcon,
      horizontalAlign,
      menuItemDropdownButtonVariant,
      ...customProps
    } = this.props;
    const theme = this.context;

    const collapsibleMenuViewClassName = classNames(cx(
      'collapsible-menu-view',
      { 'is-calculating': this.isCalculating },
      theme.className,
      { 'collapsible-menu-view-flex-end': horizontalAlign === 'right' },
      { 'collapsible-menu-view-flex-start': horizontalAlign === 'left' },
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
      hiddenChildren = this.collapsedMenuAlwaysShown
        ? visibleChildren.splice(this.hiddenStartIndex).concat(prepopulatedBaseDivider).concat(hiddenChildren)
        : visibleChildren.splice(this.hiddenStartIndex).concat(hiddenChildren);
    }

    const visibleChildrenWithProps = React.Children.map(visibleChildren, function (child) {
      return React.cloneElement(child, { variant: menuItemButtonVariant });
    });

    return (
      <div {...customProps} className={collapsibleMenuViewClassName} ref={this.setContainer}>
        {visibleChildrenWithProps}
        <div className={menuButtonClassName} ref={this.setMenuButton}>
          <CollapsibleMenuViewItem
            data-collapsible-menu-toggle
            icon={menuItemDropdownButtonIcon}
            subMenuItems={hiddenChildren}
            boundingRef={boundingRef}
            menuWidth={menuWidth}
            isIconOnly={menuItemDropdownButtonIsIconOnly}
            isReversed
            text={intl.formatMessage({ id: 'Terra.collapsibleMenuView.more' })}
            variant={menuItemDropdownButtonVariant}
          />
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
CollapsibleMenuView.contextType = ThemeContext;
CollapsibleMenuView.defaultProps = defaultProps;

export default injectIntl(CollapsibleMenuView);
