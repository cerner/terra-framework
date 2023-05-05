import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import List from 'terra-list';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import Arrange from 'terra-arrange';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import ThemeContext from 'terra-theme-context';
import uuidv4 from 'uuid/v4';
import MenuUtils from './_MenuUtils';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const menuHeaderId = `terra-menu-headertitle-${uuidv4()}`;
const menuTopHeaderId = `terra-menu-headertitle-${uuidv4()}`;

const propTypes = {
  /**
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Title the should be displayed in header.
   */
  title: PropTypes.string,
  /**
   * Callback function for when back button is clicked.
   */
  onRequestBack: PropTypes.func,
  /**
   * Callback function for when close button is clicked.
   */
  onRequestClose: PropTypes.func,
  /**
   * Callback function that takes the content to be displayed next and is called when an item with nested content is clicked.
   */
  onRequestNext: PropTypes.func.isRequired,
  /**
   * Menu Items/Menu Groups/Menu Dividers to be displayed.
   */
  children: PropTypes.node.isRequired,
  /**
   * Index within the Menu Stack.
   */
  index: PropTypes.number.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: PropTypes.func,
  /**
   * Indicates if the menu content should set default focus on itself.
   */
  isFocused: PropTypes.bool,
  /**
   * Indicates if menu's height has been constrained by bounding container.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * Indicates if menu's width has been constrained by bounding container.
   */
  isWidthBounded: PropTypes.bool,
  /**
   * Fixed height for content.
   */
  fixedHeight: PropTypes.number,
  /**
   * Fixed width for content.
   */
  fixedWidth: PropTypes.number,
  /**
   * Width for content.
   */
  contentWidth: PropTypes.number,
  /**
   * Indicates if the content should be hidden.
   */
  isHidden: PropTypes.bool,
  /**
   * Ref callback function to be applied to content container.
   */
  refCallback: PropTypes.func,
  /**
   * Header Title for main-menu(first-tier).
   * Header Title will only be visible if the main-menu contains at least one sub-menu.
   */
  headerTitle: PropTypes.string.isRequired,
  /**
   * @private
   * Should the menu display Header Title (first-tier).
   */
  showHeader: PropTypes.bool,
};

const defaultProps = {
  isFocused: false,
  title: '',
  isWidthBounded: false,
  isHeightBounded: false,
  isHidden: false,
};

const childContextTypes = {
  isToggleableMenu: PropTypes.bool,
  shouldReserveSpaceForIcon: PropTypes.bool,
};

class MenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.wrapOnKeyDown = this.wrapOnKeyDown.bind(this);
    this.buildHeader = this.buildHeader.bind(this);
    this.isToggleable = this.isToggleable.bind(this);
    this.shouldReserveSpaceForIcon = this.shouldReserveSpaceForIcon.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyDownBackButton = this.onKeyDownBackButton.bind(this);
    this.validateFocus = this.validateFocus.bind(this);
    this.needsFocus = props.isFocused;
    this.handleContainerRef = this.handleContainerRef.bind(this);

    this.state = {
      focusIndex: -1,
    };
  }

  getChildContext() {
    return { isToggleableMenu: this.isToggleable(), shouldReserveSpaceForIcon: this.shouldReserveSpaceForIcon() };
  }

  componentDidMount() {
    // Set focus to first focusable menu item
    const items = this.contentNode.querySelectorAll('[data-terra-menu-interactive-item="true"]');
    if (items.length) {
      items[0].focus();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isFocused) {
      this.needsFocus = this.needsFocus || this.props.isFocused !== prevProps.isFocused;
    } else {
      this.needsFocus = false;
    }

    this.validateFocus(this.contentNode);
  }

  handleContainerRef(node) {
    if (this.props.refCallback) {
      this.props.refCallback(node);
    }
    this.contentNode = node;
    this.validateFocus(node);
  }

  onKeyDown(event) {
    const focusableMenuItems = this.contentNode.querySelectorAll('li[tabindex="0"]');

    if (event.nativeEvent.keyCode === KeyCode.KEY_UP || event.nativeEvent.keyCode === KeyCode.KEY_END) {
      // Shift focus to last focusable menu item
      focusableMenuItems[focusableMenuItems.length - 1].focus();
    }

    if (event.nativeEvent.keyCode === KeyCode.KEY_DOWN || event.nativeEvent.keyCode === KeyCode.KEY_HOME) {
      // Shift focus to first focusable menu item
      focusableMenuItems[0].focus();
    }
  }

  onKeyDownBackButton(event) {
    if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_LEFT) {
      event.preventDefault();
      this.props.onRequestBack();
    }
  }

  validateFocus(node) {
    if (this.needsFocus && node) {
      node.focus();
      this.needsFocus = document.activeElement !== node;

      // If nested menu is open
      if (this.props.index > 0) {
        // Shift focus to the back button
        node.querySelector('[role="button"][tabIndex="0"]').focus();
      }
    }
  }

  isToggleable() {
    let isToggleableValue = false;
    React.Children.forEach(this.props.children, (child) => {
      const {
        children,
        isToggleable,
        ...customProps
      } = child.props;

      // child is a group menu item that needs space reserved for the checkmark
      React.Children.forEach(children, (subchild) => {
        if (subchild.type === MenuItem) {
          isToggleableValue = true;
        }
      });

      if (isToggleable || customProps.isSelectable) {
        isToggleableValue = true;
      }
    });

    return isToggleableValue;
  }

  shouldReserveSpaceForIcon() {
    let shouldReserveSpaceForIcon = false;
    React.Children.forEach(this.props.children, (child) => {
      const {
        icon,
        isInstructionsForUse,
      } = child.props;

      // reserve space for when there is a custom icon or instructions icon to be shown
      if (icon || isInstructionsForUse) {
        shouldReserveSpaceForIcon = true;
      }
    });

    return shouldReserveSpaceForIcon;
  }

  wrapOnClick(item) {
    const { onClick } = item.props;
    return (event) => {
      event.preventDefault();
      if (this.state.focusIndex !== -1) {
        this.setState({ focusIndex: -1 });
      }

      if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
        // Avoid keydown "click" event from enter / space key triggering stack increase here
        // We handle increasing stack with keydown events in a separate handler below
        // Fixes: https://github.com/cerner/terra-core/issues/2015
        if (event.type !== 'keydown') {
          this.props.onRequestNext(item);
        }
      }

      if (onClick) {
        onClick(event);
      }
    };
  }

  wrapOnKeyDown(item, index) {
    const { onKeyDown } = item.props;
    return ((event) => {
      const shiftTabClicked = (event.shiftKey && event.nativeEvent.keyCode === KeyCode.KEY_TAB);
      const tabClicked = (event.nativeEvent.keyCode === KeyCode.KEY_TAB);
      if (!(shiftTabClicked || tabClicked)) {
        event.preventDefault();
      }

      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
          this.props.onRequestNext(item);
          this.setState({ focusIndex: index });
        }
      } else if (event.nativeEvent.keyCode === KeyCode.KEY_RIGHT) {
        if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
          this.props.onRequestNext(item);
        }
      } else if (event.nativeEvent.keyCode === KeyCode.KEY_LEFT) {
        this.props.onRequestBack();
      } else if (event.nativeEvent.keyCode === KeyCode.KEY_UP) {
        this.setState({ focusIndex: index - 1 });
      } else if (event.nativeEvent.keyCode === KeyCode.KEY_DOWN) {
        this.setState({ focusIndex: index + 1 });
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });
  }

  buildHeader(isFullScreen) {
    const { intl } = this.props;
    const backBtnText = intl.formatMessage({ id: 'Terra.menu.back' });
    const closeBtnText = intl.formatMessage({ id: 'Terra.menu.close' });

    const closeIcon = <IconClose />;
    let closeButton = <div />;
    if (this.props.onRequestClose && isFullScreen) {
      closeButton = (
        <button type="button" className={cx('header-button')} onClick={this.props.onRequestClose} aria-label={closeBtnText}>
          {closeIcon}
        </button>
      );
    }

    const backIcon = <IconLeft />;
    let header = <div />;

    if (this.props.index > 0) {
      header = (
        <>
          <div className={cx('header-container')}>
            <div
              className={cx('header-button')}
              role="button"
              onClick={this.props.onRequestBack}
              onKeyDown={this.onKeyDownBackButton}
              tabIndex="0"
              aria-label={backBtnText}
              aria-describedby={menuHeaderId}
            >
              {backIcon}
            </div>
            <h2 id={menuHeaderId} className={cx('header-title')}>{this.props.title}</h2>
          </div>
        </>
      );
    } else if (this.props.headerTitle && this.props.headerTitle.length > 0) {
      header = (
        <h1 id={menuTopHeaderId} className={cx(['header-title', 'main-header-title'])}>{this.props.headerTitle}</h1>
      );
    }

    return (
      <Arrange
        className={cx('header')}
        fitEnd={closeButton}
        fill={header}
        align="center"
      />
    );
  }

  render() {
    let index = -1;
    const totalItems = MenuUtils.totalItems(this.props.children);
    let itemIndex = -1;
    const items = this.props.children ? [] : undefined;

    React.Children.map(this.props.children, (item) => {
      const onClick = this.wrapOnClick(item);
      let newItem = item;

      // Check if child is an enabled Menu.Item
      if (item.props.text && !item.props.isDisabled) {
        index += 1;
        itemIndex += 1;
        const onKeyDown = this.wrapOnKeyDown(item, index);
        const isActive = this.state.focusIndex === index;

        newItem = React.cloneElement(item, {
          onClick,
          onKeyDown,
          isActive,
          totalItems,
          itemIndex,
          intl: this.props.intl,
          'aria-describedby': !MenuUtils.isMac() && index === 0 ? menuTopHeaderId : undefined,
        });
        // If the child has children then it is an item group, so iterate through it's children
      } else if (item.props.children) {
        const children = item.props.children ? [] : undefined;
        React.Children.forEach(item.props.children, (child) => {
          if (!child.props.isDisabled) {
            index += 1;
            itemIndex += 1;
            const clonedElement = React.cloneElement(child, {
              onKeyDown: this.wrapOnKeyDown(child, index),
              isActive: index === this.state.focusIndex,
              totalItems,
              itemIndex,
              intl: this.props.intl,
              'aria-describedby': !MenuUtils.isMac() && index === 0 ? menuTopHeaderId : undefined,
            });
            children.push(clonedElement);
          } else {
            children.push(child);
          }
        });
        newItem = React.cloneElement(item, {}, children);
        // Increment item index count for disabled items
      } else if (item.props.text && item.props.isDisabled) {
        itemIndex += 1;
      }

      items.push(newItem);
    });
    const boundingFrame = this.props.boundingRef ? this.props.boundingRef() : undefined;
    const isFullScreen = MenuUtils.isFullScreen(
      this.props.isHeightBounded,
      this.props.isWidthBounded,
      boundingFrame,
      this.props.contentWidth,
    );
    const theme = this.context;
    const isSubMenu = this.props.index > 0;
    const contentClass = cx(
      'content',
      { submenu: isSubMenu },
      { 'hidden-page': this.props.isHidden },
      { fullscreen: isFullScreen },
      theme.className,
    );

    let header;
    if (this.props.showHeader || isSubMenu) {
      header = this.buildHeader(isFullScreen);
    }
    const contentHeight = this.props.isHeightBounded ? '100%' : this.props.fixedHeight;
    const contentPosition = this.props.isHeightBounded ? 'relative' : 'static';
    const contentWidth = this.props.isWidthBounded ? undefined : this.props.fixedWidth;
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, react/forbid-dom-props */
    return (
      <div
        ref={this.handleContainerRef}
        className={contentClass}
        style={{ height: contentHeight, width: contentWidth, position: contentPosition }}
        tabIndex="-1"
        aria-modal="true"
        role="dialog"
        onKeyDown={this.onKeyDown}
      >
        <ContentContainer header={header} fill={this.props.isHeightBounded || this.props.index > 0}>
          <List className={cx('list')} role="menu" data-submenu={isSubMenu}>
            {items}
          </List>
        </ContentContainer>
      </div>
    );
    /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, react/forbid-dom-props */
  }
}

MenuContent.propTypes = propTypes;
MenuContent.defaultProps = defaultProps;
MenuContent.childContextTypes = childContextTypes;
MenuContent.contextType = ThemeContext;

export default injectIntl(MenuContent);
