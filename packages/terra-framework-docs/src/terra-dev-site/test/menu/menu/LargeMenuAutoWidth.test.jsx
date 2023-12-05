import React from 'react';
import Menu from 'terra-menu';
import Button from 'terra-button';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';

class LargeMenuAutoWidth extends React.Component {
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
          This menu should have a large height. And all items should be visible without scrolling.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
          contentWidth="auto"
        >
          <Menu.Item text="Default 1" key="1" className="TestFirstItem" />
          <Menu.Item
            text="Nested Menu"
            key="2"
            subMenuItems={[
              <Menu.Item text="Default 2.1" key="2.1" />,
              <Menu.Item text="Default 2.2" key="2.2" />,
              <Menu.Item text="Default 2.3" key="2.3" />,
              <Menu.Item text="Default 2.4" key="2.4" icon={<IconPrinter />} />,
            ]}
          />
          <Menu.Item text="Default 3  With Longer Text" key="3" />
          <Menu.Item text="Default 4" key="4" />
          <Menu.Item text="Default 5" key="5" />
          <Menu.Item text="Default 7" key="7" />
          <Menu.Item text="Default 8" key="8" />
          <Menu.Item text="Default 9" key="9" />
          <Menu.Item text="Default 10" key="10" />
          <Menu.Item text="Default 11" key="11" />
          <Menu.Item text="Default 12" key="12" />
          <Menu.Item text="Default 13" key="13" />
          <Menu.Item text="Default 14" key="14" />
          <Menu.Item text="Default 16" key="16" className="TestLastItem" />
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
          <Menu.Item text="Default 27" key="27" />
          <Menu.Item text="Default 28" key="28" />
          <Menu.Item text="Default 29" key="29" />
          <Menu.Item text="Default 30" key="30" />
          <Menu.Item text="Default 31" key="31" />
          <Menu.Item text="Default 32" key="32" />

        </Menu>
        <Button id="large-menu-button-autowidth" type="button" onClick={this.handleButtonClick} text="Default Menu" aria-haspopup icon={<IconCaretDown />} isReversed refCallback={this.setButtonNode} />
      </div>
    );
  }
}

export default LargeMenuAutoWidth;
