import React from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const propTypes = {
  attachmentBehavior: PropTypes.string,
  contentAttachment: PropTypes.string,
  isArrowDisplayed: PropTypes.bool,
  title: PropTypes.string,
};

const defaultProps = {
  attachmentBehavior: 'auto',
  contentAttachment: 'top center',
  isArrowDisplayed: false,
  title: '',
};

class PopupAttachment extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
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
    const {
      attachmentBehavior,
      contentAttachment,
      isArrowDisplayed,
      title,
    } = this.props;

    return (
      <React.Fragment>
        <Popup
          attachmentBehavior={attachmentBehavior}
          contentAttachment={contentAttachment}
          isArrowDisplayed={isArrowDisplayed}
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Placeholder title="Popup Content" />
        </Popup>
        <Button text={title} onClick={this.handleButtonClick} refCallback={this.setButtonNode} />
      </React.Fragment>
    );
  }
}

PopupAttachment.propTypes = propTypes;
PopupAttachment.defaultProps = defaultProps;

export default PopupAttachment;
