import React from 'react';
import Menu from 'terra-menu';
import Button from 'terra-button';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

class SelectableMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleNestedItemClick = this.handleNestedItemClick.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false, isSelected: false, isToggled: false };
  }

  componentDidMount() {
    this.forceUpdate();
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  handleItemClick() {
    this.setState(prevState => ({ isSelected: !prevState.isSelected }));
    this.handleRequestClose();
  }

  handleNestedItemClick() {
    this.setState(prevState => ({ isToggled: !prevState.isToggled }));
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  render() {
    return (
      <div>
        <div>
          This menu contains a selectable item and an unselectable item. All items in the menu should have the same spacing on the left to allow for a checkmark.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.Item
            text="Default 1"
            key="1"
            className="TestNonSelectableItem"
          />
          <Menu.Item
            text="Default 2"
            key="2"
            isSelectable
            className="TestSelectableItem"
            isSelected={this.state.isSelected}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            text="Default Submenu 1"
            key="3"
            className="subMenu1"
            subMenuItems={[
              <Menu.Item
                text="Sub Nested Item 1"
                key="4"
                className="testNestedItem1"
              />,
              <Menu.Item
                text="Default Submenu 2"
                key="5"
                className="subMenu2"
                id="default-item-submenu-245342265-a34242-d3243"
                subMenuItems={[
                  <Menu.Item
                    text="Sub Nested Item 2"
                    key="6"
                    className="testNestedItem2"
                    isToggled={this.state.isToggled}
                    onClick={this.handleNestedItemClick}
                    isToggleable
                  />,
                ]}
              />,
            ]}
          />
        </Menu>
        <Button id="default-button" type="button" onClick={this.handleButtonClick} text="Default Menu" aria-haspopup icon={<IconCaretDown />} isReversed refCallback={this.setButtonNode} />
      </div>
    );
  }
}

export default SelectableMenu;
