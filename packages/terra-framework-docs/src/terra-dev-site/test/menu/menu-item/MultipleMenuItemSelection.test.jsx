import React from 'react';
import Menu from 'terra-menu';
import Button from 'terra-button';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

class MultipleMenuItemSelection extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false, isToggled: false };
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
          Below is an item on nested menus are retained while navigating back and forth between them.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
        <Menu.Item
          text="Default 1"
          key="1"
        />
        <Menu.Item
            text="Default 2"
            key="2"
            className="subMenu1"
            subMenuItems={[
              <Menu.Item
                text="Default 3"
                key="3"
                className="testNestedItem1"
              />,
              <Menu.Item
                text="Default 4"
                key="4"
                className="subMenu2"
                subMenuItems={[
                  <Menu.Item
                    text="Default 5"
                    key="5"
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

export default MultipleMenuItemSelection;
