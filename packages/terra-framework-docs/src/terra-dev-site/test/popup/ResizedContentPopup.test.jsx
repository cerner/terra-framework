import React from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import TestPopupContent from './common/TestPopupContent';
import styles from './AutomaticHeightAndResizedContentCommon.module.scss';

const cx = classNames.bind(styles);

class PopupExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true, size: 'small' };
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
          contentWidth="auto"
          isArrowDisplayed
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
          isHeaderDisabled={false}
        >
          <TestPopupContent size={this.state.size} onClick={() => this.setState({ size: 'large' })} />
        </Popup>
        <button type="button" className={cx('popup-button')} id="default-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Popup
        </button>
      </div>
    );
  }
}

export default PopupExample;
