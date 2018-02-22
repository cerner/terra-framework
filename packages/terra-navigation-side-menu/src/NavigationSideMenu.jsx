import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import List from 'terra-list';
import ActionHeader from 'terra-clinical-action-header';
import ContentContainer from 'terra-content-container';
import MenuItem from './_MenuItem';

const KEYCODES = {
  ENTER: 13,
};

const propTypes = {
  /**
   * An array of configuration for each menu item.
   */
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Keys of menu items
     */
    childKeys: PropTypes.arrayOf(PropTypes.string),
    /**
     * Used to match visual style of a menuItem with children, but when the onChange maps to the sub route of another menu.
     */
    hasSubMenu: PropTypes.bool,
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
};

const defaultProps = {
  menuItems: [],
};

const processMenuItems = (menuItems) => {
  const items = {};
  const parents = {};
  menuItems.forEach((item) => {
    items[item.key] = { id: item.id, text: item.text, childKeys: item.childKeys, metaData: item.metaData };
    if (item.childKeys) {
      item.childKeys.forEach((key) => {
        parents[key] = item.key;
      });
    }
  });
  return { items, parents };
};

class NavigationSideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);

    const { items, parents } = processMenuItems(props.menuItems);
    this.state = { items, parents };
  }

  componentWillReceiveProps(nextProps) {
    const { items, parents } = processMenuItems(nextProps.menuItems);
    this.setState({ items, parents });
  }

  handleBackClick() {
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
    } else {
      this.props.routingStackBack();
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

    return (
      <MenuItem
        id={item.id}
        hasChevron={item.hasSubMenu || (item.childKeys && item.childKeys.length > 0)}
        isSelected={key === this.props.selectedChildKey}
        text={item.text}
        key={key}
        onClick={(event) => { this.handleItemClick(event, key); }}
        onKeyDown={(event) => { if (event.nativeEvent.keyCode === KEYCODES.ENTER) { this.handleItemClick(event, key); } }}
      />
    );
  }

  buildListContent(currentItem) {
    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
      return <List>{currentItem.childKeys.map(key => this.buildListItem(key))}</List>;
    }
    return null;
  }

  render() {
    const {
      menuItems,
      onChange,
      routingStackBack,
      selectedChildKey,
      selectedMenuKey,
      ...customProps
    } = this.props;
    const currentItem = this.state.items[selectedMenuKey];
    const actionHeader = <ActionHeader onBack={this.handleBackClick} title={currentItem ? currentItem.text : null} />;

    return (
      <ContentContainer {...customProps} header={actionHeader} fill>
        {this.buildListContent(currentItem)}
      </ContentContainer>
    );
  }
}

NavigationSideMenu.propTypes = propTypes;
NavigationSideMenu.defaultProps = defaultProps;

export default NavigationSideMenu;
