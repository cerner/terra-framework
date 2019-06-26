import React from 'react';
import classNames from 'classnames/bind';
import BasicMenu from './BasicMenu';
import styles from './MenuBounded.module.scss';

const cx = classNames.bind(styles);

class MenuBounded extends React.Component {
  constructor(props) {
    super(props);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
  }

  render() {
    return (
      <div
        className={cx('content-wrapper')}
        ref={this.setParentNode}
      >
        <BasicMenu boundingRef={this.getParentNode} />
      </div>
    );
  }
}

export default MenuBounded;
