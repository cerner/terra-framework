import React from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import styles from './AutomaticHeightAndResizedContentCommon.module.scss';

const cx = classNames.bind(styles);

class PopupExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true };
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
      <div id="test-popup-area" className={cx('test-popup-area')}>
        <Popup
          classNameArrow="test-arrow"
          classNameContent="test-content"
          contentHeight="auto"
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
          isHeaderDisabled={false}
        >
          <p className={cx('popup-text')}>This is popup content with a automatic height of 400px.</p>
        </Popup>
        <button type="button" id="default-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Popup
        </button>
      </div>
    );
  }
}

export default PopupExample;
