import React from 'react';
import PropTypes from 'prop-types';
import List, { Utils } from 'terra-list';

const propTypes = {
  /**
   * Menu.Items to be grouped together.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function called when selected index changes.
   */
  onChange: PropTypes.func,
};

const childContextTypes = {
  isGroupItem: PropTypes.bool, shouldReserveSpaceForIcon: PropTypes.bool,
};

const initialSingleToggledIndex = (children) => {
  const childArray = React.Children.toArray(children);
  for (let i = 0; i < childArray.length; i += 1) {
    if (childArray[i].props.isSelected || childArray[i].props.isToggled) {
      return i;
    }
  }
  return -1;
};

class MenuItemGroup extends React.Component {
  constructor(props) {
    super(props);
    this.cloneChildren = this.cloneChildren.bind(this);
    this.handleItemToggled = this.handleItemToggled.bind(this);
    this.state = { toggledIndex: initialSingleToggledIndex(props.children) };
  }

  getChildContext() {
    return { isGroupItem: true, shouldReserveSpaceForIcon: true };
  }

  handleItemToggled(event, metaData) {
    if (this.state.toggledIndex !== metaData.index && !metaData.isDisabled) {
      event.preventDefault();
      this.setState({ toggledIndex: metaData.index });
      if (this.props.onChange) {
        this.props.onChange(event, metaData.index);
      }
    }
  }

  cloneChildren(children) {
    return React.Children.map(children, (child, index) => {
      let isToggleable = true;
      if (child.props.isToggleable === false && child.props.isSelectable === false) {
        isToggleable = false;
      }
      return React.cloneElement(child, {
        isToggleable,
        isToggled: this.state.toggledIndex === index,
        onClick: Utils.wrappedOnClickForItem(child.props.onClick, this.handleItemToggled, { index, isDisabled: child.props.isDisabled }),
        onKeyDown: Utils.wrappedOnKeyDownForItem(child.props.onKeyDown, this.handleItemToggled, { index, isDisabled: child.props.isDisabled }),
      });
    });
  }

  render() {
    const { children, ...customProps } = this.props;
    const managedChildren = this.cloneChildren(children);

    return (
      <List {...customProps} role="group">
        {managedChildren}
      </List>
    );
  }
}

MenuItemGroup.propTypes = propTypes;
MenuItemGroup.childContextTypes = childContextTypes;

export default MenuItemGroup;
