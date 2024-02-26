import React from 'react';
import Menu from 'terra-menu';
import Button from 'terra-button';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

class LargeSubMenu extends React.Component {
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
          The submenu height should occupy the viewport height, and all items should be visible with scrolling.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.Item text="Default 1" key="1" className="TestFirstItem" />
          <Menu.Item
            text="Nested Menu"
            key="2"
            className="TesSubMenu"
            subMenuItems={[
              <Menu.Item text="Default 2.1" key="2.1" />,
              <Menu.Item text="Default 2.2" key="2.2" />,
              <Menu.Item text="Default 2.3" key="2.3" />,
              <Menu.Item text="Default 2.4" key="2.4" />,
              <Menu.Item text="Default 2.5" key="2.5" />,
              <Menu.Item text="Default 2.6" key="2.6" />,
              <Menu.Item text="Default 2.7" key="2.7" />,
              <Menu.Item text="Default 2.8" key="2.8" />,
              <Menu.Item text="Default 2.9" key="2.9" />,
              <Menu.Item text="Default 2.10" key="2.10" />,
              <Menu.Item text="Default 2.11" key="2.11" />,
              <Menu.Item text="Default 2.12" key="2.12" />,
              <Menu.Item text="Default 2.13" key="2.13" />,
              <Menu.Item text="Default 2.14" key="2.14" />,
              <Menu.Item text="Default 2.15" key="2.15" />,
              <Menu.Item text="Default 2.16" key="2.16" />,
              <Menu.Item text="Default 2.17" key="2.17" />,
              <Menu.Item text="Default 2.18" key="2.18" />,
              <Menu.Item text="Default 2.19" key="2.19" />,
              <Menu.Item text="Default 2.20" key="2.20" />,
              <Menu.Item text="Default 2.21" key="2.21" />,
              <Menu.Item text="Default 2.22" key="2.22" />,
              <Menu.Item text="Default 2.23" key="2.23" />,
              <Menu.Item text="Default 2.24" key="2.24" />,
              <Menu.Item text="Default 2.25" key="2.25" />,
              <Menu.Item text="Default 2.26" key="2.26" />,
              <Menu.Item text="Default 2.27" key="2.27" />,
              <Menu.Item text="Default 2.28" key="2.28" />,
              <Menu.Item text="Default 2.29" key="2.29" />,
              <Menu.Item text="Default 2.30" key="2.30" />,
              <Menu.Item text="Default 2.31" key="2.31" />,
              <Menu.Item text="Default 2.32" key="2.32" />,
              <Menu.Item text="Default 2.33" key="2.33" />,
              <Menu.Item text="Default 2.34" key="2.34" />,
              <Menu.Item text="Default 2.35" key="2.35" />,
              <Menu.Item text="Default 2.36" key="2.36" />,
              <Menu.Item text="Default 2.37" key="2.37" />,
              <Menu.Item text="Default 2.38" key="2.38" />,
              <Menu.Item text="Default 2.39" key="2.39" />,
              <Menu.Item text="Default 2.40" key="2.40" />,
            ]}
          />
          <Menu.Item text="Default 3" key="3" />
          <Menu.Divider key="Divider1" />
          <Menu.Item text="Default 4" key="4" />
          <Menu.Item text="Default 5" key="5" />
        </Menu>
        <Button id="large-sub-menu-button" type="button" onClick={this.handleButtonClick} text="Default Menu" aria-haspopup icon={<IconCaretDown />} isReversed refCallback={this.setButtonNode} />
      </div>
    );
  }
}

export default LargeSubMenu;
