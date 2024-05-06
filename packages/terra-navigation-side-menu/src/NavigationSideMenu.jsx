import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import * as KeyCode from 'keycode-js';
import ThemeContext from 'terra-theme-context';
import MenuItem from './_MenuItem';

import styles from './NavigationSideMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * @private
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * String that labels the navigation menu for screen readers.
   */
  ariaLabel: PropTypes.string,
  /**
   * An array of configuration for each menu item.
   */
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Keys of menu items
     */
    childKeys: PropTypes.arrayOf(PropTypes.string),
    /**
     * Used to match visual style of a menuItem with children on an item without children.
     */
    hasSubMenu: PropTypes.bool,
    /**
     * Whether or not the menu is the primary navigation links in small form factor.
     */
    isRootMenu: PropTypes.bool,
    /**
     * ID to be applied to the menu item div.
     */
    id: PropTypes.string,
    /**
     * Optional meta data to be returned along with the item key within the onChange.
     */
    metaData: PropTypes.object,
    /**
     * Unique identifier that will be returned in the onChange callback when an endpoint is reached.
     */
    key: PropTypes.string.isRequired,
    /**
     * Text for the menu row and header title when selected.
     */
    text: PropTypes.string.isRequired,
  })),
  /**
   * Callback function when a menu endpoint is reached.
   * returns (event, { selectedMenuKey: String, selectedChildKey: String, metaData: Object})
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Delegate prop showParent function that is provided by the terra-navigation-layout.
   */
  routingStackBack: PropTypes.func,
  /**
   * Key of the currently selected child item on the selected menu page.
   * This is used when traveling back up the menu stack or when the child is an end point.
   */
  selectedChildKey: PropTypes.string,
  /**
   * Key of the currently selected menu page.
   */
  selectedMenuKey: PropTypes.string.isRequired,
  /**
   * An optional toolbar to display below the side menu action header
   */
  toolbar: PropTypes.element,
};

const defaultProps = {
  menuItems: [],
};

const processMenuItems = (menuItems) => {
  const items = {};
  const parents = {};
  menuItems.forEach((item) => {
    items[item.key] = {
      id: item.id,
      text: item.text,
      childKeys: item.childKeys,
      metaData: item.metaData,
      hasSubMenu: item.hasSubMenu,
      isRootMenu: item.isRootMenu,
      icon: item.icon,
      showIcon: item.showIcon,
    };
    if (item.childKeys) {
      item.childKeys.forEach((key) => {
        parents[key] = item.key;
      });
    }
  });
  return { items, parents };
};

class NavigationSideMenu extends Component {
  constructor(props) {
    super(props);

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleBackKeydown = this.handleBackKeydown.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
    this.setTabIndex = this.setTabIndex.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.updateAriaLiveContent = this.updateAriaLiveContent.bind(this);
    this.setVisuallyHiddenComponent = this.setVisuallyHiddenComponent.bind(this);

    const { items, parents } = processMenuItems(props.menuItems);
    this.state = {
      items,
      parents,
      prevPropsMenuItem: props.menuItems,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.menuItems !== prevState.prevPropsMenuItem) {
      return processMenuItems(nextProps.menuItems);
    }
    return null;
  }

  handleBackClick(event) {
    const parentKey = this.state.parents[this.props.selectedMenuKey];
    this.focusKey = this.props.selectedMenuKey;
    if (parentKey) {
      this.props.onChange(
        event,
        {
          selectedMenuKey: parentKey,
          selectedChildKey: this.props.selectedMenuKey,
          metaData: this.state.items[parentKey].metaData,
        },
      );
    }
    this.setHeaderFocus = false;
    event.preventDefault();
  }

