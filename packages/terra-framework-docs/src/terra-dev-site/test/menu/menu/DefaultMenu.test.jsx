import React from 'react';
import Menu from 'terra-menu';
import Button from 'terra-button';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import classNames from 'classnames/bind';
import styles from './TestMenu.module.scss';

const cx = classNames.bind(styles);

class DefaultMenu extends React.Component {
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
      <div className={cx('menu-wrapper')} ref={this.setButtonNode}>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.Item text="Default Menu" id="TestContent" />
        </Menu>
        <Button id="default-button" type="button" onClick={this.handleButtonClick} text="Default Menu" aria-haspopup icon={<IconCaretDown />} isReversed />
      </div>
    );
  }
}

export default DefaultMenu;
