import React from 'react';
import Menu from 'terra-menu';
import Button from 'terra-button';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconError from 'terra-icon/lib/icon/IconError';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import IconRequired from 'terra-icon/lib/icon/IconRequired';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import classNames from 'classnames/bind';
import styles from './TestMenu.module.scss';

const cx = classNames.bind(styles);

class CustomIconsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
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
        <div className={cx('menu-wrapper')} ref={this.setButtonNode}>
          <Menu
            isOpen={this.state.open}
            targetRef={this.getButtonNode}
            onRequestClose={this.handleRequestClose}
          >
            <Menu.Item
              text="Error Icon"
              key="Error"
              icon={<IconError />}
            />
            <Menu.Item
              text="Alert Icon"
              key="Alert"
              icon={<IconAlert />}
            />
            <Menu.Item
              text="Warning Icon"
              key="Warning"
              icon={<IconWarning />}
            />
            <Menu.Item
              text="Help Icon"
              key="Help"
              icon={<IconHelp />}
            />
            <Menu.Item
              text="Required Icon"
              key="Required"
              icon={<IconRequired />}
            />
          </Menu>
          <Button id="custom-icons-button" type="button" onClick={this.handleButtonClick} text="Custom Icons Menu" aria-haspopup icon={<IconCaretDown />} isReversed />
        </div>
      </div>
    );
  }
}

export default CustomIconsMenu;
