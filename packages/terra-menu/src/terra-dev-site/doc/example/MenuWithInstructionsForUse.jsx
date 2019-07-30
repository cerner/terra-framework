import React from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Menu from 'terra-menu';
import classNames from 'classnames/bind';
import styles from './BasicMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  isArrowDisplayed: PropTypes.bool,
  contentWidth: PropTypes.string,
  boundingRef: PropTypes.func,
};

class MenuWithInstructionsForUse extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.handleToggle1OnClick = this.handleToggle1OnClick.bind(this);
    this.handleToggle2OnClick = this.handleToggle2OnClick.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleCloseOnClick = this.handleCloseOnClick.bind(this);
    this.state = {
      open: false,
      toggle1Selected: false,
      toggle2Selected: false,
      actionClickCount: 0,
    };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  handleCloseOnClick(event) {
    event.preventDefault();
    this.handleRequestClose();
  }

  handleToggle1OnClick() {
    this.setState(prevState => ({ toggle1Selected: !prevState.toggle1Selected }));
    this.handleRequestClose();
  }

  handleToggle2OnClick() {
    this.setState(prevState => ({ toggle2Selected: !prevState.toggle2Selected }));
  }

  handleAction(event) {
    event.preventDefault();
    const newState = this.state;
    newState.actionClickCount += 1;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div className={cx('menu-wrapper')} ref={this.setButtonNode}>
          <Menu
            isOpen={this.state.open}
            targetRef={this.getButtonNode}
            onRequestClose={this.handleRequestClose}
            contentWidth={this.props.contentWidth}
            isArrowDisplayed={this.props.isArrowDisplayed}
            boundingRef={this.props.boundingRef}
          >
            <Menu.Item
              text="Toggle Item 1 - Closes Menu"
              key="Toggle1"
              isSelected
              onClick={this.handleToggle1OnClick}
              isSelectable
            />
            <Menu.Item
              text="Toggle Item 2"
              key="Toggle2"
              isSelected={this.state.toggle2Selected}
              onClick={this.handleToggle2OnClick}
              isSelectable
            />
            <Menu.Item
              text="Disabled Item 1"
              key="Disabled1"
              isSelected={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isDisabled
              isInstructionsForUse
            />
            <Menu.Divider key="Divider1" />
            <Menu.Item
              text="Instructions"
              isInstructionsForUse
              key="Nested1"
              subMenuItems={[
                <Menu.Item text="Instruction 1.1" key="1.1" onClick={this.handleAction} />,
                <Menu.Item text="Instruction 1.2" key="1.2" onClick={this.handleAction} />,
                <Menu.Item text="Instruction 1.3" key="1.3" onClick={this.handleAction} />,
                <Menu.Divider key="Divider1.1" />,
                <Menu.Item text="Close Action 1.1" key="1.4" onClick={this.handleCloseOnClick} />,
              ]}
            />
            <Menu.Divider key="Divider2" />
            <Menu.Item text="Close Action" key="Action2" onClick={this.handleCloseOnClick} />
          </Menu>
          <Button onClick={this.handleButtonClick} text="Click Me" />
        </div>
        <br />
        <p>
          Instructions Icon has been clicked
          {' '}
          {this.state.actionClickCount}
          {' '}
          times.
        </p>
      </div>
    );
  }
}

MenuWithInstructionsForUse.propTypes = propTypes;

export default MenuWithInstructionsForUse;
