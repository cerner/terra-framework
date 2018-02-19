import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import List from 'terra-list';
import ActionHeader from 'terra-clinical-action-header';
import ContentContainer from 'terra-content-container';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
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
    children: PropTypes.arrayOf(PropTypes.string),
    /**
     * ID to be applied to the menu item div.
     */
    id: PropTypes.string,
    /**
     * Unique identifier that will be returned in the onChange callback when an endpoint is reached.
     */
    key: PropTypes.string.isRequired,
    /**
     * Title for the menu row and header title when selected.
     */
    title: PropTypes.string.isRequired,
  })),
  /**
   * Callback function when a menu endpoint is reached.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Delegate prop that is added by the NavigationLayout.
   */
  routingStackDelegate: RoutingStackDelegate.propType.isRequired,
  /**
   * Key of the top level menu.
   */
  initialSelectedKey: PropTypes.string.isRequired,
};

const defaultProps = {
  menuItems: [],
};

const processMenuItems = (items) => {
  const processedItems = {};
  items.forEach((item) => {
    processedItems[item.key] = { id: item.id, title: item.title, children: item.children };
  });
  return processedItems;
};

class NavigationSideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.onBackClick = this.onBackClick.bind(this);
    this.onItemClick = this.onItemClick.bind(this);

    this.state = { processedItems: processMenuItems(props.menuItems), selectedKey: props.initialSelectedKey, selectedChildKey: null };
    this.previousStack = [];
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      processedItems: processMenuItems(nextProps.menuItems),
    });
  }

  onBackClick() {
    if (this.previousStack.length) {
      this.setState({ selectedKey: this.previousStack.pop(), selectedChildKey: this.state.selectedKey });
    }
  }

  onItemClick(event, key) {
    const clickedItem = this.state.processedItems[key];
    if (clickedItem.children && clickedItem.children.length) {
      this.previousStack.push(this.state.selectedKey);
      this.setState({ selectedKey: key, selectedChildKey: key });
    } else {
      this.props.onChange(event, key);
      this.setState({ selectedChildKey: key });
    }
  }

  buildListItem(key) {
    const item = this.state.processedItems[key];

    return (
      <MenuItem
        id={item.id}
        hasChevron={item.children && item.children.length > 0}
        isSelected={key === this.state.selectedChildKey}
        title={item.title}
        key={key}
        onClick={(event) => { this.onItemClick(event, key); }}
        onKeyDown={(event) => { if (event.nativeEvent.keyCode === KEYCODES.ENTER) { this.onItemClick(event, key); } }}
      />
    );
  }

  buildListContent() {
    const currentItem = this.state.processedItems[this.state.selectedKey];
    if (currentItem && currentItem.children && currentItem.children.length) {
      return <List>{currentItem.children.map(key => this.buildListItem(key))}</List>;
    }
    return null;
  }

  render() {
    const {
      menuItems,
      onChange,
      routingStackDelegate,
      initialSelectedKey,
      ...customProps
    } = this.props;
    let onBack;
    if (this.props.initialSelectedKey === this.state.selectedKey && routingStackDelegate) {
      onBack = routingStackDelegate.showParent;
    } else {
      onBack = this.onBackClick;
    }
    const currentItem = this.state.processedItems[this.state.selectedKey];
    const actionHeader = <ActionHeader onBack={onBack} title={currentItem ? currentItem.title : null} />;

    return (
      <ContentContainer {...customProps} header={actionHeader} fill>
        {this.buildListContent()}
      </ContentContainer>
    );
  }
}

NavigationSideMenu.propTypes = propTypes;
NavigationSideMenu.defaultProps = defaultProps;

export default NavigationSideMenu;
