/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconError from 'terra-icon/lib/icon/IconError';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import IconRequired from 'terra-icon/lib/icon/IconRequired';
import classNames from 'classnames/bind';
import styles from './BasicMenu.module.scss';
import Menu from '../../../../../../terra-menu/lib/Menu';

const cx = classNames.bind(styles);

const propTypes = {
  isArrowDisplayed: PropTypes.bool,
  contentWidth: PropTypes.string,
  boundingRef: PropTypes.func,
};

class MenuWithCustomIcons extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      open: false,
      actionClickCount: 0,
    };
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleOnClick(event) {
    event.preventDefault();
    this.handleRequestClose();
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
              text="Error Icon"
              key="Error"
              onClick={this.handleOnClick}
              icon={<IconError />}
            />
            <Menu.Item
              text="Alert Icon"
              key="Alert"
              onClick={this.handleOnClick}
              icon={<IconAlert />}
            />
            <Menu.Item
              text="Warning Icon"
              key="Warning"
              onClick={this.handleOnClick}
              icon={<IconWarning />}
            />
            <Menu.Item
              text="Help Icon"
              key="Help"
              onClick={this.handleOnClick}
              icon={<IconHelp />}
            />
            <Menu.Item
              text="Required Icon"
              key="Required"
              onClick={this.handleOnClick}
              icon={<IconRequired />}
            />
          </Menu>
          <Button onClick={this.handleButtonClick} text="Click Me" />
        </div>
      </div>
    );
  }
}

MenuWithCustomIcons.propTypes = propTypes;

export default MenuWithCustomIcons;
