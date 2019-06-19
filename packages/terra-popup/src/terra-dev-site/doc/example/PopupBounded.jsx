import React from 'react';
import Button from 'terra-button';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Popup from 'terra-popup/lib/Popup';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import classNames from 'classnames/bind';
import styles from './PopupDocCommon.scss';

const cx = classNames.bind(styles);

class PopupBounded extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
  }

  setButtonNode(node) {
    this.parentNode = node;
  }

  getButtonNode() {
    return this.parentNode;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div
        className={cx('content-wrapper')}
        ref={this.setParentNode}
      >
        <Popup
          boundingRef={this.getParentNode}
          classNameArrow="test-arrow"
          classNameContent="test-content"
          contentHeight="240"
          contentWidth="320"
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
          isContentFocusDisabled
        >
          <Placeholder title="Popup Content" />
        </Popup>
        <Button text="Bounded Popup" onClick={this.handleButtonClick} refCallback={this.setButtonNode} />
      </div>
    );
  }
}

export default PopupBounded;
