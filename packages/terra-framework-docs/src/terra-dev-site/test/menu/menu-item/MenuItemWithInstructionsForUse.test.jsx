import React from 'react';
import PropTypes from 'prop-types';
import List from 'terra-list';
import Menu from 'terra-menu';

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};

class MenuItemWithInstructionsForUse extends React.Component {
  getChildContext() {
    return { isSelectableMenu: true };
  }

  render() {
    return (
      <div>
        <div id="isSelected">
          <p>Menu Items with eIFU Icon</p>
        </div>
        <List role="menu">
          <Menu.Item
            text="eIFU Icon Menu Item"
            key="1"
            className="TestMenuItem"
            isInstructionsForUse
          />
          <Menu.Item
            isSelectable
            text="eIFU Icon Nested Menu"
            key="2"
            className="TestMenuItem"
            isInstructionsForUse
            subMenuItems={[
              <Menu.Item text="Default 2.1" key="2.1" className="TestNestedMenuContent" />,
            ]}
          />
          <Menu.Item
            text="Selectable+Selected eIFU Icon Menu Item"
            key="3"
            className="TestMenuItem"
            isSelectable
            isSelected
            isInstructionsForUse
          />
        </List>
      </div>
    );
  }
}

MenuItemWithInstructionsForUse.childContextTypes = childContextTypes;
export default MenuItemWithInstructionsForUse;
