import React from 'react';
import classNames from 'classnames/bind';
import Menu from '../../src/Menu';
import styles from './DefaultMenuExample.scss';

const cx = classNames.bind(styles);

class MenuDefaultExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.Item text="testing" />
        </Menu>
        <div className={cx('menu-button')} ref={this.setButtonNode} />
      </div>
    );
  }
}

export default MenuDefaultExample;
