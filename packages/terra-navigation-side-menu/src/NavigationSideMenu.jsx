import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container';
import KeyCode from 'keycode-js';
import MenuItem from './_MenuItem';

import styles from './NavigationSideMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * @private
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
  intl: intlShape.isRequired,
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
    this.handleItemClick = this.handleItemClick.bind(this);
    this.updateAriaLiveContent = this.updateAriaLiveContent.bind(this);

    const { items, parents } = processMenuItems(props.menuItems);
    this.state = {
      items,
      parents,
      prevPropsMenuItem: props.menuItems,
    };

    this.visuallyHiddenComponent = React.createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.menuItems !== prevState.prevPropsMenuItem) {
      return processMenuItems(nextProps.menuItems);
    }
    return null;
  }

  handleBackClick(event) {
    const parentKey = this.state.parents[this.props.selectedMenuKey];
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
  }

  handleItemClick(event, key) {
    const selectedItem = this.state.items[key];
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
  }

  buildListItem(key) {
    const item = this.state.items[key];
    const onKeyDown = (event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
        event.preventDefault();
        this.handleItemClick(event, key);
      }
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
      />
    );
  }

  buildListContent(currentItem) {
    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
      return <nav role="navigation"><ul className={cx(['side-menu-list'])}>{currentItem.childKeys.map(key => this.buildListItem(key))}</ul></nav>;
    }
    return null;
  }

  updateAriaLiveContent(childKey) {
    const { intl } = this.props;

    // Guard against race condition with the ref being established and updating the ref's innerText
    if (!this.visuallyHiddenComponent || !this.visuallyHiddenComponent.current) {
      return;
    }

    const selected = intl.formatMessage({ id: 'Terra.navigation.side.menu.selected' });

    if (this.state.items[childKey] && this.state.items[childKey].text) {
      this.visuallyHiddenComponent.current.innerText = `${this.state.items[childKey].text} ${selected}`;
    } else {
      this.visuallyHiddenComponent.current.innerText = '';
    }
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
    let sideMenuContentContainerClassNames = cx([
      'side-menu-content-container',
    ]);

    let onBack;
    const parentKey = this.state.parents[selectedMenuKey];
    if (parentKey) {
      onBack = this.handleBackClick;
    } else {
      onBack = routingStackBack;
    }

    let header;
    if (onBack || !currentItem.isRootMenu) {
      header = (
        <Fragment>
          <ActionHeader
            className={cx('side-menu-action-header')}
            onBack={onBack}
            title={currentItem ? currentItem.text : null}
            data-navigation-side-menu-action-header
          />
          {toolbar}
        </Fragment>
      );
    } else {
      sideMenuContentContainerClassNames = cx(['side-menu-content-container', 'is-root']);
    }

    return (
      <Fragment>
        <span
          aria-atomic="true"
          aria-live="assertive"
          aria-relevant="additions text"
          className={cx('visually-hidden-text')}
          ref={this.visuallyHiddenComponent}
        >
          {this.updateAriaLiveContent(selectedChildKey)}
        </span>
        <ContentContainer {...customProps} header={header} fill className={sideMenuContentContainerClassNames}>
          {this.buildListContent(currentItem)}
        </ContentContainer>
      </Fragment>
    );
  }
}

NavigationSideMenu.propTypes = propTypes;
NavigationSideMenu.defaultProps = defaultProps;

export default injectIntl(NavigationSideMenu);
