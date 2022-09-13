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
    this.handleCloseOnClick = this.handleCloseOnClick.bind(this);
    this.handleErrorClick = this.handleErrorClick.bind(this);
    this.handleAlertClick = this.handleAlertClick.bind(this);
    this.handleHelpClick = this.handleHelpClick.bind(this);
    this.handleRequiredClick = this.handleRequiredClick.bind(this);
    this.handleWarningClick = this.handleWarningClick.bind(this);
    this.state = {
      open: false,
      actionClickCount: 0,
      errorSelected: false,
      alertSelected: false,
      helpSelected: false,
      requiredSelected: false,
      warningSelected: false,
    };
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleErrorClick(event) {
    event.preventDefault();
    this.setState({ errorSelected: !this.state.errorSelected });
    this.handleRequestClose();
  }

  handleAlertClick(event) {
    event.preventDefault();
    this.setState({ alertSelected: !this.state.alertSelected });
    this.handleRequestClose();
  }

  handleHelpClick(event) {
    event.preventDefault();
    this.setState({ helpSelected: !this.state.helpSelected });
    this.handleRequestClose();
  }

  handleRequiredClick(event) {
    event.preventDefault();
    this.setState({ requiredSelected: !this.state.requiredSelected });
    this.handleRequestClose();
  }

  handleWarningClick(event) {
    event.preventDefault();
    this.setState({ warningSelected: !this.state.warningSelected });
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
              isSelected={this.state.errorSelected}
              isSelectable
              onClick={this.handleErrorClick}
              menuIcon={<IconError className={cx('start-icon')} />}
            />
            <Menu.Item
              text="Alert Icon"
              key="Alert"
              isSelected={this.state.alertSelected}
              isSelectable
              onClick={this.handleAlertClick}
              menuIcon={<IconAlert className={cx('start-icon')} />}
            />
            <Menu.Item
              text="Warning Icon"
              key="Warning"
              isSelected={this.state.warningSelected}
              isSelectable
              onClick={this.handleWarningClick}
              menuIcon={<IconWarning className={cx('start-icon')} />}
            />
            <Menu.Item
              text="Help Icon"
              key="Help"
              isSelected={this.state.helpSelected}
              isSelectable
              onClick={this.handleHelpClick}
              menuIcon={<IconHelp className={cx('start-icon')} />}
            />
            <Menu.Item
              text="Required Icon"
              key="Required"
              isSelected={this.state.requiredSelected}
              isSelectable
              onClick={this.handleRequiredClick}
              menuIcon={<IconRequired className={cx('start-icon')} />}
            />
          </Menu>
          <Button onClick={this.handleButtonClick} text="Help" />
        </div>
      </div>
    );
  }
}

MenuWithCustomIcons.propTypes = propTypes;

export default MenuWithCustomIcons;
