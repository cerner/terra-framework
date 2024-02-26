import React from 'react';
import Menu from 'terra-menu';
import Button from 'terra-button';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

class SelectableMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false, selectedGroupItemIndex: undefined };
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleOnChange(event, index) {
    this.setState({ selectedGroupItemIndex: index });
  }

  handleRequestClose() {
    this.setState({ open: false });
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
          This menu contains one selectable child (an Item Group). The menu should allow space for the checkmark and the items in the item group should be selectable.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.ItemGroup className="TestGroup" onChange={this.handleOnChange} key="selectable-group">
            <Menu.Item text="Group Item 1" key="1" className="TestGroupItem1" isToggled={this.state.selectedGroupItemIndex === 0} />
            <Menu.Item text="Group Item 2" key="2" className="TestGroupItem2" isToggled={this.state.selectedGroupItemIndex === 1} />
            <Menu.Item text="Group Item 3" key="3" className="TestGroupItem3" isToggled={this.state.selectedGroupItemIndex === 2} />
          </Menu.ItemGroup>
        </Menu>
        <Button id="selectable-menu-button" type="button" onClick={this.handleButtonClick} text="Default Menu" aria-haspopup icon={<IconCaretDown />} isReversed refCallback={this.setButtonNode} />
      </div>
    );
  }
}

export default SelectableMenu;