  handleBackKeydown(event) {
    const key = event.nativeEvent.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
      case KeyCode.KEY_RETURN:
      case KeyCode.KEY_LEFT:
      case KeyCode.KEY_ESCAPE: {
        const parentKey = this.state.parents[this.props.selectedMenuKey];
        if (parentKey) {
          this.handleBackClick(event);
        } else if (this.props.routingStackBack) {
          this.props.routingStackBack();
        }
        break;
      }
      case KeyCode.KEY_DOWN:
      case KeyCode.KEY_UP: {
        const listMenuItems = this.menuContainer && this.menuContainer.querySelectorAll('[data-menu-item]');
        if (listMenuItems && listMenuItems.length) {
          if (event.nativeEvent.keyCode === KeyCode.KEY_DOWN) {
            listMenuItems[0].focus();
          } else {
            listMenuItems[listMenuItems.length - 1].focus();
          }
        }
        event.preventDefault();
        break;
      }
      default:
    }
  }

  handleItemClick(event, key) {
    const selectedItem = this.state.items[key];

    if (this.state.items[key] && this.state.items[key].text) {
      this.updateAriaLiveContent(this.state.items[key].text);
    }

    if (selectedItem.childKeys && selectedItem.childKeys.length) {
      this.props.onChange(
        event,
        {
          selectedMenuKey: key,
          selectedChildKey: undefined,
          metaData: selectedItem.metaData,
        },
      );
    } else {
      this.props.onChange(
        event,
        {
          selectedMenuKey: this.props.selectedMenuKey,
          selectedChildKey: key,
          metaData: selectedItem.metaData,
        },
      );
    }
    this.focusKey = key;
    if (selectedItem && selectedItem.childKeys && selectedItem.childKeys.length) {
      this.setHeaderFocus = true;
    } else {
      this.setHeaderFocus = false;
    }
  }

  handleRightMove(event, key) {
    this.handleItemClick(event, key);
  }

  handleLeftMove(event) {
    this.handleBackClick(event);
  }

  handleMenuListRef = (node) => {
    this.menuContainer = node;
    if (node && this.focusKey) {
      const subMenuNodes = node.querySelectorAll(`[data-menu-item="${this.focusKey}"]`);
      if (subMenuNodes && subMenuNodes.length) {
        subMenuNodes[0].focus();
      }
    }
  };

  handleEvents = (event, item, key) => {
    const listMenuItems = this.menuContainer && this.menuContainer.querySelectorAll('[data-menu-item]');
    const currentIndex = Array.from(listMenuItems).indexOf(event.target);
    const lastIndex = listMenuItems.length - 1;
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      event.preventDefault();
      this.handleItemClick(event, key);
    }

    if (event.nativeEvent.keyCode === KeyCode.KEY_DOWN) {
      const nextIndex = currentIndex < lastIndex ? currentIndex + 1 : 0;
      if (currentIndex === lastIndex && this.onBack) {
        if (this.backButtonContainer) {
          this.backButtonContainer.focus();
        }
      } else if (listMenuItems && listMenuItems[nextIndex]) {
        this.setTabIndex(listMenuItems[currentIndex], '-1');
        this.setTabIndex(listMenuItems[nextIndex], '0');
        listMenuItems[nextIndex].focus();
      }
      event.preventDefault();
    }

    if (event.nativeEvent.keyCode === KeyCode.KEY_UP) {
      const previousIndex = currentIndex > 0 ? currentIndex - 1 : lastIndex;
      if (currentIndex === 0 && this.onBack) {
        if (this.backButtonContainer) {
          this.backButtonContainer.focus();
        }
      } else if (listMenuItems && listMenuItems[previousIndex]) {
        this.setTabIndex(listMenuItems[currentIndex], '-1');
        this.setTabIndex(listMenuItems[previousIndex], '0');
        listMenuItems[previousIndex].focus();
      }
      event.preventDefault();
    }

    if (event.nativeEvent.keyCode === KeyCode.KEY_RIGHT && (item.hasSubMenu || (item.childKeys && item.childKeys.length > 0))) {
      this.handleRightMove(event, key);
      event.preventDefault();
    }

    if (event.nativeEvent.keyCode === KeyCode.KEY_LEFT) {
      this.handleLeftMove(event, key);
      event.preventDefault();
    }
  };

  setVisuallyHiddenComponent(node) {
    this.visuallyHiddenComponent = node;
  }

  setTabIndex = (node, value) => {
    if (node) {
      node.setAttribute('tabIndex', value);
    }
  };

  backButtonRef = (node) => {
    this.backButtonContainer = node;
    if (node && this.setHeaderFocus) {
      if (this.backButtonContainer) {
        this.backButtonContainer.focus();
      }
    }
  };

  buildListItem(key, keys) {
    const item = this.state.items[key];
    const tabIndex = Array.from(keys).indexOf(key);
    const onKeyDown = (event) => {
      this.handleEvents(event, item, key);
    };

    return (
      <MenuItem
        id={item.id}
        hasChevron={item.hasSubMenu || (item.childKeys && item.childKeys.length > 0)}
        isSelected={key === this.props.selectedChildKey}
        text={item.text}
        key={key}
        onClick={(event) => { this.handleItemClick(event, key); }}
        onKeyDown={onKeyDown}
        data-menu-item={key}
        tabIndex={(tabIndex === 0 && !(this.onBack)) ? '0' : '-1'}
        icon={item.icon}
        showIcon={item.showIcon}
      />
    );
  }

  buildListContent(currentItem) {
    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
      return currentItem.childKeys.map(key => this.buildListItem(key, currentItem.childKeys));
    }
    return null;
  }

  updateAriaLiveContent(item) {
    const { intl } = this.props;
    const selected = intl.formatMessage({ id: 'Terra.navigation.side.menu.selected' });

    // Guard against race condition with the ref being established and updating the ref's innerText
    if (!this.visuallyHiddenComponent) {
      return;
    }

    this.visuallyHiddenComponent.innerText = item ? `${item} ${selected}` : '';
  }

  render() {
    const {
      menuItems,
      onChange,
      routingStackBack,
      selectedChildKey,
      selectedMenuKey,
      toolbar,
      ...customProps
    } = this.props;
    const currentItem = this.state.items[selectedMenuKey];
    const theme = this.context;
    let sideMenuContentContainerClassNames = cx([
      'side-menu-content-container',
      theme.className,
    ]);

    const parentKey = this.state.parents[selectedMenuKey];
    if (parentKey) {
      this.onBack = this.handleBackClick;
    } else {
      this.onBack = routingStackBack;
    }

    let header;
    if (this.onBack || !currentItem.isRootMenu) {
      header = (
        <li role="none">
          <div
            className={cx('side-navigation-menu')}
            role="menuitem"
            ref={(obj) => this.backButtonRef(obj)}
            type="button"
            tabIndex={(this.onBack) ? '0' : '-1'}
            onKeyDown={this.handleBackKeydown}
            onClick={this.onBack}
            data-navigation-side-menu
          >
            {(this.onBack) ? <span className={cx(['header-icon', 'back'])} /> : null}
            <h1 className={cx('title')}>{currentItem ? currentItem.text : null}</h1>
          </div>
          {toolbar}
        </li>
      );
    } else {
      sideMenuContentContainerClassNames = cx(['side-menu-content-container', 'is-root']);
    }

    return (
      <Fragment>
        <VisuallyHiddenText
          aria-atomic="true"
          aria-live="assertive"
          aria-relevant="additions text"
          refCallback={this.setVisuallyHiddenComponent}
        />
        <ContentContainer {...customProps} fill className={sideMenuContentContainerClassNames}>
          <nav role="navigation" aria-label={this.props.ariaLabel}>
            <ul role="menu" ref={(refobj) => this.handleMenuListRef(refobj)} className={cx(['side-menu-list'])}>
              {header}
              {this.buildListContent(currentItem, header)}
            </ul>
          </nav>
        </ContentContainer>
      </Fragment>
    );
  }
}

NavigationSideMenu.propTypes = propTypes;
NavigationSideMenu.defaultProps = defaultProps;
NavigationSideMenu.contextType = ThemeContext;

export default injectIntl(NavigationSideMenu);
