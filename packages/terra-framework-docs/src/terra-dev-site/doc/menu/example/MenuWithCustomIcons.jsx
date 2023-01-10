/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import IconEnvelope from 'terra-icon/lib/icon/IconEnvelope';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
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
              text="Search Icon"
              key="Search"
              onClick={this.handleOnClick}
              icon={<IconSearch />}
            />
            <Menu.Item
              text="Briefcase Icon"
              key="Briefcase"
              onClick={this.handleOnClick}
              icon={<IconBriefcase />}
            />
            <Menu.Item
              text="Bookmark Icon"
              key="Bookmark"
              onClick={this.handleOnClick}
              icon={<IconBookmark />}
            />
            <Menu.Item
              text="Calendar Icon"
              key="Calendar"
              onClick={this.handleOnClick}
              icon={<IconCalendar />}
            />
            <Menu.Item
              text="Envelope Icon"
              key="Envelope"
              onClick={this.handleOnClick}
              icon={<IconEnvelope />}
            />
            <Menu.Item
              text="Printer Icon"
              key="Printer"
              onClick={this.handleOnClick}
              icon={<IconPrinter />}
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
