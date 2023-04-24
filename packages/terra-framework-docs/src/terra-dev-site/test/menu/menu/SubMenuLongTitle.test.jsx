import React from 'react';
import Menu from 'terra-menu';
import Button from 'terra-button';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

class SubMenuLongTitle extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
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
          This menu has a nested submenu with long Default and sub-menu title. When the Nested Menu item is clicked as submenu should replace the initial menu.
          There should be a header with a back button and a title of Nested Menu.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
          headerTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <Menu.Item text="Default 1" key="1" className="TestInitialMenuContent" />
          <Menu.Item
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            key="2"
            className="TestNestedMenu"
            subMenuItems={[
              <Menu.Item text="Default 2.1" key="2.1" className="TestNestedMenuContent" />,
            ]}
          />
          <Menu.Item text="Default 3" key="3" />
          <Menu.Item text="Default 4" key="4" />
          <Menu.Item text="Default 5" key="5" />
        </Menu>
        <Button id="sub-menu-button" type="button" onClick={this.handleButtonClick} text="Default Menu" aria-haspopup icon={<IconCaretDown />} isReversed refCallback={this.setButtonNode} />
      </div>
    );
  }
}

export default SubMenuLongTitle;
