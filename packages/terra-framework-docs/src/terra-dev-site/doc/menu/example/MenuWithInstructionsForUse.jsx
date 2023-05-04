import React from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
import Menu from 'terra-menu';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
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
    this.handleAction = this.handleAction.bind(this);
    this.handleCloseOnClick = this.handleCloseOnClick.bind(this);
    this.state = {
      open: false,
      actionClickCount: 0,
    };
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

  handleAction(event) {
    event.preventDefault();
    const newState = this.state;
    newState.actionClickCount += 1;
    this.setState(newState);
    this.handleRequestClose();
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
        <div className={cx('menu-wrapper')}>
          <Menu
            isOpen={this.state.open}
            targetRef={this.getButtonNode}
            onRequestClose={this.handleRequestClose}
            contentWidth={this.props.contentWidth}
            isArrowDisplayed={this.props.isArrowDisplayed}
            boundingRef={this.props.boundingRef}
          >
            <Menu.Item
              text="{ApplicationName} Help"
              key="Help1"
              onClick={this.handleAction}
              isInstructionsForUse
            />
            <Menu.Item
              text="Getting Started"
              key="Help2"
              onClick={this.handleCloseOnClick}
              isSelectable
            />
            <Menu.Item
              text="About {ApplicationName}"
              key="Help3"
              isSelected={this.state.toggle1Selected}
              onClick={this.handleCloseOnClick}
            />
          </Menu>
          <Button onClick={this.handleButtonClick} text="Help" aria-haspopup icon={<IconCaretDown />} isReversed refCallback={this.setButtonNode} />
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
