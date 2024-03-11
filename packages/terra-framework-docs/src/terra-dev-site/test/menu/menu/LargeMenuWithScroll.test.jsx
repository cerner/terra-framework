import React from 'react';
import Menu from 'terra-menu';
import Button from 'terra-button';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

class LargeMenuWithScroll extends React.Component {
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
          This menu should have a large height. And all items should be visible with scrolling.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.Item text="Default 1" key="1" />
          <Menu.Item text="Default 2" key="2" />
          <Menu.Item
            text="Default 3"
            key="3"
            subMenuItems={[
              <Menu.Item text="Default 3.1" key="3.1" />,
              <Menu.Item text="Default 3.2" key="3.2" />,
            ]}
          />
          <Menu.Item text="Default 4" key="4" />
          <Menu.Item text="Default 5" key="5" />
          <Menu.Divider key="Divider1" />
          <Menu.Item text="Default 6" key="6" />
          <Menu.Item text="Default 7" key="7" />
          <Menu.Item text="Default 8" key="8" />
          <Menu.Item text="Default 9" key="9" />
          <Menu.Item text="Default 10" key="10" />
          <Menu.Item text="Default 11" key="11" />
          <Menu.Item text="Default 12" key="12" />
          <Menu.Divider key="Divider2" />
          <Menu.Item text="Default 13" key="13" />
          <Menu.Item text="Default 14" key="14" />
          <Menu.Item text="Default 15" key="15" />
          <Menu.Item text="Default 16" key="16" />
          <Menu.Item text="Default 17" key="17" />
          <Menu.Item text="Default 18" key="18" />
          <Menu.Item text="Default 19" key="19" />
          <Menu.Item text="Default 20" key="20" />
          <Menu.Item text="Default 21" key="21" />
          <Menu.Item text="Default 22" key="22" />
          <Menu.Item text="Default 23" key="23" />
          <Menu.Item text="Default 24" key="24" />
          <Menu.Item text="Default 25" key="25" />
          <Menu.Item text="Default 26" key="26" />
          <Menu.Divider key="Divider3" />
          <Menu.Item text="Default 27" key="27" />
          <Menu.Item text="Default 28" key="28" />
          <Menu.Item text="Default 29" key="29" />
          <Menu.Item text="Default 30" key="30" />
          <Menu.Item text="Default 31" key="31" />
          <Menu.Item text="Default 32" key="32" />
          <Menu.Divider key="Divider4" />
          <Menu.Item text="Default 33" key="33" />
          <Menu.Item text="Default 34" key="34" />
          <Menu.Item text="Default 35" key="35" />
          <Menu.Item text="Default 36" key="36" />
          <Menu.Item text="Default 37" key="37" />
          <Menu.Item text="Default 38" key="38" />
          <Menu.Item text="Default 39" key="39" />
          <Menu.Item text="Default 40" key="40" />
          <Menu.Item text="Default 3" key="3" />
        </Menu>
        <Button id="large-menu-button" type="button" onClick={this.handleButtonClick} text="Default Menu" aria-haspopup icon={<IconCaretDown />} isReversed refCallback={this.setButtonNode} />
      </div>
    );
  }
}

export default LargeMenuWithScroll;
